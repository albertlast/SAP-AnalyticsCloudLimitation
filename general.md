# General

SAP-Analytics Cloud (SAC)

# Limitation

## SPA

SAC is solution based on the single page application (SPA) concept of js frontend development,  
one major drawback is the slow rendering time -> bad user experience.  
In case of SAC an empty sac application takes ~100mb js which get compress at transfer time to 10mb

## Only one Developer at the time

One SAC file can be changed only by one developer of the time,

### Workaround Only one Developer

Create many small sac files so that more developer in the same time can work

## Missing versioning

In the software development are tools like git essential to track the changes which are done between different versions.  
SAC didn't support versioning tools like git.  
This habit also exists in older solutions like Lumira.

### Workaround Missing versioning

Better Documentation,  
Create files with version numbers  
These approaches are bad practice in software development but better solutions didn't exists.

## Browser

Only Chrome Based Browser are official supported.

## Own script language

A script language which looks similar to javascript is used,  
which massive limited by the feature set.

For example, no async function support.

## Own css implementation

Similar to script language also the css is limited in this framework see [CSS](/css)
