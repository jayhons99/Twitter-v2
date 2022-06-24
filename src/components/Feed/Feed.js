import './Feed.css';
import React, { useEffect, useState } from 'react'
import TweetBox from './TweetBox/TweetBox';
import Post from './Post/Post';
import db from '../../firebase';

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])
  return (
    <div className='feed'>
        {/* Header */}
        <div className='feed-header'>
            <h2>Home</h2>
        </div>
        {/* Tweet Box */}
        <TweetBox />
        {/* Posts */}
        {posts.map(post => (
          <Post
          displayName={post.displayName}
          userName={post.userName}
          isVerified={post.isVerified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
          />
        ))}
        {/* // <Post 
        // displayName="Nicole Tayag"
        // userName="nicolevtayag"
        // isVerified={true}
        // text="Twitter is awesome!"
        // avatar="https://upload.wikimedia.org/wikipedia/en/f/f6/Tony_Tony_Chopper.jpg"
        // image="https://media.giphy.com/media/tuCFp8rod0x3O/giphy.gif"
        //  /> */}
    </div>
  )
}

export default Feed