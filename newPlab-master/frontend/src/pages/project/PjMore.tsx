import { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Post from '../../components/Post';
import { posts } from '../../data/postData';

const sortedPosts = [...posts].sort((a, b) => b.views - a.views);
const topPosts = sortedPosts.slice(0, 8);

const PjMore = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <Header />
      <Section>
        <div className='inner'>
          <div className='tabs'>
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
            {topPosts.map(post => (
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
    </>
  );
};

const Section = styled.section`
  & > .inner > .post-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    margin-top: 30px;
  }
  .tabs {
    display: flex;
    margin-bottom: 40px;
    margin-top: 40px;
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
`;

export default PjMore;
