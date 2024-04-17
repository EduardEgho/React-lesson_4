import React from 'react';
import style from "./Description.module.css"

function Description({info}) {
    return (
        <div className={style.container}>
            <h2 className={style.title}>Description</h2>
            <p className={style.text}>{info.title}</p>
            <p className={style.text}>{info.description}</p>
        </div>
    );
}

export default Description;