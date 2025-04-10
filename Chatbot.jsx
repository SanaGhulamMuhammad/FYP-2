import React, { useState, useCallback } from "react";
import axios from "axios";
import { FaComments, FaPaperPlane } from "react-icons/fa"; // Importing the chat bubble icon

// A simple avatar for the user and assistant
const userAvatar = "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"; // Placeholder user avatar
const assistantAvatar = "https://media.istockphoto.com/id/1010001882/vector/%C3%B0%C3%B0%C2%B5%C3%B1%C3%B0%C3%B1%C3%B1.jpg?s=612x612&w=0&k=20&c=1jeAr9KSx3sG7SKxUPR_j8WPSZq_NIKL0P-MA4F1xRw="; // Updated Assistant Avatar text to A

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessageToAPI = async (updatedChat) => {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: updatedChat,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer YOUR_API_KEY`, // Replace with your API key
          },
        }
      );

      const botMessage = {
        role: "assistant",
        content: response.data.choices[0].message.content,
      };

      return botMessage;
    } catch (error) {
      console.error("OpenAI API error:", error);
      return { role: "assistant", content: "⚠️ Something went wrong. Try again!" };
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const updatedChat = [...chat, userMessage];

    setChat(updatedChat);
    setInput("");
    setLoading(true);

    const botMessage = await sendMessageToAPI(updatedChat);
    setChat([...updatedChat, botMessage]);
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  const handleChange = useCallback(
    (e) => {
      setInput(e.target.value);
    },
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#EFD4C9] to-[#f9f9f9] px-6 py-10 flex flex-col items-center font-sans">
      <h1
        className="text-4xl font-semibold text-[#831418] mb-6 flex items-center space-x-3"
        style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 0.15), 0 1px 1px rgba(0, 0, 0, 0.1)" }}
      >
        {/* Using the chat bubble icon here */}
        <FaComments className="text-4xl" />
        <span>Assistant Chatbot</span>
      </h1>

      <div
        className="w-full max-w-2xl bg-[#F8E4D5] shadow-lg rounded-3xl p-6 flex flex-col h-[75vh] overflow-hidden border-4 border-[#831418]" // Lighter background color
      >
        <div
          className="flex-1 overflow-y-auto mb-4 space-y-3 pr-4"
          style={{
            maxHeight: "calc(75vh - 150px)",
            scrollbarWidth: "thin", // Thinner scrollbar for Firefox
            scrollbarColor: "#F7C8B2 #F0F0F0", // Custom color for thumb and track (Firefox)
          }}
        >
          {chat.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fadeIn`}
            >
              <div
                className={`flex items-center space-x-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
                {/* Profile Picture */}
                <img
                  src={msg.role === "user" ? userAvatar : assistantAvatar}
                  alt="avatar"
                  className="w-8 h-8 rounded-full border-2 border-[#B17F6B]" // Smaller avatar size
                />
                <div
                  className={`p-4 max-w-[75%] break-words ${msg.role === "user"
                      ? "bg-[#831418] text-white shadow-xl rounded-xl transform scale-95" // User message color changed
                      : "bg-[#F7F7F7] text-[#333] border border-[#ddd] shadow-md rounded-xl transform scale-95"
                    }`}
                  style={{
                    wordWrap: "break-word",
                    marginBottom: "12px",
                    lineHeight: "1.4",
                    position: "relative",
                    paddingBottom: "10px",
                    paddingTop: "8px", // Reduced padding for smaller height
                    transformOrigin: "center",
                  }}
                >
                  {msg.role === "user" && (
                    <div className="absolute bottom-0 left-0 w-4 h-4 bg-[#831418] transform rotate-45 -translate-x-2 translate-y-2"></div>
                  )}
                  {msg.role === "assistant" && (
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#F7F7F7] transform rotate-45 translate-x-2 translate-y-2 border-t border-l border-[#ddd]"></div>
                  )}
                  <p className="text-sm">{msg.content}</p>
                </div>
              </div>
            </div>
          ))}
          {loading && (
            <div className="text-sm text-gray-500 animate-pulse">Assistant is typing...</div>
          )}
        </div>

        <div className="flex mt-auto space-x-4">
          <input
            type="text"
            placeholder="Ask me anything..."
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            className="flex-1 p-3 border-2 border-[#B17F6B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B17F6B] transition duration-300 shadow-lg hover:shadow-xl"
            style={{ minWidth: "300px" }}
          />
          <button
            onClick={handleSend}
            className="bg-[#831418] hover:bg-[#9e5b47] text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 flex items-center"
          >
            <FaPaperPlane className="mr-2" /> Send
          </button>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        /* Custom scrollbar for Webkit browsers (Chrome, Safari) */
        ::-webkit-scrollbar {
          width: 8px; /* Thinner scrollbar */
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to top, #ff7e5f, #feb47b); /* Colorful gradient for the thumb */
          border-radius: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #f0f0f0; /* Light track color */
        }
      `}</style>
    </div>
  );
};

export default Chatbot;