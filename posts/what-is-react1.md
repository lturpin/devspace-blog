---
title: 'What Is React Part 1?'
date: 'March 30 2022'
excerpt: 'An explanation of what React is'
cover_video: 'https://www.youtube.com/embed/MwpMEbgC7DA'
cover_image: '/images/posts/anotherlove.jpg'
category: 'React'
author: 'Laurence Turpin'
author_image: 'https://live.staticflickr.com/65535/51970931534_c1f528ebf6_m.jpg'
---

# Introduction

This is the first of a number of videos that teach you React. It is assumed you have basic understanding of html,
css, javascript and node. We will not use node a lot but you need to at least understand npm and how the package.json file is used. The course is intended to teach you from a react beginner up to a proficient React programmer.

If you have not used html, javascript, npm, and package.json before here are some links to courses online that can teach you these things: 

[CSS Crash Course](https://www.youtube.com/watch?v=yfoY53QXEnI)

[HTML and CSS Tutorial for 2021](https://www.youtube.com/watch?v=D-h8L5hgW-w)

[HTML Tutorial for Beginners](https://www.youtube.com/watch?v=qz0aGYrrlhU)

[JavaScript Tutorial for Beginners](https://www.youtube.com/watch?v=W6NZfCO5SIk)

[JavaScript Crash Course For Beginners](https://www.youtube.com/watch?v=hdI2bqOjy3c)

[Node.js Tutorial For Absolute Beginners](https://www.youtube.com/watch?v=U8XF6AFGqlc)

[Introduction to NPM and the Package.json](https://www.youtube.com/watch?v=gKyRqFgJt6k)

[What is Package.json](https://www.youtube.com/watch?v=4xR2nV7MGfE)



# What is React

React is a Javascript library for building user interfaces. React uses components as it's core building block. Each webpage on the website will have a number of these components. In the diagram below you can see the App Component is the parent to the YouTube Component, Counter Component and Color Picker Component which are the children of the App Component.

![React Components](../images/react-components.png)

The rendering of these components is controlled by the state of the component. When the state changes the component renders the change automatically. This makes things a lot easier than just using normal javascript where you have force the the screen to be rendered when something changes. To demonstrate theis first consider the following code which shows a counter written in javascript and then furthur on is the same thing written using React.

You cans see the running example of this javascript counter here [counter](https://jsfiddle.net/LaurenceTurpin/1Lwxr62p/5/)

# HTML

```html
<h1 class="display">0</h1>
<button class="minus">-</button>
<button class="plus">+</button>
```

# CSS

```css
* {
  box-sizing: border-box;
  margin: 0;
}

.minus,
.plus {
  padding: 0.8em 1.4em;
  background-color: blue;
  color: white;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bolder;
  border-radius: 4px;
  margin: 1em;
  border: none;
}
```

# Javascript

```js
let displayElem = document.querySelector('.display');
let minusElem = document.querySelector('.minus');
let plusElem = document.querySelector('.plus');

let count = 0;

updateDisplay();

plusElem.addEventListener('click', () => {
  count++;
  updateDisplay();
});

minusElem.addEventListener('click', () => {
  count--;
  updateDisplay();
});

// This function is called in three places to update the count
function updateDisplay() {
  displayElem.innerHTML = count; // This line does the updating
}
```

The function updateDisplay() is called three times in the above code. Below is the react equivalent.

# React Counter

A running example of this code can be found here [React Counter](https://codesandbox.io/s/counter-0dplf5?file=/src/App.js)

# React code

```js
import { useState } from 'react';

export default function Counter() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <button className="btn" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <p className="count-text">Count: {count}</p>
      <button className="btn" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}
```

# CSS

```css
* {
  box-sizing: border-box;
  margin: 0;
}

.App {
  font-family: sans-serif;
  text-align: center;
}

.container {
  height: 300px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btn {
  padding: 0.8em 1.4em;
  background-color: blue;
  color: white;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bolder;
  border-radius: 4px;
  margin: 1em;
  border: none;
}

.count-text {
  color: blue;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 18px;
  font-weight: bolder;
}
```

In the React code above useState is imported from React.
To understand useState you have to understand React hooks.
React hooks let you use state and other React features.
The useState hook is a function which receives an initialization variable as a parameter. In the case of the above code it is "0" and this gets used set the count to zero when the Counter component is first loaded. The useState function returns an array with the count variable and setCount function. When the increment button is pressed
the onClick property runs an anonymous function which runs the setCount function which increments the count variable by one. The decrement button works almost the same except for the setCount function decrements the count variable when decrement button is pressed. The count value is displayed inside the p tag.

React only updates and renders the components that are affected by state change. This rendering of the components is done automatically. Note that the return value of the Counter is html mixed with javascript. This is called JSX.
The count variable in the JSX code is contained in curly brackets. These curly brackets tell react to treat the count variable as javascript.

## Getting started with React

The easiest way to get started is to use [codesandbox.io](https://codesandbox.io/) Create an account and select a blank react project.

You should see the following initial file structure:

    ├── public/
    │   └── index.html
    ├── src/
    │   ├── App.js
    │   ├── index.js
    │   └── style.css
    └── package.json

The package.json file has three dependency npm modules, they are react, react-dom, and react-script. The react module is react itself. The react-dom module provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside the React model. The only method we have to consider for the moment is the createRoot method which is used in the code below. The react-scripts are used for starting, building, and running react on your local computer. Since codesandbox.io runs our react program automatically we don't have to worry about this for now.

Inside the public folder is the index.html this is the file that holds the react app. Inside the body tag is the following:

```html
<div id="root"></div>
```

This one line is a container that holds the react app we wish to create. The id="root" gives us a reference called 'root' which we can use to pass our app to this single page.

The src folder contains the source files that create the app. This folder is the main folder that we will use when we are creating our app.

The index.js file has the following code:

```js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

As you can see above the App component is embeded in the StrictMode component. The StrictMode component is a tool for highlighting potential problems in the an application.
StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants. The App component acts as a container for all the other components. This kind of setup is called a single page app. It's a single page app because you have one page called index.html, which contains the App component and all the other components are contained in that App component.

The rootElement is a reference to the div container with the id equal to root. The rootElement is a parameter in the createRoot function it returns the root which can be used to render the app.

The App.js file holds the App component it has the following code.

```js
import './styles.css';

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
```

This App.js file exports a default App function and returns html code called JSX. This this case it is just a div with a class of "App". Inside the div is a h1 and h2 element.

The output is the following:

![Hello CodeSandbox](../images/hellocodesandbox.png)
