import React from "react";
import Navbar from "./Navbar";
import styles from "./Problems.module.css";

//변수, 연산자, 조건문과 반복문
//부족한 금액 계산하기 https://programmers.co.kr/learn/courses/30/lessons/82612
//약수의 개수와 덧셈 https://programmers.co.kr/learn/courses/30/lessons/77884
const ch01 = [
  {
    "id": 1,
    "title": "부족한 금액 계산하기",
    "url": "https://programmers.co.kr/learn/courses/30/lessons/82612"
  },

  {
    "id": 2,
    "title": "약수의 개수와 덧셈",
    "url": "https://programmers.co.kr/learn/courses/30/lessons/77884"
  }
]
//배열
//모의고사 https://programmers.co.kr/learn/courses/30/lessons/42840
//이상한 문자 만들기 https://programmers.co.kr/learn/courses/30/lessons/12930 
//신규 아이디 추천 https://programmers.co.kr/learn/courses/30/lessons/72410
const ch02 = [
  {
    "id": 3,
    "title": "모의고사",
    "url": "https://programmers.co.kr/learn/courses/30/lessons/42840"
  },

  {
    "id": 4,
    "title": "이상한 문자 만들기",
    "url": "https://programmers.co.kr/learn/courses/30/lessons/12930"
  },

  {
    "id": 5,
    "title": "신규 아이디 추천",
    "url": "https://programmers.co.kr/learn/courses/30/lessons/72410"
  }
]
//스킬 체크 https://programmers.co.kr/skill_checks
const ch03 = [
  {
    "id": 6,
    "title": "스킬 체크",
    "url": "https://programmers.co.kr/skill_checks"
  }
]
//제이쿼리
//클릭 이벤트 https://tyrionlife.tistory.com/231
const ch04 = [
  {
    "id": 7,
    "title": "마우스 이벤트 적용",
    "url": "https://tyrionlife.tistory.com/231"
  }
]

function Problems() {
  return (
    <>
      <Navbar />
      <div className={styles.title}>
       📖 프로그래머스 푼 문제들 {"&"} 참고 사이트 🔍
      </div>
      
      <ul className={styles.category}>
        <li className={styles.theme}>
          변수, 연산자, 조건문과 반복문
          <ul >
            {ch01.map((item) => ( 
                <a href={item.url} style={{ textDecoration: 'none', color: 'black' }}>
                  <li key={item.id} className={styles.items}>
                    {item.title}
                  </li>
                </a>  
            ))}
          </ul>
        </li>

        <li className={styles.theme}>
          배열
          <ul>
            {ch02.map((item) => (
              <a href={item.url} style={{ textDecoration: 'none', color: 'black' }}>
                <li key={item.id} className={styles.items}>
                  {item.title}
                </li>
              </a>
            ))}
          </ul>
        </li>

        <li className={styles.theme}>중간 점검
          <ul>
              {ch03.map((item) => (
                <a href={item.url} style={{ textDecoration: 'none', color: 'black' }}>
                  <li key={item.id} className={styles.items}>
                    {item.title}
                  </li>
                </a>
              ))}
          </ul>
        </li>

        <li className={styles.theme}>제이쿼리
          <ul>
            {ch04.map((item) => (
              <a href={item.url} style={{ textDecoration: 'none', color: 'black' }}>
                <li key={item.id} className={styles.items}>
                  {item.title}
                </li>
              </a>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}

export default Problems;