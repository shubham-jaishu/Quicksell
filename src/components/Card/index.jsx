import React from 'react';
import './card.css';
import UserIcon from '../UserIcon';
import { getStatusIcon } from '../../utils/helper';
import treeDot from '../../icons/3 dot menu.svg'

function Card({ ticket, userData, hideStatusIcon, hideProfileIcon }) {
  return (
    <div className='card'>
      <div className='top-container'>
        <div className='ticket-id'>{ticket.id}</div>
        {!hideProfileIcon && <UserIcon name={userData.name} available={userData.available} />}
      </div>
      <div className='middle-container'>
        {!hideStatusIcon && getStatusIcon(ticket.status)}
        <div className='title'>{ticket.title}</div>
      </div>
      <div className='bottom-container'>
        <div className='more-icon-container'>
          {/* <LuMoreHorizontal color="#797d84" /> */}
          <img src={treeDot} alt="" />
        </div>
        {ticket.tag.map((t) => (
          <div key={t} className='tag-container'>
            <div className='tag-icon'></div>
            <div className='tag-text'>{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
