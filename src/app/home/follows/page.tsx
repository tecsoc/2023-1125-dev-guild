import React from "react";

import postImage from "./images/post.png";
import profileImage from "./images/profile.jpg";

import Image from "next/image";

const FollowsPage = () => {
  return <>
    <div className="layout_wrapper">
      <nav>
        <div className="nav_logo-wrapper">
          <p className="nav_logo">SNS</p>
        </div>

        <div className="menu_options active">
          <span className="material-icons">home</span>
          <h2>ホーム</h2>
        </div>

        <div className="menu_options">
          <span className="material-icons">search</span>
          <h2>検索</h2>
        </div>

        <div className="menu_options">
          <span className="material-icons">notifications</span>
          <h2>通知</h2>
        </div>

        <div className="menu_options">
          <span className="material-icons">email</span>
          <h2>メッセージ</h2>
        </div>

        <div className="menu_options">
          <span className="material-icons">bookmark</span>
          <h2>ブックマーク</h2>
        </div>

        <div className="menu_options">
          <span className="material-icons">person</span>
          <h2>プロフィール</h2>
        </div>

        <div className="menu_options">
          <span className="material-icons">more_horiz</span>
          <h2>もっと見る</h2>
        </div>

        <button className="post_btn">ポストする</button>

        <div className="side_profile">
          <div className="side_profile-image">
            {/* <img src="images/profile.jpg" alt="profile" /> */}
            <Image src={profileImage} alt="profile"  width={40} height={40} />
          </div>
          <p>RyoCa@ryocacode</p>
        </div>
      </nav>

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

        <div className="post">
          <div className="post_profile-image">
            {/* <img src="images/profile.jpg" alt="profile" /> */}
            <Image src={profileImage} alt="profile"  width={40} height={40} />
          </div>

          <div className="post_body">
            <div className="post_header">
              <div className="post_header-text">
                <h3>RyoCa<small>@ryocacode</small></h3>
              </div>

              <div className="post_header-discription">
                <p>Googleのリンクを貼ります</p>
                <br />
                <p>
                  <a href="https://google.com">https://google.com</a>
                </p>
              </div>
            </div>
            {/* <img src="images/post.png" class="post_image" /> */}
            <Image src={postImage} alt="post" className="post_image"  width={400} height={377.5}   />

            <div className="post_footer">
              <span className="material-icons">chat</span>
              <span className="material-icons">repeat</span>
              <span className="material-icons">favorite_border</span>
            </div>
          </div>
        </div>

        <div className="post">
          <div className="post_profile-image">
            {/* <img src="images/profile.jpg" alt="profile" /> */}
            <Image src={profileImage} alt="profile"  width={40} height={40} />
          </div>

          <div className="post_body">
            <div className="post_header">
              <div className="post_header-text">
                <h3>RyoCa<small>@ryocacode</small></h3>
              </div>

              <div className="post_header-discription">
                <p>Googleのリンクを貼ります</p>
                <br />
                <p>
                  <a href="https://google.com">https://google.com</a>
                </p>
              </div>
            </div>
            {/* <img src="images/post.png" class="post_image" /> */}
            <Image src={postImage} alt="post" className="post_image"  width={450} height={337.5} />

            <div className="post_footer">
              <span className="material-icons">chat</span>
              <span className="material-icons">repeat</span>
              <span className="material-icons">favorite_border</span>
            </div>
          </div>
        </div>

        <div className="post">
          <div className="post_profile-image">
            {/* <img src="images/profile.jpg" alt="profile" /> */}
            <Image src={profileImage} alt="profile"  width={40} height={40} />
          </div>

          <div className="post_body">
            <div className="post_header">
              <div className="post_header-text">
                <h3>RyoCa<small>@ryocacode</small></h3>
              </div>

              <div className="post_header-discription">
                <p>Googleのリンクを貼ります</p>
                <br />
                <p>
                  <a href="https://google.com">https://google.com</a>
                </p>
              </div>
            </div>
            {/* <img src={postImage} alt="post" className="post_image" */}
            <Image src={postImage} alt="post" className="post_image"  width={450} height={337.5} />

            <div className="post_footer">
              <span className="material-icons">chat</span>
              <span className="material-icons">repeat</span>
              <span className="material-icons">favorite_border</span>
            </div>
          </div>
        </div>
      </main>

      <aside>
        <div className="aside_input">
          <span className="material-icons aside_search-icon">search</span>
          <input type="text" placeholder="検索" />
        </div>

        <div className="aside_container">トレンド</div>
      </aside>
    </div>

    <dialog id="imageModal">
      <div className="image_modal">
        {/* <img src="images/post.png" className="image_modal-content" /> */}
        <Image src={postImage} alt="post" className="image_modal-content" width={450} height={337.5} />
      </div>
    </dialog>
  </>;
};


export default React.memo(FollowsPage);
