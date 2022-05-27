import Button from "../../components/Button/Button";
import s from "./Biography.module.scss";
import PropTypes from "prop-types";
import Container from "../../components/Container";
import Heading from "../../components/Heading/Heading";
import {BIO} from "../../data/bio";
import {useParams} from "react-router-dom";


const Biography = () => {

    const {id} = useParams();
    console.log("params", id)


    return (

        <div className={s.root}>
            <Container>

                {BIO[id].map((item, ind) => {
                    switch (item.type) {
                        case 'h1':
                            return <Heading key={ind} level={1} black>{item.text}</Heading>
                        case 'h2':
                            return <Heading key={ind} level={2} black>{item.text}</Heading>
                        case 'h3':
                            return <h3 key={ind}>{item.text}</h3>
                        case 'h4':
                            return <h4 key={ind}>{item.text}</h4>
                        case 'h5':
                            return <h5 key={ind}>{item.text}</h5>
                        case 'h6':
                            return <h6 key={ind}>{item.text}</h6>
                        case 'img':
                            return <div  className={s.imgWrap}><img src={item.src} alt=""/> </div>
                        case 'paragraph':
                            return <p>{item.text}</p>
                        default:
                            return <p>{item.text}</p>
                    }
                })}
            </Container>
        </div>
    );
};

Biography.propTypes = {

};

export default Biography;