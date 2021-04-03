import numpy as np
from scipy.optimize import linprog


# Transporation LP Formulation

# X matrix
var_list = ['Xb1', 'Xb2', 'Xb3', 'Xt1', 'Xt2', 'Xt3']

# Inequality equations, LHS
A_ineq = [
    [1., 1., 1., 0., 0., 0.],
    [0., 0., 0., 1., 1., 1.]
]

# Inequality equations, RHS
B_ineq = [300., 500.]

# Equality equations, LHS
A_eq = [
    [1., 0., 0., 1., 0., 0.],
    [0., 1., 0., 0., 1., 0.],
    [0., 0., 1., 0., 0., 1.]
]

# Equality equations, RHS
B_eq = [200., 300., 250.]

# Cost function
c = [5., 6., 4., 6., 3., 7.]  # construct a cost function

# pass these matrices to linprog, use the method 'interior-point'. '_ub' implies the upper-bound or
# inequality matrices and '_eq' imply the equality matrices
res_no_bounds = linprog(c, A_ub=A_ineq, b_ub=B_ineq,
                        A_eq=A_eq, b_eq=B_eq, method='interior-point')


def result_parser(res, var_list):
    solve_status = res.success
    if solve_status is True:
        solution_list = res.x
        soln = {var_list[i]: np.round(solution_list[i])
                for i in range(len(var_list))}
    else:
        soln = []
    return soln


sol = result_parser(res_no_bounds, var_list)
print(sol)

# sol = {
#     'Xb1': 50.0,
#     'Xb2': 0.0,
#     'Xb3': 250.0,
#     'Xt1': 150.0,
#     'Xt2': 300.0,
#     'Xt3': 0.0
#     }

# total cost of 3050
