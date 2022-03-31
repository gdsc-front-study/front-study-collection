import React from "react";
import styles from "./Video.module.css";
import {MdCircle, MdArrowForwardIos, MdArrowBackIos} from "react-icons/md"
import rtodo from "./image/react todo.png"
import nomad from "./image/nomad.png"
import jscode from "./image/jscode.png"
import inf from "./image/in.png"
import back from "./image/back.png"
import forward from "./image/forward.png"
import Navbar from "./Navbar";




let jsvideo = [[jscode, "https://youtu.be/PZIPsKgWJiw", 1],[jscode, "https://youtu.be/PZIPsKgWJiw", 2], [jscode, "https://youtu.be/PZIPsKgWJiw", 3]];
let rvideo = [[nomad, "https://youtu.be/YNEdj1MNbok"],[rtodo, "https://youtu.be/51zgTcx3_9w"],[inf, "https://youtu.be/fgoMqmNKE18"]];



function Video() {
    return(
        <div className={styles.wrap}>
            <Navbar />
            <div className={styles.jsblock}>
                <h2 className={styles.h2_title}><MdCircle color="#6B6FAE" size={25}/> JavaScript</h2>

                <div className={styles.imgs}>
                    {/*<button><MdArrowBackIos size={70} /> </button>*/}
                    <img src={back} className={styles.icon}/>
                    <div className={styles.imgbox}>
                        {jsvideo.map((jsv) =>
                        (
                            <div key={jsv[2]}>
                                <a href={jsv[1]} target="_blank" rel="noopener noreferrer">
                                    <img src={jsv[0]} className={styles.jsimg} />
                                </a>
                            </div>
                        ))}
                    </div>
                    <img src={forward} className={styles.icon}/>
                </div>
                {/*<button><MdArrowForwardIos size={70} /> </button>*/}
            </div>
            <div className={styles.rblock}>
                <h2 className={styles.h2_title}><MdCircle color="#6B6FAE" size={25} /> ReactJS</h2>
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