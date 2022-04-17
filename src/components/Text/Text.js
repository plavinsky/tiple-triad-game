import React from 'react';
import PropTypes from "prop-types";
import cn from 'classnames';
import s from './Text.module.css';

const Text = ({
                  children,
                  element,
                  className,
                  strong = false,
                  italic = false,
                  disabled = false
    }) => {


    return React.createElement(element, {
        className: cn(s.root, className, {
            [s.strong]: strong,
            [s.italic]: italic,
            [s.disabled]: disabled
        }),
    }, children);

};

Text.propTypes = {
    children: PropTypes.node,
    element: PropTypes.oneOf(['p', 'span', 'div']).isRequired,
    className: PropTypes.string,
    strong: PropTypes.bool,
    italic: PropTypes.bool,
    disabled: PropTypes.bool
}

export default Text;