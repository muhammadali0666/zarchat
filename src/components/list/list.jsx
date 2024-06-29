import { ChatList } from "../chat/ChatList/chatList"
import "./list.css"
import { Userinfo } from "./userIfo/Userinfo"

export const List = () => {
  return (
    <div className="list">
      <Userinfo/>
      <ChatList/>
    </div>
  )
}
