import React from 'react'
import './homeAbout.css'
import Img from '../images/homebanner.png'

const HomeAbout = () => {
  return (
    <section className="homeAbout">
        <div className="homeAbout-head">
                <h2>세상은 빠르게 변화하는데, 어떤 교육이 필요할까요?</h2>
                <p>국어, 수학, 영어... 너무나 중요한 과목이지만 
                <br /> 빠르게 변화하는 이 사회에서 내 자녀가 살아남기에 충분할까요?</p>
        </div>

        <div className="container homeAbout-container">
            <div className="homeAbout-left">
                <h4>리버럴 아츠 교육(Liberal Arts Education)은</h4>
                <p>스스로 질문하는 과정을 통해 자신만의 논리를 형성하고, <br /> 세상의 큰 흐름을 이해할 수 있는 능력을 길러주는 교육입니다.
                    <br /> 이를 토대로 학생들은 단순히 지식을 쌓는 것이 아니라 <br /> 어떻게 공부를 해 나가야 하는지에 대한 이해를 높일 수 있으며,
                    <br /> 이는 빠르게 변화하는 시대에 가장 중요한 능력입니다.
                </p>
            </div>

            <div className="homeAbout-right">
                <img src={Img} alt="" />
            </div>

        </div>
    </section>
  )
}

export default HomeAbout