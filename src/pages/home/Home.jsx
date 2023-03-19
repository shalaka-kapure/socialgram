import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css"

const Home = () => {
  return (
    <div className="container">
    <Sidebar/>
    <Feed/>
    <Rightbar/>
    </div>
  );
}

export default Home;
