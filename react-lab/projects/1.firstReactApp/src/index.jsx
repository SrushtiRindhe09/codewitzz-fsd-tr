import React from "react";
import ReactDOM from "react-dom/client";

/*1. Embedding Expression in jSX*/

function Hello(){
    const name="Srushti Rindhe!";
    return <h1>Hello, {name}</h1>;
}

/*2.Javasript in JSX*/

function add(x,y){
    return x+y;
}
function Hello()
{
    return <h1>{add(10,5)} </h1>
}

/*3. Dynamic Attributes*/
function Hello(){const link="https://www.google.com";
    return <a href={link} target="_top">Google</a>;
} 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hello/>);