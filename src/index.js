import React from "react";
import { createRoot } from 'react-dom/client';

// Create elements to display
const child1 = React.createElement("span", {}, "Hello World ")
const child2 = React.createElement("span", {}, "from React")
const div = React.createElement("p", {}, [child1, child2])

// Create Root
const root = createRoot(document.getElementById("root"))

// Append to the React element to the root 
root.render(div)