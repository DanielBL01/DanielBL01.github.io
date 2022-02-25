import React from "react";
import Typewriter from "typewriter-effect";
import resume from "../images/resume.jpg";

function Resume() {
    return (
        <div className="container">
            <h1 className="page-header">
                <Typewriter
                    onInit={(typewriter)=> {
                    typewriter
                    .typeString("My Resume.")
                    .start();
                    }}
                /> 
            </h1>
            <p>
                My most up-to-date resume. 📑
            </p>
            <hr />
            <p>
                Here is a direct link to my <a href="/resume.pdf" target="_blank">resume</a>. Feel free to take a look!
            </p>
            <img src={resume} alt="Daniel Lee's most up-to-date resume" />
        </div>
    )
}

export default Resume;