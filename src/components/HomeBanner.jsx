import React from 'react'
import {Link} from 'react-router-dom'
import BannerImg from '../images/homebanner.png'
import './homeBanner.css'

const homeBanner = () => {
  return (
    <header className="mainHeader">
        <div className="container mainHeader-container">
            <div className="mainHeader-left">
                <h1>자유롭게 생각하는 힘을 기르는 <br /> 인문고전 독서교육</h1>
                <p>필로프리셉 100 프로그램은 온라인 독서토론 및 글쓰기 기반의 <br />
                리버럴 아츠 프로그램입니다.</p>
                <Link to="/contact" className='contactBtn'>등록 문의하기</Link>
            </div>

            <div className="mainHeader-right">
                <img src={BannerImg} alt=""  className='bannerImg'/>
            </div>
        </div>
    </header>
  )
}

export default homeBanner