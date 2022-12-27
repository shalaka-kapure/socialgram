import { FiSettings } from "react-icons/fi";
import "./user.css";

const User = () => {
  return (
    <div className="profileWrapper">
      <div className="top">
        <div className="displayPicture">
          <img src="images/people/1.jpg" alt="" />
        </div>
        <div className="info">
          <div className="infoBox">
            <div className="name">camilla_cabello</div>
            <button>Edit profile</button>
            <FiSettings />
          </div>
          <div className="postInfo">
            <div>2946 posts</div>
            <div>65.6M followers</div>
            <div>1291 following</div>
          </div>
          <div className="userInfo">
            <div>camila</div>
            <div>Sigue bailando. FAMILIA out now</div>
            <div>
              <a href="https://camilacabello.lnk.to/Familia" target="_blank">
                camilacabello.lnk.to/Familia
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="highlights">
        <div className="highlight">
          <img src="images/highlights/1.webp" alt="" />
          <div>FAMILIA</div>
        </div>
        <div className="highlight">
          <img src="images/highlights/2.webp" alt="" />
          <div>GRAMMYS</div>
        </div>
        <div className="highlight">
          <img src="images/highlights/3.jpg" alt="" />
          <div>VIDEOS</div>
        </div>
        <div className="highlight">
          <img src="images/highlights/4.png" alt="" />
          <div>NEW</div>
        </div>
      </div>
      <div className="grid">
        <img src="images/highlights/4.jpg" alt="" />
        <img src="images/highlights/5.jpg" alt="" />
        <img src="images/highlights/6.jpg" alt="" />
        <img src="images/highlights/7.webp" alt="" />
        <img src="images/highlights/8.jpg" alt="" />
        <img src="images/highlights/1.webp" alt="" />
        <img src="images/highlights/2.webp" alt="" />
        <img src="images/highlights/3.jpg" alt="" />
      </div>
    </div>
  );
};

export default User;
