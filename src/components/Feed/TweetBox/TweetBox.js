import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import db from '../../../firebase.js';

function TweetBox() {
  const [tweet, setTweet] = useState("");
  const [tweetImg, setTweetImg] = useState("");
  const postTweet = e => {
    e.preventDefault();
    db.collection('posts').add({
      displayName: "Jhon Sisneros",
      userName: 'jxyhon',
      isVerified: true, 
      text: tweet, 
      image: tweetImg,
      avatar: 'https://carboncostume.com/wordpress/wp-content/uploads/2016/10/naruto.jpg'
    });
    setTweet("");
    setTweetImg("");
  }
  return (
    <div className="tweet-box">
        <form>
            <div className="tweet-box-input">
                <Avatar sx={{ bgcolor: deepPurple[500] }}>JS</Avatar>
                <input onChange={e => setTweet(e.target.value)} value={tweet} placeholder="What's happening?" type="text"></input>
            </div>
            <input onChange={e => setTweetImg(e.target.value)} value={tweetImg} className="input-image" placeholder="Optional: Enter image URL" type="url"></input>
            <Button onClick={postTweet} type="submit" className="tweet-box-button">Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox