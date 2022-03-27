import React from "react";
import './Main.css';
import image1 from "../images/minju-image.png";
import image2 from "../images/goeun-image.png";
import image3 from "../images/cherry-image.jpg";
const main = ({children}) => {
    return(
        <div>
        <div className="wrapper">
            <div className="profile">
                <img src={image1} alt="로고" className={image1} />
                <button>개인페이지</button>
            </div>
            <div className="profile">
                <img src={image2} alt="로고" className={image2} />
                <button>개인페이지</button>
            </div>
            <div className="profile">
                <img src={image3} alt="로고" className={image3} />
                <button>개인페이지</button>
            </div>
            <div>{children}</div>    
        </div>
         
        </div>
        
    );
};

export default main;