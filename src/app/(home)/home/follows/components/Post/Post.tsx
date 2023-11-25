import Image from 'next/image';
import React from 'react';

type PostProps = {
  authorName: string;
  profileImageSrc: string;
  postImageSrc: string;
  postText: string;
};

const Post: React.FC<PostProps> = ({ authorName, postText, profileImageSrc, postImageSrc }) => {
  return (
    <div className="post">
      <div className="post_profile-image">
        {/* <img src="images/profile.jpg" alt="profile" /> */}
        <Image src={profileImageSrc} alt="profile"  width={40} height={40} />
      </div>

      <div className="post_body">
        <div className="post_header">
          <div className="post_header-text">
            <h3><small>@{authorName}</small></h3>
          </div>

          <div className="post_header-discription">
            <p>{postText}</p>
          </div>
        </div>
        {/* <img src="images/post.png" class="post_image" /> */}
        <Image src={postImageSrc} alt="post" className="post_image"  width={400} height={377.5}   />

        <div className="post_footer">
          <span className="material-icons">chat</span>
          <span className="material-icons">repeat</span>
          <span className="material-icons">favorite_border</span>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Post);