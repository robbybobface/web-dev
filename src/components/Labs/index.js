import React from "react";
import { Link } from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles/styles";
import ConditionalOutput from "./ConditionalOutput/index.js";
import TodoList from "./Todo/TodoList.js";

const Index = () => {
    return (
        <>
            <h1>Labs</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter">
                Tuiter
            </Link>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <h1>TODO List</h1>
            <TodoList/>

        </>

    );
};

export default Index;
