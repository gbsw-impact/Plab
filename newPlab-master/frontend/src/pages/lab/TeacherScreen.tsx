import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

const backendAddress = 'plab-backend.kro.kr';

const TeacherScreen = () => {
    const navigate = useNavigate();

    const [approvalLab, setApprovalLab] = useState([]);
    const [deletionLab, setDeletionLab] = useState([]);

    useEffect(() => {
        const fetchDataAndAdminCheck = async () => {
            try {
                await isAdmin();
                await FetchApprovalLab();
                await FetchDeletionLab();
            } catch (error) {
                console.error(error);

            }
        };
        fetchDataAndAdminCheck();
    }, []);

    const isAdmin = async () => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            alert('Access token not found. Please log in again.');
            navigate('/login');
            return;
        }
        try {
            await axios.get(
                `http://${backendAddress}:3000/admin/is-admin`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );
        }
        catch (error : any) {
            if (error.response && error.response.status === 403) {
                alert('선생님만 사용 가능합니다.');
                navigate('/');
            } else {
                console.error(error);
            }
        }
    }

    const FetchApprovalLab = async () => {
        const accessToken = localStorage.getItem('accessToken');
        try {
            const response = await axios.post(
                `http://${backendAddress}:3000/admin/approvalRental`, {},
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );
            setApprovalLab(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const FetchDeletionLab = async () => {
        const accessToken = localStorage.getItem('accessToken');
        try {
            const response = await axios.post(
                `http://${backendAddress}:3000/admin/deletionRental`, {},
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );
            setDeletionLab(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const singLab = async (userid: any) => {
        const accessToken = localStorage.getItem('accessToken');
        try {
            const response = await axios.patch(
                `http://${backendAddress}:3000/admin/${userid}`, {},
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );
            if (response) {
                alert('승인 성공.');
                window.location.reload();
            }
        } catch (error) {
            console.error(error);
            alert('failed.');
        }
    }

    const delLab = async (userid: any) => {
        const accessToken = localStorage.getItem('accessToken');
        try {
            const response = await axios.delete(
                `http://${backendAddress}:3000/admin/${userid}`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );
            if (response) {
                alert('삭제 성공.');
                window.location.reload();
            }
        } catch (error) {
            console.error(error);
            alert('failed.');
        }
    }


    return (
        <>
            <Header />
            <Background>
                <Inner>
                    <LabReq>
                        <LabChart>
                            <div className='chart-container'>
                                <h1 className="head-title">실습실 대여 요청</h1>
                                <div className="chart">
                                    <div className="chart-title">
                                        <p className="chart-detail">대표자</p>
                                        <p className="chart-detail">대여 실습실</p>
                                        <p className="chart-detail">사용 목적</p>
                                        <p className="chart-detail">대여시간</p>
                                        <p className="signBtn"></p>
                                    </div>
                                    {approvalLab.map((rental : any) => (
                                        <div key={rental.id}>
                                            <div className="chart-user">
                                                <p className="user-list">{rental.rentalUser}</p>
                                                <p className="user-list">{rental.hopeLab}</p>
                                                <p className="user-list">{rental.rentalPurpose}</p>
                                                <p className="user-list">{rental.rentalStartTime}</p>
                                                <button className="signBtn" id="signBtn" onClick={() => singLab(rental.userId)}>대여 승인</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </LabChart>
                    </LabReq>
                    <LabDel>
                        <LabChart>
                            <div className='chart-container'>
                                <h1 className="head-title">실습실 대여 삭제</h1>
                                <div className="chart">
                                    <div className="chart-title">
                                        <p className="chart-detail">대표자</p>
                                        <p className="chart-detail">대여 실습실</p>
                                        <p className="chart-detail">사용 목적</p>
                                        <p className="chart-detail">대여시간</p>
                                        <p className="signBtn"></p>
                                    </div>
                                    {deletionLab.map((rental : any) => (
                                        <div key={rental.id}>
                                            <div className="chart-user">
                                                <p className="user-list">{rental.rentalUser}</p>
                                                <p className="user-list">{rental.hopeLab}</p>
                                                <p className="user-list">{rental.rentalPurpose}</p>
                                                <p className="user-list">{rental.rentalStartTime}</p>
                                                <button className="delBtn" id="delBtn" onClick={() => { delLab(rental.userId) }}>대여 삭제</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </LabChart>
                    </LabDel>
                </Inner>
            </Background>
            <Footer />
        </>
    );
};


const Background = styled.div`
  width: 100%;
  background-color: #F5F5F8;
  box-sizing: border-box;
`;

const Inner = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  font-family: 'Pretendard-Medium';
`;

const LabReq = styled.div`

`;

const LabDel = styled.div`
    height: 500px;
`;

const LabChart = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 25px;

    .head-title {
        font-size: 25px;
        font-family: "Pretendard-Bold";
    }

    .chart {
        width: 1100px;
        height: 350px;
        background-color: #fff;
        border-radius: 10px;
    }

    .chart-title {
        width: 100%;
        height: 60px;
        background-color: #6A96EC;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .chart-detail, .user-list {
        width: 100px;
        font-size: 15px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; 
        font-family: "Pretendard-medium";
        text-align: center;
    }

    .chart-detail {
        color: #fff;
    }

    .chart-user {
        width: 100%;
        height: 60px;
        border-bottom: 3px solid #EEEEEE;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .signBtn, .delBtn {
        width: 85px;
        height: 30px;
        border-radius: 10px;
        color: #fff;
    }

    #signBtn {
        border: 1px solid #07BC03;
        background-color: #07BC03;
        color: #fff;
        font-size: 12px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    }

    #delBtn {
        border: 1px solid #EC6A6A;
        background-color: #EC6A6A;
        color: #fff;
        font-size: 12px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    }
`;
export default TeacherScreen