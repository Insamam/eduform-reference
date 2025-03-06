import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ThumbsUp, Eye, Filter, BookOpen } from 'lucide-react';

// Mock data for questions
const mockQuestions = [
  {
    id: 1,
    title: "How do I solve quadratic equations using the quadratic formula?",
    body: "I'm struggling with applying the quadratic formula to solve equations. Can someone explain the steps?",
    author: "Rahul Singh",
    grade: "11",
    subject: "Mathematics",
    votes: 24,
    answers: 8,
    views: 156,
    timestamp: "2 days ago",
    tags: ["algebra", "equations"]
  },
  {
    id: 2,
    title: "What are the key differences between photosynthesis and cellular respiration?",
    body: "I need to compare and contrast these processes for my biology assignment.",
    author: "Priya Sharma",
    grade: "10",
    subject: "Science",
    votes: 18,
    answers: 5,
    views: 102,
    timestamp: "1 day ago",
    tags: ["biology", "cellular-processes"]
  },
  {
    id: 3,
    title: "How to analyze the theme of ambition in Macbeth?",
    body: "I'm writing an essay on the theme of ambition in Shakespeare's Macbeth. What are some key points I should include?",
    author: "Ananya Patel",
    grade: "12",
    subject: "English",
    votes: 15,
    answers: 6,
    views: 89,
    timestamp: "3 days ago",
    tags: ["literature", "shakespeare"]
  },
  {
    id: 4,
    title: "What were the main causes of World War I?",
    body: "I need to understand the various factors that led to the outbreak of World War I for my history project.",
    author: "Arjun Kumar",
    grade: "10",
    subject: "History",
    votes: 22,
    answers: 7,
    views: 134,
    timestamp: "4 days ago",
    tags: ["world-history", "wars"]
  },
  {
    id: 5,
    title: "How do I calculate the pH of a buffer solution?",
    body: "I'm having trouble understanding how to calculate the pH of a buffer solution using the Henderson-Hasselbalch equation.",
    author: "Neha Gupta",
    grade: "12",
    subject: "Chemistry",
    votes: 19,
    answers: 4,
    views: 95,
    timestamp: "2 days ago",
    tags: ["chemistry", "acids-bases"]
  },
  {
    id: 6,
    title: "What is the significance of the Green Revolution in India?",
    body: "I need to understand the impact of the Green Revolution on Indian agriculture and economy.",
    author: "Vikram Singh",
    grade: "11",
    subject: "Geography",
    votes: 14,
    answers: 3,
    views: 78,
    timestamp: "5 days ago",
    tags: ["geography", "agriculture"]
  }
];

const subjects = [
  "All Subjects", "Mathematics", "Science", "English", "History", "Geography", "Computer Science", "Physics", "Chemistry"
];

const grades = ["All Grades", "10", "11", "12"];

const Questions: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");
  const [selectedGrade, setSelectedGrade] = useState("All Grades");
  const [sortBy, setSortBy] = useState("newest");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredQuestions = mockQuestions.filter(question => {
    const subjectMatch = selectedSubject === "All Subjects" || question.subject === selectedSubject;
    const gradeMatch = selectedGrade === "All Grades" || question.grade === selectedGrade;
    return subjectMatch && gradeMatch;
  });

  const sortedQuestions = [...filteredQuestions].sort((a, b) => {
    if (sortBy === "newest") return b.id - a.id;
    if (sortBy === "votes") return b.votes - a.votes;
    if (sortBy === "answers") return b.answers - a.answers;
    return b.views - a.views;
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Questions</h1>
        <Link to="/ask" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md">
          Ask Question
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex justify-between items-center">
          <button 
            className="md:hidden flex items-center space-x-2 text-indigo-600"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter className="h-5 w-5" />
            <span>Filters</span>
          </button>
          
          <div className="hidden md:flex items-center space-x-4">
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <select
                id="subject"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {subjects.map((subject, index) => (
                  <option key={index} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">Grade</label>
              <select
                id="grade"
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {grades.map((grade, index) => (
                  <option key={index} value={grade}>{grade}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="newest">Newest</option>
              <option value="votes">Most Votes</option>
              <option value="answers">Most Answers</option>
              <option value="views">Most Views</option>
            </select>
          </div>
        </div>
        
        {/* Mobile Filters */}
        {isFilterOpen && (
          <div className="md:hidden mt-4 space-y-4 border-t pt-4">
            <div>
              <label htmlFor="subject-mobile" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <select
                id="subject-mobile"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {subjects.map((subject, index) => (
                  <option key={index} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="grade-mobile" className="block text-sm font-medium text-gray-700 mb-1">Grade</label>
              <select
                id="grade-mobile"
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {grades.map((grade, index) => (
                  <option key={index} value={grade}>{grade}</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-4">
        {sortedQuestions.length > 0 ? (
          sortedQuestions.map(question => (
            <div key={question.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <Link to={`/questions/${question.id}`} className="block">
                <h2 className="text-xl font-semibold text-indigo-700 mb-2">{question.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-2">{question.body}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {question.tags.map((tag, index) => (
                    <span key={index} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span className="mr-4">{question.subject}</span>
                  <span>Grade {question.grade}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <ThumbsUp className="h-4 w-4 mr-1 text-green-600" />
                      <span>{question.votes} votes</span>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-1 text-indigo-600" />
                      <span>{question.answers} answers</span>
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1 text-gray-500" />
                      <span>{question.views} views</span>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    <span>Asked {question.timestamp} by </span>
                    <span className="text-indigo-600">{question.author}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600 mb-4">No questions found matching your criteria.</p>
            <Link to="/ask" className="text-indigo-600 hover:text-indigo-800">
              Be the first to ask a question!
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Questions;