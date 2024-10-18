import React, { useState } from 'react';

const GuestBook = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: '첫 번째 글', author: '홍길동' },
    { id: 2, title: '두 번째 글', author: '이몽룡' },
    { id: 3, title: '세 번째 글', author: '성춘향' },
    { id: 4, title: '네 번째 글', author: '임꺽정' },
    { id: 5, title: '다섯 번째 글', author: '장보고' },
    { id: 6, title: '여섯 번째 글', author: '김삿갓' },
    { id: 7, title: '일곱 번째 글', author: '신사임당' },
  ]);
  const [page, setPage] = useState(0);

  const handleNextPage = () => {
    if ((page + 1) * 6 < posts.length) setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleAddPost = () => {
    const newPost = { id: posts.length + 1, title: `새 글 ${posts.length + 1}`, author: '방문객' };
    setPosts([...posts, newPost]);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>방명록</h2>
      <button onClick={handleAddPost}>글 작성</button>
      <ul>
        {posts.slice(page * 6, page * 6 + 6).map(post => (
          <li key={post.id}>
            {post.id}. {post.title} - {post.author}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePreviousPage} disabled={page === 0}>이전</button>
        <button onClick={handleNextPage} disabled={(page + 1) * 6 >= posts.length}>다음</button>
      </div>
    </div>
  );
};

export default GuestBook;