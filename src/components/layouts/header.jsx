import React from 'react';

const Header = ({ onLogout }) => {
    return (
        <header >
        //Login에 있는 Header는 onLogout을 props로 전달해주지 않았기 때문에,
        //먼저 onLogout 널체크 후 있을 경우만 로그아웃 버튼을 렌더링 해주도록 만들자.
            {onLogout && <button onClick={onLogout}>Logout</button>}
            <h1>Contact Numbers</h1>
        </header>
    );
};

export default Header;
