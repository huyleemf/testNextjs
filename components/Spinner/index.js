import React from 'react';
import { Spinner } from 'react-bootstrap';
import 'css/spinner.css';

const snippet = () => {
    return (
        <div className="container" style={{marginTop:200}}>
            <div className="loading">
                <Spinner animation="border" />
            </div>
        </div>
    );
};

export default snippet;
