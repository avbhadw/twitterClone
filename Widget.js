import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";
  import "./Widget.css";
function Widget(){
    return(
        <div className='widget'>
            <div className='widgets__input'>
                <SearchIcon className ="widgets__searchIcon" />
                <input placeholder='Search Twitter' type ="text" />
            </div>
            <div className='widgets__widgetContainer'>
                <h2> What's happening?</h2>
                <TwitterTweetEmbed tweetId={"1555035944360853505"} />
                <TwitterTimelineEmbed 
                    sourceType= 'profile'
                    screenName="avbhardw"
                    options={{height:400}}
                    />
                   <TwitterShareButton
                    url={"https://open.spotify.com/playlist/42wxCkF8OzEqI9albRZ7oI?si=d0a1f73b99cf4cbe"}
                    options={{ text: "Check out my spotify playlist :)", via: "me" }}
                     />
            </div>
            <h2>Widget</h2>
        </div>
    );
}

export default Widget; 