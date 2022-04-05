import { MdAddCircle } from "react-icons/md";
import { useState } from "react";
import "./VideoInsert.css";

const VideoInsert= ({onInsertToggle, onInsertImg}) => {
    const [value, setValue] = useState("");
    const onChange = (e) => {
        setValue(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        onInsertImg(value);
        setValue("");
        onInsertToggle();
    }
    return(
    <div>
        <div className="background" onClick={onInsertToggle}></div>
        <form onSubmit={onSubmit} className="form">
            <input type="file" className="fileinput"></input>
            <input placeholder="동영상 링크" value={value} onChange={onChange} className="linkinput"></input>
            <button type="submit" className="btn">
                <MdAddCircle color="#6B6FAE"/>
            </button>
        </form>
    </div>
    );
}
export default VideoInsert;