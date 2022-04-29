// import React from 'react';
import s from './style.module.css';
import logoPng from '../../assets/logo.png';
import Container from "../Container";
import {useEffect, useState} from "react";
import cn from "classnames";

const Headrer = () => {

    const [headerStyles, setHeaderStyles] = useState(s.header)

    const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

    const handleScroll = (e) => {
        console.log(window.scrollY)
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
                        {MENU.map((item, index) => {
                            return <li key={index}><a href="#">{item}</a></li>
                        })}
                    </ul>
                </Container>
            </div>
        </header>
    );
};

export default Headrer;