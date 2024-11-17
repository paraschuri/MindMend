import React from 'react';

function Meditation() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 p-6">
      <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-blue-400">Meditation</h2>
        <p className="mb-4 text-gray-400">
          Begin a guided meditation session to help relax and reduce stress.
        </p>
        <div className="mb-6">
          {/* Placeholder for meditation audio or video */}
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/inpok4MKVLM"
            title="Guided Meditation"
            frameBorder="0"
            allowFullScreen
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Meditation;