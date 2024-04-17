import React from 'react';
import Description from "../../components/description/Description";
import style from "./MainPages.module.css"

console.log(style)

const mainObject = {
    title: "title",
    description: "description"
}

function MainPages() {
    return (
        <div className={style.container}>
           <h2>Main Pages</h2>
            <Description info={mainObject}/>
        </div>
    );
}

export default MainPages;