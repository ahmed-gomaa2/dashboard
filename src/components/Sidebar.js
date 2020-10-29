import React from 'react';
import './css/Sidebar.css'
import {NavLink} from "react-router-dom";
import {AccountTreeOutlined, BuildOutlined, ContactMailOutlined, HomeOutlined, InfoOutlined} from "@material-ui/icons";

const Sidebar = () => {
    return (
        <div className={'sidebar'}>
            <div className="sidebar__top">
                <h1 className="sidebar__logo">
                    A
                </h1>
            </div>
            <div className="sidebar__middle">
                <NavLink className={'sidebar__middleIcon'} activeClassName={'sidebar__active'} exact to={'/'} ><InfoOutlined /> <span className={'sidebar__info'}>About</span></NavLink>
                <NavLink className={'sidebar__middleIcon'} activeClassName={'sidebar__active'} exact to={'/skills'} ><BuildOutlined /> <span className={'sidebar__info'}>Skills</span></NavLink>
                <NavLink className={'sidebar__middleIcon'} activeClassName={'sidebar__active'} exact to={'/projects'} ><AccountTreeOutlined /><span className={'sidebar__info'}>Projects</span> </NavLink>
                <NavLink className={'sidebar__middleIcon'} activeClassName={'sidebar__active'} exact to={'/contacts'} ><ContactMailOutlined /> <span className={'sidebar__info'}>Contacts</span> </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;