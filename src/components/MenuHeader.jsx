import React from 'react';
import {Link} from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

import '../assets/css/MenuHeader.css';


export const MenuHeader = () => {
    return(
        <header className="menu-header">
            <h3>logo</h3>
            <nav className ="nav">
                <ul className="nav ul">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">Me</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

            <div className="social-media">
                <ul className="social-media ul">
                    <li><Link to="/"><FaLinkedin className="icon"></FaLinkedin></Link></li>
                    <li><Link to="/"><FaGithub className="icon"></FaGithub></Link></li>
                    <li><Link to="/"><FaInstagram className="icon"></FaInstagram></Link></li>
                </ul>

            </div>
        </header>
    )
}