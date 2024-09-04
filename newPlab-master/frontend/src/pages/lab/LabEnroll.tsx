import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../../components/Header';

const backendAddress = 'plab-backend.kro.kr';

const LabEnroll = () => {
  const [formData, setFormData] = useState({
    rentalDate: '',
    rentalStartTime: '',
    rentalEndTime: '',
    rentalPurpose: '',
    hopeLab: '',
    rentalUser: '',
    rentalUsers: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      alert('Access token not found. Please log in again.');
      return;
    }

    try {
      const response = await axios.post(
        `http://${backendAddress}:3000/lab/rental`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      );
      console.log(response.data);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Form submission failed.');
    }
  };

  return (
    <Background>
      <Header />
      <Inner>
        <div className='rental-screen'>
          <form onSubmit={handleSubmit}>
            <div className='rental-container'>
              <div className='rental-logo'>1. 대여희망일</div>
              <input
                type='date'
                className='rental-input'
                name='rentalDate'
                value={formData.rentalDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className='rental-container'>
              <div className='rental-logo'>2. 대표자 이름 기재 (반 / 이름)</div>
              <input
                type='text'
                className='rental-input'
                name='rentalUser'
                value={formData.rentalUser}
                onChange={handleChange}
                required
              />
            </div>
            <div className='rental-container'>
              <div className='rental-logo'>3. 사용 인원 전원 기재 (반 / 이름)</div>
              <input
                type='text'
                className='rental-input'
                name='rentalUsers'
                value={formData.rentalUsers}
                onChange={handleChange}
                required
              />
            </div>
            <div className='rental-container'>
              <div className='rental-logo'>4. 사용 목적</div>
              <textarea
                className='rental-textarea'
                name='rentalPurpose'
                value={formData.rentalPurpose}
                onChange={handleChange}
                required
              />
            </div>
            <div className='rental-container'>
              <div className='rental-logo'>5. 사용 대여 시간</div>
              <select
                className='rental-input'
                id='rental-time'
                name='rentalStartTime'
                value={formData.rentalStartTime}
                onChange={handleChange}
                required
              >
                <option value='' disabled></option>
                <option value='점심시간(12:30~13:40)'>점심시간(12:30~13:40)</option>
                <option value='방과후시간(16:30~18:10)'>방과후시간(16:30~18:10)</option>
                <option value='저녁시간(18:10~19:10)'>저녁시간(18:10~19:10)</option>
                <option value='야자시간(19:10~20:30)'>야자시간(19:10~20:30)</option>
              </select>
            </div>
            <div className='rental-container'>
              <div className='rental-logo'>6. 대여 희망 실습실</div>
              <select
                className='rental-input'
                id='rental-room'
                name='hopeLab'
                value={formData.hopeLab}
                onChange={handleChange}
                required
              >
                <option value='' disabled></option>
                <option value='2층 컴퓨터 교육실'>2층 컴퓨터 교육실</option>
                <option value='2층 메이커 실습실'>2층 메이커 실습실</option>
                <option value='2층 LAP1'>2층 LAP1</option>
                <option value='2층 LAP2'>2층 LAP2</option>
                <option value='3층 프로젝트 실습실 (2-1 앞)'>3층 프로젝트 실습실 (2-1 앞)</option>
                <option value='3층 모바일 실습실 (2-2 앞)'>3층 모바일 실습실 (2-2 앞)</option>
                <option value='3층 임베디드 실습실 (2-3 앞)'>3층 임베디드 실습실 (2-3 앞)</option>
                <option value='3층 응용프로그래밍 실습실1 (2-4 앞)'>3층 응용프로그래밍 실습실1 (2-4 앞)</option>
                <option value='3층 LAP3'>3층 LAP3</option>
                <option value='3층 LAP4'>3층 LAP4</option>
                <option value='4층 응용프로그래밍 실습실2 (1-1 앞)'>4층 응용프로그래밍 실습실2 (1-1 앞)</option>
                <option value='4층 게임개발 실습실 (1-2 앞)'>4층 게임개발 실습실 (1-2 앞)</option>
                <option value='4층 채움교실 (1-4 앞)'>4층 채움교실 (1-4 앞)</option>
                <option value='4층 LAP6'>4층 LAP6</option>
                <option value='4층 LAP7'>4층 LAP7</option>
              </select>
            </div>
            <button type='submit' className='rental-btn'>대여하기</button>
          </form>
        </div>
      </Inner>
    </Background>
  );
};

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f5f5f8; 
  box-sizing: border-box;
  overflow-y: auto; 
  font-family: 'Pretendard-Medium';
`;

const Inner = styled.div`
  max-width: 1080px;
  margin: 0 auto; 
  font-family: 'Pretendard-Medium';

  .rental-screen {
    margin-top: 50px;
    margin-bottom: 50px;
    height: 100%;
  }

  .rental-container {
    width: 100%;
    margin-top: 40px;
  }

  .rental-logo {
    width: 100%;
    height: 60px;
    border-bottom: 3px solid #bebec7;
    font-size: 20px;
    font-family: 'Pretendard-Bold';
  }

  .rental-input {
    width: 350px;
    height: 50px;
    border: 2px solid #bebec7;
    border-radius: 10px;
    margin-top: 30px;
    padding-left: 10px;
    outline: none;
  }

  .rental-textarea {
    width: 350px;
    height: 100px;
    border: 2px solid #bebec7;
    border-radius: 10px;
    margin-top: 30px;
    padding-left: 10px;
    padding-top: 10px;
    outline: none;
  }

  #rental-time {
    width: 350px;
    height: 50px;
    border: 2px solid #bebec7;
    border-radius: 10px;
    margin-top: 30px;
    padding-left: 20px;
    outline: none;
  }

  #rental-room {
    width: 350px;
    height: 50px;
    border: 2px solid #bebec7;
    border-radius: 10px;
    margin-top: 30px;
    margin-bottom: 250px;
    padding-left: 20px;
    outline: none;
  }

  .rental-form {
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .rental-btn {
    width: 170px;
    height: 45px;
    border: none;
    border-radius: 10px;
    background-color: #169dfe;
    color: #fff;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default LabEnroll;
