import React from 'react'

interface Props {
  img: string
  nameService: string
}

const Service: React.FC<Props> = ({ img, nameService }) => {
  return (
    <div className='service'>
      <div className='service__img-wrap'>
        <img className='service__img' src={img} alt={nameService} />
      </div>
      <div className='service__body'>
        <p className='service__name'>{nameService}</p>
        <span className='service__cta'>Ver →</span>
      </div>
    </div>
  )
}

export default Service