import Feed from "../../components/feed/Feed"
import Topbar from "../../components/topbar/Topbar"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import './home.css'
const Home = () => {
  return(
    <>
     <Topbar/>
     <div className="homeContainer">
      <Sidebar/>
      <Feed/>
      <Rightbar/>
     </div>
     
     </>
     )
}

export default Home
