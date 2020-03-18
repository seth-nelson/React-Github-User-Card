import React from 'react';
import User from './User';


function FollowerList(props) {
    console.log('data return', props);
        return (
            <div className='data-container'>
                <User 
                    image={props.user.avatar_url}
                    header={props.user.login}
                    url={props.user.html_url}
                />
                <h2>{props.user.login}'s Followers</h2>
                <br/>
                {props.followers.map(follower => (
                    <User 
                        key={follower.id}
                        image={follower.avatar_url}
                        header={follower.login}
                        url={follower.html_url}
                    />
                ))}
            </div>
        );
}


export default FollowerList;