import React from "react";
import profile from "../images/profile.jpg";

function About() {
    return (
        <div className="container">
            <h1>About Me.</h1>
            <p>Who am I?</p>
            <hr />
            <img className="profile" src={profile} alt="Daniel Lee" />
            <p>
                My name is Daniel Lee and I am a Canadian-Korean student at the University of Waterloo
                studying Mechatronics Engineering.
            </p>
            <p>
                My primary interests are in full-stack web development. There are so many new and exciting
                web technologies and I love to keep in touch with all the latest greatest modern web infrastructure.
                I also really enjoy coding as a way to challenge myself and usually it's in the form of algorithms 
                and data structures. I always enjoy tackling difficult questions and it's a great way to keep my
                computer science fundamentals fresh.
            </p>
            <p>
                I'm always eager and excited about working on projects that have a positive impact.
                I'm a huge Elon Musk fan, and it was incredibly inspiring to hear him talk about the importance of building
                things that may be useful to society and that has value to people. Whether that's a small video game application
                or technology that can end climate change, no matter the scale, as long as it is good for a group of people, build it.
            </p>
        </div>
    )
}

export default About;