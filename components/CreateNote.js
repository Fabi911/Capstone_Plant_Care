// export default function CreateNote() {
//   return (
//     <>
//       <button>create note</button>
//       <label htmlFor="name">Name</label>
//       <input type="text" id="name" name="name" required maxLength={150} />
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for making HTTP requests

export default function CreateNote() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments from the server when the component mounts
    fetchComments();
  }, []); // Empty dependency array ensures this effect runs only once

  const fetchComments = async () => {
    try {
      const response = await axios.get("/api/plants/comments");
      setComments(response.data.comments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleCreateNote = async () => {
    try {
      const response = await axios.post(`/api/plants?id=${id}`, { comment });
      console.log("New comment:", comment);
      console.log("API response:", response.data);

      // Optionally, update the comments state with the newly added comment
      const updatedPlant = response.data.plant;
      const newComment = response.data.newComment;

      // Fetch updated comments after creating a new one
      fetchComments(); // Assuming fetchComments updates comments state

      // Optionally, reset the comment state after successful submission
      setComment("");
    } catch (error) {
      console.error("Error creating note:", error);
      // Handle error appropriately (e.g., show error message to the user)
    }
  };

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <>
      <button onClick={handleCreateNote}>Create Note</button>
      <label htmlFor="comment">Comment</label>
      <textarea
        id="comment"
        name="comment"
        value={comment}
        onChange={handleChange}
        required
        maxLength={150}
      />
      <h2>Comments:</h2>
      <ul>
        {comments.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
    </>
  );
}
