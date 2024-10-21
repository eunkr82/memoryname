import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GuestBook = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://2024-ewdm.site/guestbook")  // 전체 URL 경로로 수정
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching guestbook posts:', error));
  }, []);  // 빈 배열을 넣어야 useEffect가 컴포넌트 마운트 시에만 한 번 실행됨

  return(
    <div>{posts.length}</div>
  );
};

export default GuestBook;
