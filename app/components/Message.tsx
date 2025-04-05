// app/components/Message.tsx

import React from 'react';

interface Props {
  sender: 'user' | 'bot';
  content: string;
}

const Message: React.FC<Props> = ({ sender, content }) => {
  const isUserMessage = sender === 'user';

  return (
    <div className={`flex ${isUserMessage ? 'justify-end' : 'justify-start'} mb-2`}>
      <div
        className={`rounded-xl px-4 py-2 text-sm max-w-xs break-words ${
          isUserMessage
            ? 'bg-green-500 text-white rounded-br-none'
            : 'bg-gray-200 text-gray-800 rounded-bl-none'
        }`}
      >
        {content}
      </div>
    </div>
  );
};

return Message;