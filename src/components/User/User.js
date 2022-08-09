import React from 'react';
import './User.css';

const User = (props) => {

    const {name, email, phone, picture} = props.user;

    return (
        <div className='single-user'>
            <div className='user-img'>
                <img src={picture.large} alt="user thumbnail" />
            </div>
            <div className="user-info">
                <h3>Name : {name.first + ' ' + name.last}</h3>
                <p>email : {email}</p>
                <p>Phone : {phone}</p>
                <button>Add me</button>
            </div>
        </div>
    );
};

export default User;