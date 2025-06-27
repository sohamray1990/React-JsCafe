import React from "react";
import { createRoot } from 'react-dom/client';

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

/**
 * Lesson 2: JSX INTRODUCTION
 * Use Case 1 - Ternary operator
 * Use Case 2 - Conditional Rendering 
 */

// JSX Below
const div = <div>Hello Again!</div>

// Create Root
const root = createRoot(document.getElementById("root"))

// Append to the React element to the root 
root.render(div)