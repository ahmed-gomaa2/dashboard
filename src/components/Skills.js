import React from 'react';
import './css/Skills.css';
import semantic from './images/semantic-ui.svg';
import material from './images/material-ui-1.svg';
import redux from './images/redux.svg';
import mongodb from './images/mongodb.svg';
import firebase from './images/firebase-1.svg';
import github from './images/github-1.svg'


const Skills = () => {
    return (
        <div className={'skills'}>
            <h2>My Skills:</h2>
            <div className="skills__intro">
                Through my Learning journey, I learned MERN stack technology and here are what I leaned through time.
            </div>
            <div className="skills__section">
                <p><i className="skills__icon fab fa-html5"></i>HTML</p>
                <p><i className="skills__icon fab fa-css3"></i>CSS</p>
                <p><i className="skills__icon fab fa-js"></i>Javascript</p>
                <p><i className="skills__icon fab fa-bootstrap"></i>Bootstrap</p>
                <p><img src={semantic}/>Semantic-UI</p>
                <p><img src={material} />Material-UI</p>
                <p><i className="skills__icon fab fa-node-js"></i>NodeJS</p>
                <p><i className="skills__icon fab fa-react"></i>ReactJS</p>
                <p><img src={redux}/> Redux</p>
                <p><img src={mongodb} />MongoDB</p>
                <p><img src={firebase} />Firebase</p>
                <p><img src={github}/> Github</p>
            </div>
        </div>
    );
};

export default Skills;