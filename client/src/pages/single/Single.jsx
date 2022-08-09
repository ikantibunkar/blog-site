import "./single.css"
import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../single post/SinglePost"
export default function Single() {
  return (
    <div className="single">
        <SinglePost/>
        <Sidebar />
    </div>
  )
}
