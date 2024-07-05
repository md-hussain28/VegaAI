import React, { useContext, useState, useEffect, useMemo } from 'react';
import { Context } from '../context/Context';

const Mainbar = () => {
  const { input, setInput, onSent, resultData, loading } = useContext(Context);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi, how can I help you today?' },
  ]);

  const handleSend = async () => {
    if (input.trim()) {
      setMessages([...messages, { type: 'user', text: input }]);
      setInput('');
      await onSent(input);
    }
  };

  useEffect(() => {
    if (resultData) {
      setMessages((prev) => [...prev, { type: 'bot', text: resultData }]);
    }
  }, [resultData]);

  // Memoizing renderMessages to avoid unnecessary re-renders
  const renderMessages = useMemo(() => {
    return messages.map((msg, index) => {
      console.log(msg);
      return (
        <div key={index} className={`flex space-x-2 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
          <div className={`p-3 rounded-lg max-w-sm ${msg.type === 'user' ? 'bg-gray-300 text-black' : 'bg-blue-600 text-white'}`}>
            <p>{msg.text}</p>
          </div>
        </div>
      );
    });
  }, [messages]); // Only re-compute when `messages` changes

  return (
    <div className="flex flex-col flex-grow bg-cyan-600">
      <div className="bg-cyan-900  shadow-md p-4 flex items-center justify-between">
        <h1 className="text-4xl  text-cyan-300 w-fit pl-10 font-bold">VegaAI</h1>
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
          New Chat
        </button>
      </div>

      <div className="flex-grow p-4 overflow-y-auto">
        <div className="space-y-4">
          {renderMessages}
        </div>
      </div>

      <div className="bg-slate-700 p-4 shadow-md flex items-center">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          onClick={handleSend}
          className="ml-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default Mainbar;
