import React from 'react'
import Logo from '../images/pp100logo.JPG'
import { Link } from 'react-router-dom'
import { FaYoutube } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <div className="container footer-container">
                <article>
                    <Link to="/" className='logo'>
                        <img src={Logo} alt="footerLogo" />
                    </Link>
                    <p>
                        내 아이를 위한 최고의 교육, 필로프리셉
                    </p>
                    <div className="footer-social">
                        <a href="https://youtube.com/" target="_blank" rel='noreferrer noopener'>
                            <FaYoutube /></a>
                        <a href="https://www.instagram.com/" target="_blank" rel='noreferrer noopener'>
                            <AiFillInstagram /></a>
                    </div>
                </article>
                <article>
                    <h4>Link</h4>
                    <Link to="/about">프로그램 소개</Link>
                    <Link to="/curri">커리큘럼</Link>
                    <Link to="/tutor">튜터 프로필</Link>
                    <Link to="/contact">등록 문의</Link>
                </article>
            </div>
            <div className="footer-copyright">
                <small>2022 필로프리셉 All Rights Reserved</small>
            </div>
        </footer>
    )
}

export default Footer