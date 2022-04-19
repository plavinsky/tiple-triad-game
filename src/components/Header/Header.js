// import React from 'react';
import s from './style.module.css';
import logoPng from '../../assets/logo.png';
import Container from "../Container";

const Headrer = () => {

    const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];


    return (
        <header className={s.root}>
            <div className={s.header}>
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