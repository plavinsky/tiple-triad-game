import React from 'react';
import Container from "../Container";
import Heading from "../Heading/Heading";

import s from './style.module.css';

const Slider = () => {
    return (
        <section className={s.section}>
            <div className={s.slider}>
                <Container className={s.sliderContent}>
                    <Heading className={s.header} level={1}>Wow</Heading>
                    <Heading className={s.subheader} level={2} black>Wow</Heading>



                    <div className={s.call}>
                        <button className={s.button}>Wow</button>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default Slider;