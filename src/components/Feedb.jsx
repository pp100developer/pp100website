import React from 'react'
import { useState } from 'react'
import SectionHeader from './SectionHeader'
import {feedb} from '../data'
import Card from '../UI/Card'
import {MdFeedback} from 'react-icons/md'
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'
import '../pages/home/home.css'

const Feedb = () => {
    const [index, setIndex] = useState(0)
    const {name, comment, course, avatar} = feedb[index]; 
    
    const prevFeedbHander = () => {
        setIndex(prev => prev - 1);

        if(index <= 0) {
            setIndex(feedb.length - 1);
        }
    }

    const nextFeedbHandler = () => {
        setIndex(prev => prev + 1);

        if(index >= feedb.length - 1) {
            setIndex(0);
        }
    }
  return (
    <section className="feedb">
        <div className="container feedb-container">
            <SectionHeader icon={<MdFeedback/>} title="학생 후기" className="feedb-header"/>
            <Card className="feedb-card">
                <div className="feedb-avatar">
                    <img src={avatar} alt={name} />
                </div>
                <div className="feedb-infoContainer">
                    <p className="feedb-comment">{`"${comment}"`}</p>
                    <h5>{name}</h5>
                    <small className="testimonial-title">{course}</small>
                </div>
            </Card>
            <div className="feedb-btn">
                <button className="btn-1" onClick={prevFeedbHander}><IoIosArrowDropleftCircle/></button>
                <button className="btn-2" onClick={nextFeedbHandler}><IoIosArrowDroprightCircle/></button>
            </div>
        </div>
    </section>
  )
}

export default Feedb