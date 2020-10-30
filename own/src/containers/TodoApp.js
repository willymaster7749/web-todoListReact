import React, { Component, useState } from "react";
import { Header } from "../components/Header";
import { Section } from "../components/Section";
import { Footer } from "../components/Footer";


export const TodoApp = () => {
    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState({});
    const [List, setList] = useState([]);
    const [State, setState] = useState("All");

    const handleChange = ({target}) => {
        // alert(List);    
        setTodo({id: Date.now(), name: target.value, state: "undone"});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!todo.name){
            // alert(insert.name);
            return;
        }
        setList(prev => [...prev, todo]);
        setCount(prev => prev + 1);
        setTodo({});
    }

    const handleDelete = (deleteId) => {
        setList(prev => prev.filter(item => {
            return item.id !== deleteId;
        }));
    }

    return (
        <>  
            <Header text="todos" /> 
            <Section handleSubmit={handleSubmit} handleChange={handleChange} todo={todo}
                List={List} State={State} setList={setList} handleDelete={handleDelete} setCount={setCount}/>
            <Footer count={count} setCount={setCount} setState={setState} setList={setList} List={List} handleDelete={handleDelete}/>      
        </>
    );
}

