import Slider from "../../components/Slider";
import Container from "../../components/Container";
import Heading from "../../components/Heading/Heading";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import {useState} from "react";
import {useNavigate} from 'react-router-dom';

import style from './Characters.module.scss';

import {CHARACTER} from "../../data/characters";

const Characters = () => {


    const [characters, setCharacters] = useState(CHARACTER);

    //const [showBioId, setShowBioId] = useState(null);

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
        console.log("read bio,i :", id);
        //setShowBioId(id)

    };


    return (
    <>
      <Header/>
      <Slider/>
      <section className={style.cardSection}>
        <Container id={1}>
          <div className={style.cardTitle}>
            <Heading backLine black>
              Marvel Cards
            </Heading>
            <Heading level={2} black>
              Collect your best five
            </Heading>
          </div>
          <div className={style.cardWrap}>
            {characters.map((item, index) => {
              return (
                  <CharacterCard
                      key={index}
                      id={item.id}
                      name={item.name}
                      description={item.description}
                      thumbnail={item.thumbnail.path}
                      humanName={item.humanName}
                      isLike={item.isLike}
                      onLike={handlerLike}
                      onReadBio={handlerReadBio}
                  />
              )
            })}
          </div>
        </Container>
      </section>

      <Footer/>
    </>
  );
};

export default Characters;