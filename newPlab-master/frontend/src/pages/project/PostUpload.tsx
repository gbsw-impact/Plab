import styled from 'styled-components';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom';

const PostUpload = () => {
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <div className='inner'>
                <SectionHead>
                    <NumberCircle>1</NumberCircle> <h2>프로젝트 기본 정보를 입력하세요.</h2>
                </SectionHead>
                <Hrbar />
                <PostForm className='post-form'>
                    <div className='PostSelect'>
                        <div style={{ marginBottom: '10px' }}>모집 구분</div>
                        <select>
                            <option value='' selected disabled></option>
                            <option value=''>스터디</option>
                            <option value=''>프로젝트</option>
                        </select>
                    </div>
                    <div className='PostSelect'>
                        <div style={{ marginBottom: '10px' }}>모집 인원</div>
                        <select>
                            <option value='' selected disabled>
                                인원 미정~10명 이상
                            </option>
                            <option value=''>1명</option>
                            <option value=''>2명</option>
                            <option value=''>3명</option>
                            <option value=''>4명</option>
                            <option value=''>5명</option>
                            <option value=''>6명</option>
                            <option value=''>7명</option>
                            <option value=''>8명</option>
                            <option value=''>9명</option>
                            <option value=''>10명 이상</option>
                        </select>
                    </div>
                    <div className='PostSelect'>
                        <div style={{ marginBottom: '10px' }}>진행 방식</div>
                        <select>
                            <option value='' selected disabled></option>
                            <option value=''>온라인</option>
                            <option value=''>오프라인</option>
                        </select>
                    </div>
                    <div className='PostSelect'>
                        <div style={{ marginBottom: '10px' }}>진행 기간</div>
                        <select>
                            <option value='' selected disabled>
                                기간 미정~6개월 이상{' '}
                            </option>
                            <option value=''>기간 미정</option>
                            <option value=''>1개월</option>
                            <option value=''>2개월</option>
                            <option value=''>3개월</option>
                            <option value=''>4개월</option>
                            <option value=''>5개월</option>
                            <option value=''>6개월 이상</option>
                        </select>
                    </div>
                    <div className='PostSelect'>
                        <div style={{ marginBottom: '10px' }}>기술 스택</div>
                        <select>
                            <option value='' selected disabled></option>
                            <option value=''>JavaScript</option>
                            <option value=''>TypeScript</option>
                            <option value=''>React</option>
                            <option value=''>Vue</option>
                            <option value=''>NodeJS</option>
                            <option value=''>Spring</option>
                            <option value=''>Java</option>
                            <option value=''>NestJS</option>
                            <option value=''>NextJS</option>
                            <option value=''>Express</option>
                            <option value=''>Go</option>
                            <option value=''>C</option>
                            <option value=''>Python</option>
                            <option value=''>Django</option>
                            <option value=''>Swift</option>
                            <option value=''>Kotlin</option>
                            <option value=''>MySQL</option>
                            <option value=''>MongoDB</option>
                            <option value=''>php</option>
                            <option value=''>GrapeQL</option>
                            <option value=''>Firebase</option>
                            <option value=''>ReactNative</option>
                            <option value=''>Unity</option>
                            <option value=''>Flutter</option>
                            <option value=''>AWS</option>
                            <option value=''>Kubernetes</option>
                            <option value=''>Docker</option>
                            <option value=''>Git</option>
                            <option value=''>Figma</option>
                            <option value=''>Zeplin</option>
                        </select>
                    </div>
                    <div className='PostSelect'>
                        <div style={{ marginBottom: '10px' }}>모집 마감일</div>
                        <input type='date' className='rental-input' />
                    </div>
                    <div className='PostSelect'>
                        <div style={{ marginBottom: '10px' }}>모집 포지션</div>
                        <select>
                            <option value='' selected disabled></option>
                            <option value=''>전체</option>
                            <option value=''>프론트엔드</option>
                            <option value=''>백엔드</option>
                            <option value=''>디자이너</option>
                            <option value=''>IOS</option>
                            <option value=''>안드로이드</option>
                            <option value=''>데브옵스</option>
                            <option value=''>PM</option>
                            <option value=''>기획자</option>
                            <option value=''>마케터</option>
                        </select>
                    </div>
                    <div className='PostSelect'>
                        <div style={{ marginBottom: '10px' }}>연락 포지션</div>
                        <select>
                            <option value='' selected disabled></option>
                            <option value=''>카카오톡 오픈채팅</option>
                            <option value=''>이메일</option>
                            <option value=''>구글 폼</option>
                        </select>
                        <input style={{ marginTop: '10px' }} type='text' placeholder='오픈채팅방 링크' />
                    </div>
                </PostForm>
                <SectionHead>
                    <NumberCircle>2</NumberCircle> <h2>프로젝트에 대해 소개해주세요.</h2>
                </SectionHead>
                <PostTextarea>
                    <div style={{ marginBottom: '10px' }}>제목</div>
                    <input type='text' className='textarea_title' placeholder='글 제목을 입력해주세요!' />
                    <div style={{ marginBottom: '10px', marginTop: '50px' }}>글 내용</div>
                    <textarea placeholder='프로젝트에 대해 소개해주세요!' />
                </PostTextarea>
                <SubmitBox>
                    <button
                        className='cancel-btn'
                        onClick={() => {
                            navigate('/project');
                        }}
                    >
                        취소
                    </button>
                    <button
                        className='submit-btn'
                        onClick={() => {
                            navigate('/project');
                        }}
                    >
                        글 등록
                    </button>
                </SubmitBox>
            </div>
            <Footer />
        </>
    );
};

const SubmitBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100px;
  .cancel-btn {
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 4px;
    padding: 0 1.25rem;
    height: 2rem;
    font-size: 1rem;
    background: #e9ecef;
    color: #495057;
    margin-right: 1rem;
  }
  .submit-btn {
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 4px;
    padding: 0 1.25rem;
    height: 2rem;
    font-size: 1rem;
    font-weight: 700;
    background-color: #262626;
    color: #fff;
  }
`;

const PostTextarea = styled.form`
  textarea {
    width: 100%;
    height: 300px;
    border: 1px solid #ccc;
    font-size: 1rem;
    border-radius: 5px;
    padding-left: 10px;
    padding-top: 10px;
    background-image: url('path/to/calendar-image.png');
    background-repeat: no-repeat;
    background-position: right center; /* 이미지를 오른쪽 중앙에 위치하도록 설정 */
    padding-right: 10px; /* 이미지를 표시하기 위해 오른쪽 여백 추가 */
    outline: none;
  }
  .textarea_title {
    outline: none;
    &:focus {
      outline: 1.5px solid #000;
    }
    width: 100%;
    max-width: 500px;
    font-size: 1rem;
    border: 1px solid #ccc;
    color: #333;
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;
    height: 50px;
  }
`;

const PostForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  .PostSelect {
    margin-top: 50px;
  }
  select,
  input {
    outline: none;
    &:focus {
      outline: 1.5px solid #6a96ec;
    }
    width: 100%;
    max-width: 500px;
    font-size: 1rem;
    border: 1px solid #ccc;
    color: #333;
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;
    height: 50px;
  }
`;

const NumberCircle = styled.div`
  color: #fff;
  margin-right: 10px;
  font-size: 1rem;
  font-weight: 1000;
  border-radius: 100px;
  width: 28px;
  height: 28px;
  background-color: #6a96ec;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SectionHead = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  margin-top: 50px;
`;
const Hrbar = styled.hr`
  border: solid 1.5px #eee;
`;

export default PostUpload;
