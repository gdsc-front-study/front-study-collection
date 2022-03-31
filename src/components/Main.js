import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './Main.css';
import image1 from "../images/minju-image.png";
import image2 from "../images/goeun-image.png";
import image3 from "../images/cherry-image.jpg";
import Navbar from "./Navbar";
const main = ({children}) => {
    function handleClick1(e) {
        window.location.href="http://parkminju20211126.github.io/Movie_recommendation"
    }
    function handleClick2(e) {
        window.location.href="http://parkminju20211126.github.io/Todolist_pages"
    } 
    function handleClick3(e) {
        window.location.href="https://goeun208.github.io/my-movie-web"
    }
    function handleClick4(e) {
        window.location.href="https://goeun208.github.io/to-do-list"
    }
    return(
        <div>
        <Navbar />
        <div className="wrapper">
            <div className="profile">
                <img src={image1} alt="박민주" className="image1" />
                <p>박민주</p>
                <button onClick={handleClick1}>영화사이트</button>
                <button onClick={handleClick2}>투두리스트</button> 

            </div>
            <div className="profile">
                <img src={image2} alt="박고은" className="image1" />
                <p>박고은</p>
                <button onClick={handleClick3}>영화사이트</button>
                <button onClick={handleClick4}>투두리스트</button>
            </div>
            <div className="profile">
                <img src={image3} alt="김채리" className="image1" />
                <p>김채리</p>
                <button>영화사이트</button>
                <button>투두리스트</button>
            </div>
                
        </div>
        <div>{children}</div>
        </div>
        
    );
};

export default main;