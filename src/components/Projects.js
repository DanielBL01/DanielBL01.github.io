import React from "react";
import pokemon from '../images/pokemon_adventure.png';
import chat from '../images/lets_chat.png';
import news from '../images/news_analytics.png';
import checker from '../images/spell_checker.png';

function Projects() {
    return (
        <>
            <div className="container">
                <h1>Coding Projects.</h1>
                <p>
                    A list of my finished projects and works in progress.
                </p>
                <hr />
            </div>
            <div className="project-container">
                <div className="grid">
                    <div className="grid-item">
                        <div>
                            <img src={pokemon} alt="Pokémon Adventure" />
                        </div>
                        <div className="project-name">
                            Pokémon Adventure.
                        </div>
                        <div>
                            Web application built using React and Node which simulates the Pokémon game. Battle and catch wild Pokémon and train your team.
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/DanielBL01/pokemon-adventure-frontend">Frontend Code</a> | <a href="https://github.com/DanielBL01/pokemon-adventure-backend">Backend Code</a> | <a href="https://pokemon-adventure1.herokuapp.com/">Website</a>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div>
                            <img src={chat} alt="Lets Chat" />
                        </div>
                        <div className="project-name">
                            Lets Chat.
                        </div>
                        <div>
                            Web application built using React and Node utilizing web sockets which matches users speaking different languages to a chat room.
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/DanielBL01/lets-chat-frontend">Frontend Code</a> | <a href="https://github.com/DanielBL01/lets-chat-backend">Backend Code</a> | <a href="https://lets-chat-project.herokuapp.com/">Website</a>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div>
                            <img src={news} alt="News Analytics" />
                        </div>
                        <div className="project-name">
                            News Analytics.
                        </div>
                        <div>
                            Web application built using Python/Flask which scrapes and performs text analysis on news articles given a URL.
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/DanielBL01/news-analytics">Code</a> | <a href="https://newsanalytics1.herokuapp.com/">Website</a>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div>
                            <img src={checker} alt="Spell Checker" />
                        </div>
                        <div className="project-name">
                            Spell Checker.
                        </div>
                        <div>
                            GUI application built using Java and Swing which gives auto complete suggestions using a prefix tree (trie) and detects misspelled words.
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/DanielBL01/spell-checker">Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;