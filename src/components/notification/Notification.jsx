import { ToastContainer } from "react-toastify"
import "./notification.css"
import "react-toastify/dist/ReactToastify.css"

export const Notification = () => {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
    </div>
  )
}
