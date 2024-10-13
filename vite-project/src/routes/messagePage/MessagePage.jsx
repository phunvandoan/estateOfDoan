import Chat from "../../components/chat/Chat";
import { useNotificationStore } from "../../lib/notificationStore";
import "./messagePage.scss";

function MessagePage() {
  const { chats } = useNotificationStore();

  console.log(chats);

  return (
    <div className="messagePage">
      <div className="chatContainer">
        <div className="wrapper">
          <Chat chats={chats} />
          <hr />
        </div>
      </div>
    </div>
  );
}

export default MessagePage;
