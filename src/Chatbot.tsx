import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageCircle } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { askGemini } from "../geminiService"; // Import Gemini service

interface Message {
  sender: "user" | "bot";
  text: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hi! 👋 I’m your Paris Mystery assistant. Ask me anything about our perfumes!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

const handleSend = async () => {
  if (!input.trim()) return;

  const userMessage: Message = { sender: "user", text: input };
  setMessages((prev) => [...prev, userMessage]);
  setInput("");

  setLoading(true);

  const reply = await askGemini(input);

  const botMessage: Message = { sender: "bot", text: reply };
  setMessages((prev) => [...prev, botMessage]);

  setLoading(false);
};

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="p-4 rounded-full bg-white text-black shadow-lg hover:bg-gray-200 transition"
        >
          <FiMessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className="w-80 h-96 bg-[#111] text-white rounded-2xl shadow-xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center bg-[#222] px-4 py-3 border-b border-gray-700">
              <h3 className="font-semibold">Paris Mystery Chat</h3>
              <button onClick={() => setIsOpen(false)}>
                <ImCross size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-lg max-w-[75%] ${
                    msg.sender === "user"
                      ? "bg-white text-black self-end ml-auto"
                      : "bg-gray-800 text-white"
                  }`}
                >
                  {msg.text}
                </div>
              ))}

              {loading && (
                <div className="p-2 rounded-lg bg-gray-800 text-gray-400 text-sm w-fit">
                  Typing...
                </div>
              )}
            </div>

            {/* Input */}
            <div className="flex border-t border-gray-700">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-transparent px-3 py-2 text-sm outline-none"
              />
              <button
                onClick={handleSend}
                disabled={loading}
                className="px-4 py-2 bg-white text-black text-sm font-medium hover:bg-gray-200 transition"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
