// src/components/Assistant.jsx

import botImg from "../assets/bot.png";

export default function Assistant() {
  return (
    <div className="assistant-card">

      {/* header */}
      <div className="assistant-top">
        <h2>AI Assistant</h2>
        <span>•••</span>
      </div>

      {/* image */}
      <div className="assistant-image-box">
        <img
          src={botImg}
          alt="assistant"
          className="assistant-image"
        />
      </div>

      {/* chat area */}
      <div className="assistant-chat">

        {/* first msg */}
        <div className="chat-row left">

          <img
            src={botImg}
            alt="bot"
            className="mini-avatar"
          />

          <div className="chat-msg small-msg">
            How can I assist you today?
          </div>

        </div>

        {/* second */}
        <div className="chat-row right">
          <div className="chat-msg blue-msg">
            What's the status of Project Alpha?
            <span className="edit-icon">✎</span>
          </div>
        </div>

        {/* third */}
        <div className="chat-row left">

          <img
            src={botImg}
            alt="bot"
            className="mini-avatar"
          />

          <div className="chat-msg dark-msg">
            <p>Project Alpha: 75% complete.</p>
            <p>Deadline: 28 April.</p>
            <p>A few tasks remaining.</p>
          </div>

        </div>

      </div>

      {/* footer */}
      <div className="assistant-footer">
        <span>⌕</span>
        <span>✈</span>
        <span>➤</span>
      </div>

    </div>
  );
}