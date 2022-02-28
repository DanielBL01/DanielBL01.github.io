import React from "react";
import { MdMailOutline } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr"; 
import Typewriter from "typewriter-effect";

function Home() {
    return (
        <div className="container">
            <h1 className="page-header-landing-page">
                <Typewriter
                    options={{
                      loop: true,
                      deleteSpeed: 40
                    }}

                    onInit={(typewriter)=> {
                    typewriter
                    .pauseFor(1000)
                    .typeString("I am a Software Engineer.")
                    .pauseFor(1000)
                    .deleteChars(20)
                    .pauseFor(1000)
                    .typeString("an aspiring Entrepreneur.")
                    .pauseFor(1000)
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
                Previously, I've interned as a Back End Developer at <a href="https://www.ibm.com/ca-en">IBM</a> and as a
                Software Engineer at <a href="https://lumenix.com/">Lumenix</a>. Since then, I've had the opportunity to work
                in different development environments, from writing Java code in large existing codebases to building web applications from 
                the ground up to production.
            </p>
            <h3>Present</h3>
            <p>
                I am currently in my 3A term taking the following courses.
            </p>
            <p>
                <li>Introduction to Thermodynamics and Heat Transfer</li>
                <li>Microprocessor Systems and Interfacing</li>
                <li>Kinematics and Dynamics of Machines</li>
                <li>Actuators and Power Electronics</li>
                <li>Systems Models</li>
            </p>
            <p>
                Additionally, I am currently reading the following books/resources.
            </p>
            <p>
            <li><a href="https://www.oreilly.com/library/view/head-first-design/9781492077992/">Head First Design Patterns, 2nd Edition</a> (Learn applicable design patterns for object-oriented software)</li>
            <li><a href="https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/">Designing Data-Intensive Applications</a> (Learn data systems, databases, caches, indexes, distributed systems and more)</li>
            <li><a href="https://www.educative.io/courses/grokking-the-system-design-interview">Grokking the System Design Interview</a> (Learn about designing systems at a high-level overview)</li>
            </p>
            <h3>What's next?</h3>
            <p>
                For the upcoming Summer 2022 term, I will be interning at <a href="https://www.pepperdata.com/">Pepperdata</a> as a Backend Developer. With this 
                internship, I hope to learn a lot about Big Data and Distributed Systems!
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