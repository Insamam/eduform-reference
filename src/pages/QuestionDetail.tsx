import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ThumbsUp, ThumbsDown, MessageSquare, Award, Flag, Share2, BookmarkPlus, CheckCircle } from 'lucide-react';

// Mock data for a single question
const mockQuestion = {
  id: 1,
  title: "How do I solve quadratic equations using the quadratic formula?",
  body: "I'm struggling with applying the quadratic formula to solve equations. Can someone explain the steps and maybe provide an example? I understand that the formula is x = (-b ± √(b² - 4ac)) / 2a, but I get confused when actually applying it to problems.\n\nFor example, how would I solve 2x² + 5x - 3 = 0 using the quadratic formula?",
  author: "Rahul Singh",
  authorGrade: "11",
  authorSchool: "Delhi Public School",
  subject: "Mathematics",
  votes: 24,
  views: 156,
  timestamp: "2 days ago",
  tags: ["algebra", "equations"],
  answers: [
    {
      id: 1,
      body: "The quadratic formula is used to solve equations in the form ax² + bx + c = 0.\n\nHere are the steps:\n\n1. Identify the values of a, b, and c from your equation.\n2. Substitute these values into the formula: x = (-b ± √(b² - 4ac)) / 2a\n3. Calculate the discriminant (b² - 4ac)\n4. Find both solutions by using + and - in the formula.\n\nFor your example 2x² + 5x - 3 = 0:\n- a = 2, b = 5, c = -3\n- x = (-5 ± √(5² - 4×2×(-3))) / (2×2)\n- x = (-5 ± √(25 + 24)) / 4\n- x = (-5 ± √49) / 4\n- x = (-5 ± 7) / 4\n\nSo, x = (-5 + 7) / 4 = 2/4 = 0.5 or x = (-5 - 7) / 4 = -12/4 = -3\n\nYou can verify these answers by substituting them back into the original equation.",
      author: "Ms. Anjali Gupta",
      isTeacher: true,
      votes: 18,
      timestamp: "1 day ago",
      accepted: true
    },
    {
      id: 2,
      body: "Here's another way to think about it:\n\nThe quadratic formula gives you the x-intercepts of the parabola represented by your quadratic equation. These are the points where the parabola crosses the x-axis, which are the solutions to your equation.\n\nA visual way to understand this is to graph y = 2x² + 5x - 3 and see where it crosses the x-axis. You'll find that it crosses at x = 0.5 and x = -3, which matches the solutions we found using the formula.",
      author: "Vikram Patel",
      isTeacher: false,
      votes: 7,
      timestamp: "1 day ago",
      accepted: false
    }
  ]
};

// Mock data for related questions
const relatedQuestions = [
  {
    id: 7,
    title: "How to factor quadratic expressions?",
    answers: 6
  },
  {
    id: 8,
    title: "What's the difference between completing the square and the quadratic formula?",
    answers: 4
  },
  {
    id: 9,
    title: "When should I use the quadratic formula vs. factoring?",
    answers: 5
  }
];

const QuestionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [answerText, setAnswerText] = useState("");
  const [showAnswerForm, setShowAnswerForm] = useState(false);

  // In a real app, you would fetch the question data based on the id
  const question = mockQuestion;

  const handleSubmitAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit the answer to your backend
    alert("Your answer has been submitted!");
    setAnswerText("");
    setShowAnswerForm(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        {/* Question */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{question.title}</h1>
          
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span className="mr-4">Asked {question.timestamp}</span>
            <span className="mr-4">Viewed {question.views} times</span>
            <span>Subject: {question.subject}</span>
          </div>
          
          <div className="flex items-start mb-6">
            <div className="flex flex-col items-center mr-6">
              <button className="text-gray-400 hover:text-indigo-600 mb-2">
                <ThumbsUp className="h-6 w-6" />
              </button>
              <span className="font-semibold">{question.votes}</span>
              <button className="text-gray-400 hover:text-red-600 mt-2">
                <ThumbsDown className="h-6 w-6" />
              </button>
            </div>
            
            <div className="flex-1">
              <div className="prose max-w-none mb-4">
                <p className="whitespace-pre-line">{question.body}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {question.tags.map((tag, index) => (
                  <span key={index} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <button className="text-gray-500 hover:text-indigo-600 flex items-center text-sm">
                    <Share2 className="h-4 w-4 mr-1" />
                    <span>Share</span>
                  </button>
                  <button className="text-gray-500 hover:text-indigo-600 flex items-center text-sm">
                    <BookmarkPlus className="h-4 w-4 mr-1" />
                    <span>Save</span>
                  </button>
                  <button className="text-gray-500 hover:text-red-600 flex items-center text-sm">
                    <Flag className="h-4 w-4 mr-1" />
                    <span>Report</span>
                  </button>
                </div>
                
                <div className="bg-indigo-50 p-3 rounded-md">
                  <div className="text-sm">
                    <span className="text-gray-600">Asked by</span>
                    <div className="font-semibold text-indigo-700">{question.author}</div>
                    <div className="text-gray-600">Grade {question.authorGrade}</div>
                    <div className="text-gray-600">{question.authorSchool}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Answers */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">{question.answers.length} Answers</h2>
          
          {question.answers.map(answer => (
            <div key={answer.id} className={`bg-white rounded-lg shadow-md p-6 mb-4 ${answer.accepted ? 'border-2 border-green-500' : ''}`}>
              {answer.accepted && (
                <div className="flex items-center text-green-600 mb-4">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Accepted Answer</span>
                </div>
              )}
              
              <div className="flex items-start">
                <div className="flex flex-col items-center mr-6">
                  <button className="text-gray-400 hover:text-indigo-600 mb-2">
                    <ThumbsUp className="h-6 w-6" />
                  </button>
                  <span className="font-semibold">{answer.votes}</span>
                  <button className="text-gray-400 hover:text-red-600 mt-2">
                    <ThumbsDown className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="flex-1">
                  <div className="prose max-w-none mb-4">
                    <p className="whitespace-pre-line">{answer.body}</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                      <button className="text-gray-500 hover:text-indigo-600 flex items-center text-sm">
                        <Share2 className="h-4 w-4 mr-1" />
                        <span>Share</span>
                      </button>
                      <button className="text-gray-500 hover:text-red-600 flex items-center text-sm">
                        <Flag className="h-4 w-4 mr-1" />
                        <span>Report</span>
                      </button>
                    </div>
                    
                    <div className={`${answer.isTeacher ? 'bg-green-50' : 'bg-indigo-50'} p-3 rounded-md`}>
                      <div className="text-sm">
                        {answer.isTeacher && (
                          <div className="flex items-center text-green-700 mb-1">
                            <Award className="h-4 w-4 mr-1" />
                            <span className="font-semibold">Verified Teacher</span>
                          </div>
                        )}
                        <div className={`font-semibold ${answer.isTeacher ? 'text-green-700' : 'text-indigo-700'}`}>
                          {answer.author}
                        </div>
                        <div className="text-gray-600">Answered {answer.timestamp}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Your Answer */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          {!showAnswerForm ? (
            <div className="text-center">
              <h2 className="text-xl font-bold mb-4">Know the answer?</h2>
              <button 
                onClick={() => setShowAnswerForm(true)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-semibold"
              >
                Write Your Answer
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-bold mb-4">Your Answer</h2>
              <form onSubmit={handleSubmitAnswer}>
                <div className="mb-4">
                  <textarea
                    value={answerText}
                    onChange={(e) => setAnswerText(e.target.value)}
                    rows={8}
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Write your answer here..."
                    required
                  ></textarea>
                </div>
                <div className="flex justify-end space-x-4">
                  <button 
                    type="button"
                    onClick={() => setShowAnswerForm(false)}
                    className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-md"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
                  >
                    Post Your Answer
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <h3 className="font-semibold text-lg mb-3">Related Questions</h3>
          <ul className="space-y-3">
            {relatedQuestions.map(q => (
              <li key={q.id}>
                <a href={`/questions/${q.id}`} className="text-indigo-600 hover:text-indigo-800 block">
                  {q.title}
                </a>
                <div className="text-sm text-gray-500 flex items-center mt-1">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  <span>{q.answers} answers</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-indigo-50 rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-3">Tips for Great Answers</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Provide step-by-step explanations</li>
            <li>• Include examples when possible</li>
            <li>• Be respectful and supportive</li>
            <li>• Cite sources if you reference them</li>
            <li>• Focus on clarity and accuracy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;