import React from 'react'

const PageHeader = ({title, img, children}) => {
  return (
    <header className="pageHeader">
        <div className="pageHeader-container">
            <div className="pageHeader-container-bg">
                <img src={img} alt="" />
            </div>
            <div className="pageHeader-content">
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
        </div>
    </header>
  )
}

export default PageHeader