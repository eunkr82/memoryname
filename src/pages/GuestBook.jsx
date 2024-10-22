import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TabMenu from '../components/TabMenu';
import Footer from '../components/Footer';
import stylesA from './GuestBook.module.css';
import stylesB from './Program.module.css';
import { useNavigate } from 'react-router-dom'; 


const GuestBook = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = async (post) => {
    try {
      const response = await axios.get(`https://2024-ewdm.site/guestbook/${post.postId}`);
      setSelectedPost(response.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("게시글 상세보기 불러오기 오류:", error);
    }
  };

  const closeModal = () => {
    setSelectedPost(null);
    setIsModalOpen(false);
  };

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호
  const postsPerPage = 6; // 페이지당 표시할 글 개수

  const navigate = useNavigate(); // useNavigate 훅으로 이동 함수 생성

  const handleWriteClick = () => {
    navigate('./write-post'); // '/write' 경로로 이동 (글쓰기 페이지)
  };

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
            <div className={stylesA.write} onClick={handleWriteClick}>글쓰기</div>

            <div className={stylesA.tableContainer}>
                <div className={stylesA.tableHeader}>
                  <div className={stylesA.tableCell}>No.</div>
                  <div className={stylesA.tableCell}>Title</div>
                  <div className={stylesA.tableCell}>Nickname</div>
                </div>
                {posts.length === 0 ? ( // 글이 없을 때 표시
                  <div className={stylesA.tableRow}>
                    <div className={stylesA.tableCell} colSpan="3">아직 작성된 글이 없습니다</div>
                  </div>
                ) : (
                  currentPosts.map((post, index) => (
                    <div className={stylesA.tableRow} key={post.post_id}  onClick={() => openModal(post)}>
                      <div className={stylesA.tableCell}>{indexOfFirstPost + index + 1}</div>
                      <div className={stylesA.tableCell}>{post.title}</div>
                      <div className={stylesA.tableCell}>{post.nickname}</div>
                    </div>
                  ))
                )}

          {isModalOpen && (
          <div className={stylesA.modalOverlay} onClick={closeModal}>
            <div className={stylesA.postModalContent} onClick={(e) => e.stopPropagation()}>
              <p className={stylesA.postTitle}>{selectedPost.title}</p>
              <hr/>
              <div className={stylesA.postModalWrap}>
                <div className={stylesA.postBody}> {selectedPost.body} </div>
                <div className={stylesA.postName}> nickname: {selectedPost.nickname}</div>
              </div>
            </div>
          </div>
      )}
      </div>

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
