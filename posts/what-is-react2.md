---
title: 'What Is React Part 2'
date: 'April 8 2022'
excerpt: 'A simple example of React with three components'
cover_video: 'https://www.youtube.com/embed/N_M8m4Yr7vc'
cover_image: '/images/posts/brokenstones.jpg'
category: 'React'
author: 'Laurence Turpin'
author_image: 'https://live.staticflickr.com/65535/51970931534_c1f528ebf6_m.jpg'
---

# Youtube component

Go to [codesandbox.io](https://codesandbox.io/) and inside the src folder create a components folder. Inside the components folder create a file called Youtube.js Your file structure should now look like this

    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── Counter.js
    │   │   └── Youtube.js
    │   ├── App.js
    │   ├── index.js
    │   └── style.css
    └── package.json

Inside the Youtube.js file insert the following code.

# React

~~~js
export default function YouTube() {
  return (
    <h1>youtube</h1>
  );
}
~~~

Inside the App.js file import the YouTube component and change the App function to the following.

# React

~~~js
import "./styles.css";
import YouTube from "./YouTube";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <YouTube />
    </div>
  );
}
~~~

# CSS

~~~css
* {
  box-sizing: border-box;
  margin: 0;
}

h1 {
  color: #707070;
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
~~~

You should see just the Counter and heading with the word youtube as shown below.

![youtube](../images/youtube-heading.png)

Now goto your either your favourite youtube video or you can use mine if you want. Click the Share link then click the embed icon. You should see an iframe highlight this code and press ctrl+c to copy it on Windows or Linux computers or cmd+c on apple computers this will copy the code to the clipboard. Now go back to codesandbox.io and in the YouTube component highlight the <h1>youtube</h1> and press ctrl-v or cmd-v on apple mac. Your YouTube component should now have the iframe as the return value. You should now have the following code.

~~~js
export default function YouTube() {
  return (
    <div className="youtube">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/MwpMEbgC7DA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
   );
}
~~~

You should see your chosen youtube video in the browser window. However there are a couple of problems the console
icon is pink indicating errors or warnings. Click on that to see them. There are two warnings in the iframe properties.

![warnings](/images/warning.png)

The first is frameborder needs to be frameBorder and allowfullscreen should be allowFullScreen. Correct them so your YouTube component looks like the following.

~~~js
export default function YouTube() {
  return (
    <div className="youtube">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/MwpMEbgC7DA"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
   );
}
~~~

# Add the following CSS to the styles.css

~~~css
.youtube {
  width: 70%;
  margin: 0 auto;
}
~~~

## Another React component

Inside the components folder create another file  called ColorViewer.js Put the following code inside: 

~~~js
import { useState } from "react";

export default function ColorViewer() {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div className="container">
      <h1>Color Viewer</h1>
      <div
        className="color-block"
        style={{ backgroundColor: `${selectedColor}` }}
      ></div>
      <input
        type="text"
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
        placeholder="Enter a color"
      />
    </div>
  );
}
~~~

The above component has a state variable called selectColor which is changed by the setSelectedColor. There is an html input element that uses the onChange event so that when ever a keystroke is entered the setSelectColor function takes keystrokes that have been entered in the input element uses them to update the selectedColor state. We get the color in the div by letting the div element make use of the selectedColor state variable. This happens in the following element:

~~~html
  <div
    className="color-block"
    <!-- The background-color is set by selectedColor -->
    style={{ backgroundColor: `${selectedColor}` }}
  ></div>
~~~

Notice that to set style in jsx you need two sets of curly brackets, the first set of curly brackets tells us we are using javascript. The second set is to create a javascript object. Inside the javascript object the background-color is set using String Interpolation the `${selectedColor}` this means set backgroundColor to the name of the color you get from the string interpolation.

You can now import the ColorViewer component into the App component as shown below.


~~~js
import "./styles.css";
import Counter from "./components/Counter";
import ColorViewer from "./components/ColorViewer";
import Youtube from "./components/Youtube";

export default function App() {
  return (
    <>
      <Counter />
      <Youtube />
      <ColorViewer />
    </>
  );
}
~~~

The finished result can be seen here [3 components here](https://codesandbox.io/s/three-components-7rnsvp?file=/src/styles.css:330-374)