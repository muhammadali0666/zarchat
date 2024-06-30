import { auth } from "../lib/firebase";
import "./details.css";

export const Details = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>John Doe</h2>
        <p>Lorem ipsum dolor sit error.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Privacy % help</span>
            <img src="./arr0wUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arr0wDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">

              <img
                src="https://www.imgacademy.com/sites/default/files/adult-camps-aerial.jpg"
                alt=""
                />
              <span>photo_2024_2.png</span>
                </div>
            <img src="./download.png" alt="" className="icon"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">

              <img
                src="https://www.imgacademy.com/sites/default/files/adult-camps-aerial.jpg"
                alt=""
                />
              <span>photo_2024_2.png</span>
                </div>
            <img src="./download.png" alt="" className="icon"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">

              <img
                src="https://www.imgacademy.com/sites/default/files/adult-camps-aerial.jpg"
                alt=""
                />
              <span>photo_2024_2.png</span>
                </div>
            <img src="./download.png" alt="" className="icon"/>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arr0wUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arr0wUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout" onClick={() => auth.signOut()}> Logout</button>
      </div>
    </div>
  );
};
