import React from "react";

/**
 * Button component that renders a button element.
 *
 * @param {Object} props - The props for the Button component.
 * @param {string} props.label - The text to display on the button. This is not considered a child element.
 * @param {function} props.onClick - The function to call when the button is clicked.
 * @param {ReactNode} [props.children] - Optional. Any additional elements or text to render inside the button. 
 * This allows for more complex button content, such as icons or additional text.
 *
 * @returns {JSX.Element} The rendered button element.
 */

const Button = ({ label, onClick, children }) => {
    return (
        <button name={label} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;