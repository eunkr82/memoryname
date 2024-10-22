import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import styles from './WritePost.module.css';

const WritePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  const data = {
    title: title,
    body: body, 
    nickname: nickname,
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post('https://2024-ewdm.site/guestbook/post', data, {
        title,
        body,
        nickname,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
        }
      });

      if (response.status === 200) {
        alert('글이 성공적으로 업로드되었습니다!');
        navigate('/guestbook');
      }
    } catch (error) {
      console.error('글 작성 중 오류가 발생했습니다:', error);
      alert('업로드에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.writeTitle}>글쓰기</p>
      <hr/><br/><br/>
      <form onSubmit={handleSubmit}>
        <div>
          <label>제목</label>
          <input className={styles.inputBox}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>내용</label>
          <textarea className={styles.bodyBox}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>닉네임</label>
          <input className={styles.inputBox}
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          />
        </div>
        <button className={styles.submit}>업로드</button>
      </form>
      <Footer />
      <Outlet/>
    </div>
  );
};

export default WritePost;
