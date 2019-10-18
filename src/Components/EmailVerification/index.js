import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default function EmailVerification() {
    const url = window.location.href;
    const path = window.location.pathname + '/';
    const pathSplit = path.split('/');
    let id = pathSplit[2];
    let hash = pathSplit[3];

    axios.get(`http://192.168.0.104:8000/api/email-verification/${id}${hash}`)
    .then(res => {
        console.log(res)
    });

    return (
        <React.Fragment></React.Fragment>
    )
}

// uId = 36
