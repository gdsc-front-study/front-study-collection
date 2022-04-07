import React, { useState } from "react";
import Navbar from "./Navbar";
import styles from "./Problems.module.css";

//변수, 연산자, 조건문과 반복문
//부족한 금액 계산하기 https://programmers.co.kr/learn/courses/30/lessons/82612
//약수의 개수와 덧셈 https://programmers.co.kr/learn/courses/30/lessons/77884
const ch01 = [
  {
    id: 0,
    title: "부족한 금액 계산하기",
    url: "https://programmers.co.kr/learn/courses/30/lessons/82612"
    
  },
  {
    id: 1,
    title: "약수의 개수와 덧셈",
    url: "https://programmers.co.kr/learn/courses/30/lessons/77884"
  }
]
//배열
//모의고사 https://programmers.co.kr/learn/courses/30/lessons/42840
//이상한 문자 만들기 https://programmers.co.kr/learn/courses/30/lessons/12930 
//신규 아이디 추천 https://programmers.co.kr/learn/courses/30/lessons/72410
const ch02 = [
  {
    "id": 2,
    "title": "모의고사",
    "url": "https://programmers.co.kr/learn/courses/30/lessons/42840"
  },

  {
    "id": 3,
    "title": "이상한 문자 만들기",
    "url": "https://programmers.co.kr/learn/courses/30/lessons/12930"
  },

  {
    "id": 4,
    "title": "신규 아이디 추천",
    "url": "https://programmers.co.kr/learn/courses/30/lessons/72410"
  }
]
//스킬 체크 https://programmers.co.kr/skill_checks
const ch03 = [
  {
    "id": 5,
    "title": "스킬 체크",
    "url": "https://programmers.co.kr/skill_checks"
  }
]
//제이쿼리
//클릭 이벤트 https://tyrionlife.tistory.com/231
const ch04 = [
  {
    "id": 6,
    "title": "마우스 이벤트 적용",
    "url": "https://tyrionlife.tistory.com/231"
  }
]

const arr = [ ['변수, 연산자, 조건문과 반복문', ch01],
  ['배열', ch02], ['중간 점검', ch03], ['제이쿼리', ch04]];

function Problems() { 

  const [isClicked, setIsClicked] = useState(Array(7).fill(false)); // ch01, ch02, ch03, ch04를  따로 다루려면 어쩌지 
                                                                    // 해결 -> id 값 다르게 주기 && 배열 7개 만들어두고 id 값에 따라서 조정하기

  function handleClick(idx) {
    setIsClicked(
      isClicked.map((element, index) => {
        return index === idx ? !element : element;
      })
    );
  }

  return (
    <>
      <Navbar />
      <div className={styles.title}>
       📖 프로그래머스 푼 문제들 {"&"} 참고 사이트 🔍
      </div>
      
      <ul className={styles.category}>
      {arr.map((item) => (
        <li className={styles.theme}>
        {item[0]}
       <ul className={styles.element}>
         {item[1].map((item) => (
           <> 
             <a href={item.url} style={{ textDecoration: 'none', color: 'black' }}>
               <li key={item.id} className={styles.items}>
                 {item.title} 
               </li>
             </a>  
             <button className={styles.doneBtn} onClick={() => handleClick(item.id)}>{isClicked[item.id] ? '해결' : '미해결'}</button>
           </>
         ))}
       </ul>
        </li>
      ))}
      </ul>
    </>
  );
}

export default Problems;