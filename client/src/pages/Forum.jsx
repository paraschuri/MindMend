import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

function Forum() {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');
    const { user } = useContext(AuthContext);
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://mindmend.onrender.com/api/forum');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (newPost) {
      try {
        const response = await axios.post('https://mindmend.onrender.com/api/forum', { user:user.name, text: newPost });
        setPosts([response.data, ...posts]);
        setNewPost('');
      } catch (error) {
        console.error('Error creating post:', error);
      }
    }
  };

  const handleLike = async (postId) => {
    try {
      const response = await axios.patch(`https://mindmend.onrender.com/api/forum/${postId}/like`, { user:user.name });
      setPosts(posts.map(post => (post._id === postId ? response.data : post)));
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleCommentSubmit = async (postId, comment) => {
    try {
      const response = await axios.post(`https://mindmend.onrender.com/api/forum/${postId}/comment`, { user:user.name, text: comment });
      setPosts(posts.map(post => (post._id === postId ? response.data : post)));
    } catch (error) {
      console.error('Error commenting on post:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 p-6">
      <div className="max-w-4xl mx-auto">
        {/* New Post Section */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Create a Post</h2>
          <form onSubmit={handlePostSubmit} className="mb-6">
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4"
              rows="3"
              placeholder="What's on your mind?"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Post
            </button>
          </form>
        </div>

        {/* Posts Section */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Forum</h2>
          <div>
            {posts.map(post => (
              <div key={post._id} className="mb-6 bg-gray-700 p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                    {post.user.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-200 font-semibold">{post.user}</p>
                    <span className="text-gray-400 text-sm">{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <p className="text-gray-200 mb-4">{post.text}</p>
                <div className="flex justify-between items-center">
                  <button onClick={() => handleLike(post._id)} className="text-blue-400 hover:underline">
                    Like ({post.likes})
                  </button>
                </div>
                <div className="mt-4">
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    handleCommentSubmit(post._id, e.target.comment.value);
                    e.target.comment.value = '';
                  }}>
                    <input
                      type="text"
                      name="comment"
                      className="w-full px-4 py-2 bg-gray-600 text-gray-200 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mb-2"
                      placeholder="Add a comment"
                    />
                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                      Comment
                    </button>
                  </form>
                  <div className="mt-4">
                    {post.comments.map((comment, index) => (
                      <div key={index} className="mb-2">
                        <div className="flex items-center mb-1">
                          <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
                            {comment.user.charAt(0)}
                          </div>
                          <div className="ml-2">
                            <p className="text-gray-200 font-semibold">{comment.user}</p>
                            <span className="text-gray-400 text-sm">{new Date(comment.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <p className="text-gray-200">{comment.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forum;