import { useState } from "react";

export default function Message() {
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Check if the message is not empty before saving to local storage
    if (message.trim() !== '') {
      localStorage.setItem('message', message);
      // Optionally, you can clear the message state after submission
      setMessage('');
    }
  }

  return (
    <div className="overflow-x-auto mt-10">
      <div className="flex justify-center">
        <div className="w-[90%]  p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-center">Write Something</h2>
          <p className="text-md font-bold text-black mb-2">Please enter your message below:</p>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-32 p-2 border rounded-md focus:outline-none  mb-4"
            placeholder="Enter your message here..."
          />
          <button
            type="button"
            className="md:w-[20%] w-[50%] text-white bg-[#ec6105] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
