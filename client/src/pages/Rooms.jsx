import React, { useEffect, useState } from 'react'
import { getData } from '../functions/functions';
import Room from '../components/Room';
import '../styles/rooms.css'
import TV from '../assets/televisor.png'
import NOTTV from '../assets/sin-television.png'
import AIR from '../assets/aire-acondicionado.png'
import NOTAIR from '../assets/noairconditioning.png'

const Rooms = () => {

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getData(`https://fullstack-booking.vercel.app/rooms`).then(res => setRooms(res.result))

  }, [])

  return (
    <section className='room_section'>
      <h1>Rooms</h1>
      {
        rooms ? rooms.map((room, i) => (
          <div className='room_container'>
            <Room className={'room_card'} name={room.room_name} id={room.room_id} tv={room.room_tv ? <p>Tv</p> : <p>No Tv</p>} icontv={room.room_tv ? TV : NOTTV} iconair={room.room_air_conditioning ? AIR : NOTAIR} air={room.room_air_conditiong ? <p>Air</p> : <p>No Air</p>} description={room.room_description} img={room.room_img}/>
          </div>
        )) : <div>No hay habitaciones</div>
      }
      
    </section>
  )
}

export default Rooms