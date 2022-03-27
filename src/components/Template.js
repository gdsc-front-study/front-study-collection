import React from 'react';
import './Template.css'
//template 안에있는 컴포넌트 todolist를 children으로 받아줌
const Template = ({children}) => {
    return (
        <div className="Template">
            <div className="wrapper">
                <div className="title">TodoList</div>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Template;