import React, { Fragment, useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useSwipeable } from 'react-swipeable';
import $ from 'jquery';
// import history from '../utils/History';

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from 'react-share';

import QRCode from 'qrcode.react';

import { Redirect } from 'react-router-dom';

// import Preloader from './functional/Preloader';
// import SaveVCF from './functional/SaveVCF';

import background2 from '../img/background2.jpg';
import background3 from '../img/background3.jpg';
import background4 from '../img/background4.jpg';
import background5 from '../img/background5.jpg';
import backgroundVideo from "../img/vassvideo.mp4";

import { useMediaQuery } from 'react-responsive';

import ReactGlTransitionImage, {
    noiseSwirlsTransition ,
} from 'react-gl-transition-image';

import { Spring } from 'react-spring/renderprops';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0;
    overflow: hidden;
    font-family: 'Lato', sans-serif;
  }
  
  .background {
    position: fixed !important;
    min-width: 200vw !important;
    min-height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: 2;
    transition: transform 8s linear, opacity 2s linear;
  }

  .share-background {
    width: 100vw !important;
    opacity: 0;
    left: -95vw;
    top: -43vw;
    filter: blur(3px);
    transform: scale(1.2,1.2);
    transition: transform 4s linear, opacity 2s linear;
    z-index: 7;
    pointer-events: none;
  }

  .share-background-animation {
    opacity: 1 !important;
    transform: scale(1, 1) !important;
  }

  .bringForth {
    z-index: 3 !important;
  }

  .reset {
    transition: opacity 0s linear, transform 8s linear !important;
    opacity: 0;
  }
  
  .background1-wrapper {
    opacity: 1;
    z-index: 10;
    background:#000;
    
  }

  .background1 {
    height: 100% !important;
    min-width: 10vw !important;
    transform: scale(1.1) translateX(0);
    z-index: 12;
    opacity: 0;
    
    &:after {
    content: '';
    position: absolute;
    right: -30vw;
    bottom: 0;
    z-index: 22;
    width: 230vw;
    height: 240vw;
    background: radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%);
    }
  }
   

  .screen-1-animation {
    transform: scale(1.2) translateX(0);
    animation: 6s screen-1-animation both;
    animation-delay: .5s;
  }
  
  @keyframes screen-1-animation {
  0% {
    transform: scale(1.1) translateX(-1vw);
    opacity: 0;
  }
  
  10% {
    opacity: .5;
  }
  
  50% {
    transform: scale(1.1) translate(-5vw, 2vw);
    opacity: 1;
  }
  
  90% {
    opacity: 1;
  }
  
  100% {
    transform: scale(1.1) translateX(0);
    opacity: 0;
    z-index: -20;
  }
}

  .background2 {
    transform: translateX(-20%);
    opacity: 0;
    
     &:after {
    content: '';
    position: absolute;
    right: -30vw;
    bottom: 0;
    width: 230vw;
    height: 240vw;
    background: radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(2,2,3,0.6629026610644257) 48%, rgba(0,0,0,1) 100%);
    }
  }
  
  
  .screen-2-animation {
    opacity: 1 !important;
    animation: 5s screen-2-animation linear;
  }
  
  .screen-2-animation-2 {
    opacity: 1 !important;
    animation: 5s screen-2-animation-2 infinite;
  }
  
  @keyframes screen-2-animation {
  0% {
    transform: scale(1.5) translate(-16vw, 23vw);
    opacity: 1;
  }
  
  50% {
    transform: scale(1.1) translate(-50vw, 6vw);
    opacity: 1;
  }
  
  100% {
    transform: scale(1.1) translate(-40vw, 4vw);
    opacity: 1;
  }
}

 @keyframes screen-2-animation-2 {
  0% {
    transform: scale(1.1) translate(-40vw, 4vw);
  }

  50% {
    transform: scale(1.1) translate(-45vw, 6vw);
  }
  
   100% {
    transform: scale(1.1) translate(-40vw, 4vw);
  }
}

  .background3 {
    transform: translateX(-20%);
    opacity: 0;
    position: relative;
    
    &:before {
      content: url('./img/background3-lady.png');
      position: absolute;
      left: 19%;
      top: 39%;
      z-index: 1;
      animation: 7s screen3-animation-lady linear;
      animation-delay: 1s;
      opacity: 1;
    }
    
    &:after {
    content: '';
    position: absolute;
    right: -30vw;
    bottom: 0;
    z-index: 2;
    width: 230vw;
    height: 240vw;
    background: radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(2,2,3,0.6629026610644257) 48%, rgba(0,0,0,1) 100%);
    }
  }
  
  @keyframes screen3-animation-lady {
  0% {
    transform: translate(-24%, -20%);
    opacity: 1;
  }
 
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
} 

  .screen-3-animation {
    opacity: 1 !important;
    animation: 5s screen3-animation linear;
  }
  
  @keyframes screen3-animation {
  0% {
    transform: translateX(-10%);
    opacity: 1;
  }
 
  100% {
    transform: translateX(-20%);
    opacity: 1;
  }
  }

  .background4 {
    transform: scale(1.2, 1.2) translateX(-10%);
    
    &:after {
    content: '';
    position: absolute;
    right: -30vw;
    bottom: 0;
    width: 230vw;
    height: 240vw;
    background: linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(0,0,0,1) 100%);
    }
    
    &:before {
      content: url('./img/background4-table.png');
      position: absolute;
      left: -2%;
      top: 55%;
      z-index: 1;
      transform: translate(5%, -7%);
      animation: 10s screen4-animation-table linear;
      animation-delay: 1s;
      opacity: 1;
    }
  }
  
   @keyframes screen4-animation-table {
  0% {
    transform: translate(10%, 0);
    opacity: 1;
  }
 
  100% {
    transform: translate(5%, -7%);
    opacity: 1;
  }
} 

  .screen-4-animation {
    opacity: 1 !important;
    transform: scale(1, 1) translateX(-5%);
  }

  .background5 {
    transform: scale(1.2, 1.2) translateX(0%);
  }

  .screen-5-animation {
    opacity: 1 !important;
    transform: scale(1, 1) translateX(-15%);
  }
  
  
  .player {
    width: 5vw;
    height: 5vw;
    position: fixed;
    bottom: 13vw;
    left: 10vw;
    z-index: 10;
    border: none;
    background: url("./img/volume-icon.svg") no-repeat;
    transform: translateX(-25vw);
    transition: transform 2s ease-in-out, opacity 2s linear;
  }

  button, 
  button:active, 
  button:focus {
      outline: none;
  }
  
  .player-animation {
    opacity: 1 !important;
    transform: scale(1, 1) translateX(0);
  }


  .hide {
    transition: opacity 0s linear;
    display: flex !important;
    opacity: 0 !important;
    pointer-events: none !important;
  }

  .screen-3-animation {
    opacity: 1 !important;
  }

  .screen-4-animation {
    opacity: 1 !important;
  }

  .screen-5-animation {
    opacity: 1 !important;
  }

  
  .image-nav {
    position: fixed;
    display: none;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    right: 7vw;
    bottom: 12vw;
    z-index: 4;
    opacity: 0;
  }

  .arrow-img {
    width: 2.5vw;
    height: 5vw;
  }

  .arrow-image-wrapper {
    transition: opacity 1s linear !important;
    opacity: 1;
    pointer-events: all;
    display: block;
    height: 18px;
    margin: 5px;
  }
  
  .arrow-image-wrapper-show {
    display: flex;
    opacity: 1 !important;
  }

  .arrow-image-gone {
    opacity: .4 !important;
    pointer-events: none !important;
  }

  .dot-img {
    background: white;
    border-radius: 1vw;
    width: 1vw;
    height: 1vw;
    margin: 1vw;
    opacity: 0.4;
  }

  .dot-img-focused {
    background: white !important;
    opacity: 1;
  }

  .share-icon-wrapper {
    position: relative;
  }

  .share-icon-wrapper-2 {
    position: fixed;
    top:8vw;
    right: 10vw;
    transition: opacity 1s linear;
    pointer-events: all;
  }

  .share-icon-wrapper-2-animation {
    opacity: 0 !important;
    pointer-events: none !important;
    z-index: 10;
  }

  .share-icon {
    width: 5.5vw;
  }
  
  .background1-wrapper {
    width: 100%;
    height: 100%;
    object-fit: cover;
    
    &:before {
      content: '';
      position: absolute;
      top: 20vw;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%);
      z-index: 1;
    }
  }
  
  .background1 {
    position: relative;
    z-index: -1;
    width: 100%;
    transform: scale(1.3);
    margin-top: 5vw;
    opacity: 0;
    object-fit: cover;
    animation: 6s screen-1-animation both;
    animation-delay: .5s;
    box-shadow: 0 0 5px #888;
  }


  .info-wrapper {
    z-index: 8;
    left: 8vw;
    top: 0;
    position: fixed;
    height: 100%;
  }
  
  .info-wrapper-bottom {
    top: 65vw;
    left: 50%;
    transform: translate(-50%, 0);
    
    .text-1 {
       text-align: center;
    }
    
    .text-2 {
       text-align: center;
    }
  }
  
  .info-wrapper-top {
  bottom: auto;
  top: -2vw;
  left: 8vw;
  transform: translate(0, 0);
  
    .text-1, text-2 {
     text-align: left;
    }
   
  }
  

  .text-1 {
    font-size: min(9vw, 3.7vh);
    font-family: 'Abril Fatface', sans-serif;
    letter-spacing: 1.2vw;
    line-height: 1.3;
    color: #FCF8F8;

    transform: translateX(-40vw);
    opacity: 0;

    transition: transform 2s ease-in-out, opacity 2s linear;
  }

  .text-2 {
    font-size: min(3.5vw, 2.5vh);
    color: #FCF8F8;
    letter-spacing: 0.5vw;
    font-weight: 300;
    line-height: 1.2;
    margin-top: 4vw;

    transform: translateX(-60vw);
    opacity: 0;

    transition: transform 2s ease-in-out, opacity 2s linear;
  }

  .text-3 {
    font-size: min(3.5vw, 2.2vh);
    color: #FCF8F8;
    letter-spacing: 0.3vw;
    font-weight: 400;
    display: inherit;
    text-decoration: none;

    transform: translateX(-80vw);
    opacity: 0;

    transition: transform 2s ease-in-out, opacity 2s linear;
  }
  
  .btn-enter {
   text-transform: uppercase;
    text-decoration: none;
    color: #FCF8F8;
    font-size: min(3.9vw,2.5vh);
    letter-spacing: 0.9vw;
    font-weight: 900;
    display: block;
    margin: 0 auto;
    text-align: center;
    z-index: 8;
    transition: transform 2s ease-in-out, opacity 2s linear;
    opacity: 0;
  }
  
  
  .background1 > div {
    &:after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -10vw;
    width: 130vw;
    height: 80vw;
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%);
    }
    
   }
  


  .insta-icon {
    height: 4.5vw;
    margin-top: 7vw; 
  }

  
  .insta-icon-wrapper {
    position:fixed;
    z-index: 10;
    top: 2vw;
    transform: translateX(-90vw);
    opacity: 0;

    transition: transform 2s ease-in-out, opacity 2s linear;
  }
  
  .fb-icon-wrapper {
     position:fixed;
    z-index: 10;
    top: 2vw;
    transform: translateX(-100vw);
    opacity: 0;

    transition: transform 2s ease-in-out, opacity 2s linear;
  }
  
  

  .save-wrapper {
    border-radius: 10vw;
    padding: 2.6vw 0;
    width: 39vw;
    color: #FCF8F8;
    border: 1px solid rgb(252,248,248,0.5);
    font-weight: 700;
    text-transform: uppercase;
    font-size: 3vw;
    text-decoration: none;
    z-index: 8;
    position: fixed;
    left: 50%;
   
    bottom: 11vw;
    text-align: center;
    
    margin-top: auto;

    transform: translateX(-120vw);
    opacity: 0;

    transition: transform 2s ease-in-out, opacity 2s linear;
  }
  
  
  .save-wrapper-animation {
  transform: translateX(-50%);
    opacity: 1;
  }
  
  .arrow-img {
    width: 2.5vw;
    height: 5vw;
  }

  
  .share-block {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    pointer-events: none;
    transition: transform 1s ease-in-out, opacity 0.5s linear;
    will-change: opacity;
    opacity: 0;
    transform: translateX(100%);
  }

  .share-block-animation {
    opacity: 1 !important;
    transform: translateX(0) !important;
    pointer-events: all !important;
  }

  .share-block-logo {
    position: absolute;
    top: -20vw;
    width: 40vw;
    transform: translateY(20vw);
    will-change: transform;
    transition: transform 1s ease-in-out;
  }

  .share-block-content {
    height: 100%;
    width: 100%;
    position: fixed;
    will-change: transform;
    transition: transform 1.5s ease-in-out;
  }

  .share-block-content-title {
    color: white;
    font-size: 4vw;
    font-weight: 300;
    letter-spacing: 0.3vw;
    margin-bottom: 6vw;
    text-align:center;
  }

  .share-icon-wrapper {
    margin-left: 3vw;
    margin-right: 3vw;
    margin-bottom: 6vw;
  }

  .share-icon-img {
    width: 11vw;
    border-radius: 50%;
  }

  .text-1-animation {
    animation: 1s fadeInUp;
    animation-fill-mode: both;
    animation-delay: 1.1s;
  }

  .text-2-animation {
    animation: 1s fadeInUp;
    animation-fill-mode: both;
    animation-delay: 1.3s;
  }

  .text-3-animation {
    animation: 1s fadeInUp;
    animation-fill-mode: both;
    animation-delay: 1.3s;
  }

  .insta-animation {
    opacity: 1;
    transform: translateX(15vw);
    z-index: 7;
  }
  
  .fb-animation {
    opacity: 1;
    transform: translateX(6vw);
    z-index: 7;
  }

  .save-animation {
    opacity: 1;
    transform: translateX(-50%);
    left: 50%;
  }
  
  .btn-enter-animation {
     animation: 1s fadeInUp;
    animation-fill-mode: both;
    animation-delay: 1.5s;
    opacity: 1;
  }

  .image-nav-animtion-share {
    transition: opacity 0.5s linear;
    opacity: 0 !important;
  }

  .logo-animation-share {
    transition: opacity 0.5s linear;
    opacity: 0 !important;
  }

  .text-1-animation-share {
    transition: opacity 0.5s linear;
    opacity: 0 !important;
  }

  .text-2-animation-share {
    transition: opacity 0.5s linear;
    opacity: 0 !important;
  }

  .text-3-animation-share {
    transition: opacity 0.5s linear;
    opacity: 0 !important;
  }

  .insta-animation-share {
    transition: opacity 0.5s linear;
    opacity: 0 !important;
  }
  
  .fb-animation-share {
    transition: opacity 0.5s linear;
    opacity: 0 !important;
  }

  .save-animation-share {
    transition: opacity 0.5s linear;
    opacity: 0 !important;
  }

  .blur-animation-1-share {
    transform: translateX(0vw) !important;
  }

  .blur-animation-2-share {
    transform: translateX(0vw) !important;
  }

  .logo-animation-share {
    opacity: 0;
  }

  .share-icon {
    width: 5.5vw;
  }

  .share-block-content-icons {
    width: auto;
    height: auto;
  }

  .close-img-wrapper {
    position: absolute;
    top: 5vw;
    right: 5vw;
  }

  .close-img {
    width: 3vw;
  }

  .share-name {
    position: fixed;
    top: 2vw;
    left: 8vw;
    color: white !important;
  }

  .share-name-text {
    font-size: min(9vw, 3.4vh);
    font-family: 'Abril Fatface', sans-serif;
    letter-spacing: 1.2vw;
    line-height: 1.3;
    color: #FCF8F8;
    opacity: 0;
  }
  
  .share-name-text-animated {
    opacity: 1 !important;
    transform: translateX(0px) !important;
  }
  
@keyframes fadeInUp {
    from {
        transform: translate3d(0,20px,0);
        opacity: 0;
    }

    to {
        transform: translate3d(0,0,0);
        opacity: 1
    }
}

@keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
}


@keyframes fadeInOut {
    0% {
		opacity: 0;
		transform: translate3d(0,20px,0);
	}	25% {
		opacity: 1;
		transform: translate3d(0,0,0);
	}
    75% {
		opacity: 1;
		transform: translate3d(0,0,0);
	}
    100% {
		opacity: 0;
		transform: translate3d(0, 100%, 0);
	}
}


.fadeInOut {
  animation: 6s fadeInOut both;
  animation-delay:1s;   
}

.fadeOutDown {
  animation-name: fadeOutDown;
}


.fadeInUp {
    opacity: 0;
    animation-name: fadeInUp;
}

  #share-1, #share-2, #share-3, #share-4, #share-5, #share-6 {
    transition: opacity 0.5s linear, transform 1.5s ease-in-out;
    will-change: opacity, transform;
  }

  #share-1 {
    transform: translateX(10vw);
    opacity: 0;
  }

  #share-2 {
    transform: translateX(30vw);
    opacity: 0;
  }

  #share-3 {
    transform: translateX(50vw);
    opacity: 0;
  }

  #share-4 {
    transform: translateX(70vw);
    opacity: 0;
  }

  #share-5 {
    transform: translateX(90vw);
    opacity: 0;
  }

  #share-6 {
    transform: translateX(110vw);
    opacity: 0;
  }
  
  .qrcode-wrapper {
    width: 37vw;
    height: 37vw;
    margin: 0 auto;
    border-radius: 15%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .share-elements-animation {
    opacity: 1 !important;
    transform: translateX(0) !important;
  }

`;



const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(true);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
            playing ? audio.play() : audio.pause();
        },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

const Player = ({ url }) => {
    const [playing, toggle] = useAudio(url);

    return (
        <>
            <button className='player' onClick={toggle}></button>
        </>
    );
};




const Vassiliki = ( { match }) => {
  const shareLink = window.location.href;
  const shareMessage =
    'Hello,\nYou can view/save my digital business card from the link below.';

  const [currentBackground, setCurrentBackground] = useState(1);
  const [direction, setDirection] = useState(false);

  const [firstLoad, setFirstLoad] = useState(true);

  const [redirect, setRedirect] = useState(false);

    const [intervalId, setIntervalId] = useState();

  const isMobile = useMediaQuery({ query: `(max-width: 500px)` });
  useEffect(() => {
    if (window.innerWidth >= 500) {
      setRedirect(true);
    }
  }, [isMobile]);

  const nextImage = () => {
    setDirection(false);
    setCurrentBackground(currentBackground + 1 > 5 ? 5 : currentBackground + 1);
  };

  const prevImage = () => {
    setDirection(true);
    setCurrentBackground(currentBackground - 1 < 2 ? 2 : currentBackground - 1);
  };

  useEffect(() => {
    setBackground(currentBackground);
  }, [currentBackground]);

  const setBackground = (background) => {
    const backwards = direction;
    setCurrentBackground(background);

    switch (background) {
      case 1:
        if (backwards) {

        } else {
          $('.background1').removeClass('hide');
          $('.background2').addClass('hide');
          $('.background3').addClass('hide');
          $('.background4').addClass('hide');
          $('.background5').addClass('hide');
          $('.background6').addClass('hide');
          $('.share-icon-wrapper-2').addClass('hide');
          $('.insta-icon-wrapper').removeClass('insta-animation');
          $('.fb-icon-wrapper').removeClass('fb-animation');
          $('.player').removeClass('player-animation');



        }

        if (!firstLoad) {

          $('.background2').removeClass('bringForth');
          $('.background3').removeClass('bringForth');
          $('.background4').removeClass('bringForth');
          $('.background5').removeClass('bringForth');
          $('.background6').removeClass('bringForth');

          $('.background2').removeClass('screen-2-animation');
          $('.background3').removeClass('screen-3-animation');
          $('.background4').removeClass('screen-4-animation');
          $('.background5').removeClass('screen-5-animation');

        } else {
          $('.background1').addClass('screen-1-animation');
          setFirstLoad(false);
        }

        break;
      case 2:
        if (backwards) {

          $('.background2').removeClass('hide');
          $('.background3').removeClass('hide');
          $('.background4').addClass('hide');
          $('.background5').addClass('hide');
          $('.background6').addClass('hide');
        } else {

          $('.background2').removeClass('hide');
          $('.background3').addClass('hide');
          $('.background4').addClass('hide');
          $('.background5').addClass('hide');
          $('.background6').addClass('hide');

        }


        $('.background2').addClass('bringForth');
        $('.background3').removeClass('bringForth');
        $('.background4').removeClass('bringForth');
        $('.background5').removeClass('bringForth');
        $('.background6').removeClass('bringForth');

        $('.background1').removeClass('screen-1-animation');
        $('.background3').removeClass('screen-3-animation');
        $('.background4').removeClass('screen-4-animation');
        $('.background5').removeClass('screen-5-animation');


          $('.image-nav').addClass('arrow-image-wrapper-show');
          $('.save-wrapper').addClass('save-wrapper-animation');
          $('.share-icon-wrapper-2').removeClass('hide');
          $('.insta-icon-wrapper').addClass('insta-animation');
          $('.fb-icon-wrapper').addClass('fb-animation');
          $('.background2-shadow').removeClass('hide');
          $('.player').addClass('player-animation');
          $('.info-wrapper').removeClass('info-wrapper-bottom');

          setTimeout( () => {
              $('.info-wrapper').addClass('info-wrapper-top');
              $('.text-1').addClass('text-1-animation');
              $('.text-2').addClass('text-2-animation');
              $('.text-3').addClass('text-3-animation');
          }, 1000)


        $('.background2').addClass('reset');

        setTimeout(() => {
          $('.background2').removeClass('reset');
          $('.background2').addClass('screen-2-animation');
        }, 400);

          setTimeout(() => {
              $('.background2').removeClass('screen-2-animation');
              $('.background2').addClass('screen-2-animation-2');
          }, 5000);

        break;
      case 3:
        if (backwards) {

          $('.background2').removeClass('hide');
          $('.background3').removeClass('hide');
          $('.background4').removeClass('hide');
          $('.background5').addClass('hide');
          $('.background6').addClass('hide');
        } else {

          $('.background2').removeClass('hide');
          $('.background3').removeClass('hide');
          $('.background4').addClass('hide');
          $('.background5').addClass('hide');
          $('.background6').addClass('hide');
        }


        $('.background2').removeClass('bringForth');
        $('.background3').addClass('bringForth');
        $('.background4').removeClass('bringForth');
        $('.background5').removeClass('bringForth');
        $('.background6').removeClass('bringForth');


        $('.background2').removeClass('screen-2-animation');
        $('.background2').removeClass('screen-2-animation-2');
        $('.background4').removeClass('screen-4-animation');
        $('.background5').removeClass('screen-5-animation');

        $('.background3').addClass('reset');

        setTimeout(() => {
          $('.background3').removeClass('reset');
          $('.background3').addClass('screen-3-animation');
        }, 400);
        break;
      case 4:
        if (backwards) {

          $('.background2').removeClass('hide');
          $('.background3').removeClass('hide');
          $('.background4').removeClass('hide');
          $('.background5').removeClass('hide');
          $('.background6').addClass('hide');
        } else {

          $('.background2').removeClass('hide');
          $('.background3').removeClass('hide');
          $('.background4').removeClass('hide');
          $('.background5').addClass('hide');
          $('.background6').addClass('hide');
        }


        $('.background2').removeClass('bringForth');
        $('.background3').removeClass('bringForth');
        $('.background4').addClass('bringForth');
        $('.background5').removeClass('bringForth');
        $('.background6').removeClass('bringForth');


        $('.background2').removeClass('screen-2-animation');
        $('.background2').removeClass('screen-2-animation-2');
        $('.background3').removeClass('screen-3-animation');
        $('.background5').removeClass('screen-5-animation');

        $('.background4').addClass('reset');

        setTimeout(() => {
          $('.background4').removeClass('reset');
          $('.background4').addClass('screen-4-animation');
        }, 400);

        break;

      default:
        if (backwards) {
          $('.background1').removeClass('hide');
          $('.background2').removeClass('hide');
          $('.background3').removeClass('hide');
          $('.background4').removeClass('hide');
          $('.background5').removeClass('hide');
          $('.background6').removeClass('hide');
        } else {
          $('.background1').removeClass('hide');
          $('.background2').removeClass('hide');
          $('.background3').removeClass('hide');
          $('.background4').removeClass('hide');
          $('.background5').removeClass('hide');
          $('.background6').removeClass('hide');
        }

        $('.background1').removeClass('bringForth');
        $('.background2').removeClass('bringForth');
        $('.background3').removeClass('bringForth');
        $('.background4').removeClass('bringForth');
        $('.background5').removeClass('bringForth');
        $('.background6').addClass('bringForth');
        break;
    }
  };

  const share = () => {
    SaveVCF(
      'Vassiliki',
      'Karayanni',
      'Coloratura Soprano',
      '+30 6977014297',
      '',
      'artcoolcards.gr/vassiliki-karayanni',
      'info@vassilikikaragianni.com',
      'www.vassilikikaragianni.com',
      '',
      '',
      '',
      ''
    );
  };

  const swipeConfig = {
    delta: 10, // min distance(px) before a swipe starts
    preventDefaultTouchmoveEvent: false, // preventDefault on touchmove, *See Details*
    trackTouch: true, // track touch input
    trackMouse: true, // track mouse input
    rotationAngle: 0, // set a rotation angle
  };

  const handler = useSwipeable({
    onSwiped: (eventData) => {
      if (eventData.dir === 'Up') {
        nextImage();
      } else if (eventData.dir === 'Down') {
        prevImage();
      }
    },
    ...swipeConfig,
  });


  useEffect(() => {
      showIntro();
  //  history.push('/vassiliki-Karayanni');
      const id = setTimeout(() => {
          closeIntro();
          setCurrentBackground(2);
      }, 6500);
      setIntervalId(id);
      return () => clearInterval(id);

      //eslint-disable-next-line
      }, []);

  //   // if (match.params.save && match.params.save === 'save') {
  //   //   share();
  //   // }
  //   //eslint-disable-next-line
  // }, []);

  const showIntro = () => {
      $('.background1').addClass('background1-animation');
      $('.info-wrapper').addClass('info-wrapper-bottom');
      $('.btn-enter').addClass('fadeInOut');
      $('.text-1').addClass('fadeInOut');
      $('.text-2').addClass('fadeInOut');
      $('.btn-enter').addClass('btn-enter-animation');
  }

  const closeIntro = () => {
      $('.background1').removeClass('background1-animation');
      $('.background1').addClass('hide');
      $('.btn-enter').removeClass('btn-enter-animation');
      $('.text-1').removeClass('text-1-animation');
      $('.text-2').removeClass('text-2-animation');
      $('.btn-enter').removeClass('fadeInOut');
      $('.text-1').removeClass('fadeInOut');
      $('.text-2').removeClass('fadeInOut');
  };

  const openShare = () => {
    $('.image-nav').addClass('image-nav-animtion-share');

    $('.text-1').addClass('text-1-animation-share');
    $('.text-2').addClass('text-2-animation-share');
    $('.text-3').addClass('text-3-animation-share');
    $('.share-name-text').addClass('share-name-text-animated');

    $('.insta-icon-wrapper').addClass('insta-animation-share');
      $('.fb-icon-wrapper').addClass('fb-animation-share');

    $('.save-wrapper').addClass('save-animation-share');

    $('.share-block').addClass('share-block-animation');

    $('.share-icon-wrapper-2').addClass('share-icon-wrapper-2-animation');

    $('.share-background').addClass('share-background-animation');

    $('#share-1').addClass('share-elements-animation');
    $('#share-2').addClass('share-elements-animation');
    $('#share-3').addClass('share-elements-animation');
    $('#share-4').addClass('share-elements-animation');
    $('#share-5').addClass('share-elements-animation');
    $('#share-6').addClass('share-elements-animation');
  };

  const closeShare = () => {
    $('.image-nav').removeClass('image-nav-animtion-share');

    $('.text-1').removeClass('text-1-animation-share');
    $('.text-2').removeClass('text-2-animation-share');
    $('.text-3').removeClass('text-3-animation-share');
      $('.share-name-text').removeClass('share-name-text-animated');

    $('.insta-icon-wrapper').removeClass('insta-animation-share');
    $('.fb-icon-wrapper').removeClass('fb-animation-share');

    $('.save-wrapper').removeClass('save-animation-share');

    $('.share-block').removeClass('share-block-animation');

    $('.share-icon-wrapper-2').removeClass('share-icon-wrapper-2-animation');

    $('.share-background').removeClass('share-background-animation');

    $('#share-1').removeClass('share-elements-animation');
    $('#share-2').removeClass('share-elements-animation');
    $('#share-3').removeClass('share-elements-animation');
    $('#share-4').removeClass('share-elements-animation');
    $('#share-5').removeClass('share-elements-animation');
    $('#share-6').removeClass('share-elements-animation');
  };

  const onEnterClick = () => {
      clearInterval(intervalId)
      closeIntro();
      setCurrentBackground(2);
  }

  const customTransition = `
    const float amplitude =  100.;
    const float speed = 50.;

      vec4 transition (vec2 uv) {
        vec2 dir = uv - vec2(.5);
        float dist = length(dir);
        vec2 offset = dir/0.5 * (sin(progress * dist * amplitude - progress * speed) + .5) / 30.;
        return getToColor(uv + (offset * (1. - 1./smoothstep(0.01, 1.0, progress))) );
      }
  `;

  const startingProgress = 0;
  const tension = 100;
  const friction = 45;
  const transition = noiseSwirlsTransition ;

  if (redirect) {
    return <Redirect to={'/view' + window.location.pathname} />;
  }

  return (
    <Fragment>
      <GlobalStyle />
      {/*<Preloader dark={false} show={false} />*/}
      <div
        {...handler}
        style={{ position: 'fixed', width: '100vw', height: '100%', background: '#000' }}
      >
        <Spring
          reset={currentBackground === 2}
          config={{
            tension: tension,
            friction: friction,
            clamp: true,
          }}
          from={{ progress: startingProgress }}
          to={{ progress: 1 }}
        >
          {(animProps) => (
            <ReactGlTransitionImage
              src={background2}
              transition={transition}
              className='background background2'
              progress={animProps.progress}
              style={{ minWidth: '100vw', minHeight: '100%' }}
            />
          )}
        </Spring>
        <Spring
          reset={currentBackground === 3}
          config={{
            tension: tension,
            friction: friction,
            clamp: true,
          }}
          from={{ progress: startingProgress }}
          to={{ progress: 1 }}
        >
          {(animProps) => (
            <ReactGlTransitionImage
              src={background3}
              transition={transition}
              className='background background3'
              progress={animProps.progress}
            />
          )}
        </Spring>
        <Spring
          reset={currentBackground === 4}
          config={{
            tension: tension,
            friction: friction,
            clamp: true,
          }}
          from={{ progress: startingProgress }}
          to={{ progress: 1 }}
        >
          {(animProps) => (
            <ReactGlTransitionImage
              src={background4}
              transition={transition}
              className='background background4'
              progress={animProps.progress}
            />
          )}
        </Spring>

    <div className='background1-wrapper'>
          <video autoPlay muted="muted" loop  className='background1'>
              <source src={backgroundVideo} type="video/mp4"/>
          </video>
    </div>
        <img src={background5} className='background share-background' />
        <div
          className='share-block fl-column fl-full-center'
          style={{ zIndex: '99', top: '0' }}
        >
          <div id='share-1' className='share-name fl-column'>
            <div className='share-name-text'>Vassiliki</div>
            <div className='share-name-text'>Karayanni</div>
          </div>

          <a
            className='close-img-wrapper'
            href='#!'
            onClick={(e) => {
              e.preventDefault();
              closeShare();
            }}
            style={{ zIndex: '100' }}
          >
            <img
              className='close-img'
              src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/dimitris_stefanopoulos/close.svg'
              alt=''
            />
          </a>
          <div
            style={{ marginTop: 'auto', marginBottom: 'auto' }}
            className='fl-column fl-align-center'
          >
            <div
              id='share-2'
              className='share-block-content-title'
              style={{ marginTop: '5vw' }}
            >
              SHARE MY CARD
            </div>
            <div
              id='share-3'
              className='share-block-content-icons fl-row fl-justify-center'
            >


              <a
                href={`sms:?&body=/* ${shareMessage + '\n\n'} ${shareLink} */`}
                className='share-icon-wrapper'
              >
                <img
                  alt=''
                  src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/dimitris_stefanopoulos/sms.png'
                  className='share-icon-img'
                />
              </a>
              <ViberShareButton
                url={shareLink}
                title={shareMessage + '\n\n'}
                className='share-icon-wrapper'
              >
                <img
                  alt=''
                  src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/dimitris_stefanopoulos/viber.svg'
                  className='share-icon-img'
                />
              </ViberShareButton>
              <WhatsappShareButton
                url={shareLink}
                title={shareMessage + '\n\n'}
                className='share-icon-wrapper'
              >
                <img
                  alt=''
                  src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/dimitris_stefanopoulos/whatsapp.svg'
                  className='share-icon-img'
                />
              </WhatsappShareButton>
              <EmailShareButton
                url={shareLink}
                subject='Η Κάρτα Μου'
                body={shareMessage + '\n\n'}
                className='share-icon-wrapper'
              >
                <img
                  alt=''
                  src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/dimitris_stefanopoulos/email.svg'
                  className='share-icon-img'
                />
              </EmailShareButton>
            </div>

            <div
              id='share-4'
              className='share-block-content-icons fl-row fl-justify-center'
            >
              <FacebookShareButton
                url={shareLink}
                quote={shareMessage + '\n\n'}
                className='share-icon-wrapper'
              >
                <img
                  alt=''
                  src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/dimitris_stefanopoulos/facebook.svg'
                  className='share-icon-img'
                />
              </FacebookShareButton>
              <TelegramShareButton
                url={shareLink}
                title={shareMessage + '\n\n'}
                className='share-icon-wrapper'
              >
                <img
                  alt=''
                  src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/dimitris_stefanopoulos/telegram.svg'
                  className='share-icon-img'
                />
              </TelegramShareButton>
              <TwitterShareButton
                url={shareLink}
                title={shareMessage + '\n\n'}
                className='share-icon-wrapper'
              >
                <img
                  alt=''
                  src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/dimitris_stefanopoulos/twitter.svg'
                  className='share-icon-img'
                />
              </TwitterShareButton>
              <LinkedinShareButton
                url={shareLink}
                summary={shareMessage + '\n\n'}
                title={shareMessage + '\n\n'}
                className='share-icon-wrapper'
              >
                <img
                  alt=''
                  src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/dimitris_stefanopoulos/linkedin.svg'
                  className='share-icon-img'
                />
              </LinkedinShareButton>
            </div>

            <div
              id='share-5'
              className='share-block-content-title'
              style={{ marginTop: '10vw' }}
            >
              SCAN AND SAVE
            </div>
            <div className='qrcode-wrapper'>
            <QRCode
              id='share-6'
              value={shareLink}
              style={{
                width: '30vw',
                height: 'auto',
                padding: '3vw',
                background: 'white',
              }}
            />
            </div>
          </div>
        </div>
        <Player
          url='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/dimitris_stefanopoulos/music.mp3'
        />

          <a
              className='save-wrapper fl-row fl-align-center'
              href='#!'
              onClick={(e) => {
                  e.preventDefault();
                  share();
              }}
          >SAVE MY CONTACTS
          </a>



         <div
              className='image-nav fl-column fl-full-center'
              style={{ zIndex: '7' }}
          >
              <a
                  href='#!'
                  onClick={(e) => {
                      e.preventDefault();
                      prevImage();
                  }}
                  className={
                      currentBackground === 2
                          ? 'arrow-image-wrapper arrow-image-gone'
                          : 'arrow-image-wrapper'
                  }
              >
                  <img
                      src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/dimitris_stefanopoulos/arrow.svg'
                      alt=''
                      className='arrow-img'
                      style={{
                          transform: 'rotate(-180deg)',
                      }}
                  />
              </a>

              <div
                  className={
                      currentBackground === 2 ? 'dot-img-focused dot-img' : 'dot-img'
                  }
              />

              <div
                  className={
                      currentBackground === 3 ? 'dot-img-focused dot-img' : 'dot-img'
                  }
              />

              <div
                  className={
                      currentBackground === 4 ? 'dot-img-focused dot-img' : 'dot-img'
                  }
              />

              <a
                  href='#!'
                  onClick={(e) => {
                      e.preventDefault();
                      nextImage();
                  }}
                  className={
                      currentBackground === 4
                          ? 'arrow-image-wrapper arrow-image-gone'
                          : 'arrow-image-wrapper'
                  }
              >
                  <img
                      src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/dimitris_stefanopoulos/arrow.svg'
                      alt=''
                      className='arrow-img'
                  />
              </a>
          </div>

          <a
              href='https://instagram.com/'
              className='fb-icon-wrapper'
          >
              <img
                  src='./img/fb-icon.svg'
                  alt=''
                  className='insta-icon'
              />
          </a>

          <a
              href='https://instagram.com/'
              className='insta-icon-wrapper'
          >
              <img
                  src='./img/insta-icon.svg'
                  alt=''
                  className='insta-icon'
              />
          </a>

        <a
          className='share-icon-wrapper-2 hide'
          href='#!'
          onClick={(e) => {
            e.preventDefault();
            openShare();
          }}
          style={{ zIndex: '7' }}
        >
          <img
            src='./img/share-icon.svg'
            alt=''
            className='share-icon'
          />
        </a>

        <div
          className='info-wrapper fl-column fl-justify-center'
          style={{ zIndex: '8' }}
        >
          <div className='text-1' style={{ marginTop: 'min(55vw, 30vh)' }}>
              Vassiliki
          </div>
          <div className='text-1' style={{ marginBottom: '0.5vw' }}>
              Karayanni
          </div>
          <div className='text-2' style={{ marginBottom: 'min(9vw, 10vh)' }}>
              Coloratura Soprano
          </div>


          <a onClick={onEnterClick} className="btn-enter" href="#!">enter</a>


          <a
            className='text-3'
            href='tel:+30 6977014297'
            style={{ marginBottom: '4vw' }}
          >
              +30 6977014297
          </a>
          <a
            className='text-3'
            href='mailto:dimitris_stef@icloud.com'
            style={{ marginBottom: '4vw' }}
          >
              info@vassilikikaragianni.com
          </a>
          <a className='text-3' href='https://www.syachting.com'>
              www.vassilikikaragianni.com
          </a>

          <div
            style={{
              opacity: '0',
              width: '100%',
              height: '1px',
              position: 'relative',
              marginTop: 'auto',
            }}
          >
            placeholder
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Vassiliki;
