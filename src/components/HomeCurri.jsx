import React from 'react'
import {Link} from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import {curris} from '../data'
import {BiBookReader} from 'react-icons/bi'
import '../pages/home/home.css'

const HomeCurri = () => {
  return (
    <section className="homeCurri">
        <div className="container homeCurri-container">
            <SectionHeader icon={<BiBookReader/>} title="커리큘럼"/>

            <div className="curri-wrapper">
                {
                    curris.map(({id, icon, title, info, path}) => {
                        return (
                            
                            <Link to="/curri" className="curri" key={id}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{info}</small>
                            </Link>
                            
                        )
                    })
                }
            </div>
        </div>
        </section>
  )
}   

export default HomeCurri