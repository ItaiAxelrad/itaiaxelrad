import numpy as np
from scipy.optimize import linprog

# Reservoir optimization
# 4x12=48 variables?

# X matrix
var_list = ['R1', 'R2', 'R3', 'R4']

time = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

benefit = [
    [1.1, 1.4, 1.0, 1.0, 1.6, 2.6]
    [1.0, 1.1, 1.0, 1.2, 1.7, 2.9]
    [1.0, 1.0, 1.2, 1.8, 1.8, 3.6]
    [1.2, 1.0, 1.8, 2.5, 1.9, 4.4]
    [1.8, 1.2, 2.5, 2.2, 2.2, 4.4]
    [2.5, 1.8, 2.2, 2.0, 2.0, 4.0]
    [2.2, 2.5, 2.0, 1.8, 2.0, 3.8]
    [2.0, 2.2, 1.8, 2.2, 1.9, 4.1]
    [1.8, 2.0, 2.2, 1.8, 1.8, 3.6]
    [2.2, 1.8, 1.8, 1.4, 1.7, 3.1]
    [1.8, 2.2, 1.4, 1.1, 1.6, 2.7]
    [1.4, 1.8, 1.1, 1.0, 1.5, 2.5]
]
# Inequality equations, LHS
A_ineq = [[1., 1., 0., 0.], [0., 1., 1., 0.], [-1., 1., -1., 1.]]

# Inequality equations, RHS
B_ineq = [450., 300., 0.]

# Equality equations, LHS
A_eq = [[1., 1., 1., 1.], [0., 0., 1., -0.5]]

# Equality equations, RHS
B_eq = [700., 0]

# Cost function
c = [0., 0., 1., 1.]  # construct a cost function

# these are the bounds that help the solver arrive at a solution
r1_b = [0., 10.]  # limits R1 storage
r2_b = [0., 10.]  # limits R2 storage
r3_b = [0., 10.]  # limits R3 storage
r4_b = [0., 15.]  # limits R4 storage

# pass these matrices to linprog, use the method 'interior-point'. '_ub' implies the upper-bound or
# inequality matrices and '_eq' imply the equality matrices
res = linprog(c, A_ub=A_ineq, b_ub=B_ineq, A_eq=A_eq, b_eq=B_eq, bounds=(r1_b, r2_b, r3_b, r4_b),
              method='interior-point')


# parse results
def result_parser(res, var_list):
    solve_status = res.success
    if solve_status is True:
        solution_list = res.x
        soln = {var_list[i]: np.round(solution_list[i])
                for i in range(len(var_list))}
    else:
        soln = []
    return soln


sol = result_parser(res, var_list)
print(sol)
