import React from 'react'
import { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'

const FAQs = ({question, answer}) => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);
  return (
    <article className="faqs" onClick={() => setIsAnswerShowing(prev => !prev)}>
        <div>
            <h4>{question}</h4>
            <button className='faqs-icon'>
              {
                isAnswerShowing ? <AiOutlineMinus/> : <AiOutlinePlus/>
              }
            </button>
        </div>
        {isAnswerShowing && <p>{answer}</p>}
    </article>
  )
}

export default FAQs