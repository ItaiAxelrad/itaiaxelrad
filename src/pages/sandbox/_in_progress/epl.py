import requests
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# api url
url = 'https://fantasy.premierleague.com/api/bootstrap-static/'
# Use the requests package to make a GET request from the API endpoint:
r = requests.get(url)
# transform that request into a json object:
json = r.json()
json.keys()
# pandas options
pd.options.mode.chained_assignment = None  # default='warn'
# building our dataframes:
elements_df = pd.DataFrame(json['elements'])
elements_types_df = pd.DataFrame(json['element_types'])
teams_df = pd.DataFrame(json['teams'])
# sliming down columns
slim_elements_df = elements_df[['second_name', 'team', 'element_type', 'selected_by_percent',
                                'now_cost', 'minutes', 'transfers_in', 'value_season', 'total_points']]
# position
slim_elements_df['position'] = slim_elements_df.element_type.map(
    elements_types_df.set_index('id').singular_name)
# team
slim_elements_df['team'] = slim_elements_df.team.map(
    teams_df.set_index('id').name)
# value
slim_elements_df['value'] = slim_elements_df.value_season.astype(float)
slim_elements_df.sort_values('value', ascending=False).head(10)
slim_elements_df = slim_elements_df.loc[slim_elements_df.value > 0]
# creating player pivot tables
pivot = slim_elements_df.pivot_table(
    index='position', values='value', aggfunc=np.mean).reset_index()
# sort by value
pivot_value = pivot.sort_values('value', ascending=False)

# team pivot
team_pivot = slim_elements_df.pivot_table(
    index='team', values='value', aggfunc=np.mean).reset_index()
# sort by value
team_pivot_value = team_pivot.sort_values('value', ascending=False)

# filtered data frame per position
fwd_df = slim_elements_df.loc[slim_elements_df.position == 'Forward']
mid_df = slim_elements_df.loc[slim_elements_df.position == 'Midfielder']
def_df = slim_elements_df.loc[slim_elements_df.position == 'Defender']
goal_df = slim_elements_df.loc[slim_elements_df.position == 'Goalkeeper']
#print(fwd_df.sort_values('value', ascending=False).head(10))
fwd_df.sort_values('value', ascending=False).head(10).to_csv('fpl_data.csv')

# Histograms
# fwd_df.value.hist()
# mid_df.value.hist()
# def_df.value.hist()
# goal_df.value.hist()

# print to CSV
# slim_elements_df.to_csv('~/Desktop/fpl_data.csv')

# linear programming?
# objective function max(pts)
# vars = [ G1, G2, D1, D2, D3, D4, D5, M1, M2, M3, M4, M5, F1, F2, F3]
# G1+G2+D1+D2+D3+D4+D5+M1+M2+M3+M4+M5+F1+F2+F3<=100
