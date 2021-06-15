import React from "react";
import Typewriter from "typewriter-effect";

function Learn() {
    return (
        <div className="container">
            <h1>
                <Typewriter
                    onInit={(typewriter)=> {
                    typewriter
                    .typeString("Welcome to Learn.")
                    .start();
                    }}
                /> 
            </h1>
            <p>
                Learn something new everyday.
            </p>
            <hr />
            <p>
                This is a platform I am soon going to build to document all the cools things I've learned.
            </p>
        </div>
    )
}

export default Learn;