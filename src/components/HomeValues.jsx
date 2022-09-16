import React from 'react'
import SectionHeader from './SectionHeader'
import {values} from '../data'
import {ImBooks} from 'react-icons/im'
import Card from '../UI/Card' 
import Img from '../images/Himg.png'

const HomeValues = () => {
  return (
    <section className="values">
        <div className="container values-container">
            <div className="values-left">
                <div className="values-img">
                    <img src={Img} alt="" />
                </div>
            </div>
            <div className="values-right">
                <SectionHeader icon={<ImBooks/>} title="왜 필로프리셉 100이 특별한가요?"></SectionHeader>
                <div className="values-wrapperr">
                    {
                        values.map(({id, icon, title, desc}) => {
                            return <Card key={id} className="values-value">
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        })
                    }
                </div>
                </div>
        </div>
    </section>
  )
}

export default HomeValues