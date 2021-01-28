import React from 'react';
import {Link} from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';


export const SideBarMenu = () => {
    return(
        <header className="menu">
            <h3>logo</h3>
            <nav className ="menu-nav">
                <ul className="menu-nav ul">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">Me</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

            <div className="menu-social-media">
                <ul className="menu-social-media">
                    <li><Link to="/"><FaLinkedin className="icon"></FaLinkedin></Link></li>
                    <li><Link to="/"><FaGithub className="icon"></FaGithub></Link></li>
                    <li><Link to="/"><FaInstagram className="icon"></FaInstagram></Link></li>
                </ul>
            </div>
        </header>
    )
}