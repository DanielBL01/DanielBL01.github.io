import React from "react";
import Typewriter from "typewriter-effect";

function Experience() {
    return (
    <>
        <div className="container">
            <h1 className="page-header">
                <Typewriter
                    onInit={(typewriter)=> {
                    typewriter
                    .typeString("Work Experience.")
                    .start();
                    }}
                /> 
            </h1>
            <p>
                A timeline of my work experience. ⏲️
            </p>
            <hr />
        </div>
        <div class="timeline-container">
            <div class="timeline">
                <ul>
                    <li>
                    <div class="timeline-content">
                        <h3 class="date">MAY 2022 - AUG 2022</h3>
                        <p>
                            Seeking Summer 2022 Internship. Contact me!
                        </p>
                    </div>
                    </li>
                    <li>
                    <div class="timeline-content">
                        <h3 class="date">SEP 2021 - DEC 2021 (Internship)</h3>
                        <h1>IBM</h1>
                        <p>
                            As a Back End Developer,  I worked with technologies such as Java, Kafka, Docker, Shell and CentOS. 
                            I built a common Java HTTP client library to register our team project to microservices and revamped our Kafka
                            setup procedure.
                        </p>
                    </div>
                    </li>
                    <li>
                    <div class="timeline-content">
                        <h3 class="date">JAN 2021 - APR 2021 (Internship)</h3>
                        <h1>Lumenix</h1>
                        <p>
                            As a Software Developer, I was responsible for developing features end to end to production using Python, Django, JavaScript and AWS.
                            I also developed a new test coverage template and significantly increased test coverage by writing over 200+ test cases.
                        </p>
                    </div>
                    </li>
                    <li>
                    <div class="timeline-content">
                        <h3 class="date">JUL 2020 - AUG 2020 (Internship)</h3>
                        <h1>Lumenix</h1>
                        <p>
                            As a Software Engineer, I wrote Python scripts to connect IoT devices to AWS and architected a new Amazon DynamoDB schema to optimize and improve query performance.
                        </p>
                    </div>
                    </li>
                    <li>
                    <div class="timeline-content">
                        <h3 class="date">JUL 2017 - FEB 2019 (Part-Time)</h3>
                        <h1>Sobeys</h1>
                        <p>
                            As a HMR Clerk, I worked through my senior year of High School while maintaining an admission average &gt; 95% to earn the President’s Scholarship of Distinction 
                            from the University of Waterloo.
                        </p>
                    </div>
                    </li>
                </ul>
            </div>
        </div>
    </>
    )
}

export default Experience;