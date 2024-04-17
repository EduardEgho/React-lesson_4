import React from 'react';
import Description from "../../components/description/Description";
import style from "./AboutPage.module.css"

const aboutObject = {
    title: "title 2",
    description: "description 2"
}

function AboutPage(props) {
    return (
        <div className={style.container}>
            <h2>About Page</h2>
            <Description info={aboutObject}/>
        </div>
    );
}

export default AboutPage;