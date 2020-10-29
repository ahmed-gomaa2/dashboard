import React from 'react';
import './css/About.css'
import complete from './images/complete.jpg'
import javascript from './images/javascript.jpg'
import bootcamp from './images/webBootcamp.jpg'
import css from './images/css.jpg'
import reacthooks from './images/reactwithhooks.jpg'
import reactwithredux from './images/reactwithredux.jpg'
import nodewithreact from './images/node with react.jpg'

const courses = [
    {
        img: complete,
        name: "The Complete Web Developer Course 2.0",
        desc: 'the first web dev course I took for knowing the field.',
        href: "https://www.udemy.com/course/the-complete-web-developer-course-2/?utm_source=adwords&utm_medium=udemyads&utm_campaign=WebDevelopment_v.PROF_la.EN_cc.ROW_ti.8322&utm_content=deal4584&utm_term=_._ag_80385735315_._ad_437497334061_._kw__._de_c_._dm__._pl__._ti_dsa-774930035449_._li_21466_._pd__._&matchtype=b&gclid=CjwKCAjw0On8BRAgEiwAincsHOu6_XNtxBKHAGJygDpPnPQW-YiTPP5Gmuknu7Wc4Jvn80vWCzUhixoCCnwQAvD_BwE"
    },
    {
        img: javascript,
        name:"The Complete JavaScript Course 2020: From Zero to Expert!",
        desc: "I took this course to master vanilla javascript.",
        href: "https://www.udemy.com/course/the-complete-javascript-course/"
    },
    {
        img: bootcamp,
        name: "The Web Developer Bootcamp 2020",
        desc: "I took this course to learn nodeJS and MongooDB.",
        href: "https://www.udemy.com/course/the-web-developer-bootcamp/"
    },
    {
        img: css,
        name: "Build Responsive Real World Websites with HTML5 and CSS3",
        desc: "I took this  course to master styling with css.",
        href: "https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/"
    },
    {
        img: reacthooks,
        name: "React - The Complete Guide (incl Hooks, React Router, Redux)",
        desc: "I took this course this course to know react and how it works.",
        href: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
    },
    {
        img: reactwithredux,
        name: "Modern React with Redux [2020 Update]",
        desc: "I took this course to master react with redux and async actions.",
        href: "https://www.udemy.com/course/react-redux/"
    },
    {
        img: nodewithreact,
        name: "Node with React: Fullstack Web Development",
        desc: "I took this course to know how to make react work with node to make full-stack websites.",
        href: "https://www.udemy.com/course/node-with-react-fullstack-web-development/"
    }
]
const About = () => {
    return (
        <div className={'about'}>
            <div className="about__name">
                <p>My name is,</p>
                <h2>Ahmed Gomaa</h2>
                <p>I'm a self-taught full-stack web developer.</p>
                <p>If you need someone to create your website and make it beautiful and fast, then here I'm.</p>
            </div>
            <div className="about__courses">
                <h3>Courses:</h3>
                {courses.map(course => (
                    <a href={course.href} target={'blank'} className="about__card">
                        <img src={course.img} alt="course image"/>
                        <h4>{course.name}</h4>
                        <p>{course.desc}</p>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default About;