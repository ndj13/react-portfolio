import React, { useState } from 'react';
import imageBeer from '../../assets/projects/beer-me.gif';
import imageQuiz from '../../assets/projects/code quiz.png';
import imagePortfolio from '../../assets/projects/portfolio.png';
import imageProject3 from '../../assets/projects/project3.jpeg';
import imageRun from '../../assets/projects/run-buddy.png';

const PhotoList = ({  }) => {

var images = 
[
{
  name: 'Beer Me', path: imageBeer
},
{
  name: 'Code Quiz', path: imageQuiz
},
{
  name: 'Portfolio', path: imagePortfolio
},
{
  name: 'Project 3', path: imageProject3
},
{
  name: 'Run Buddy', path: imageRun
},
]


  return (
    <div>
     
      <div className="flex-row">
        {images.map((image, i) => (
          <img
            src={image.path}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
