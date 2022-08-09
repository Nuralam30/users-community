import React from 'react';
import './User.css';
import { useState } from 'react';

const User = (props) => {

    const {name, email, phone, picture, location} = props.user;
    const fullName = name.first + ' ' + name.last;
    const [phoneNum, setPhoneNum] = useState();

    const showPhone = () => setPhoneNum(phone)

    return (
        <div className='single-user'>
            <div className='user-img'>
                <img src={picture.large} alt="user thumbnail" />
            </div>
            <div className="user-info">
                <h3>Name : {fullName}</h3>
                <p>email : {email}</p>
                <p>Location : {location.city + ', ' + location.country}</p>
                <p>Phone : {phoneNum}</p>
                <button onClick={showPhone} style={{marginRight: '10px'}}>Show Phone</button>
                <button>Add me</button>
            </div>
        </div>
    );
};

export default User;