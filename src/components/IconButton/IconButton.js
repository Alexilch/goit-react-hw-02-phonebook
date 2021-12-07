import React from "react";
import PropTypes from 'prop-types'
import './IconButton.css'

const IconButton = ({children, onClick}) => (
    <button type="button" className="iconbutton" onClick={onClick}>
        {children}
    </button>
)

IconButton.defaultProps = {
    onClick: () => null,
    children: null,
}

IconButton.propTypes = {
    onClick:PropTypes.func,
    children:PropTypes.node
}

 export default IconButton