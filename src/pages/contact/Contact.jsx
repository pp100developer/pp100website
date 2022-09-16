import React from 'react'
import PageHeader from '../../components/PageHeader'
import PageHeaderImg from '../../images/PageHeaderImg.jpg'
import './contact.css'

const Contact = () => {
  return (
    <div className='contact'>
    <PageHeader title="등록 문의" img={PageHeaderImg}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, voluptatibus!
    </PageHeader>

    <section className="contact">
      <div className="container contact-container">
        <div className="contact-wrapper">
          <a href="https://pf.kakao.com/_hPPMs" target="_blanc" rel="noreferrer noopener">문의하기</a>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Contact