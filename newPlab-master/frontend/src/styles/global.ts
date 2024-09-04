import { createGlobalStyle } from "styled-components";
import DallarKingBold from "../assets/font/달라왕 Bold.ttf";
import PretendardBold from "../assets/font/Pretendard-Bold.otf";
import PretendardExtraBold from "../assets/font/Pretendard-ExtraBold.otf";
import PretendardLight from "../assets/font/Pretendard-Light.otf";
import PretendardMedium from "../assets/font/Pretendard-Medium.otf";
import PretendardSemiBold from "../assets/font/Pretendard-SemiBold.otf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "달라왕 Bold";
        font-weight: bold;
        src: url(${DallarKingBold}) format("truetype");
    }

    @font-face {
        font-family: "Pretendard-Bold";
        font-weight: bold;
        src: url(${PretendardBold}) format("truetype");
    }

    @font-face {
        font-family: "Pretendard-ExtraBold";
        font-weight: bolder;
        src: url(${PretendardExtraBold}) format("truetype");
    }

    @font-face {
        font-family: "Pretendard-Light";
        font-weight: lighter;
        src: url(${PretendardLight}) format("truetype");
    }

    @font-face {
        font-family: "Pretendard-Medium";
        font-weight: normal;
        src: url(${PretendardMedium}) format("truetype");
    }

    @font-face {
        font-family: "Pretendard-SemiBold";
        font-weight: bold;
        src: url(${PretendardSemiBold}) format("truetype");
    }
    
    * { 
        box-sizing: border-box;
        font-family: "Pretendard-Medium";
    }

    html, body {
        margin: 0;
        padding: 0;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    

    a, button {
        all: unset;
    }
      
    a:link, 
    a:visited,
    a:active,
    a:hover {
     text-decoration: none;
     cursor:pointer;
    }
    
    button {
        cursor:pointer;
        text-align: center;
        transition: filter 0.2s ease;
        &:hover {
            filter: brightness(0.95);
        }
    }

    ::-webkit-scrollbar {
	    display: none;
    }   


    .inner {
        width: 100%;
        max-width: 1120px;
        height: 100%;
        margin: 0 auto;
        padding: 0 20px;
    }
    
    #root {
        margin: 0 auto;
    }
      
`;

export default GlobalStyle;
