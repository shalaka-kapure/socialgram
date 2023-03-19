import "./profile.css";
import Sidebar from "../../components/sidebar/Sidebar";
import User from "./User";


const Profile = () => {
  return (
    <div className="profilePage">
    <Sidebar/>  
    <User/>    
    </div>
  );
}

export default Profile;
