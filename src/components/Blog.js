import React from "react";
import Typewriter from "typewriter-effect";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Blog() {
    const codeString = 
    `
    public class Blog {
        public static void main(String[] args) {
            System.out.println("Welcome to my Blog!");
        }
    }
    `
    return (
        <div className="container">
            <h1 className="page-header">
                <Typewriter
                    onInit={(typewriter)=> {
                    typewriter
                    .typeString("My Blog.")
                    .start();
                    }}
                /> 
            </h1>
            <p>
                Check out some of my posts!
            </p>
            <hr />
            <SyntaxHighlighter language="java" style={atomOneLight} className="snippet">
                {codeString}
            </SyntaxHighlighter>
        </div>
    )
}

export default Blog;