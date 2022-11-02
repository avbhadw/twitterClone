import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material"
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
function Post({displayName, 
    username, 
    verified, 
    text, 
    image, 
    avatar}){

    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src ="https://pbs.twimg.com/profile_images/1359053841161945090/fqjk_8iW_400x400.jpg" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Avani Bhardwaj <span>
                            <VerifiedUserIcon className='post__badge'/>
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p> {text}</p>
                    </div>                    
                </div>
                <img src = {image}alt=""/>
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                     <RepeatIcon fontSize="small" />
                     <FavoriteBorderIcon fontSize="small" />
                     <PublishIcon fontSize="small" />
          </div>                
            </div>
        </div>
    )
}

export default Post