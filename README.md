# Artbot

A way to easily generate random SVG graphics that are either static or animated.  

## Technology

This project was created entirely in React, with some vanilla Javascript used for helper methods.  The initial iteration was created in [jQuery](https://github.com/boveus/art_bot), but the react version is easier to maintain.  I used inline [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) to generate the graphics.    

## Project Status

This project is currently under construction.  It is in a working state as a proof of concept, but I would like to eventually add a backend to this project to allow users to save art they have generated.  Additionally, it would be good to allow users to undo art that was recently added, so that is another feature that is currently in the roadmap.

## Project Screen Shot:

<img width="1280" alt="screen shot 2018-01-07 at 2 53 55 pm" src="https://user-images.githubusercontent.com/20469703/34654700-b97546aa-f3bc-11e7-8c91-cecc6a71115c.png">

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Additionally, you will need to clone down the 'development' branch to run a local version of the application using the following command:

`git clone -b development git@github.com:boveus/artbot.git`

Installation:

`npm install`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000`  

## Contribution Guidelines / Roadmap

To contribute, simply clone down the repo, make some changes, and submit a PR.  There is no need to ask permission or anything.  Some of the ideas I would like to implement in the future include the following:

### Implement a way to save the static SVG to the local file system of a user
Ideally, this would be a new button component that allows a user to click on it and save the SVG as a .png file.  I would love there to be some way for the animation to be captured as a .gif, but I don't think that is feasible.  Here are a few resources that may be helpful in implementing this feature.

`
https://stackoverflow.com/questions/27230293/how-to-convert-svg-to-png-using-html5-canvas-javascript-jquery-and-save-on-serve

https://github.com/sampumon/SVG.toDataURL

https://stackoverflow.com/questions/28226677/save-inline-svg-as-jpeg-png-svg
`

### Implement a backend to allow users to submit art and have a gallery
I would like to implement a backend that allows users to submit SVG art to a database or persistant data storage somewhere.  This would be some sort of database that allows the use of basic mahine learning techniques to modify the randomness and allow the front end to have different criteria it has enabled based on the art that has been submitted.  

The first step of this would be a simple submission button and a gallery with the entire SVG saved in a small thumbnail.  For performance purposes, I think that the animations should be disabled on the thumbnails, but the users can click the art piece to see it on the full screen.  Users should also be able to submit a name with the art work and upvote/downvote other people's artwork to influence the bot's machine learning.
