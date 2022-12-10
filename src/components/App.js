import React, { useState } from "react";
import video from "../data/video.js";

function App() {
  // console.log("Here's your data:", video);

  const [votes, setVotes] = useState({
    upvotes: video.upvotes,
    downvotes: video.downvotes,
  });
  // console.log(votes);

  function handleUpVotes() {
    setVotes({ upvotes: votes.upvotes + 1, downvotes: video.downvotes });
  }

  function handleDownVotes() {
    setVotes({ upvotes: votes.upvotes, downvotes: votes.downvotes - 1 });
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>
        {video.views} Views | Uploaded {video.createdAt}
      </p>
      <button onClick={handleUpVotes}>{votes.upvotes} 👍</button>
      <button onClick={handleDownVotes}>{votes.downvotes} 👎</button>
      <div>
        <button>Hide Comments</button>
      </div>
    </div>
  );
}

export default App;
