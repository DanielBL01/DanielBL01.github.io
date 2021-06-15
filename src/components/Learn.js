import React from "react";
import Typewriter from "typewriter-effect";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Learn() {
    const codeString = 
    `
    public class Learn {
        public static void main(String[] args) {
            System.out.println("Welcome to Learn!");
        }
    }
    `
    return (
        <div className="container">
            <h1 className="page-header">
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
            <SyntaxHighlighter language="java" style={atomOneLight} className="snippet">
                {codeString}
            </SyntaxHighlighter>
        </div>
    )
}

export default Learn;