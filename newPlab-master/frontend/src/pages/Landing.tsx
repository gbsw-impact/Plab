import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Mockup from '../assets/landing.png';
import Header from '../components/Header';

function Landing() {

  const navigate = useNavigate();

  return (
    <>

      <Header />
      <Page>
        <div className='inner'>
          <div className='land-main'>
            <div className='land-left'>
              <img src={Mockup} className='mockup' />
            </div>
            <div className='land-right'>
              <p>경소고 실습실 대여 및 프로젝트 구인 서비스</p>
              <h1>플랩</h1>
              <div className='button-box'>
                <button
                  className='btn-rent'
                  onClick={() => {
                    navigate('/lab');
                  }}
                >
                  실습실 대여
                </button>
                <button
                  className='btn-project'
                  onClick={() => {
                    navigate('/project');
                  }}
                >
                  프로젝트 구인
                </button>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </>
  );
}

const Page = styled.div`
  display: flex;
  align-items: center;
  .land-main {
    height: calc(100vh - 80px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .land-left {
      margin-right: 24px;
    }
    .mockup {
      width: 100%;
      max-width: 400px;
    }
    .land-right {
      min-width: 450px;
      display: flex;
      flex-direction: column;
      align-items: start;
      p {
        font-size: 24px;
        font-weight: 700;
        margin: 0;
        margin-bottom: 45px;
        margin-left: 5px;
      }
      h1 {
        font-family: '달라왕 Bold';
        font-size: 72px;
        color: #6a96ec;
        margin: 0;
        margin-bottom: 60px;
      }
      .button-box > button {
        margin: 0;
        font-weight: 500;
        cursor: pointer;
        width: 150px;
        height: 50px;
        border-radius: 500px;
        margin-right: 20px;
      }
      .btn-rent {
        color: #fff;
        background-color: #6a96ec;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
      }
      .btn-project {
        color: #6a96ec;
        background-color: #fff;
        border: 2px solid #6a96ec;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
      }
    }
  }
`;

export default Landing;
