/* 
Flow for displaying HTML element through React JS:

1. React JSX 
2. The JSX gets converted into React Element (by React.createElement) 
3. This returns a React object which contains all necessary details of the element (can be viewed in console)
4. When we pass the object to the root, it eventually gets rendered as HTML element
*/

// Creating React elements
// Children
const child1 = React.createElement("span", {}, "Hello World ")
const child2 = React.createElement("span", {}, "from React")

// Parent
const div = React.createElement("p", {}, [child1, child2])

// Create Root
const root = ReactDOM.createRoot(document.getElementById("root-react-cdn"))

// Append to the React element to the root
root.render(div)