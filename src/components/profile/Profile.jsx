import "./profile.scss";
import Groups from "../feed/Feed";

const Profile = () => {
  return (
    <div className="profileMain">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="center">
            <span>Olivia</span>
            <div className="info">
              <div className="item">
                <span>Arg</span>
              </div>
              <div className="item">
                <span>oli.dev</span>
              </div>
            </div>
            <button>Seguir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
