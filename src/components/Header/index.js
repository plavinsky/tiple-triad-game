import React from 'react';
import s from './style.module.css';

const Headrer = () => {

    const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];


    return (
        <header className={s.root}>
            <div className={s.header}>
                <div className={s.conatiner}>
                    <div className={s.logo}></div>
                    <ul className={s.nav}>
                        {MENU.map((item, index) => {
                            return <li key={index}><a href="#">{item}</a></li>
                        })}
                        {/*<li><a href="#">Menu 1</a></li>*/}
                        {/*<li><a href="#">Menu 2</a></li>*/}
                        {/*<li><a href="#">Menu 3</a></li>*/}
                        {/*<li><a href="#">Menu 4</a></li>*/}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Headrer;