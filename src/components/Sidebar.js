import React from "react";
import { slide as Options } from 'react-burger-menu'

function Sidebar() {
    return (
        <Options right>
            <a className="menu-item" href="/">Home.</a>
            <a className="menu-item" href="/resume">Resume.</a>
            <a className="menu-item" href="/about">About.</a>
            <a className="menu-item" href="/projects">Projects.</a>
            <a className="menu-item" href="/experience">Experience.</a>
            <a className="menu-item" href="/blog">Blog.</a>
      </Options>
    )
}

export default Sidebar;