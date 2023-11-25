import React from "react";

import profileImage from "../../images/profile.jpg";

import Image from "next/image";
import Post from "./components/Post/post";
import { fetchPosts } from "./features/posts";

const FollowsPage = async () => {
  const posts = await fetchPosts();
  // console.log(posts);
  return (
    <main>
      <div className="tabs">
        <h2>
          <a href="#">おすすめ</a>
        </h2>
        <h2>
          <a href="#" className="active">フォロー</a>
        </h2>
      </div>

      <div className="post_box">
        <form>
          <div className="post_box-input">
            {/* <img src="images/profile.jpg" alt="profile" /> */}
            <Image src={profileImage} alt="profile"  width={40} height={40} />
            <input type="text" name="text" placeholder="いまどうしてる？" />
            <label>
              <input type="file" name="file" className="hidden" />
              <span className="material-icons">add</span>
            </label>
            <button className="">ポスト</button>
          </div>
        </form>
      </div>

      { posts.map(({ id, userName, userImageUrl, postImageUrl }) => (
        <Post key={id} authorName={userName} profileImageSrc={userImageUrl} postImageSrc={postImageUrl} />
      )) }
    </main>
  )
    

    // <dialog id="imageModal">
    //   <div className="image_modal">
    //     {/* <img src="images/post.png" className="image_modal-content" /> */}
    //     <Image src={postImage} alt="post" className="image_modal-content" width={450} height={337.5} />
    //   </div>
    // </dialog>
};


export default React.memo(FollowsPage);
