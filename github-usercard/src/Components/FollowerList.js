import React from 'react';
import User from './User';


function FollowerList(props) {
    console.log('follower list data return', props);
        return (
            <div className='follower-list-container'>
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