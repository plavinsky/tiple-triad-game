// import React from 'react';
import s from './style.module.css';
import logoPng from '../../assets/logo.png';
import Container from "../Container";
import {useEffect, useState} from "react";
import cn from "classnames";
import {Link} from "react-router-dom";

const Headrer = () => {

    const [headerStyles, setHeaderStyles] = useState(s.header)

    const handleScroll = (e) => {
        setHeaderStyles(cn(s.header, {
            [s.small]: window.scrollY > 60
            }))
    }

    useEffect(() => {
        console.log('Header component is mounted');
        window.addEventListener('scroll', handleScroll);
    }, []);


    return (
        <header className={s.root}>
            <div className={headerStyles}>
                <Container className={s.headerWrap}>
                    <img src={logoPng} alt="logo"/>
                    <ul className={s.nav}>
                        <li ><Link to="/">Main</Link></li>
                        <li ><Link to="/characters">Characters</Link></li>
                        <li ><Link to="/about">About game</Link></li>
                        <li ><Link to="/contacts">Contacts</Link></li>
                    </ul>
                </Container>
            </div>
        </header>
    );
};

export default Headrer;