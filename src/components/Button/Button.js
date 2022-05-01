import cn from 'classnames';

import s from "./Button.module.scss";
import PropTypes from "prop-types";


const Button = ({
        color,
        onBtnClick,
        children
                }) => {

    // let [style1, setStyle1] = useState('');
    // let style2 = '';
    //
    // switch (color) {
    //     case "black": {
    //         style1 = s.call;
    //         style2 = s.button;
    //         break;
    //     }
    //     case "Go back": {
    //         style1 = s.callBack;
    //         style2 = s.buttonBack;
    //         break;
    //     }
    // }

    return (

            <button className={cn(s.root, s[color])}
                onClick={onBtnClick}>{children}</button>

    );
};

Button.propTypes = {
    color: PropTypes.oneOf(['default', 'black']),
    onBtnClick: PropTypes.func,
    children: PropTypes.node
}

export default Button;