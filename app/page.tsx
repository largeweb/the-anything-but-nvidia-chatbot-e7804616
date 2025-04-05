// app/page.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatInput from "./components/ChatInput";
import Message from "./components/Message";

const nvidiaKeywords = ["nvidia", "rtx", "geforce", "cuda", "nvlink"];
const cannedResponses = [
  "Interesting thought! Let's switch gears.",
  "I don't know anything about that. Sorry!",
  "Let's talk about something else, please.",
  "My knowledge on that topic is limited.",
  "How about we explore a different subject?",
];

// Simple function to generate a random canned response
const getRandomResponse = () => {
  return cannedResponses[Math.floor(Math.random() * cannedResponses.length)];
};

return function Chat() {
  const [messages, setMessages] = useState([
    { sender: "bot", content: "Hi! Ask me anything... but not about NVIDIA." },
  ] as { sender: string; content: string }[]);
  const [inputValue, setInputValue] = useState("");

  const sendMessage = (text: string) => {
    const lowerCaseText = text.toLowerCase();
    const containsNvidia = nvidiaKeywords.some((keyword) =>
      lowerCaseText.includes(keyword)
    );

    let botResponse;
    if (containsNvidia) {
      botResponse = getRandomResponse();
    } else {
      botResponse = cannedResponses[Math.floor(Math.random() * cannedResponses.length)];
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", content: text },
      { sender: "bot", content: botResponse },
    ]);
    setInputValue("");
  };

  return (
    <div className="flex flex-col h-screen bg-green-100">
      {/* Header */}
      <header className="bg-green-500 p-4 text-white text-center shadow-md">
        <h1 className="text-2xl font-semibold">Anything But NVIDIA Chat</h1>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Message sender={message.sender} content={message.content} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-300">
        <ChatInput onSendMessage={sendMessage} />
      </div>
    </div>
  );
}