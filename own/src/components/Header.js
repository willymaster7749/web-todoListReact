import React from "react";

export const Header = (props) => {
    //    const {text} = props // expected to be { text: "" }
    return (
        <header className="todo-app__header">
            <h1 className="todo-app__title">{props.text}</h1>
        </header>
    );
};
