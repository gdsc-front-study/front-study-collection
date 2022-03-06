import React from "react";
import styles from "./Video.module.css";
import {MdCircle, MdArrowForwardIos, MdArrowBackIos} from "react-icons/md"
import rtodo from "./image/react todo.png"
import nomad from "./image/nomad.png"
import jscode from "./image/jscode.png"
import inf from "./image/in.png"
import back from "./image/back.png"
import forward from "./image/forward.png"

let jsvideo = [[jscode, "https://youtu.be/PZIPsKgWJiw"],[jscode, "https://youtu.be/PZIPsKgWJiw"], [jscode, "https://youtu.be/PZIPsKgWJiw"]];
let rvideo = [[nomad, "https://youtu.be/YNEdj1MNbok"],[rtodo, "https://youtu.be/51zgTcx3_9w"],[inf, "https://youtu.be/fgoMqmNKE18"]];

function Video() {
    return(
        <div className={styles.wrap}>
            <div className={styles.head}>GDSC Frotend study</div>
            <div className={styles.jsblock}>
                <h2><MdCircle color="#6B6FAE" size={25}/> JavaScript</h2>
                <div className={styles.imgbox}>
                    <img src={back}/>
                    {jsvideo.map((item) =>
                    (
                        <div key={item}>
                            <a href={item[1]} target="_blank">
                                <img src={item[0]} />
                            </a>
                        </div>
                    ))}
                    <img src={forward}/>
                </div>
            </div>
            <div className={styles.rblock}>
                <h2><MdCircle color="#6B6FAE" size={25}/> ReactJS</h2>
                <div className={styles.imgbox}>
                <button><MdArrowBackIos size={70} /> </button>
                    {rvideo.map((item) =>
                    (
                        <div>
                            <a href={item[1]} target="_blank">
                                <img src={item[0]} />
                            </a>
                        </div>
                    ))}
                    <button><MdArrowForwardIos size={70} /> </button>
                </div>
            </div>
        </div>
    );
}

export default Video;