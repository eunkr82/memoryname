import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Index = () => {
    return (
        <div className="container">
            <div className="menu-box">
                <div className="logo-wrap">
                    <div className='logo-box'>
                        <img src={require('../assets/logo.png')}/>
                    </div>
                    <div className='date-box'>
                        <img src={require('../assets/date.png')}/>
                    </div>
                </div>
                <div className="button-wrap">
                    <Link to="/test">
                        <button className='btn'>
                            <p>
                                기억의 이름 인물 테스트
                            </p>
                        </button>
                    </Link>
                    <Link to="/program">
                        <button className='btn'>
                            <p>
                                프로그램북
                            </p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        
    );
};

export default Index;