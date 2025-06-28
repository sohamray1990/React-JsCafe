import React from "react";
import Button from "./Button";

/**
 * Lesson 4: COMPONENTS BASICS  
 * Use Case 1 - Props
 * Use Case 2 - Children
 * Use Case 3 - Exports, Imports
 */
const buttonChildren = <span>Click me to learn more!</span>;

const App = () => {
    const handleClickEvent = () => {
        console.log("Button clicked!");
    };
    return (
        <div>
            <h1>Welcome to JsCafe</h1>
            <Button label="Click Me" onClick={handleClickEvent}>
                {buttonChildren}
            </Button>
        </div>
    );
};

export default App;
