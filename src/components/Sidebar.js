import React from "react";
import { slide as Options } from 'react-burger-menu'

function Sidebar() {
    return (
        <Options right>
            <a className="sidebar-item" href="/">Home.</a>
            <a className="sidebar-item" href="/resume">Resume.</a>
            <a className="sidebar-item" href="/about">About.</a>
            <a className="sidebar-item" href="/projects">Projects.</a>
            <a className="sidebar-item" href="/experience">Experience.</a>
            <a className="sidebar-item" href="/blog">Blog.</a>
      </Options>
    )
}

export default Sidebar;