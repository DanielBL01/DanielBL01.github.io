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
                    options={{
                      loop: true,
                      deleteSpeed: 40
                    }}

                    onInit={(typewriter)=> {
                    typewriter
                    .pauseFor(1000)
                    .typeString("Hello World.")
                    .pauseFor(1000)
                    .deleteAll()
                    .pauseFor(1000)
                    .typeString("Daniel Lee.")
                    .pauseFor(1000)
                    .deleteAll()
                    .pauseFor(1000)
                    .typeString("Software Engineer.")
                    .pauseFor(1000)
                    .deleteAll()
                    .start();
                    }}
                /> 
            </h1>
            <p>
                My name is Daniel Lee and I am a 3rd Year Mechatronics Engineering student at the 
                <a href="https://uwaterloo.ca/"> University of Waterloo</a>.
            </p>
            <h3>Past</h3>
            <p>
                Previously, I've interned as a backend/software engineer at <a href="https://www.pepperdata.com/">Pepperdata</a>, <a href="https://www.ibm.com/ca-en">IBM</a> and <a href="https://www.aimsplatform.io/?gclid=CjwKCAjwmJeYBhAwEiwAXlg0Ae5VO23h_9W7WayJKb2nOKiBHgcVsDoC1ta6nTBTtoiKuLeN2GF1axoCgH4QAvD_BwE">Lumenix</a>.
                Since then, I've had the opportunity to work in different development environments like rapidly building for production or writing code in large existing codebases.
            </p>
            <h3>Present</h3>
            <p>
                I am currently in my 3B term seeking <b>Winter (January - April)</b> and <b>Summer (May - August) 2023 internships</b>. Please feel free to reach out to me via email or linkedin!
            </p>
            <p>
                I am currently reading the following books/resources.
            </p>
            <p>
            <li><a href="https://www.oreilly.com/library/view/head-first-design/9781492077992/">Head First Design Patterns, 2nd Edition</a> (Learning applicable design patterns for object-oriented software)</li>
            <li><a href="https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/">Designing Data-Intensive Applications</a> (Learning data systems, databases, caches, indexes, distributed systems and more)</li>
            </p>
            <hr />
            <div className="socials">
                <div className="social-link">
                    <MdMailOutline /> <a href="mailto:d274lee@uwaterloo.ca">d274lee@uwaterloo.ca</a>
                </div>
                <div className="social-link">
                    <GrLinkedinOption /> <a href="https://www.linkedin.com/in/danielbl01/">danielbyungwooklee</a>
                </div>
                <div className="social-link">
                    <FiGithub /> <a href="https://github.com/DanielBL01">danielbl01</a>
                </div>
            </div>
        </div>
    )
}

export default Home;