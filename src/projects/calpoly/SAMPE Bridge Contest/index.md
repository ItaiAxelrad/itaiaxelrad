---
title: SAMPE Bridge Contest
---
As the Vice President of the Cal Poly SAMPE Chapter (2012 to 2014) I organized fundraising events and lead a competitive composite material beam design team. Our beam placed 4th in the
annual international SAMPE competition.

The beam geometry was developed using empirical evidence
compiled from previous test results and iterative analysis.
Abaqus and Mathcad solution helped us optimize the final design.
We also considered manufacturing concerns while designing the
geometry.

![Finite Element Analysis of an I-Beam](/images/beam.jpg)

```matlab
clc
clear all
close all

L=23; %total length of highway overpass in inches
a=9.5; if a>=L,error('a must be less than L'),end; %length from edge support to closest support in inches
b=L-a; if L-b~=a,error('beam is not symmetrical'),end; %length from edge support to third support in feet
w=750; %distributed loading on the overpass due to concrete and traffic in pounds per inch
E_Bamboo=29000; %Modulus of elasticity for bamboo in psi
Y_Bamboo=58; %Yielding strength for bamboo in psi
FS=1.2; %Design factor of safety

A=[1 1 1 1;0 a b L;0 ((a^2)*(b^2))/(3*L) -(2*(a^4)-(a^2)*(L^2))/(6*L) 0;...
    0 -(((a^3)*L)-(3*b*L*a^2)+(3*a*L*b^2)+(2*b^4)-(L*b^3)-((b^2)*(L^2)))/(6*L) ((a^2)*(b^2))/(3*L) 0];
B=[w*L;((w*L^2)/2);(w/24)*((a^4)-(2*L*a^3)+(a*L^3));(w/24)*((b^4)-(2*L*b^3)+(b*L^3))];
R=LUfact(A,B);%R = reactions.

% Calculate and plot Shear and Moment
[min_shear, min_moment, max_shear, max_moment,V1func,V2func, ...
    V3func,M1func,M2func,M3func] = shear_moment(w, L, a, R(2), R(1));

% Find locations where moment is zero
root = zeros([1 6]); % Preallocate an array for roots
root(1)=fzero(M1func,[0 a/2]);
root(2)=fzero(M1func,[a/2 a]);
root(3)=fzero(M2func,[a L/2]);
root(4)=fzero(M2func,[L/2 L-a]);
root(5)=fzero(M3func,[L-a L-a/2]);
root(6)=fzero(M3func,[L-a/2 L]);
fprintf('\nMoment is zero at points (feet):\n')
fprintf('%10.3f  %10.3f  %10.3f %10.3f %10.3f %10.3f\n',root)

% Perform analyses on structural steel
fprintf('\n Structural Steel \n')
[name, A, d, bf, tf, tw, Ixx] = wbeamselect(max(abs([min_moment max_moment])),...
    Y_Steel, FS);

% Calculate and plot slope and displacement of the beam
[min_slope, min_displacement, max_slope, max_displacement]=ang_disp(w,R(2),L,a,E_steel,Ixx,'Structural Steel');

% Calculate stress at arbitrary state (100ft,9in) and angle theta of 45 degrees
theta_d=45;
[sigma_xxp, sigma_yyp, tau_xyp, min_princ, max_princ, thetap1, thetap2]...
    = stressstate(100, 9, V1func, M1func, [0 a], V2func, M2func, [a b], V3func, M3func, [b L], ...
    theta_d, d, bf, tf, tw, Ixx);
fprintf('\n sigma xx (ksi)    sigma yy(ksi)   tau xy(ksi)   angle(degrees)\n')
fprintf('%10.3f    %10.3f      %10.3f     %10.3f\n',sigma_xxp,sigma_yyp,tau_xyp,theta_d)
fprintf('\n Principle Stresses (ksi)         Principle Planes (degrees) \n')
fprintf('%10.3f     %10.3f      %10.3f     %10.3f\n',min_princ,max_princ,thetap1,thetap2)

% Plot stresses with respect to angle and Mohr's Circle at (100ft,9in)
transplot(100, 9, V1func, M1func, [0 a], V2func, M2func, [a b], V3func, M3func, [b L], ...
    d, bf, tf, tw, Ixx, 'Structural Steel');

% Make false-color plot of Factor of Safety
FS=fsplot(Y_Steel, V1func, M1func, [0 a], V2func, M2func, [a b], V3func, M3func, [b L], ...
    d, bf, tf, tw, Ixx, 'Structural Steel');
fprintf('\n Overall Factor of Safety: %f\n',FS)
```

2014 SAMPE Bridge Competition Proposal

Bridge Registration number: 07- 884

Category:  Category C, I-beam natural fiber

School:  Cal Poly, San Luis Obispo

Team Members:  Dylan Manning (team [dilmanning@hotmail.com](mailto:dilmanning@hotmail.com)), Itai Axelrad. Faculty Advisor: Eltahry Elghandour, eelghand@calpoly.edu, 805-756-1728

Manufacturing Process

1. 3.5x26 inch strips of hemp canvas were cut. These strips are used for constructing the web of the bridge. Since the thickness of the web will determine the amount of shear reinforcement we cut out 7 strips.

 1. Six 5.5x26 inch strips of hemp canvas were then cut. These strips will be used to construct the outward pointing C-channels to create the full I-beam.

 2. Four 6-strip ply paulownia wood web cores are layered with the hemp canvas. Four are placed in the web, one on the bottom and one on top to withstand compressive force.

  

-   The majority of the force applied to the bridge will be absorbed by the web. The web of the bridge will make up the majority of the weight and will have a thickness of 0.55 inches in order to comply with the design restrictions.
-   Hemp canvas is good in tension so there are extra layers on the bottom of the beam.
-   We wetted the hemp canvas with epoxy, squeegeed excess off, and then layered each piece on our metal mold.  
    

-   The first and last layers are cut larger and laid on the center of the mold. The inner layers are laid with an offset. This is so the web of the C-channels will be twice as thick as the C-channel flanges.  
    

-   Hemp twine, which helps resist tears in the canvas and fill void space, is placed in between the layers, which are then all sealed in a vacuum bag.  
    

-   Once the beam has been vacuum-bagged, it is placed in an autoclave to cure.  
    

-   The cured beam is then cut and sanded down in order to reduce and even out the weight.

Beam Schematic

![https://lh3.googleusercontent.com/Mt3yJqFWuUUtOEBMxHvsavsBV-NU_QDBSJI0bCBh7w2xHh1Z_xbUbOGJhT8YSjfEbX1VybolMOWBhyfCJtI4eiu8Syni6GREYiH4ZPIZ7PjjXgCnEAJf6KvP0E35_KGlJg](images/image2.jpg)

Beam schematic courtesy of Jay Lopez

Materials

Part

Description

Quantity

5.5” x 26” Hemp Ply

10 oz. Canvas

6

2.5” x 26” Hemp Ply

10 oz. Canvas

13

2.7” x 26” Paulownia Ply

.25” Thickness

1

24 oz. Resin/Hardener

Epoxy

1

26” Hemp Twine

Braid

8

2013 SAMPE Bridge Competition Proposal

  

Bridge Registration number: 07- 48

Category:  Category C, I-beam natural fiber

School:  Cal Poly, San Luis Obispo

Team Members:  Miles Murphy (team leader, [mmurph12@calpoly.edu](mailto:mmurph12@calpoly.edu)), Itai Axelrad. Faculty Advisor: Eltahry Elghandour, eelghand@calpoly.edu, 805-756-1728

  
  
Manufacturing Process

1. 2.5x26 inch strips of hemp canvas were cut. These strips are used for constructing the web of the bridge. Since the thickness of the web will determine the amount of shear reinforcement we cut out 7 strips.

 2. Six 5.5x26 inch strips of hemp canvas were then cut. These strips will be used to construct the outward pointing C-channels to create the full I-beam.

 3. Four 6-strip ply bamboo web cores are layered with the hemp canvas. Four are placed in the web, one on the bottom and one on top to withstand compressive force.

  

-   The majority of the force applied to the bridge will be absorbed by the web. The web of the bridge will make up the majority of the weight and will have a thickness of 0.57 inches in order to comply with the design restrictions.
-   Hemp canvas is good in tension so there are extra layers on the bottom of the beam.
-   We wetted the hemp canvas with epoxy, squeegeed excess off, and then layered each piece on our metal mold.  
    

-   The first and last layers are cut larger and laid on the center of the mold. The inner layers are laid with an offset. This is so the web of the C-channels will be twice as thick as the C-channel flanges.  
    

-   Hemp twine, which helps resist tears in the canvas and fill void space, is placed in between the layers which are then all clamped together in the mold.  
    

-   Once the epoxy has hardened we remove the beam from the mold and place it in the sun to cure for four days.  
    

-   The cured beam is then cut and sanded down in order to reduce and even out the weight.

Beam Schematic

![https://lh3.googleusercontent.com/Mt3yJqFWuUUtOEBMxHvsavsBV-NU_QDBSJI0bCBh7w2xHh1Z_xbUbOGJhT8YSjfEbX1VybolMOWBhyfCJtI4eiu8Syni6GREYiH4ZPIZ7PjjXgCnEAJf6KvP0E35_KGlJg](images/image2.jpg)

Beam schematic courtesy of Jay Lopez

Materials

Part

Description

Quantity

5.5” x 26” Hemp Ply

10 oz. Canvas

6

2.5” x 26” Hemp Ply

10 oz. Canvas

13

2.7” x 26” Bamboo Ply

Sanded to 0.1” Thickness

6

24 oz. Resin/Hardener

Epoxy

1

26” Hemp Twine

Braid

8

Beam Characteristics

Trial

Characteristics

Ultimate Load (lbf)

Weight (lbf)

Strength-to-Weight Ratio

1

2-Ply Bamboo Web Core

1597

1.13

1413

2

3-Ply Bamboo Web Core

2057

1.21

1700

3

4-Ply Bamboo Web Core

Bamboo Bottom Flange

Hemp Twine Fillers

2743

1.59

1729

4

2-Ply Bamboo Web Core

Bamboo Top Flange

Hemp Twine fillers

2310

1.77

1306

5

4-Ply Bamboo Web Core

Bamboo Top and Bottom Flanges

Hemp Twine Fillers

3093

1.63

1901

6

4-Ply Bamboo Web Core

Bamboo Top and Bottom Flanges

Hemp Twine Fillers

2467

1.49

1658

Beam Schematic

![](images/image6.jpg)

Materials Used

Part

Description

Quantity

4” x 26” Hemp Ply

10 oz. Canvas

4

2” x 26” Hemp Ply

10

2” x 16” Bamboo Ply

Sanded to 0.1” Thickness

4

24oz Resin/Hardener

Ecopoxy

1

26” Hemp Twine

Braid

8

Note: Beam schematic courtesy of Jay Lopez

### Hempcrete

Subject: 165 kg of carbon can be theoretically absorbed and locked up by 1 m3 of hempcrete wall over many decades.

165 kg of carbon can be theoretically absorbed and locked up by 1 m3 of hempcrete wall over many decades.

Hempcrete is easier to work than traditional lime mixes and acts as an insulator and moisture regulator. It lacks the brittleness of concrete and consequently does not need expansion joints

However, the typical compressive strength is around 1 MPa,\[4\] around 1/20 that of residential grade concrete.

Hempcrete walls must be used together with a frame of another material that supports the vertical load in building construction. Wood stud framing is most common making it suitable for low-rise construction. Hempcrete buildings ten stories high have been built in Europe.

Hempcrete's density is 15% of traditional concrete

Fully cured hempcrete blocks float in a bucket of water

Hempcrete was discovered in a bridge abutment in France built in the 6th century. Given it has survived 14 centuries, people expect hempcrete buildings will have a long life.

Fireproof? Soundproof?

They’re resistant to mold, mildew, fire and insects, and the lime absorbs carbon, making the walls carbon-negative.

inorganic salts to provide fire and pest resistance.

A German company produces a product called Mehabit, a hemp hurd substance covered with coal-based bitumen, which is sticky, and when leveled out on a hemp cement floor, will dry to form a thermally and phonetically insulated floor.

The product, sold by Asheville-based Hemp Technologies, mixes four parts ground-up hemp stalks with one part water and one part lime to create durable, resilient walls that European researchers have found can last up to 700 or 800 years.

To do this, set up a plywood frame (preferably hemp plywood), then fill with a mixture of hemp hurd (wood chip-like substance) and combine with lime, sand, plaster, some cement, and enough water to dampen, and let the mixture set for a day. Then take the frame down, but let the mixture continue to harden for about a week.

United States: Since 1997, the Lakota Sioux at Pine Ridge Reservation in South Dakota have passed multiple pro-hemp resolutions and declarations.This year, the tribe sowed about two acres by an already growing field of wild hemp. Since Native reservations are considered as independent nations for many purposes, the DEA has made no official response

Hemp bale construction?

Washington State University has produced hemp fiberboard, which is lighter, twice as strong, and three times as elastic as wood fiberboard, plus it has sound proofing and pressure isolative characteristics absent from wood fiberboard. The process involves chipping the hemp stalk, bonding it together with resins and glues, and clamping it down into molds under high pressure until it hardens.

Foundation floors can be made in much the same way as the foundation. Hemp resists seepage, and so hemp cement is applicable for pouring onto a soil base to make a foundation floor. The floor insulation hardens into a solid mass which will not shift under pressure.

Concrete pipes can be made out of hemp fiber which cost 1/3 that of polypropylene. These pipes have greater flexibility, greater elasticity, and are resistant to cracking.

## Natural Fiber I-Beam Measurements

Length = 24”

Width = 4”

Height = 4”

Single Web = 0.6”

Load = 3,000 lbs. force

1.  The following rules apply to all categories except the Open Design Category:

1.  Testing will consist of a modified 3 point bend on 23” centers.  No design shall interfere with the nature of the loading by bracing against the supports or similar method.
2.  Geometric requirements as specified in attached Figures (see below) are simple but will be strictly enforced.  All bridges must be at least 24” in length. 
3.  An I-beam must have a single web less than or equal to 0.6” thickness.  Caps are not required to be equal in length, width, or thickness.  Cross section may vary along the length of the bridge. 
4.  A square beam may be of open or closed cross section and will have two or three independent webs.  The webs do not have to be perpendicular to the caps.  At no point along its length may the bridge have a solid cross section.  In order to maintain independence of the webs, a minimum gap between the caps of ½” and the webs of ¾” must be maintained along the entire length of the bridge.  Interpreting this rule has been a source of confusion in previous years.  The Governing Committee recommends reviewing your design with the Governing Committee early and before you begin building your bridge to ensure compliance. 
5.  Students are encouraged to focus on manufacturability and optimization of bridge. 
6.  Designs not achieving the above requirements and the general intent as defined in Rules 1 and approved by the Governing Committee will not be allowed in this category—see the Open Design Category.

![](images/image4.png)

![](images/image5.png)

![](images/image3.png)

![sampebridgefixturedimensions (4)](images/image1.jpg)

MANUFACTURING

1.  We began with 8’x2” diameter dried bamboo poles and cut them down to 26” lengths

2.  Cutting the bamboo into uniform strips was problematic due to the bamboo’s curvature. Cutting a straight cut usually lead to non-uniform strips. We found the best method to be hand guiding the strips through a band saw.

3.  Before being sanded the bamboo strips were curved and had ridges at the nodes. These had to be removed in order to create a veneer.

4.  The next step was cutting the bamboo to a uniform width and thickness. We tried running the strips through a planer but ran into problems because the non-uniformity of our strips. We developed a method to uniformly sand our bamboo using a belt sander.

5.  The next step was creating plies from the strips. Although the strips had a uniform width, they were often curved, and this lead to gaps between the edges of adjacent strips. We solved this problem by cinching the bamboo together with tape.

6.  We glued the edges of the taped plies together. When the glue dried, we removed the tape and the resulting bamboo plies had virtually no gaps in between the strips.

7.  We next cut the plies to the mold width using a diamond saw and sanded excess glue off to create a better bonding surface.

8.  We cut various hemp canvas sections for different parts of the beam. We cut full length pieces for web, flange, and sections and cut short strips to reinforce the middle of the beam.

9.  Prior to layup we arranged the cloth and plies in an order and cut strips of hemp twine. On a separate table we wrapped our mold in vacuum bags. Prior to mixing the epoxy we underwent a practice trial to make sure all the pieces were in the correct place.

10.  We assembled the web, flanges, and help C sections   separately. We placed hemp twine at the top and bottom of our web to eliminate voids.

11.  We were able to reduce the amount of voids by clamping the mold instead of using a vacuum bag. We first clamped the web together and tightened the clamps uniformly. We repeated the process for the flanges and added clamps for the web section. Once all the clamps were in place we used a lever to apply the greatest possible pressure on the mold.

12.  After our epoxy cured, we removed the beam from the mold.

13.  We measured the beam and cut it down to size using a diamond saw. After roughly cutting the beam to size we finished it using a belt sander.

14.  After the beam finished curing we tested it using 3 point test on an Intron machine.

15.  Early prototypes failed at the bottom flange at the midpoint of the length.

16.  Our last prototype reached over 3000lbs without failure. We cut holes in the web section to reduce the weight and retested it. The beam failed by shearing lengthwise along the web.

17.  Prototype cross sections arranged from left to right in the order we created them.

18.  Prototypes with weight, and maximum load supported arranged from top to bottom in order we created them. The numbers on the beam second from the bottom are from before the holes were cut.

ANALYSIS

We compiled previous beam dimensions and test data in order to write a MATLAB script file that predicts the maximum load a beam could sustain. We did so by computing the moment of inertia and maximum normal stress then, using the new beam’s dimensions, solved for the theoretical load. We designed the beam to achieve a load that is 10% greater than the desired load of 3,000 pounds. The prediction is reasonable because the design and manufacturing process for the tested beam was identical to the final beam,

DESIGN

Bamboo Veneer: We used bamboo for its high strength to weight ratio. We strove to eliminate spacing between bamboo strips in order to increase the bamboo fiber content of our beam. We originally used bamboo for the web only, but we found that its use along the flanges reduces torsional buckling and increases rigidity.

 Hemp Cloth: Hemp cloth was chosen because hemp fibers are known to have high tensile strength. Hemp cloth provided a medium to soak up the epoxy resin. The cloth improved the bond between bamboo layers.

Hemp Twine: We had a problem with voids along the top and bottom of our web section. We used hemp twine saturated in epoxy to reduce the voids in these sections.

Larger Middle Section: In order to maximize the strength to weight ratio of our beam, we reduced the flange width at areas of lower stress. We also added additional hemp plies along web the top and bottom flanges at this section.

Thick Bottom Flange: Early failures occurred in the center of the beam along the bottom flange. As a result we increased the number of hemp plies in the bottom flange.

Poster ideas…

Design Proceess

-   Bridges with Jay – 2000, 2300, 2700 lbs.

-   Changed design based upon failure method

-   Stress concentrations along edges of bamboo

-   Added hemp twine

-   Voids in beam when vaccum bag was used

-   Changed to clamp

-   Failure in tension side

-   Increased thickness, added bamboo to bottom flange
-   Added extra hemp sections in the middle of the beam

-   Delamination failure

-   Sanded both sides of beam to rectangular section

-   Bridges with Itai 2300, 3100, ???

-   Created beam braced with bamboo in flanges and increased number of hemp plys

-   Problem Extreme deflection

-   Added bamboo to compression side
-   Increased ration of bamboo to hemp
-   Delamination along taped hemp plys

-   New design

-   Used very thin bamboo plys

1.  We began wth 8’x2” diameter dried bamboo poles and cut them down to 26” lengths
2.  Cutting the bamboo into uniform strips was problematic due to the bamboo’s curvature. Cutting a straight cut usually lead to non-uniform strips. We found the best method to be hand guiding the strips through a band saw.
3.  Bamboo strips prior to sanding
4.  The next step was cutting the bamboo to a uniform width and thickness. We tried running the strips through a planer but ran into problems because the non-uniformity of our strips. We developed a method to uniformly sand our bamboo using a belt sander.
5.  Sanded bamboo strips. In early prototypes we only sanded one side of the strips, but as our sanding methods improved we sanded the strips to rectangular sections and achieved uniformity to within 0.01”.
6.  The next step was creating plies from the strips. Although the strips had a uniform width, they were often curved, and this lead to gaps between the edges of adjacent strips. We solved this problem by cinching the bamboo together with tape and gluing the edges together. When the glue dried, we removed the tape and the resulting bamboo plies had virtually no gaps in between the strips.
7.  We next cut the plies to the mold width using a diamond saw and sanded excess glue off the surface to create a better bonding surface.
8.  We cut various hemp canvas sections for different parts of the beam.
9.  Prior to layup we arranged the cloth and plies in an order and cut strips of hemp twine. On a separate table we wrapped our mold in vacuum bags. Prior to mixing the epoxy we underwent a practice trial to make sure all the pieces were in the correct place.
10.  We assembled the web, flanges, and help C sections separately. Shown here is a blown up picture of our web sandwiched between two C sections. We placed hemp twine at the top and bottom of our web to eliminate voids.
11.  We were able to reduce the amount of voids by clamping the mold instead of using a vacuum bag. We first clamped the web together and tightened the clamps uniformly. We repeated the process for the flanges and added clamps for the web section. Once all the clamps were in place we used a lever to apply the greatest possible pressure on the mold.
12.  After our epoxy cured, we removed the beam from the mold.
13.   We measured the beam for cutting and cut the beam down to size using a diamond saw. After roughly cutting the beam to size we finished it using a belt sander
14.  After the beam finished curing we tested it using an Intron machine.
15.  Early prototype failures.
16.  Our last prototype reached over 3000lbs without failure. We cut holes in the web section to reduce the weight and retested it. The beam failed by shearing lengthwise along the web.
17.  Prototype cross sections arranged from left to right in the order we created them.
18.  Prototypes with weight, and maximum load supported arranged from top to bottom in order we created them. The numbers on the beam second from the bottom are from before the holes were cut.

20.  We attempted cutting bamboo strips with diamond saw and a band saw. The moThe bamboo’s curvature posed a problem for the diamond saw, and we found the most effective method to be using a band saw and cut along with the . Due to the curvature of the bamboo it was difficult

-   Prepared area and molds

-   Used 2.3”X2.3”x36” wood sections for the web molds and Aluminum pieces for flange

-   Coated wood with packaging tape and applied nano release
-   Coated aluminum mold with vaccume bag

Aranged our pieces  on our workspace so that we did not need to think about what part went where during the layup

Manufacturing process

-   With Jay

-   Cut bamboo sections using diamond saw

-   Curved bamboo created problems

-   Sanded bamboo to size using 0.5” belt sander

-   Slow and tedious process
-   Only sanded one side

-   With Itai

-   Used campus facilities

-   Split bamboo in half using band saw

-   Followed grains of bamboo rather than trying to cut sections perfectly straight

-   Sanded to semi-uniformity and used planer

-   Planer chewed up edges and burned bamboo
-   Inconsistent results

-   Developed sanding method using 6” belt sander

-   Clamped board nearly touching belt
-   Sanded along inner side until a flat surface was established

-   Used a 8” wood block to apply uniform pressure to the sander

-   Rotated strip placing flat side face down and sanded flat surface on one edge.

-   Used wood block to set a width tolerance and sanded to a uniform width.
-   Even for curved sections we were still able to sand them down to a constant width

-   Rotated once again and repeated process
-   Rotated final time and sanded until a rectangular section was created

-   For final beam we were able to efficiently sand strips to a .01” tolerance.

-   Manufactured bamboo ply’s prior to layup.

-   Synched bamboo together using painters tape.
-    Used many wraps to straighten curved strips.
-   Glued/Epoxyd bamboo together while leaving tape intact
-   After adhesive set, we removed the tape
-   We sanded the plys to roughen surface and improve bonding capability

-   Layup using provided 2h working time epoxy

-   Prepared area and molds

-   Used 2.3”X2.3”x36” wood sections for the web molds and Aluminum pieces for flange

-   Coated wood with packaging tape and applied nano release
-   Coated aluminum mold with vaccume bag

-   Aranged our pieces  on our workspace so that we did not need to think about what part went where during the layup

-   Layup

-   Used epoxy spatulas to thouroughly coat every piece with epoxy.
-   Created web section then each flange
-   Put C plys together and placed upon wood molds
-   Placed web section in between C’s and clamped both ends lightly
-   Placed epoxy coated hemp yarn on top of the web section
-   Placed flange section over hemp yarn and added more epoxy to be sure to fill all the voids
-   Placed aluminum mold on top and flipped over entire piece
-   Repeated same process for bottom flange
-   Clamped sections applying uniform pressure by placing and slowly tightening clamps on opposite ends of the beam
-   Removed beam from mold after 20hours

-   Cutting section down

-   Cut down flanges to bamboo ply width
-   Measured along beam and cut down to 1.75” uniform thickness
-   Created taper to reduce weight using belt sander
-   Cut beam to 24” length making sure that each cross section had bamboo throughout.
-   Cut holes in sections to reduce weight???