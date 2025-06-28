import React from "react";
import Button from "./Button";
import Text from "./Text";

/**
 * Lesson 4: COMPONENTS BASICS  
 * Use Case 1 - Props
 * Use Case 2 - Children
 * Use Case 3 - Exports, Imports
 * Use Case 4 - Keys in Children
 */
const buttonChildren = <span>Click me to learn more!</span>;

const App = () => {

    // Create an array of objects to demonstrate the use of keys in Text component
    const textItems = [
        { id: 1, content: "Learn React Basics" },
        { id: 2, content: "Understand Components" },
        { id: 3, content: "Master Props and State" }
    ];

    const handleClickEvent = () => {
        console.log("Button clicked!");
    };

    return (
        <div>
            <h1>Welcome User</h1>
            <Text
                children={textItems.map(item => (
                    <p key={item.id}>{item.content}</p>
                ))}
            />
            <Button label="Click Me" onClick={handleClickEvent}>
                {buttonChildren}
            </Button>
        </div>
    );
};

export default App;
