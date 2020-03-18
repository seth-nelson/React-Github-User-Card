import React from 'react';


function User(props) {
    console.log('user data return', props)
    return (
        <div className='user-card'>
            <a href={props.url} className='user-card'>
                <img src={props.image} alt={props.header} />
                <h2>{props.header}</h2>
                <p>{props.subheader}</p>
            </a>
        </div>
    );
}


export default User;