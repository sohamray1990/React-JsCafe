import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

/**
 * Lesson 1: REACT UNDER THE HOOD
 * Below is a true representation of how JSX ultimately gets converted -
 * To React elements and RootElement
 * To render the application
 */

// Create REACT Elements to display
// const child1 = React.createElement("span", {}, "Hello World ")
// const child2 = React.createElement("span", {}, "from React")
// const div = React.createElement("p", {}, [child1, child2])
// console.log(div) // This showcases React element structure in the DOM

// Create Root
// const root = createRoot(document.getElementById("root"));

// Append to the React element to the root
// root.render(div);

// End of Lesson 1

/**
 * Lesson 2: JSX INTRODUCTION
 * Use Case 1 - Ternary operator
 * Use Case 2 - Conditional Rendering
 */

// Use Case 1 - Ternary operator
// const isTrue = true;
// const div = <div>{isTrue ? "Hello World" : "Goodbye World"}</div>;

// Use Case 2 - Conditional Rendering
// const isLoggedIn = true;
// const userName = "John Doe";
// const div = (
//   <div>
//     {isLoggedIn ? <h1>Welcome back, {userName}!</h1> : <h1>Please log in.</h1>}
//   </div>
// );

// Create Root
// const root = createRoot(document.getElementById("root"));

// Append to the React element to the root
// root.render(div);

// End of Lesson 2

/**
 * Lesson 3: COMPONENTS INTRODUCTION
 */

// const Greeting = () => {
//   return <h1>Hello, World!</h1>; // We can also add event listeners like: onClick={() => console.log("Hello World")}
// };

// Create Root
// const root = createRoot(document.getElementById("root"));

// Append to the React component to the root
// Do not pass "Greeting" OR "Greeting()", as Greeting is a component
// Instead, use it as a JSX element
// root.render(<Greeting/>); 

// End of Lesson 3

const root = createRoot(document.getElementById("root"));
root.render(<App/>); 

