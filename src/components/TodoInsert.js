import React from "react";
import { MdAddCircle } from "react-icons/md";
import "./TodoInsert.css";
import { useState } from "react";

const TodoInsert= ({onInsertToggle, onInsertTodo}) => {
    const [value, setValue] = useState("");
    const onChange = (e) => {
        setValue(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        onInsertTodo(value);
        setValue("");
        onInsertToggle();
    }
    return(
    <div>
        <div className="background" onClick={onInsertToggle}></div>
        <form onSubmit={onSubmit} className="tdform">
            <input placeholder="please type" value={value} onChange={onChange} className="tdinput"></input>
            <button type="submit" className="tdbutton">
                <MdAddCircle/>
            </button>
        </form>
    </div>
    );
}
export default TodoInsert;