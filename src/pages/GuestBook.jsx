import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GuestBook = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://2024-ewdm.site/guestbook")  
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching guestbook posts:', error));
  }, []);  
  

  return(
    <div>{posts.length}</div>
  );
};

export default GuestBook;
