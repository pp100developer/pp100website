import React from 'react'
import Card from '../UI/Card'
import '../pages/tutor/tutor.css'

const Trainer = ({image, name, course}) => {
  return (
    <Card className='tutorCard'>
        <div className="tutor-img">
            <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <p>{course}</p>
    </Card>
  )
}

export default Trainer