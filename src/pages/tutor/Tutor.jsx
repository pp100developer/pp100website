import React from 'react'
import PageHeader from '../../components/PageHeader'
import PageHeaderImg from '../../images/PageHeaderImg.jpg'
import {tutors} from '../../data'
import Trainer from '../../components/Trainer'
import './tutor.css'

const tutor = () => {
  return (
    <>
    <PageHeader title='튜터 프로필' img={PageHeaderImg}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate totam quasi est ducimus autem!
    </PageHeader>
    <section className="tutor">
      <div className="container tutor-container">
        {
          tutors.map(({id, image, name, course}) => {
            return <Trainer key={id} image={image} name={name} course={course} className='tutorProfile'/>
          })
        }
      </div>
    </section>
    </>
  )
}

export default tutor