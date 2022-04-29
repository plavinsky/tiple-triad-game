import s from "./Button.module.scss";
import React, {useState} from "react";

const Button = ({
        type = 'Wow',
        onBtnClick
                }) => {

    let [style1, setStyle1] = useState('');
    let style2 = '';

    switch (type) {
        case "Wow": {
            style1 = s.call;
            style2 = s.button;
            break;
        }
        case "Go back": {
            style1 = s.callBack;
            style2 = s.buttonBack;
            break;
        }
    }

    return (
        <div className={style1}>
            <button className={style2}
                onClick={onBtnClick}>{type}</button>
        </div>
    );
};

export default Button;