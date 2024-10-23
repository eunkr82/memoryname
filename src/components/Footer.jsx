import React from "react";
import './Footer.css';
import logoImg from '../assets/logo_d9d9d9.svg';

const igUrl = "https://www.instagram.com/ewdm_theatre?igsh=MTQ2YmZwMWNub3BjaQ%3D%3D"
const xUrl = "https://x.com/ewdmtheatre"
const ticketUrl = "https://www.beatlive.kr/gig/85"

const Footer = () => {
    return (
        <>
            <hr/>
            <div className="Footer">
                <img className="team-logo-wrap" src={logoImg}/>
                <div className="sec">
                    <p className='mainText'>기억의 이름</p>
                    <p className='smallText'>2024.12.27-12.28 광진구 설렘아트홀</p>
                </div>
                <div className="sec">
                    <p className="secText">FOLLOW US</p>
                    <div className="iconWrap">
                        <img src={require("../assets/ig.png")}  onClick={()=>{window.open(igUrl)}} />
                        <img src={require("../assets/twt.png")} onClick={()=>{window.open(xUrl)}} />
                    </div>
                </div>
                <div className="sec">
                    <p className="secText">TICKET</p>
                    <div onClick={()=>{window.open(ticketUrl)}}>
                        <div className="linkText">예매 링크 바로가기</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;