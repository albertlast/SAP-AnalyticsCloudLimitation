# CSS

Cascading Style Sheets (CSS) the base technology in the web to design websites further information: [CSS](https://en.wikipedia.org/wiki/CSS)  
In contrast to the lumira, which is one of predecessor, the css limited by the sac framework.

# Limitation

## Unites

Only pixel(px) as unit is allowed and some cases %  
To work with this unites is in css world bad habit,  
common unites are (r)em, fr, vh etc.

## Limited properties

The possible properties are fixed defined from sac,  
which is very small subset from the original provided by the browser.  
For exp you can't change the color of hover effect of an element.
n

## Responsive design

In web design it's common to use display flex and display grid to make web responsive,  
the main feature is that this code run native in browser engine instead javascript approach.  
Because of the limitation of css this approache didn't exists in sac.

### Workaround responsive design

SAC provide function to do responsive sides,  
attention is here that they use javascript in the background -> higher cpu demand.

## No animation

The css animation function are not supported.

### Workaround no animation

Possibly the script engine could simulate the animation,  
since this than done in javascript the cpu usage is higher than a native approach.

## No gradiant support

The use of gradient in the web design is very common, they create a massive nice design with low effort,  
this effect/function is not supported by sac.
