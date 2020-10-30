import React, { useState } from "react";
import ReactDOM from 'react-dom';
import x from '../img/x.png';

export const Section = (props) => {

    const scanArray = () => {
        let outputArray = [];
        if(props.State === "All"){
            outputArray = props.List;
        }else if(props.State === "Active"){
            outputArray = props.List.filter(item => {
                return item.state === "undone";
            });
        } else{
            outputArray = props.List.filter(item => {
                return item.state !== "undone";
            })
        }
        return outputArray;
    }

    return (
        <section class="todo-app__main">
            <form onSubmit={props.handleSubmit} autocomplete="off">
                <input class="todo-app__input" placeholder="What needs to be done?" 
                    id="todo-input" value={props.todo.name || ""} onChange={props.handleChange} >
                </input>
            </form>
            <ul class="todo-app__list" id="todo-list">
                {scanArray().map(item => {
                    const isComplete = (item.state === "done")? true : false;
                    return (
                        <li key={item.id} class="todo-app__item">
                            <div class="todo-app__checkbox">
                                <input id={item.id} type="checkbox" checked={isComplete}>

                                </input>
                                <label for={item.id} onClick={() => props.setList(prev => {
                                    if(item.state !== "done"){
                                        props.setCount(prev => prev - 1);
                                    } else {
                                        props.setCount(prev => prev + 1);
                                    }
                                    return (
                                        prev.map(node => {
                                            if(node.id === item.id){
                                                return {name: item.name, 
                                                        id: item.id, 
                                                        state: (item.state === "done")? "undone" : "done"}
                                            } else {
                                                return node;
                                            }
                                        })
                                    )
                                })}>

                                </label>
                            </div>
                            <h1 class="todo-app__item-detail" style={{["textDecoration"]: (item.state === "done")? "line-through" : "",
                                                                        ["opacity"]: (item.state === "done")? 0.5 : 1}}>
                                {item.name}
                            </h1>
                            <img src={x} class="todo-app__item-x" onClick={() => {
                                props.handleDelete(item.id);
                                if(item.state !== "done"){
                                    props.setCount(prev => prev - 1);
                                }
                            }}>
                            </img>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

