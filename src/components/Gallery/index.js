import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery() {
  return (
    <section>
      <p>Projects</p>
      <PhotoList />
    </section>
  );
}
export default Gallery;
