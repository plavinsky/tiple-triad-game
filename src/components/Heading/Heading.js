import React from 'react';
import cn from 'classnames';
import s from './Heading.module.scss';
import PropTypes from "prop-types";

const Heading = ({
     level = 1,
     className,
     children,
     backLine,
     black = false}) => {

    const el = `h${level}`;
    return React.createElement(el, {className: cn(s.root, className, {
        [s.colorBlack]: black,
        [s.backLine]:backLine
        })}, children);
};

Heading.defaultProps = {
    level: 1,
    black: false,
    backLine: false,
}

Heading.propTypes = {
    level: PropTypes.number.isRequired,
    className: PropTypes.string,
    children: PropTypes.node
};

export default Heading;