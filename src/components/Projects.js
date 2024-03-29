import React from "react";
import pokemon from '../images/pokemon.png';
import chat from '../images/chat.png';
import news from '../images/news.png';
import checker from '../images/checker.png';
import Typewriter from "typewriter-effect";

function Projects() {
    return (
        <>
            <div className="container">
                <h1 className="page-header">
                    <Typewriter
                        onInit={(typewriter)=> {
                        typewriter
                        .typeString("Coding Projects.")
                        .start();
                        }}
                    /> 
                </h1>
                <p>
                    A list of my finished projects and works in progress. 🔨
                </p>
                <hr />
            </div>
            <div className="project-container">
                <div className="grid">
                    <div className="grid-item">
                        <div>
                            <img src={pokemon} alt="Pokémon Adventure coding project" />
                        </div>
                        <div className="project-name">
                            Pokémon Adventure.
                        </div>
                        <div>
                            Web application which simulates the Pokémon video game to battle, catch and train your Pokémon team.
                        </div>
                        <div className="project-spacing">
                            <b>Technologies Used</b>: React, Node/Express, MongoDB, PokéAPI
                        </div>
                        <div className="project-spacing">
                        <a href="https://pokemon-adventure1.herokuapp.com/">Website</a> | <a href="https://github.com/DanielBL01/pokemon-adventure-frontend">GitHub</a>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div>
                            <img src={chat} alt="Lets Chat coding project" />
                        </div>
                        <div className="project-name">
                            Lets Chat.
                        </div>
                        <div>
                            Web application which matches users speaking different languages to seamlessly communicate in a one on one chat room.
                        </div>
                        <div className="project-spacing">
                            <b>Technologies Used</b>: React, Node/Express, Socket.IO, MongoDB, GCP
                        </div>
                        <div className="project-spacing">
                            <a href="https://lets-chat-project.herokuapp.com/">Website</a> | <a href="https://github.com/DanielBL01/lets-chat-frontend">GitHub</a>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div>
                            <img src={news} alt="News Analytics coding project" />
                        </div>
                        <div className="project-name">
                            News Analytics.
                        </div>
                        <div>
                            Web application which scrapes and performs text analysis on news articles given a URL.
                        </div>
                        <div className="project-spacing">
                            <b>Technologies Used</b>: Python/Flask, PostgreSQL, NLTK, Newspaper API
                        </div>
                        <div className="project-spacing">
                            <a href="https://newsanalytics1.herokuapp.com/">Website</a> | <a href="https://github.com/DanielBL01/news-analytics">GitHub</a>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div>
                            <img src={checker} alt="Spell Checker coding project" />
                        </div>
                        <div className="project-name">
                            Spell Checker.
                        </div>
                        <div>
                            GUI application which gives auto complete suggestions using a prefix tree (trie) and detects misspelled words.
                        </div>
                        <div className="project-spacing">
                            <b>Technologies Used</b>: Java, Swing
                        </div>
                        <div className="project-spacing">
                            <a href="https://github.com/DanielBL01/spell-checker">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;