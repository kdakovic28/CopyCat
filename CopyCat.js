import React from 'react';
import {styles} from '../styles';
import propTypes from 'prop-types';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


export class CopyCat extends React.Component {
    
  
  render() {
    const {copying, toggleTape, value, handleChange, name} = this.props;
    return (
      <div style={styles.divStyles}>
        <h1 style={{marginBottom:80}}> {name || "Tom"} Copy Cat</h1>
        <input 
        type= 'text'
        value= {value}
        onChange= {handleChange}
        />
        <img 
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
          style={styles.imgStyles}
        />
        <p>{copying && value}</p>
      </div>

    );
  };
}

CopyCat.propTypes = {
copying: propTypes.bool.isRequired,
toggleTape: propTypes.func.isRequired,
velue: propTypes.string.isRequired,
handleChange: propTypes.func.isRequired,
name: propTypes.string
}