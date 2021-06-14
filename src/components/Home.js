import React from "react";
import { MdMailOutline } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr"; 
import Typewriter from "typewriter-effect";

function Home() {
    return (
        <div className="container">
            <h1>
                <Typewriter className=""
                    onInit={(typewriter)=> {
                    typewriter
                    .typeString("Hello World.")
                    .start();
                    }}
                /> 
            </h1>
            <p>
                My name is Daniel Lee and I am a 2B Mechatronics Engineering student at the 
                <a href="https://uwaterloo.ca/"> University of Waterloo</a>.
            </p>
            <p>
                Previously, I have interned at <a href="https://lumenix.com/">Lumenix </a> 
                where I was a key member in building a platform for AIMS (Artificially Intelligent 
                Monitoring System) which helps prevent the spread of hospital acquired infections. 
                It was an amazing project to work on and just a few weeks after my term, AIMS was 
                deployed to The Ottawa Hospital which was amazing news!
            </p>
            <p>
                In my free time, I like to play video games, cook and take walks outside. There is a small 
                forst beside my house with a trail which is always nice to use to get some fresh air.
            </p>
            <hr />
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