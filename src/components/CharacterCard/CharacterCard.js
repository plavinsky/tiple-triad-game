import React from 'react';
import {ReactComponent as Like} from './assets/heart.svg'

import s from './characterCard.module.scss'
import cn from "classnames";
import PropTypes from "prop-types";

const CharacterCard = (
    {
        id,
        name,
        description,
        thumbnail,
        humanName,
        isLike,
        onLike,
        onReadBio
    }
) => {
    const handleLikeClick = () => {

        onLike(id)
    }

    const handleReadBioClick = () => {
        onReadBio(id);
    }

    return (
        <div className={s.root}>
            <img
                src={thumbnail}
                alt={name} className={s.cardImage}/>
            <div className={s.cardDetails}>
                <h2 className={s.cardName}>
                    {name}
                </h2>
                <h3 className={s.cardHumanName}>
                    {humanName}
                </h3>
                <p className={s.cardDescription}>
                    {description}
                </p>

                <div className={s.cardMeta}>
                    <div className={cn(s.like, {
                        [s.active]: isLike
                    })}
                        onClick={handleLikeClick}>
                        <Like />
                    </div>
                    <div className={s.readBio}>
                        <a href="#" onClick={handleReadBioClick}>Read bio</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

CharacterCard.defaultProps = {
    isLike: true,
}

CharacterCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    src: PropTypes.string,
    humanName: PropTypes.string,
    description: PropTypes.string,
    isLike: PropTypes.bool,
    onLike: PropTypes.func,
    //onReadBioClick: PropTypes.func,
}

export default CharacterCard;