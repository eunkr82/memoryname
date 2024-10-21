import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TabMenu from '../components/TabMenu';
import Footer from '../components/Footer';
import stylesA from './GuestBook.module.css';
import stylesB from './Program.module.css';


const GuestBook = () => {
  const [posts, setPosts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호
  const postsPerPage = 6; // 페이지당 표시할 글 개수

  useEffect(() => {
    axios.get("https://2024-ewdm.site/guestbook")
      .then(response => setPosts(response.data))
      .catch(error => console.log(error));
  }, []);

  // 페이지별로 나눠서 보여줄 글 목록 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // 페이지 이동 함수
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  
  return (
    <div className={stylesB.GuestBook}>
        <section className={stylesB.opening}>
            <div className={stylesB.container}>
                <div className={stylesB.logoWrap}>
                    <div className={stylesB.logoImg}>
                        <img src={require('../assets/logo.png')}/>
                    </div>
                    <br/>
                    <div className={stylesB.dateImg}>
                        <img src={require('../assets/date.png')}/>
                    </div>
                </div>
            </div>
            <div className={stylesB.buttonWrap}>
                <TabMenu />
            </div>
        </section>

      <div className={stylesB.container}>
          <div className={stylesA.title}>방명록</div>
          <table className={stylesA.guestBookTable}>
            <thead>
              <tr>
                <th>No.</th>
                <th>Title</th>
                <th>Nickname</th>
              </tr>
            </thead>
            <tbody>
              {posts.length === 0 ? ( // 글이 없을 때 표시
                <tr>
                  <td colSpan="3" className="no-posts">아직 작성된 글이 없습니다</td>
                </tr>
              ) : (
                currentPosts.map((post, index) => (
                  <th key={post.post_id}>
                    <div className={stylesA.tableCell}>{indexOfFirstPost + index + 1}</div>
                    <div className={stylesA.tableCell}>{post.title}</div>
                    <div className={stylesA.tableCell}>{post.nickname}</div>
                  </th>
                ))
              )}
            </tbody>
          </table>

          {posts.length > 0 && ( 
            <div className={stylesA.pagination}>
              <button 
                onClick={() => handlePageChange(currentPage - 1)} 
                disabled={currentPage === 1}
              >
                &lt;-
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={currentPage === index + 1 ? 'active' : ''}
                >
                  {index + 1}
                </button>
              ))}

              <button 
                onClick={() => handlePageChange(currentPage + 1)} 
                disabled={currentPage === totalPages}
              >
                -&gt;
              </button>
            </div>
          )}
        </div>
        <div className={stylesB.container}>
          <Footer/>
        </div>
      </div>   
  );
};


export default GuestBook;
