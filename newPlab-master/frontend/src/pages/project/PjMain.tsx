import { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import hello from '../../assets/pj-hello.png';
import think from '../../assets/pj-think.png';
import Post from '../../components/Post';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaChevronDown } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';

import { posts } from '../../data/postData';

const PjMain = () => {
  const navigate = useNavigate();

  const sortedPosts = [...posts].sort((a, b) => b.views - a.views);
  const topPosts = sortedPosts.slice(0, 8);

  const [startIndex, setStartIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const nextPosts = () => {
    const nextIndex = Math.min(startIndex + 4, topPosts.length - 4);
    setStartIndex(nextIndex);
  };

  const prevPosts = () => {
    const nextIndex = Math.max(startIndex - 4, 0);
    setStartIndex(nextIndex);
  };

  const visiblePosts = topPosts.slice(startIndex, startIndex + 4);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredPosts = posts.filter(post => {
    if (selectedCategory === '전체') {
      return true;
    } else if (selectedCategory === '프로젝트') {
      return post.studyOrProject;
    } else if (selectedCategory === '스터디') {
      return !post.studyOrProject;
    }
  });

  return (
    <>
      <Header />
      <Section>
        <div className='inner'>
          <UploadButton
            onClick={() => {
              navigate('/project/upload');
            }}
          >
            모집글 작성하기
          </UploadButton>
          <div className='title'>
            <img src={hello} className='pj-icon' alt='hello icon' />
            <h2>이번 주 인기 모집글</h2>
            <Controls>
              <span>자세히 보기 </span>
              <StyledFiChevronLeft onClick={prevPosts} />
              <StyledFiChevronRight onClick={nextPosts} />
            </Controls>
          </div>
          <div className='post-slider'>
            {visiblePosts.map(post => (
              <Post
                id={post.id}
                title={post.title}
                author={post.author}
                views={post.views}
                createdAt={post.createdAt}
                isRecruiting={post.isRecruiting}
                field={post.field}
                studyOrProject={post.studyOrProject}
              />
            ))}
          </div>
        </div>
      </Section>
      <Section>
        <div className='inner'>
          <div className='tabs'>
            <img src={think} className='pj-icon' alt='hello icon' />
            <span
              className={selectedCategory === '전체' ? 'tab active' : 'tab'}
              onClick={() => handleCategoryClick('전체')}
            >
              전체
            </span>
            <span
              className={selectedCategory === '프로젝트' ? 'tab active' : 'tab'}
              onClick={() => handleCategoryClick('프로젝트')}
            >
              프로젝트
            </span>
            <span
              className={selectedCategory === '스터디' ? 'tab active' : 'tab'}
              onClick={() => handleCategoryClick('스터디')}
            >
              스터디
            </span>
          </div>
          <div className='post-grid'>
            {filteredPosts.reverse().map(post => (
              <Post
                id={post.id}
                title={post.title}
                author={post.author}
                views={post.views}
                createdAt={post.createdAt}
                isRecruiting={post.isRecruiting}
                field={post.field}
                studyOrProject={post.studyOrProject}
              />
            ))}
          </div>
          <LoadMoreButton
            onClick={() => {
              navigate('/project/more');
            }}
          >
            더 많은 구인글 보기
            <FaChevronDown />
          </LoadMoreButton>
        </div>
      </Section>
      <Footer />
    </>
  );
};

const UploadButton = styled.button`
  margin: 20px 0;
  padding: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  width: 150px;
  height: 50px;
  border-radius: 500px;
  margin-right: 20px;
  color: #fff;
  background-color: #6a96ec;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
`;

const Section = styled.section`
  padding-top: 20px;
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .pj-icon {
    margin-right: 20px;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
  }

  .post-slider {
    & > * {
      flex-shrink: 0;
    }
    padding-top: 10px;
    display: flex;
    overflow-x: auto;
    gap: 25px;
    padding-bottom: 20px;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .tabs {
    display: flex;
    margin-bottom: 40px;
  }

  .tab {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    color: #bcbcbc;
    margin-right: 30px;
    background-color: #fff;
    transition: background-color 0.3s;
  }

  .tab.active {
    color: #000;
  }

  .tab:hover {
    color: #555;
  }

  .post-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    margin-bottom: 20px;
  }
`;

const LoadMoreButton = styled.button`
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  font-size: 16px;
  gap: 6px;
  font-weight: 500;
  background-color: #fff;
  border: 1.5px solid #bcbcbc;
  height: 50px;
  padding: 0px;
  border-radius: 100px;
  box-shadow: 0 4px 8px 0 rgba(50, 50, 50, 0.1);
`;

const Controls = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  color: #8e94a0;
`;

const StyledFiChevronRight = styled(FiChevronRight)`
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #333;
  }
`;

const StyledFiChevronLeft = styled(FiChevronLeft)`
margin-left: 5px;
  font-size: 24px;
  &:hover {
    cursor: pointer;
    color: #333;
  }
`;

export default PjMain;
