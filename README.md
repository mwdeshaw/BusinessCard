# [CardSite](https://mwdeshaw.github.io/BusinessCard/)

![card](https://github.com/mwdeshaw/BusinessCard/blob/master/bizCardGif.gif)

CardSite combines two things, a business card and a personal site. A unique take both business cards and sites, it is created in HTML/CSS. The project entailed abundant use of SVGs, CSS animations, and CSS grids to make it dynamic and responsive.

## Features
* #### CSS animations create a dynamic and visually impressive product; animations managed with a time-based control flow
* #### Working icons, allowing for calls, emails, and visits to Github or LinkedIn on click
* #### Near fully responsive
* #### Scannable QR code redirects the user to the launch url

## Requirements
* Node ```v10.13.1```

## Run CardSite locally:
1. Clone github repo

2. Install the dependencies and packages:
  ```
  npm install
  ```
 
 3. Activate the webpack:
 ```
 npm start
 ```

 4. Navigate to localhost:3000 in your browser
 
 ## About the Project
CardSite was designed and built over the course of two days. A wireframe was drawn out to visually plan the card and its layout before coding began. Once the project was underway, I utilized multiple CodePen tutorials for gudiance about SVGs and CSS animations. Responsivness was achieved through basing element size and position on the window itself rather than specific pixel values.

## The Technology
CardSite is created in plain HTML/CSS. It features CSS grids, animations, SVGs, and ```mailto:``` and ```tel:``` tags in links.

### The Structure
CardSite's face was structured using a CSS grid. The code of which is shown here:
```CSS
.card-inline {
    border-radius: 15px;
    background: #ffffff;
    width: 97%;
    height: 95%;
    z-index: 3;
    display: grid;
    grid-template: "a b";
    grid-template-columns: 1fr 1fr;
}
```
Through this CSS, the two-column structure of the face was created, allowing for efficient organization.

### The Nodes
As for the circuits/nodes behind the avatar image, they are SVGs and the code of which is show here:
```HTML
  <svg class="circuits" x="0px" y="0px" viewBox="10 30 40 240" >
    <g id="circuit-left" transform="translate(92.128906, 524.812500)">
      <path class="circ-1" d="M-51.2-437.1c0,2.3,1.8,4.1,4.1,4.1s4.1-1.8,4.1-4.1c0-1.8-1.2-3.3-2.8-3.9v-24.2l-13.8-13.8V-502 c1.6-0.6,2.8-2.1,2.8-3.9c0-2.3-1.8-4.1-4.1-4.1s-4.1,1.8-4.1,4.1c0,1.8,1.2,3.3,2.8,3.9v24.2l13.8,13.8v23.1 C-50.1-440.4-51.2-438.9-51.2-437.1" />
    </g>
  </svg>
```
To create these animated SVG nodes, I referenced [this](https://codepen.io/lentilz/pen/NyBEBw) tutorial.

### A Few Special Animations
I used numerous animations for the project, but I will explain one of them, the animation for the personal info section. The animation is created from the combination of two different custom keyframe animations:
```CSS
@keyframes shrinkjump {
	10%, 35% {
		transform: scale(2, .2) translate(0, 0);
	}
	45%, 50% {
		transform: scale(1) translate(0, -150px);
	}
	80% {
		transform: scale(1) translate(0, 0);
	}
}

@keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
```
The control flow of the animations, amongst themselves and for the entire page as a whole, is accomplished through animation delays. For the project, I set up a system of animations and delays, which generally combine the fade-in effect with specific animations to create elements that materialze out of nowhere and then animate. A sample of the code that allows for these effects is shown here:
```CSS
.info {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    list-style: none;
    color: black;
    width: 100%;
    z-index: 5;
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    flex-direction: column;
    animation: fadein 1s ease-out, shrinkjump 1s;
    animation-delay: 9s;
    animation-fill-mode: both;
}
```
The combination of ```animation-delay```, ```animation-fill-mode``` and the two named animations in ```animation``` allow for simultaneous animations executing at the desired time.

### Extras
What use is a business card if one cannot use it to contact the issuer? CardSite takes this feature to new levels, making contact easier than ever before. The HTML is shown here:
```HTML
<ul class="info">
	<li id="phone"><a href="tel:973-769-9305"><i class="fas fa-mobile-alt"></i></a><a href="tel:973-769-9305">(973) 769-9305</a></li> 
	<li id="email"><a href="mailto:mwdeshaw@gmail.com"><i class="fas fa-envelope"></i></a><a href="mailto:mwdeshaw@gmail.com">mwdeshaw@gmail.com</a></li>
</ul>
```
The ```mailto:``` tag opens up an email addressed to the issuer in the user's default mail app on click. As for the ```tel:``` tag, clicking it allows the user to instantly call the number shown. No longer do users have to hand-copy information off a business card to actually utilize it.

 ## Future Directions
* #### Improve mobile responsivity, namely in the vertical view
* #### Add a back side, so the card could be flipped over, which would feature other content, likely projects
* #### Find API to integrate it with Apple Wallet

