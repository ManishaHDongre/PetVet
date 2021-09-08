import React from 'react';

function CardItem(props) {
  return (
    <>
      <div className='cards__item'>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
      </div>
    </>
  );
}

export default CardItem;