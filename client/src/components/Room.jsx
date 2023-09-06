import React from 'react'

const Room = ({ className, description, id, name, tv, air, img, icontv, iconair }) => {
  return (
    <div className={className}>
        <h2>{name} - # {id}</h2>
        <img className='room_img' src={img} alt={name}></img>
        <p>{description}</p>
        <p className='paragraph_card'>{tv} - <img src={icontv}></img></p>
        <p className='paragraph_card'>{air} - <img src={iconair}></img></p>
    </div>
  )
}

export default Room