import React from "react";
import ReactDOM from "react-dom";

export const Footer = (props) => {
    return (
        <footer class="todo-app__footer" id="todo-footer">
            <div class="todo-app__total">
                <span id="item_count">{props.count}</span> left
            </div>
            <ul class="todo-app__view-buttons">
                <button id="all_button" onClick={() => props.setState("All")} ><li>All</li></button>
                <button id="active_button" onClick={() => props.setState("Active")} ><li>Active</li></button>
                <button id="completed_button" onClick={() => props.setState("Completed")} ><li>Completed</li></button>
            </ul>
            <div class="todo-app__clean">
                <button id="clear_button" onClick={() => {
                    const newArray = props.List.filter(item => {
                        return item.state !== "done";
                    })
                    props.setList(newArray);
                }}>clear completed</button>
            </div>
        </footer>
    );
}