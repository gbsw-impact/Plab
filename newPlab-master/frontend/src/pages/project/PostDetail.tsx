// PostDetail.tsx
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { posts } from '../../data/postData';
import styled from 'styled-components';
import Header from '../../components/Header';

const PostDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const post = posts.find(post => post.id.toString() === id);

  if (!post) {
    return <div>게시물을 찾을 수 없습니다.</div>;
  }

  return (
    <>
      <Header />
      <Container>
        <StyledFaArrowLeft
          onClick={() => {
            navigate('/project');
          }}
        />
        <Title>{post.title}</Title>
        <AuthorContainer>
          <Author>{post.author}</Author>
          <CreatedAt>{post.createdAt}</CreatedAt>
        </AuthorContainer>
        <Hrbar />
        <Field>
          <div>
            <FieldTitle>모집 구분</FieldTitle>
            {post.studyOrProject ? '프로젝트' : '스터디'}
          </div>
          <div>
            <FieldTitle>진행 방식</FieldTitle>
            온/오프라인
          </div>
          <div>
            <FieldTitle>모집 인원</FieldTitle>
            3명 이상
          </div>
          <div>
            <FieldTitle>예상 기간</FieldTitle>
            2개월
          </div>
          <div style={{ marginBottom: '55px' }}>
            <FieldTitle>모집 분야</FieldTitle>
            <FieldTag>{post.field}</FieldTag>
          </div>
        </Field>
        <h2>프로젝트 내용</h2>
        <Hrbar />
        <PostContent>
          기존에는 프론트엔드2 , 백엔드2 구성으로 진행을 하려 했으나 각 분야별 담당하시는 분들이 계시면 더 나은 결과가
          나오지 않을까 싶어 구해봅니다! <br />
          <br />
          주제는 대략적으로 정해진 상황이고 결과물을 만들어가며 배우는 과정을 중요시 하는 프로젝트인만큼 경험이
          부족하더라도 열심히 할 수 있는 분들은 편하게 지원해주세요!
        </PostContent>
      </Container>
    </>
  );
};

const StyledFaArrowLeft = styled(FaArrowLeft)`
  color: #888;
  font-size: 24px;
  border-radius: 50%;
  border: 1px solid #333;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    color: #333;
  }
`;

const Hrbar = styled.hr`
  margin: 18px 0 30px 0;
  border: solid 1.5px #eee;
`;

const PostContent = styled.div`
  font-size: 1.1rem;
  line-height: 30px;
`;

const FieldTag = styled.span`
  padding: 6px 10px;
  background: #f2f4f8;
  border-radius: 15px;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  color: #4a5e75;
`;
const FieldTitle = styled.span`
  margin-right: 25px;
  color: #999;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
`;

const AuthorContainer = styled.div`
  display: flex;
`;

const Title = styled.h1`
  margin-bottom: 10px;
`;

const Author = styled.p`
  line-height: 15px;
  height: 15px;
  font-size: 14px;
  color: #000;
  font-weight: 700;
  padding-right: 10px;
  border-right: 2px solid #ccc;
`;

const CreatedAt = styled.p`
  line-height: 15px;
  padding-left: 10px;
  font-size: 14px;
  color: #666;
`;

const Field = styled.p`
  margin-top: 60px;
  font-size: 20px;
  display: grid;
  font-weight: 700;
  grid-template-columns: repeat(2, 3fr);
  grid-row-gap: 24px;
  row-gap: 24px;
`;

export default PostDetail;
