import { useState, useEffect } from 'react';
import { useNavigate, Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

interface NavProps {
  isLogin: boolean;
  handleLogout: () => void;
}

const HomeNav: React.FC<NavProps> = ({ isLogin, handleLogout }) => {
  const navigate = useNavigate();
  return (
    <nav>
      <Link to='/lab'>실습실 대여</Link>
      <Link to='/project'>프로젝트 모집</Link>
      {isLogin ? (
        <button onClick={handleLogout}>로그아웃</button>
      ) : (
        <button onClick={() => navigate('/login')}>로그인</button>
      )}
    </nav>
  );
};

const ProjectNav: React.FC<NavProps> = ({ isLogin, handleLogout }) => {
  const navigate = useNavigate();
  return (
    <nav>
      <Link to='/lab'>실습실 대여</Link>
      <Link to='/project/board'>모집글 쓰기</Link>
      {isLogin ? (
        <button onClick={handleLogout}>로그아웃</button>
      ) : (
        <button onClick={() => navigate('/login')}>로그인</button>
      )}
    </nav>
  );
};

const Navigation: React.FC<NavProps> = ({ isLogin, handleLogout }) => {
  return (
    <Routes>
      <Route path='/project' element={<ProjectNav isLogin={isLogin} handleLogout={handleLogout} />} />
      <Route path='/' element={<HomeNav isLogin={isLogin} handleLogout={handleLogout} />} />
    </Routes>
  );
};

const Header: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setIsLogin(true);
    }
  }, []);

  const handleLogout = () => {
    const confirmLogout = window.confirm('로그아웃하시겠습니까 ?');
    if (confirmLogout) {
      localStorage.removeItem('accessToken');
      setIsLogin(false);
    }
  };

  return (
    <HeaderStyle>
      <div className='inner'>
        <div className='head-container'>
          <div className='head-brand'>
            <Link to='/'>플랩</Link>
          </div>
          <Navigation isLogin={isLogin} handleLogout={handleLogout} />
        </div>
      </div>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  z-index: 1000;
  width: 100%;
  height: 75px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  border-bottom: 1px solid rgb(238, 238, 238);
  box-shadow: rgba(0, 0, 0, 0.08) 0px -2px 16px;
  .head-container {
    width: 100%;
    height: 100%;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    align-items: center;
    .head-brand {
      font-family: '달라왕 Bold';
      font-size: 40px;
      color: #6a96ec;
    }
    > * {
      flex-shrink: 0;
    }
    nav {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 16px;
      a {
        transition: all 0.2s ease;
        padding: 0 10px;
        margin: 0 20px;
        cursor: pointer;
        &:hover {
          color: #6a96ec;
        }
      }
      button {
        margin-left: 20px;
        background-color: #fff;
        cursor: pointer;
        border: 1px solid #ddd;
        width: 85px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        box-shadow: 0 2px 10px 0 rgba(30, 30, 30, 0.05);
        transition: all 0.2s ease;
      }
    }
  }
`;

export default Header;
