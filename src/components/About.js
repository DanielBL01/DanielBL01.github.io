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
            <img className="profile" src={profile} alt="Daniel Lee in Ottawa" />
            <p>
                My name is Daniel Lee and I am a Canadian-Korean student at the University of Waterloo studying Mechatronics Engineering, an interdisciplinary
                program which incorporates Mechanical Engineering, Control Engineering, Electronics, and Computer Science
            </p>
            <p>
                My professional goal is become a software engineer working in the field of backend & infrastructure, distributed systems and big data. What I love most about 
                software engineering is that there is always room to learn and grow. It really is a field of endless learning as current 
                technologies improve and new ones emerge. I also enjoy coding as a way of challenging myself to improve my general problem
                solving. I always enjoy tackling a good algorithms and data structure problem since it's a great way to keep my computer science
                fundamentals fresh.
            </p>
            <p>
                I'm always eager and excited about working on projects that create positive impact. A big belief of mine, inspired by Elon Musk
                is the importance of building things that may be useful to society and that can have value to people. Whether that may be a small video 
                game application or a technology that can end climate change, I think no matter the scale, as long as it is good for a group of people, 
                build it.
            </p>
        </div>
    )
}

export default About;