import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <FooterStyle>
      <div id='footer-content'>
        <div id='footer-nav'>
          <a id='footer-nav-title'>플랩</a>
          <nav>
            <a
              className='footer-nav-border'
              onClick={() => {
                navigate('/');
              }}
            >
              문의하기
            </a>
            <a
              className='footer-nav-border'
              onClick={() => {
                navigate('/lab');
              }}
            >
              실습실 대여
            </a>
            <a
              onClick={() => {
                navigate('/project');
              }}
            >
              프로젝트 구인
            </a>
          </nav>
        </div>
        <div id='footer-text'>
          팀장 : 성홍제 / 팀원 : 강한, 권가령, 이수환
          <br />
          이메일 : pllo13551@gmail.com
          <br />
          플랩 ⓒ 2024 PLAB. ALL RIGHT RESERVED
        </div>
      </div>
    </FooterStyle>
  );
};

const FooterStyle = styled.div`
  width: 100%;
  height: 150px;
  background-color: #333;
  display: flex;
  justify-content: center;
  #footer-content {
    text-align: left;
    width: 100%;
    height: 100%;
    max-width: 1080px;
    padding: 15px 0;
    #footer-nav {
      color: #ddd;
      height: 40px;
      display: flex;
      align-items: center;
      gap: 20px;
      > * {
        cursor: pointer;
      }
      > nav > a {
        padding: 0px 25px;
      }
      .footer-nav-border {
        border-right: 1px solid #ddd;
      }
      #footer-nav-title {
        font-size: 32px;
        font-family: '달라왕 Bold';
      }
    }
    #footer-text {
      margin-top: 10px;
      color: #999;
      line-height: 150%;
      font-size: 14px;
    }
  }
`;

export default Footer;
