import { Link, useNavigate } from "react-router-dom";
import "./card.scss";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { useNotificationStore } from "../../lib/notificationStore";

function Card({ item }) {
  const { currentUser } = useContext(AuthContext);
  const [saved, setSaved] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSave = async () => {
    if (!currentUser) {
      navigate("/login");
    }
    setSaved((prev) => !prev);
    try {
      await apiRequest.post("/users/save", { postId: item.id });
    } catch (err) {
      console.log(err);
      setSaved((prev) => !prev);
    }
  };

  const handleChat = async () => {
    if (!currentUser) navigate("/login");
    if (currentUser.id !== item.userId) {
      try {
        const res = await apiRequest.post("/chats/", {
          receiverId: item.userId,
        });
        useNotificationStore.getState().addChat(res.data);
        navigate("/profile");
        setError("Vui lòng kiểm tra tin nhắn ở ô hộp thoại bên phải");
      } catch (err) {
        setError(err.response.data.message);
      }
    } else {
      setError("you can't chat yourself");
    }
  };

  return (
    <div className="card">
      <Link to={`/${item?.id}`} className="imageContainer">
        <img src={item?.images[0]} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item?.id}`}>{item?.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item?.address}</span>
        </p>
        <p className="price">
          $
          {item.price > 99999999
            ? item.price / 1000000000 + " Tỷ"
            : item.price > 999999
            ? item.price / 1000000 + "Triệu"
            : item.price + "vnd"}
        </p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item?.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item?.bathroom} bathroom </span>
            </div>
          </div>
          <div className="icons">
            <div className="icon" onClick={handleSave}>
              {saved ? <img src="/save.png" alt="" /> : "X"}
            </div>
            <div className="icon" onClick={handleChat}>
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
        {error && <span className="stateError">{error}</span>}
      </div>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.object,
};

export default Card;
