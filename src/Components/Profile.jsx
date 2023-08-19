import UserDataItem from "./UserDataItem";
import React, { useState, useEffect } from 'react';

let Profile = ({userLoggedIn}) => {
    let coverImageUrl = 'https://i.imgur.com/Qtrsrk5.jpg';
    const [user, setUser] = useState(null);

    useEffect(() => {
        const id =  JSON.parse(localStorage.getItem("dummyUser")).id;

        if (id) {
        fetch(`https://dummyjson.com/users/${id}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error fetching user data');
                }
            })
            .then(userData => {
                setUser(userData);
                localStorage.setItem("dummyUser", JSON.stringify(userData));
            })
            .catch(error => {
                console.error('An error occurred:', error);
            });
        }
    }, []);

    let logout = () => {
        localStorage.setItem("dummyUser", JSON.stringify({}));
        userLoggedIn(false);
    }

    return (
        <div className="center-card">
            {user ? (
                <>
                <div className="profile-images">
                    <img className="cover-img" src={coverImageUrl} alt="cover" />
                    <img className="profile-img" src={user.image} alt="profile" />
                </div>
                <div className="profile-username">{user.firstName + " " + user.lastName}</div>
                <div className="profile-email">{user.email}</div>
                <div className="profile-button"><button className="btn" onClick={logout}>Logout</button></div>
                <div className="user-data">
                    <UserDataItem title={'Id'} value={user.id} />
                    <UserDataItem title={'User Name'} value={user.username} />
                    <UserDataItem title={'Gender'} value={user.gender} />
                    <UserDataItem title={'Eye Color'} value={user.eyeColor} />
                </div>
                </>
            ) : (
                <div className="profile-username">Loading user data...</div>
            )}
        </div>
    )
}

export default Profile;