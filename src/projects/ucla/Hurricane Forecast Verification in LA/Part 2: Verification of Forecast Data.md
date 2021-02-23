---
title: Verification of Forecast Data
date: 2017-12-07
tags: ['Forecasting', 'Weather', 'R', 'modeling']
---

# Part 2: Verification of Forecast Data

## Introduction

The purpose of this study is to verify the accuracy of precipitation forecasting in the state of Louisiana during hurricane events occurring between the years 2000 and 2015. In that time, a total of ten hurricanes hit the coast of Louisiana, claiming lives and causing irreparable damage both economically and hydrologically. Although the high wind speeds of a hurricane can be extremely devastating, a sizable proportion of hurricane deaths occur as a result of the subsequent flooding caused by the increased precipitation associated with hurricanes. Forecasts will typically focus on the track and intensity (i.e. wind speed) of a storm, however, information about the expected quantity of precipitation associated with these events can also provide the public with the opportunity to better prepare for the damage that may be caused. Thus, hurricane precipitation forecasts play an essential role in reducing such vulnerability to hurricane related hazards.

While hurricane tracking has improved significantly over the years, accurate prediction of rainfall from hurricanes remains a major challenge in hurricane forecasting. Advancements in validation techniques are an important first step in improving precipitation prediction. There are a variety of metrics used in order to verify forecasts. Verification requires not only the spatial and temporal data predictions, but also the actual observations associated with the same spatial and temporal reference points. For precipitation forecast verification, the persevering goal is to determine how accurately a forecast can predict a certain amount of precipitation as compared with the actual measured precipitation. However, there are also several other metrics which provide insight into not only the accuracy of a forecast, but also it’s tendencies to over or underpredict an event (i.e. the bias of a forecast), the uncertainty or degree of variability in the observations, and the overall skill. These values can be extremely helpful in determining which forecasts can be the most useful in providing early warning systems to the public.

The North American Multi­Model Ensemble (NMME) is a seasonal data set that aims to forecast precipitation trends during each season, i.e. provides overall forecast trends in the winter, spring, summer, and fall. Because NMME forecasts are seasonal, they have not traditionally been used to predict hurricane precipitation, but can be helpful in determining seasonal trends that may occur during the normal hurricane season (Harnos et al., 2017). While measurements obtained by NMME forecasts may provide some insight on a seasonal basis, hurricanes often form too quickly for NMME forecasts to predict accurately so alternative forecasting techniques that are capable of making predictions on a shorter time scale may be necessary (Jia et al., 2014). NMME consists of seven models, each with a different number of ensembles. The main source of precipitation forecast information utilized in this study is data provided by the Canadian Center for Climate Modeling and Analysis’ fourth generation general atmospheric circulation model (CanCM4), which is one of the seven models utilized in NMME forecasts. The CanCM4 model consists of a total of ten different ensembles.

## Methodology

All of the hurricanes that occurred in Louisiana between the years of 2000­2015 are included in this report, however the focus of analysis is on three of the major hurricanes that occurred. These were hurricanes Isidore in 2002, Katrina in 2005, and Gustav in 2008. The rationale behind selecting these three hurricanes was to compare ensemble performance across different years to see whether ensemble prediction improved over time. Forecasting verification was performed using a measure oriented approach.

## Data Collection

Hurricane forecasting improvements in recent years are due largely in part to the greater availability of satellite observations. The precipitation data used in this study was gathered by satellites in the NASA Tropical Rainfall Measurement Mission (TRMM). This data was organized into Network Common Data Form (NetCDF), which collects array oriented scientific data and packages it using a program developed at the University Corporation for Atmospheric Research (UCAR).

The precipitation data was then compared to the regional climate model data provided by National Center for Atmospheric Research (NCAR) Climate Data Gateway. Our study focused on ensemble models, specifically the North American Multi­Model Ensemble (NMME). This ensemble is an experimental multi­model seasonal forecasting system consisting of coupled models from US modeling centers. All of ten different CanCM4 ensemble models were analyzed for each hurricane within the study time period. Each of these ensemble models contained forecasts at nine different lead times. NetCDF NMME data was analyzed within the date range that the hurricane was active. Another NetCDF file that provided the longitudinal and latitudinal boundaries of Louisiana was used in order only to focus on the precipitation data provided within the state of Louisiana alone. A table including the ten hurricanes that occurred during this period, the associated dates of NMME data analyzed, and the peak date with the highest wind intensity provided by the National Oceanic and Atmospheric Administration (NOAA) can be seen in the following table.

Table 1 . List of Hurricanes that occurred 2000-­2015 and associated storm date.

| Hurricane Name | Storm Duration | Peak Date |
| -------------- | -------------- | --------- |
| Hurricane Isidore | 14 September 2002 to 27 September 2002 | 26 September 2002 |
| Hurricane Lili | 21 September 2002 to 4 October 2002 | 3 October 2002 |
| Hurricane Cindy | 3 July 2005 to 12 July 2005 | 6 July 2005 |
| Hurricane Dennis | 4 July 2005 to 18 July 2005 | 10 July 2005 |
| Hurricane Katrina | 23 August 2005 to 31 August 2005 | 29 August 2005 |
| Hurricane Rita | 18 September 2005 to 26 September 2005 | 24 September 2005 |
| Hurricane Humberto | 12 September 2007 to 14 September 2007 | 13 September 2007 |
| Hurricane Gustav | 25 August 2008 to 7 September 2008 | 1 September 2008 |
| Hurricane Ike | 1 September 2008 to 15 September 2008 | 13 September 2008 |
| Hurricane Ida | 4 November 2009 to 10 November 2009 | 10 November 2009 |

## Temporal Analysis

In order to perform the temporal analysis on the hurricane forecast data, the spatial difference was eliminated. This was achieved by selecting the day with highest observed precipitation and finding the location of the maximum precipitation within Louisiana associated with that day. The trends between lead times 0, 4, and 8 months were assessed to see whether ensemble predictions improved with shorter lead times. In addition, ensemble predictions were averaged together for each lead time. The precipitation value for each day of the hurricane at the selected location was plotted and compared against the observed value during the same time period. The time period examined for each hurricane included the dates of hurricane activity according to the NOAA hurricane tracker plus a one week buffer both before and after.

The relative performance of the ensembles with respect to lead time was assessed using the mean square error (MSE) and the bias ratio (BR). These statistics were determined with the following equations, where f denotes forecasted values and x denotes observed values.

M SE(f, x ) = Σ(f i − x i

) 2 n

i \= 1, 2 , . ..., n (1)

B R = μ(f)

μ(x) (2)

## Spatial Analysis

The scaling error for hurricanes that occurred in Louisiana between the years 2000­2015 was determined by analyzing the date that the hurricane displayed the strongest winds (peak date), according to the observed data provided by NOAA. Once the peak date was determined, an average of the forecasts for each ensemble throughout space was taken. Next, the maximum precipitation value on the peak date in the observed data was determined and compared to the precipitation in the location where the observed precipitation was the highest (peak precipitation). This comparison demonstrates the difference between the observed data and the forecasted data at a given point spatially.

The scaling error was determined according to equation (1):

Scaling Error at Location of Peak Precipitation = TRMM Ensemble observation forecast at at peak peak date date and and peak peak precipitation

precipitation (3)

The scaling error is a useful statistic as it tells us by what factor the ensemble forecast data was undervalued as compared to the observed TRMM data. A scaling error was also mapped for hurricanes Isidore, Katrina, and Gustav at a lead time of zero months according to equation (2):

Scaling Error = Ensemble TRMM forecast observation of precipitation at peak at date

peak date (4)

A mean ensemble was generated using the spatially averaged composite of the ten CanCM4 model outputs of precipitation during hurricane events. This mean ensemble was created in order to obtain a general sense of forecasting capabilities. The only observed TRMM data utilized in this portion of analysis is that which occurred on the peak day of precipitation, or the day that would have the most dramatic hydrological effects.

## Results & Data Analysis

The time series of precipitation for hurricanes Isidore, Katrina, and Gustav at lead times of 0, 4, and 8 months are shown below. Due to the small values for the ensemble models, the forecasted values were squared and plotted against the observed data in order to better visualize the peaks in the forecasted data.

Figure 1 . Observed versus ensemble predicted precipitation time series for Hurricane Isidore.

Figure 2 . Observed versus ensemble predicted precipitation time series for Hurricane Katrina.

Figure 3 . Observed versus ensemble predicted precipitation time series for Hurricane Gustav.

Figure 4. Observed versus ensemble (values squared) predicted precipitation time series for Hurricane Isidore.

Figure 5 . Observed versus ensemble (values squared) predicted precipitation time series for Hurricane Katrina.

Figure 6 . Observed versus ensemble (values squared) predicted precipitation time series for Hurricane Gustav.

Table 2. Statistical error data for hurricanes Isidore, Katrina, and Gustav at lead times 0, 4, and 8 months

Isidore (2002)

Lead Time MSE Bias Ratio

0 1598 0.45

4 1654 0.41

8 1593 0.48

Katrina (2005)

Lead Time MSE Bias Ratio

0 528 0.71

4 518 0.80

8 532 0.74

Gustav (2008)

Lead Time MSE Bias Ratio

0 1435 0.33

4 1637 0.41

8 1569 0.34

7

## Scaling Error

The observed and forecasted precipitation data was viewed, compared and analyzed using R and Matlab. Sample code for determining scaling error for Hurricane Gustav can be found in Appendix A and B. The figures below show the scaling error at the peak location on the peak day of all ten hurricanes that occurred between the years of 2000­2015 at lead times of 0, 4 and 8 months, respectively.

### Scaling Error at Location of Peak Precipitation

Figure 7 . Scaling error at the peak location on the peak day of all ten hurricanes that occurred between the years of 2000­2015 at lead time 0 .

Figure 8. Scaling error at the peak location on the peak day of all ten hurricanes that occurred between the years of 2000­2015 at lead time 4.

Figure 9. Scaling error at the peak location on the peak day of all ten hurricanes that occurred between the years of 2000­2015 at lead time 8.

Scaling Error ­ Lead Time 0

For the purpose of this study, spatial error maps were only included in the figures below for Hurricanes Isidore, Katrina, and Gustav at a lead time of zero months.

Figure 10. Hurricane Isidore on peak day of September 26, 2002. Clockwise from top left corner (1­4). 1) Forecasted precipitation with 0­month lead time. 2) Observed precipitation 3) Scaling error 4) NOAA Hurricane map.

Figure 11. Hurricane Katrina on peak day of August 29, 2005. Clockwise from top left corner (1­4). 1) Forecasted precipitation with 0­month lead time. 2) Observed precipitation 3) Scaling error 4) NOAA Hurricane map.

Figure 12. Hurricane Gustav on peak day of September 1, 2008. Clockwise from top left corner (1­4). 1) Forecasted precipitation with 0­month lead time. 2) Observed precipitation 3) Scaling error 4) NOAA Hurricane map.

## Discussion

### Temporal Analysis

The averaged ensemble forecast was drastically underpredicting the hurricane precipitation, however, there could still exist some potential for predicting when the peak precipitation occurred. By squaring the averaged ensemble forecast values, any peaks present will be favored and exaggerated. Squaring the averaged ensemble forecast has potential to show a temporal trend, however it is not guaranteed to provide a valuable precipitation scale. By favoring the peaks in the forecast, it can also be easier to recognize any temporal shifts present.

Isidore’s mean squared error does not decrease with decreasing lead time and shows no trend proving that the accuracy of the forecast data increases as the hurricane approaches. Looking at Figure 4, it can be seen that the ensemble model did not predict the occurence of the hurricane regardless of the lead time. At lead time 8, there was an increase in the forecast precipitation value around September 20, which is a few days before the observed peak value on September 26. Lead time 0 shows a high precipitation event after September 30. None of the lead times were able to predict a large precipitation event occurring at the time of the hurricane.

Katrina’s MSE was similar across all lead times. The ensemble models do show a slight increase in the predicted precipitation value during the peak days of the hurricane, but does not show any significant peaks that would indicate a high precipitation event at this time. At lead time 0, a high precipitation value was predicted after September 6. Louisiana experienced the highest rainfall from Katrina on August 28. The ensemble was unable to predict the approach of Hurricane Katrina.

Gustav’s MSE values show that the lowest error was calculated for lead time 0. As expected, the closer it is to the hurricane event, the more accurate the forecast data should be. Gustav hit Louisiana in 2008, meaning ensemble models could have been improved since the time of Isidore and Katrina. When looking at the plot of observed data versus the square of the forecast data, it can be seen that at lead time 0 the ensemble was able to predict the occurence of a high precipitation event on September 1. At lead time 8, no significant hurricane event was predicted by the ensemble. At lead time 4, a small hurricane event was predicted around August 30, but the model predicted an even higher precipitation event around September 12, which turned out to be a false alarm. The ensemble was able to accurately predict the occurence of a high precipitation event for Hurricane Gustav at lead time 0.

Between lead times, there is no strong evidence that decreasing lead time produces a more accurate forecast since the MSE typically did not show a decreasing trend. The ensembles performed poorly at predicting when hurricane events would occur. Gustav shows a promising trend in that the lowest lead time, 0, has the lowest MSE, possibly due to improvements in ensemble models, and the ensemble successfully predicted the hurricane event. However, the ensembles were still unable to predict large rainfall events at large lead times, which would give communities more time to react and protect themselves against the storm. The bias ratio has the potential to redeem inaccurate data by helping to determine a scaling factor. If the bias is consistent then the data can be scaled to give a more accurate prediction. The averaged ensembles were consistently underpredicting for each hurricane, although by slightly different amounts. This trend could potentially give the forecasts more potential. However, it is also important to note that the bias ratio is not always helpful if many small values are present.

For a more complete temporal analysis, it might have been beneficial to have more buffer time before and after hurricane activity. A one week buffer was sufficient to see the trends near the peak precipitation in the observed data, however a longer time series might have yielded better statistics from the larger sample size. Additionally, there may be a time shift present in the forecasted data that wasn’t seen with a one week buffer, but is unlikely.

### Scaling Error

As seen in Figures 7­9, there were few trends found in determining the scaling error of the ensemble models. Obtaining this information was helpful in determining that the forecasts were not consistently biased. It should be noted that, after running a preliminary analysis on this data, it was determined that each ensemble consistently underestimated the amount of precipitation occurring during a hurricane on its peak day, at its peak location according to the observed data. Due to this observation, the concept of a scaling error was implemented in order to determine by how much the forecasts were underestimating hurricane precipitation in Louisiana.

The purpose of this analysis was to determine whether the ensembles were differing from the observed data by a set factor for each lead time. It was hypothesized that if the scaling error was constant throughout each hurricane and lead time, that each ensemble could simply be adjusted by that factor to match the observed data. This was not what was determined in our analysis, however. The following plot shows the actual scaling error vs what the hypothesized scaling error could have looked like.

Figure 13. Scaling error at the peak location on the peak day of all ten hurricanes that occurred between the years of 2000-­2015 at lead time 0 against hypothesized scaling error.

From this, one can see that the true scaling error is not consistent through each hurricane, therefore, each ensemble cannot simply be scaled to match the observed data. This is true for each lead time that was tested, as shown below.

Figure 14. Scaling error at the peak location on the peak day of all ten hurricanes that occurred between the years of 2000-­2015 at lead time 4 (left) and lead time 8 (right), against hypothesized scaling error.

After gathering these results, the intensities of each hurricane were added to the plot in the parentheses by the name of each hurricane. This was done to determine whether the intensity of a hurricane had any impact on the scaling error of the ensembles. As shown in Figures 13 and 14, this was not the case. No correlation was found between hurricane intensity and scaling error. This is seen by comparing two hurricanes of similar intensity to each other, such as Hurricane Gustav (Intensity 2) and Hurricane Ike (Intensity 2) with a lead time of zero, in Figure 13. One would expect the scaling errors to be similar across these two hurricanes if the intensity had an effect on the scaling error. This is not the case, as Hurricane Ike has a scaling error of around 480, while Hurricane Gustav had a scaling error closer to 10.

## Conclusion

For the purpose of this study, forecast data was analyzed one week prior to, and one week following a hurricane event. The results indicate that the ensembles do not perform well when predicting the high levels of precipitation associated with hurricanes in Louisiana. The forecasts tend to significantly underpredict during storm events. This is because hurricanes form in a relatively short amount of time, and it is difficult to predict the precipitation associated with a hurricane from NMME data alone.

If additional NMME forecast data was provided, one could potentially use the forecast to determine during what months a hurricane is more likely to occur, though it is possible that the focus of the ensemble forecast period would need to be shortened. In addition, NMME forecasts could be coupled with other forecasting techniques that predict storm intensity, track, and duration. Because NMME forecasts can be an extremely beneficial tool for predictions of seasonal climate trends, they could be used as a component for determining the overall trends during hurricane seasons (summer and early fall) . Although this does not provide especially accurate information about how much precipitation to expect, it may provide insight as to when other models should begin to initiate hurricane forecasts. Looking at NMME forecasts over a longer timespan would also present the opportunity to determine more accurate statistics, as the mean values of the data are likely to be more accurate with the addition of other predictions.

---

## References

American Meteorological Society. (2007). Hurricane Forecasting in the United States . American

Meteorological Society: Bulletin 88. <https://www.ametsoc.org/ams/index.cfm/about­ams/ams­statements/statements­of­the­ams­in>­ force/hurricane­forecasting­in­the­united­states/

Cangialosi, John P, and James L Franklin. “NATIONAL HURRICANE CENTER FORECAST

VERIFICATION REPORT.” National Hurricane Center Forecast Verification , 4 Apr. 2017, www.nhc.noaa.gov/verification/ .

Harnos, D. S., Schemm, J. K. E., Wang, H., & Finan, C. A. (2017). NMME­based hybrid prediction of

Atlantic hurricane season activity. Climate Dynamics , 1­19.

Jia, P., Joyner, A., & Sun, Y. (2014). Short­term associations between accumulated rainfall and

atmospheric moisture during landfall of three Atlantic hurricanes. The Geographical Bulletin , 55 (1), 49.

National Aeronautics and Space Administration (NASA). (2015) Precipitation Measurement Missions .

<https://pmm.nasa.gov/trmm>.

National Center for Atmospheric Research. (2017). Project: NMME CanCM4 data. NCAR Climate Data

Gateway , <https://www.earthsystemgrid.org/project/nmme.html>

15

Atlas, R. (2005). Hurricane forecasting with the high-resolution NASA finite volume general circulation

 model. Geophysical Research Letters, 32(3). doi:10.1029/2004gl021513

Bunya, S., et al. “A High-Resolution Coupled Riverine Flow, Tide, Wind, Wind Wave, and Storm Surge

Model for Southern Louisiana and Mississippi. Part I: Model Development and Validation.” Monthly Weather Review, vol. 138, no. 2, 1 Feb. 2010, pp. 345–377., doi:10.1175/2009mwr2906.1.

Chen, Xing, et al. “Variations in Streamflow Response to Large Hurricane-Season Storms in a

Southeastern U.S. Watershed.” Journal of Hydrometeorology, vol. 16, no. 1, 4 Feb. 2015, pp. 55–69., doi:10.1175/jhm-d-14-0044.1.

Gopalakrishnan, S. G., Bacon, D. P., Ahmad, N. A. N., Boybeyi, Z., Dunn, T. J., Hall, M. S., ... & Sarma,

A. (2002). An operational multiscale hurricane forecasting system. Monthly weather review, 130(7), 1830-1847.

Jagger, Thomas H., and James B. Elsner. “A Consensus Model for Seasonal Hurricane Prediction.”

 Journal of Climate, vol. 23, no. 22, 2010, pp. 6090–6099., doi:10.1175/2010jcli3686.1.

Murakami, H., Villarini, G., Vecchi, G. A., Zhang, W., & Gudgel, R. (2016). Statistical–dynamical

seasonal forecast of North Atlantic and US landfalling tropical cyclones using the high-resolution GFDL FLOR coupled model. Monthly Weather Review, 144(6), 2101-2123.

National Atmospheric and Oceanic Administration (NOAA). 2017. Improving the accuracy and

 reliability of hurricane forecasts. Miami, FL: National Hurricane Center.

 [http://www.hfip.org/documents/HFIP\_StrategicPlan\_Yrs5-10\_Nov05\_2014\_Update.pdf](https://www.google.com/url?q=http://www.hfip.org/documents/HFIP_StrategicPlan_Yrs5-10_Nov05_2014_Update.pdf&sa=D&ust=1606077043742000&usg=AOvVaw0IL87S4zD5QCqWUH6VRrb-)

National Atmospheric and Oceanic Administration (NOAA). 2017. Saffir-Simpson Hurricane Wind

 Scale. Miami, FL: National Hurricane Center. [http://www.nhc.noaa.gov/aboutsshws.php](https://www.google.com/url?q=http://www.nhc.noaa.gov/aboutsshws.php&sa=D&ust=1606077043742000&usg=AOvVaw0ncmgOI_9e-Qk4BssInKr0)

Tallapragada, V., Bernardet, L., Gopalakrishnan, S., Kwon, Y., Liu, Q., Marchok, T., ... & Yablonsky, R.

(2014). Hurricane Weather Research and Forecasting (HWRF) model: 2013 scientific documentation. HWRF Development Testbed Center Tech. Rep, 99.

United States, Congress, National Hurricane Center, and Eric S Blake. “Tropical Cyclone Report:

Hurricane Humberto.” Tropical Cyclone Report: Hurricane Humberto, National Hurricane

Center, 28 Nov. 2007. [www.nhc.noaa.gov/data/tcr/AL092007\_Humberto.pdf](https://www.google.com/url?q=http://www.nhc.noaa.gov/data/tcr/AL092007_Humberto.pdf&sa=D&ust=1606077043743000&usg=AOvVaw0V1qj8j16oYkCMQQVbO6Hz).

Wamsley, T. V., Cialone, M. A., Smith, J. M., Atkinson, J. H., & Rosati, J. D. (2010). The potential of

 wetlands in reducing storm surge. Ocean Engineering, 37(1), 59-68.

Westerink, Joannes J., et al. “A Basin- to Channel-Scale Unstructured Grid Hurricane Storm Surge Model

Applied to Southern Louisiana.” Monthly Weather Review, vol. 136, no. 3, 1 Mar. 2008, pp. 833–864., doi:10.1175/2007mwr1946.1.

World Meteorological Organization (WMO). 2012. Guidelines on Ensemble Prediction Systems and

 Forecasting. Geneva, Switzerland.

 [http://www.wmo.int/pages/prog/www/Documents/1091\_en.pdf](https://www.google.com/url?q=http://www.wmo.int/pages/prog/www/Documents/1091_en.pdf&sa=D&ust=1606077043744000&usg=AOvVaw31hu6197cGJEnsivA46pW0)

---

## Appendix

Appendix A: Sample R code

```r
#Hurricane Cindy
setwd("~/path/to/LA_Hurricane_Data/Hurricane Ensembles/Cindy/")

library(raster)
library(ncdf4)
library(rgdal)
library(gdalUtils)
library(REdaS)
library(rgeos)

#24 days of precipitation data from 06/26/2005- 07/19/2005
file_list_precip=list.files(pattern = glob2rx('CanCM4_EnsNo-1_LeadTime-0_Hurricane-Cindy_20050626-20050719.nc'))
file_list_precip
Cindy_Ens1=brick(file_list_precip)
dim(Cindy_Ens1)
Cindy_Ens1
class(Cindy_Ens1)
plot(Cindy_Ens1[[11]]) # For July 6, 2005

# Using Louisiana ShapeFile to plot Louisiana over latitude/longitude data for Cindy
Louisiana_shp=list.files(pattern = glob2rx('Louisiana.shp'))
Louisiana_shp
shape_read=readOGR('Louisiana.shp')
crs(shape_read)
new_crs="+proj=longlat +datum=WGS84 +ellps=WGS84 +towgs84=0,0,0 "
shape_shift=spTransform(shape_read,CRS(new_crs))
plot(shape_shift,add=TRUE)

all_timesteps=stackApply(Cindy_Ens1,indices =1, fun = mean)
plot(all_timesteps)

netcdf_cropped=crop(all_timesteps,shape_shift)
plot(netcdf_cropped)
plot(shape_shift,add=TRUE)
netcdf_extract=extract(all_timesteps,shape_shift,mean,na.rm=TRUE)
length(netcdf_extract)
netcdf_extract
summary(netcdf_cropped)
cellStats(netcdf_cropped,stat='mean', na.rm=TRUE)

Code thus far for TRMM Hurricane Cindy

setwd("~/path/to/LA_Hurricane_Data/Louisiana-TRMM")
library(raster)
library(ncdf4)
library(rgdal)
library(gdalUtils)
library(REdaS)
library(rgeos)

#Hurricane Cindy TRMM Data
file_list_precip=list.files(pattern = glob2rx('prcp_trmm_2005.nc'))
Cindy_TRMM1=brick(file_list_precip)
dim(Cindy_Ens1)
Cindy_TRMM1
class(Cindy_TRMM1)
plot(Cindy_TRMM1[[187]]) # for July 6, 2005 (peak date in LA)

# Using Louisiana ShapeFile to plot Louisiana over latitude/longitude data for Cindy
Louisiana_shpT=list.files(pattern = glob2rx('Louisiana.shp'))
Louisiana_shpT
shape_readT=readOGR('Louisiana.shp')
crs(shape_read)
new_crs="+proj=longlat +datum=WGS84 +ellps=WGS84 +towgs84=0,0,0 "
shape_shiftT=spTransform(shape_readT,CRS(new_crs))
plot(shape_shift,add=TRUE)

all_timestepsT=stackApply(Cindy_TRMM1,indices =1, fun = mean)
plot(all_timestepsT)

netcdf_croppedT=crop(all_timestepsT,shape_shiftT)
plot(netcdf_croppedT)
plot(shape_shiftT,add=TRUE)
netcdf_extracTt=extract(all_timesteps,shape_shift,mean,na.rm=TRUE)
length(netcdf_extractT)
netcdf_extractT
summary(netcdf_croppedT)
cellStats(netcdf_croppedT,stat='mean', na.rm=TRUE)

#Checking Error between TRMM and Ens1
test=netcdf_croppedT-netcdf_cropped
plot(test)
plot(shape_shift,add=TRUE)

```
