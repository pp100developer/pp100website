import React from 'react'
import SectionHeader from './SectionHeader'
import {faqData} from '../data'
import FAQs from './FAQs'
import { FaQuestion } from 'react-icons/fa' 
import '../pages/home/home.css'

const FAQ = () => {
  return (
    <section className="faq">
        <div className="container faq-container">
            <SectionHeader icon={<FaQuestion/>} title="자주 묻는 질문"/>
            <div className="faq-wrapper">
                {
                    faqData.map(({id, question, answer}) => {
                        return <FAQs key={id} question={question} answer={answer}/>
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default FAQ