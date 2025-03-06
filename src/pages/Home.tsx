import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, MessageSquare, Award, Users, BookOpenCheck } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 rounded-lg mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Learn Together, Grow Together</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            A community-driven Q&A platform for school students in Grades 10-12. 
            Ask questions, share knowledge, and learn from your peers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/questions" className="bg-white text-indigo-700 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold text-lg">
              Browse Questions
            </Link>
            <Link to="/ask" className="bg-indigo-500 hover:bg-indigo-400 px-6 py-3 rounded-md font-semibold text-lg">
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-10">Why EduForum?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Peer Learning</h3>
            <p className="text-gray-600">
              Connect with fellow students, ask questions, and share knowledge in a supportive environment.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <BookOpenCheck className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Grade-Specific Content</h3>
            <p className="text-gray-600">
              Find questions and answers relevant to your grade level and curriculum.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Teacher Guidance</h3>
            <p className="text-gray-600">
              Get insights and answers from verified teachers and education experts.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Subjects */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-10">Popular Subjects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {['Mathematics', 'Science', 'English', 'History', 'Geography', 'Computer Science', 'Physics', 'Chemistry'].map((subject, index) => (
            <Link 
              key={index}
              to={`/questions?subject=${subject.toLowerCase()}`}
              className="bg-white hover:bg-indigo-50 border border-gray-200 p-6 rounded-lg shadow-sm text-center transition-colors"
            >
              <h3 className="text-lg font-semibold text-indigo-700">{subject}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-indigo-50 py-12 rounded-lg mb-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Our Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">10,000+</div>
              <p className="text-gray-600">Students</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">5,000+</div>
              <p className="text-gray-600">Questions Answered</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">500+</div>
              <p className="text-gray-600">Verified Teachers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-10">What Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 italic mb-4">
              "EduForum helped me understand complex math concepts through peer explanations. The community is supportive and I've improved my grades significantly!"
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center mr-3">
                <span className="text-indigo-700 font-semibold">RS</span>
              </div>
              <div>
                <p className="font-semibold">Rahul Singh</p>
                <p className="text-sm text-gray-500">Grade 11, Delhi</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 italic mb-4">
              "As a student from a rural area, I didn't have access to tutors. EduForum connected me with peers and teachers who helped me prepare for my exams."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center mr-3">
                <span className="text-indigo-700 font-semibold">AP</span>
              </div>
              <div>
                <p className="font-semibold">Ananya Patel</p>
                <p className="text-sm text-gray-500">Grade 12, Rajasthan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Join Our Learning Community?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Create an account today and start your journey of collaborative learning.
        </p>
        <Link to="/register" className="bg-white text-indigo-700 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold text-lg inline-block">
          Sign Up Now
        </Link>
      </section>
    </div>
  );
};

export default Home;