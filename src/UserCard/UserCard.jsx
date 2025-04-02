import React from 'react';
import './UserCard.scss';

const UserCard = ({ name, email, profilePicture }) => {
  return (
    <div className="user-card">
      <img src={profilePicture} alt={`${name}'s profile`} className="user-card__image" />
      <div className="user-card__info">
        <h3 className="user-card__name">{name}</h3>
        <p className="user-card__email">{email}</p>
      </div>
    </div>
  );
};

export default UserCard;