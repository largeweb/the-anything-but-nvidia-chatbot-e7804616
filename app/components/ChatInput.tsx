// app/components/ChatInput.tsx
"use client";

import React, { useState } from "react";

interface Props {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<Props> = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      onSendMessage(inputValue);
      setInputValue(""); // Clear the input after sending
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="flex items-center p-4 bg-green-100">
      <input
        type="text"
        placeholder="Type a message..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button
        onClick={handleSendMessage}
        className="ml-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Send
      </button>
    </div>
  );
};

return ChatInput;