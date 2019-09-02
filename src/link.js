import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styles from './link.module.css';

const stylelessClass = styles.gatsbyStylelessLink;

function StylelessLink({ className, ...props }) {
    const classNames = className ? stylelessClass + ' ' + className : stylelessClass;
    return (
        <Link className={classNames} {...props} />
    );
}

StylelessLink.propTypes = {
    className: PropTypes.string
};

export default StylelessLink;
