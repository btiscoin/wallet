import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Loading = ({ auth }) => {

    const navigate = useNavigate();

    useEffect(() => {
        // login.jsx에서처럼 사용자의 auth state가 변경되면 이동되도록 하자.
        auth.onAuthChange(user => {
            if (user) {
                navigate("/mywallet");
            } else {
                navigate("/login");
            }
        })
    });

    return (
        
        <div>
            <h1>Loading</h1>
        </div>
    );
};

export default Loading;
