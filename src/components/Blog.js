import React from "react";
import Typewriter from "typewriter-effect";

function Blog() {
    return (
        <div className="container">
            <h1 className="page-header">
                <Typewriter
                    onInit={(typewriter)=> {
                    typewriter
                    .typeString("Daniel's Blog.")
                    .start();
                    }}
                /> 
            </h1>
            <p>
                Welcome to my blog page! See my posts about career, technology and life. 🗞️
            </p>
            <hr />
            <p>
                <h2>
                    <a href="/content/test">First blog post.</a>
                </h2>
                <p>
                    <i>February 24, 2022</i><br />
                    This is my first blog for testing.
                </p>
            </p>
        </div>
    )
}

export default Blog;