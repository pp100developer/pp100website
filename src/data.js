import {FaRegBookmark} from 'react-icons/fa'

export const links = [
    {
        name: "프로그램 소개",
        path: '/About'
    },
    {
        name: "커리큘럼",
        path: '/Curri'
    },
    {
        name: "튜터 프로필",
        path: '/tutor'
    },
    {
        name: "등록 및 문의",
        path: '/contact'
    },
]

export const curris = [
    {
        id: 1,
        icon: <FaRegBookmark/>,
        title: "파운데이션 과정",
        info: "초4-6학년을 위한 기초 프로그램",
        path: "/curris/111"
    },
    {
        id: 2,
        icon: <FaRegBookmark/>,
        title: "인터미디엇 과정",
        info: "중급 프로그램",
        path: "/curris/222"
    },
    {
        id: 3,
        icon: <FaRegBookmark/>,
        title: "어드밴스드 과정",
        info: "최종 프로그램",
        path: "/curriㄴ/333"
    }
]

export const values = [
    {
        id: 1,
        icon: <FaRegBookmark/>,
        title: "대학교육 기반 커리큘럼",
        desc: "인문고전 전문 교육기관의 자료를 바탕으로 한 커리큘럼"
    },
    {
        id: 2,
        icon: <FaRegBookmark/>,
        title: "고전 필독서를 통한 토론과 글쓰기",
        desc: "인문고전 전문 교육기관의 자료를 바탕으로 한 커리큘럼"
    },
    {
        id: 3,
        icon: <FaRegBookmark/>,
        title: "리버럴아츠 교육 전문 튜터",
        desc: "인문고전 전문 교육기관의 자료를 바탕으로 한 커리큘럼"
    }
]


export const faqData = [
    {
        id: 1,
        question: "왜 고전도서를 읽나요?",
        answer: "인문학적 소양을 기르기 위해서"
    },
    {
        id: 2,
        question: "왜 고전도서를 읽나요?",
        answer: "인문학적 소양을 기르기 위해서"
    },
    {
        id: 3,
        question: "왜 고전도서를 읽나요?",
        answer: "인문학적 소양을 기르기 위해서"
    },
    {
        id: 4,
        question: "왜 고전도서를 읽나요?",
        answer: "인문학적 소양을 기르기 위해서"
    },
    {
        id: 5,
        question: "왜 고전도서를 읽나요?",
        answer: "인문학적 소양을 기르기 위해서"
    },
    {
        id: 6,
        question: "왜 고전도서를 읽나요?",
        answer: "인문학적 소양을 기르기 위해서"
    }
]

export const feedb = [
    {
        id: 1,
        name: "Eric",
        comment: "고전은 너무 재미있어요.",
        course: "F-1",
        avatar: require("./images/Himg.png")
    },
    {
        id: 2,
        name: "김민석",
        comment: "독서에 흥미를 가지고 더 깊은 사고를 할 수 있게 되었어요.",
        course: "F-1",
        avatar: require("./images/Himg.png")
    },
    {
        id: 3,
        name: "김김김",
        comment: "글쓰기가 많이 늘었어요.",
        course: "F-1",
        avatar: require("./images/Himg.png")
    },
    {
        id: 4,
        name: "호호호",
        comment: "비판적 사고력을 기를 수 있었어요.",
        course: "F-1",
        avatar: require("./images/Himg.png")
    },
    {
        id: 5,
        name: "안녕",
        comment: "독서에 흥미를 가지고 더 깊은 사고를 할 수 있게 되었어요",
        course: "F-1",
        avatar: require("./images/Himg.png")
    },
    
]

export const programs = [
    {
        id: 1,
        name: "파운데이션",
        desc: "기초 과정"
    },
    {
        id: 2,
        name: "인터미디엇",
        desc: "중급 과정"
    },
    {
        id: 3,
        name: "인터미디엇",
        desc: "고급 과정"
    }
]

/*-------------------------------*/
const Tutor1 = require('./images/cho.jpg')
const Tutor2 = require('./images/kim.jpg')
const Tutor3 = require('./images/kwon.jpg')
const Tutor4 = require('./images/park.jpg')
const Tutor5 = require('./images/seo.jpg')

export const tutors = [
    {
        id: 1,
        image: Tutor1,
        course: "필로프리셉 튜터"
    },
    {
        id: 2,
        image: Tutor2,
        course: "필로프리셉 튜터"
    },
    {
        id: 3,
        image: Tutor3,
        course: "필로프리셉 튜터"
    },
    {
        id: 4,
        image: Tutor4,
        course: "필로프리셉 튜터"
    },
    {
        id: 5,
        image: Tutor5,
        course: "필로프리셉 튜터"
    }
]