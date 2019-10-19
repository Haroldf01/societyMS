import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../assets/img/PageNotFound.png';

export default function FourOhFourError() {
    document.title = 'Not Found'
    return (
        <React.Fragment>
            <div>
                <img src={PageNotFound} />
                <p style={{ textAlign: "center" }}>
                    <Link to="/">Go to Home </Link>
                </p>
            </div>
        </React.Fragment>
    )
}
