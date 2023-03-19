import "./rightbar.css";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="wrapper">
        <div className="profilePic">
          <img src="images/people/1.jpg" alt="" />
        </div>
        <div className="proName">camilla_cabello</div>
        <button>Switch</button>
      </div>
      <div className="suggestion">
        <span>Suggestions For You</span>
        <span>See All</span>
        <div className="sugBox">
          <div className="sugPic">
            <img src="images/people/8.jpg" alt="" />
          </div>
          <div className="sugName">dakota_johnson</div>
          <button>Follow</button>
        </div>
        <div className="sugBox">
        <div className="sugPic">
          <img src="images/people/6.png" alt="" />
        </div>
        <div className="sugName">_beyonce_</div>
        <button>Follow</button>
        </div>
        <div className="sugBox">
        <div className="sugPic">
          <img src="images/people/7.webp" alt="" />
        </div>
        <div className="sugName">selena_gomezz</div>
        <button>Follow</button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
