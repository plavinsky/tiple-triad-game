import React from 'react';
import s from './Container.module.css';
import cn from 'classnames';
import PropTypes from "prop-types";

const Container = ({children, className, bgColor}) => {

    return (
        <div className={cn(s.root, className)} style={{backgroundColor: bgColor}}>
            {children}
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default Container;