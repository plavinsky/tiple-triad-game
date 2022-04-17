import React from 'react';
import cn from 'classnames';
import s from './Heading.module.css';
import PropTypes from "prop-types";

const Heading = ({
     level = 1,
     className,
     children,
     black = false}) => {

    const el = `h${level}`;
    return React.createElement(el, {className: cn(s.root, className, {
        [s.colorBlack]: black
        })}, children);
};

Heading.propTypes = {
    level: PropTypes.number.isRequired,
    className: PropTypes.string,
    children: PropTypes.node
};

export default Heading;