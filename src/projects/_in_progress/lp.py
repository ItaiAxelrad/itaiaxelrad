import numpy as np
from scipy.optimize import linprog


# The perfect cake recipe that I partially remember

# Equations to solve:

# Equality equations
# f + e + b + s = 700
# b -0.5s = 0

# Inequality Equations
# f + e <= 450
# e + b <= 300
# -f + e + b -s <= 0

# X matrix
var_list = ['flour', 'eggs', 'butter', 'sugar']

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

# print('WITHOUT BOUNDS')
# pass these matrices to linprog, use the method 'interior-point'. '_ub' implies the upper-bound or
# inequality matrices and '_eq' imply the equality matrices
res_no_bounds = linprog(c, A_ub=A_ineq, b_ub=B_ineq,
                        A_eq=A_eq, b_eq=B_eq, method='interior-point')
# print(res_no_bounds)

# Write a parser for results

# these are the bounds that help the solver arrive at a solution
f_b = [0., 300.]  # limits for flour
e_b = [0., 200.]  # limits for eggs
b_b = [0., 100.]  # limits for butter
s_b = [0., 200.]  # limits for sugar

res_bounds = linprog(c, A_ub=A_ineq, b_ub=B_ineq, A_eq=A_eq, b_eq=B_eq, bounds=(f_b, e_b, b_b, s_b),
                     method='interior-point')
# print('\nWITH BOUNDS')
# print(res_bounds)


def result_parser(res, var_list):
    solve_status = res.success
    if solve_status is True:
        solution_list = res.x
        soln = {var_list[i]: np.round(solution_list[i])
                for i in range(len(var_list))}
    else:
        soln = []
    return soln


sol = result_parser(res_bounds, var_list)
print(sol)

# reservoir optimization 

var_list = ['R1', 'R2', 'R3', 'R4']

r1_b = [0., 10.]  # limits R1 storage
r2_b = [0., 10.]  # limits R2 storage
r3_b = [0., 10.]  # limits R3 storage
r4_b = [0., 15.]  # limits R4 storage

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
