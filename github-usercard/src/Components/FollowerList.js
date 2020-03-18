import React from 'react';
import User from './User';


function FollowerList(props) {
    console.log(props);
        return (
            <div className='follower-list-container'>
                {this.props.followerList.map((followers => {
                    <User 
                        key={followers.id}
                        image={followers.avater_url}
                        header={followers.login}
                        url={followers.html_url}
                    />
                }))}
            </div>
        );
}


export default FollowerList;