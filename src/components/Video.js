import React, { useState } from "react";
import styles from "./Video.module.css";
import {MdCircle, MdArrowForwardIos, MdArrowBackIos, MdAddCircle} from "react-icons/md"
import rtodo from "./image/react todo.png"
import nomad from "./image/nomad.png"
import jscode from "./image/jscode.png"
import inf from "./image/in.png"
import back from "./image/back.png"
import forward from "./image/forward.png"
import Navbar from "./Navbar";
import VideoInsert from "./VideoInsert";




let jsvideo = [[jscode, "https://youtu.be/PZIPsKgWJiw", 1, "생활코딩 자바스크립트"],[jscode, "https://youtu.be/PZIPsKgWJiw", 2, "생활코딩 자바스크립트"], [jscode, "https://youtu.be/PZIPsKgWJiw", 3, "생활코딩 자바스크립트"]];
let rvideo = [[nomad, "https://youtu.be/YNEdj1MNbok"],[rtodo, "https://youtu.be/51zgTcx3_9w"],[inf, "https://youtu.be/fgoMqmNKE18"]];



function Video() {
    /*function handleClick(e) {
        {jsvideo.map((jsv)=>
            (
                window.open(jsv[1])
            ))}
    }*/
    const [insertToggle, setInsertToggle] = useState(false);
    const onInsertToggle = () => {
        setInsertToggle(prev=> !prev);
    }
    const onInsertimg = text => {
        if(text === "") {
          return alert("동영상의 이미지와 링크를 입력해주세요.")
        } else {
          
        }
      };
    
    return(
        <div className={styles.wrap}>
            <Navbar />
            <div className={styles.jsblock}>
                <div className={styles.title}>
                    <h2 className={styles.h2_title}>JavaScript</h2>
                    <button onClick={onInsertToggle}><MdAddCircle color="#6B6FAE" size={45}/></button>
                    {insertToggle && <VideoInsert onInsertToggle={onInsertToggle} onInsertimg = {onInsertimg}/>}
                </div>
                <div className={styles.imgs}>
                    {/*<button><MdArrowBackIos size={70} /> </button>*/}
                    <img src={back} className={styles.icon}/>
                    <div className={styles.imgbox}>
                        {jsvideo.map((jsv) =>
                        (
                            <a href={jsv[1]} target="_blank" rel="noopener noreferrer">
                                <img src={jsv[0]} className={styles.jsimg} />
                            </a>
                        ))}
                    </div>
                    <img src={forward} className={styles.icon}/>
                </div>
                {/*<button><MdArrowForwardIos size={70} /> </button>*/}
            </div>
            <div className={styles.rblock}>
                <div className={styles.title}>
                    <h2 className={styles.h2_title}>ReactJs</h2>
                    <button onClick={onInsertToggle}><MdAddCircle color="#6B6FAE" size={45}/></button>
                </div>
                <div className={styles.imgs}>
                    <img src={back} className={styles.icon}/>
                    <div className={styles.imgbox}>
                        {/*<button><MdArrowBackIos size={70} /> </button>*/}
                        {rvideo.map((rv) =>
                        (
                            <div key={rv}>
                                <a href={rv[1]} target="_blank" rel="noopener noreferrer">
                                    <img src={rv[0]} className={styles.jsimg} />
                                </a>
                            </div>
                        ))}
                        {/*<button><MdArrowForwardIos size={70} /> </button>*/}
                    </div>
                    <img src={forward} className={styles.icon}/>

                </div>
            </div>
        </div>
    );
}

export default Video;
