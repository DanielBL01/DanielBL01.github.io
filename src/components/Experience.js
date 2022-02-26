import React from "react";
import Typewriter from "typewriter-effect";

function Experience() {
    return (
    <>
        <div className="container-without-bottom">
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
                A timeline of my work experience. 👷🏻‍♂️
            </p>
            <hr />
        </div>
        <div class="timeline-container">
            <div class="timeline">
                <ul>
                    <li>
                    <div class="timeline-content">
                        <h3 class="date">MAY 2022 - AUG 2022 (Internship)</h3>
                        <h1>Pepperdata</h1>
                        <p>
                            Incoming Backend Developer working with Big Data and Large-Scale Distributed Systems
                        </p>
                    </div>
                    </li>
                    <li>
                    <div class="timeline-content">
                        <h3 class="date">SEPT. 2021 - DEC 2021 Ottawa, ON (Internship)</h3>
                        <h1>IBM</h1>
                        <p>
                            As a Backend Developer, I worked with technologies such as Java, Kafka, Docker, Shell and CentOS. During 
                            my term, I developed a common HTTP client library in Java to connect our team project to microservices. I also
                            revamped our Kafka setup procedure to reduce file generation time.
                        </p>
                    </div>
                    </li>
                    <li>
                    <div class="timeline-content">
                        <h3 class="date">JAN. 2021 - APR. 2021 Toronto, ON (Internship)</h3>
                        <h1>Lumenix</h1>
                        <p>
                            As a Software Developer, I delivered some exciting features to our IoT device control platform to production. This also
                            included writing Lambda functions on AWS to store event data from API Gateway to DynamoDB and streaming data from DynamoDB
                            in real-time using jQuery and Ajax to display to clients.
                        </p>
                    </div>
                    </li>
                    <li>
                    <div class="timeline-content">
                        <h3 class="date">JUL. 2020 - AUG. 2020 Toronto, ON (Internship)</h3>
                        <h1>Lumenix</h1>
                        <p>
                            As a Software Engineer, I architected a new DynamoDB schema using the primary key and global secondary index feature to improve
                            query flexibility and performance. I also wrote some Python scripts to connect IoT devices to AWS IoT Core.
                        </p>
                    </div>
                    </li>
                    <li>
                    <div class="timeline-content">
                        <h3 class="date">JUL. 2017 - FEB. 2019 Ancaster, ON (Part-Time)</h3>
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