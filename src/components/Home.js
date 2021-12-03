import React from "react";
import { MdMailOutline } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr"; 
import Typewriter from "typewriter-effect";

function Home() {
    return (
        <div className="container">
            <h1 className="page-header">
                <Typewriter
                    onInit={(typewriter)=> {
                    typewriter
                    .typeString("Hello World.")
                    .start();
                    }}
                /> 
            </h1>
            <p>
                My name is Daniel Lee and I am a 3rd Year Mechatronics Engineering student at the 
                <a href="https://uwaterloo.ca/"> University of Waterloo</a>.
            </p>
            <p>
                Previously a Software Engineering Intern at <a href="https://lumenix.com/">Lumenix</a>, 
                I was a key member in building a platform for AIMS (Artificially Intelligent 
                Monitoring System) which helps prevent the spread of hospital acquired infections. 
                Currently I am working as a Back End Developer Intern at <a href="https://www.ibm.com/ca-en">IBM</a>.
            </p>
            <p>
                Feel free to take a look at my<a href="/resume.pdf" target="_blank"> resume</a>.
            </p>
            <hr />
            <p>
                I am actively seeking internship opportunities for  Summer 2022. Feel free to reach out over Linkedin or Email!
            </p>
            <div className="socials">
                <div className="social-link">
                    <MdMailOutline /> <a href="mailto:d274lee@uwaterloo.ca">d274lee@uwaterloo.ca</a>
                </div>
                <div className="social-link">
                    <FiGithub /> <a href="https://github.com/DanielBL01">DanielBL01</a>
                </div>
                <div className="social-link">
                    <GrLinkedinOption /> <a href="https://www.linkedin.com/in/danielbyungwooklee/">danielbyungwooklee</a>
                </div>
            </div>
        </div>
    )
}

export default Home;