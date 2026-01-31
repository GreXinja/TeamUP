import { useEffect, useRef, useState } from "react";
import "./DashboardChat.css";
import { useNavigate } from "react-router-dom";

export default function DashboardChat({ user, conversationId }) {
  const [messages, setMessages] = useState([]); // MUST stay array
  const [text, setText] = useState("");
  const bottomRef = useRef(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const currentUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!conversationId) {
      setMessages([]);
      return;
    }

    const fetchMessages = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/chat/messages/${conversationId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        const data = await res.json();

        if (Array.isArray(data)) {
          setMessages(data);
        } else if (Array.isArray(data.messages)) {
          setMessages(data.messages);
        } else {
          setMessages([]);
        }
      } catch (err) {
        console.error("Fetch messages error:", err);
        setMessages([]);
      }
    };

    fetchMessages();
  }, [conversationId, token]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!text.trim() || !user) return;

    try {
      const res = await fetch("http://localhost:5000/api/chat/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          receiverId: user._id || user.id,
          text,
        }),
      });

      const data = await res.json();

      if (data.message) {
        setMessages((prev) => [...prev, data.message]);
        setText("");
      }
    } catch (err) {
      console.error("Send message error:", err);
    }
  };

  if (!user) {
    return (
      <div className="chat-placeholder">
        <div className="chat-placeholder-content">
          <div className="chat-placeholder-icon">💬</div>
          <h3>Your messages will appear here</h3>
          <p>
            Start a conversation with a teammate to collaborate, discuss ideas,
            and plan your hackathon journey.
          </p>

          <button
            className="chat-placeholder-btn"
            onClick={() => navigate(`/find-teammates/${currentUser.id}`)}
          >
            Find Teammates
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-chat">
      {/* HEADER */}
      <div className="chat-header">
        <div className="chat-avatar">{user.fullName[0]}</div>
        <div>
          <h4 style={{ color: "#fff" }}>{user.fullName}</h4>
          <p style={{ color: "#fff" }}>{user.college}</p>
        </div>
      </div>

      {/* BODY */}
      <div className="chat-body">
        {messages.map((msg) => (
          <div
            key={msg._id}
            className={`msg ${
              msg.sender === currentUser.id ? "outgoing" : "incoming"
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* INPUT */}
      <div className="chat-input">
        <input
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>➤</button>
      </div>
    </div>
  );
}
