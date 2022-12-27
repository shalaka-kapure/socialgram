import "./feed.css";
import Story from "../story/Story";
import Post from "../post/Post";
import { Posts } from "../../dummyData";

const Feed = () => {
  return (
    <div className="feed">
      <Story/>
      {Posts.map(p=>(
      <Post key={p.id} post ={p}/>
      ))}
    </div>
  );
};

export default Feed;