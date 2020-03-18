import React from 'react';


function User (props) {
    console.log(props)
    return (
        <div className='user-card'>
            {this.props.user.map((users => {
                    <User 
                        key={user.id}
                        image={user.avater_url}
                        header={user.login}
                        url={user.html_url}
                    />
                }))}
        </div>
    )
}


export default User;