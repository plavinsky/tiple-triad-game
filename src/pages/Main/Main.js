import Slider from "../../components/Slider";
import Container from "../../components/Container";
import Heading from "../../components/Heading/Heading";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import {useState} from "react";

import style from './Main.module.scss';

import {CHARACTER} from "../../data/characters";

const Main = () => {


    const [characters, setCharacters] = useState(CHARACTER);
    const [showBioId, setShowBioId] = useState(null);

    const handlerLike = (id) => {

        console.log(id)

        setCharacters(prevState => prevState.map(item => {
            if (item.id === id) {
                return {...item, isLike: !item.isLike}
            }

            return item;
        }));
    };

    const handlerReadBio = (id) => {
        console.log(id);
        setShowBioId(id)
    };


    return (
    <>
        <Slider />
        <div>Main</div>
    </>
  );
};

export default Main;