import React from 'react';
import styled from 'styled-components';
import { IoEyeOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

interface PostProps {
  id: number;
  title: string;
  author: string;
  views: number;
  createdAt: string;
  isRecruiting: boolean;
  field: string;
  studyOrProject: boolean;
}

const Post: React.FC<PostProps> = ({ id, title, author, views, createdAt, isRecruiting, field, studyOrProject }) => {
  return (
    <Link to={`/project/${id}`} style={{ textDecoration: 'none' }}>
      <PostContainer>
        <div className='tag-container'>
          {isRecruiting ? <Tag className='recruit'>구인 중</Tag> : <Tag className='deadline'>마감</Tag>}
          <Tag className='field'>{field}</Tag>
          {studyOrProject ? <Tag className='storpj'>프로젝트</Tag> : <Tag className='storpj'>스터디</Tag>}
        </div>
        <Title>{title}</Title>
        <Info>마감일 | {createdAt}</Info>
        <Author>{author}</Author>
        <Views>
          <IoEyeOutline className='eye' />
          {views}
        </Views>
      </PostContainer>
    </Link>
  );
};

const PostContainer = styled.div`
  position: relative;
  background-color: #fff;
  width: 250px;
  height: 250px;
  padding: 20px;
  border-radius: 15px;
  border: 1px solid #868d94;
  transition: all 0.3s ease-out;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  & > .tag-container {
    display: flex;
    margin-bottom: 20px;
  }
  .eye {
    width: 20px;
    margin-right: 2px;
  }
`;

const Title = styled.h3`
  margin: 0;
  margin-bottom: 10px;
  font-size: 18px;
`;

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  width: 60px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid #868d94;
  margin-right: 5px;
  &.recruit {
    color: #35ba4a;
    border: 1px solid #35ba4a;
    background-color: #edffed;
  }
  &.deadline {
    color: #f64f4f;
    border: 1px solid #f64f4f;
    background-color: #ffeded;
  }
  &.field {
    color: #8350f0;
    border: 1px solid #8350f0;
    background-color: #f5f1ff;
  }
  &.storpj {
    color: #ff8d3b;
    border: 1px solid #ff8d3b;
    background-color: #fff4e8;
  }
`;

const Info = styled.p`
  margin: 0;
  font-size: 14px;
  margin-bottom: 20px;
  color: #868d94;
`;

const Author = styled.p`
  margin: 0;
  font-size: 16px;
  margin-bottom: 20px;
  color: #000;
`;

const Views = styled.p`
  position: absolute;
  padding-left: 30px;
  right: 15px;
  bottom: 0;
  color: #bcbcbc;
`;

export default Post;
