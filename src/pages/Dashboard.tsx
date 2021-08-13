import React from 'react'
import firebase from 'firebase/app';

export default function Dashboard() {
    return (
        <div>
            {firebase.auth().currentUser?.email}
        </div>
    )
}
