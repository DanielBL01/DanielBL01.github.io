import React from "react";
import profile from "../images/profile.jpg";
import Typewriter from "typewriter-effect";

function About() {
    return (
        <div className="container">
            <h1 className="page-header">
                <Typewriter
                    onInit={(typewriter)=> {
                    typewriter
                    .typeString("About Me.")
                    .start();
                    }}
                /> 
            </h1>
            <p>
                Who am I? What are my interests? 🤷🏻‍♂️
            </p>
            <hr />
            <img className="profile" src={profile} alt="Daniel Lee" />
            <p>
                My name is Daniel Lee and I am a Canadian-Korean student at the University of Waterloo.
            </p>
            <p>
                My primary professional interests are in Back-end web development, Microservices and Big Data. What I love about
                Software Engineering is that there is always something new and exciting to learn and I try my best to keep in touch with
                all the latest, coolest tech. I also enjoy coding as a way of challenging myself and to improve my problem solving abilities. 
                I always enjoy tackling algorithm and data structure problems and it's just a great way to keep my computer science 
                fundamentals fresh.
            </p>
            <p>
                I'm always eager and excited about working on projects that create positive impact.
                The day that sparked my inspiration to become an engineer was when I listened to one of Elon Musk's interviews where he
                talked about the importance of building things that may be useful to society and that has value to people. 
                Whether that's a small video game application or technology that can end climate change, no matter the scale, as long as it is 
                good for a group of people, build it.
            </p>
        </div>
    )
}

export default About;