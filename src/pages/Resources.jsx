import React from 'react';

function Resources() {
  return (
    <div className="resources-container bg-gray-50 min-h-screen text-gray-800">
      <section className="hero bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mental Health Resources</h1>
          <p className="text-lg md:text-xl mb-8">Explore helpful articles, books, apps, and helplines curated to support your mental well-being.</p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">Recommended Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Understanding Anxiety', link: '#', summary: 'Learn about the causes, symptoms, and treatments for anxiety.' },
              { title: 'Managing Stress Effectively', link: '#', summary: 'Explore effective strategies for managing stress.' },
              { title: 'Practicing Mindfulness', link: '#', summary: 'Discover the benefits of mindfulness and how to start.' },
            ].map((article, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.summary}</p>
                <a href={article.link} className="text-blue-500 font-semibold hover:underline">Read More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">Suggested Books</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'The Power of Now', author: 'Eckhart Tolle', link: '#', description: 'A guide to living in the present moment.' },
              { title: 'Feeling Good: The New Mood Therapy', author: 'David D. Burns', link: '#', description: 'Techniques for combating depression.' },
              { title: 'Atomic Habits', author: 'James Clear', link: '#', description: 'Learn how small habits can make a big difference.' },
            ].map((book, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">{book.title}</h3>
                <p className="text-gray-600 mb-1"><em>by {book.author}</em></p>
                <p className="text-gray-600 mb-4">{book.description}</p>
                <a href={book.link} className="text-blue-500 font-semibold hover:underline">Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">Helpful Apps</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Headspace', description: 'Meditation and mindfulness made simple.', link: '#' },
              { name: 'Calm', description: 'Reduce stress and sleep better with guided meditations.', link: '#' },
              { name: 'Moodfit', description: 'A comprehensive tool for mental health improvement.', link: '#' },
            ].map((app, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">{app.name}</h3>
                <p className="text-gray-600 mb-4">{app.description}</p>
                <a href={app.link} className="text-blue-500 font-semibold hover:underline">Download</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Helplines Section */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">Mental Health Helplines</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'National Suicide Prevention Lifeline', phone: '1-800-273-TALK', description: 'Available 24/7 for support.' },
              { name: 'SAMHSA Helpline', phone: '1-800-662-HELP', description: 'Mental health and substance abuse support.' },
            ].map((helpline, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">{helpline.name}</h3>
                <p className="text-blue-500 text-lg font-semibold mb-1">{helpline.phone}</p>
                <p className="text-gray-600 mb-4">{helpline.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">Quick Tips for Mental Well-being</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Tip 1: Practice Mindfulness</h3>
              <p className="text-gray-600">Take a few minutes each day to focus on your breathing and become present in the moment.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Tip 2: Stay Active</h3>
              <p className="text-gray-600">Regular exercise can boost your mood and reduce anxiety levels.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Tip 3: Connect with Loved Ones</h3>
              <p className="text-gray-600">Spending time with family or friends can provide comfort and support.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Tip 4: Prioritize Sleep</h3>
              <p className="text-gray-600">Aim for 7-9 hours of sleep each night to support mental clarity and energy.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resources;
