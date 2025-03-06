import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs';
import { MessageSquare, Award, User, Settings, BookOpen, ThumbsUp } from 'lucide-react';

interface ProfileProps {
  user: any;
}

// Mock data for user profile
const mockUserData = {
  id: 1,
  name: "Rahul Singh",
  email: "rahul.singh@example.com",
  grade: "11",
  school: "Delhi Public School",
  joinDate: "August 2023",
  bio: "I'm passionate about mathematics and physics. Looking to connect with peers who share similar interests.",
  questions: [
    {
      id: 1,
      title: "How do I solve quadratic equations using the quadratic formula?",
      answers: 8,
      votes: 24,
      timestamp: "2 days ago"
    },
    {
      id: 10,
      title: "Can someone explain Newton's Third Law with examples?",
      answers: 3,
      votes: 12,
      timestamp: "1 week ago"
    }
  ],
  answers: [
    {
      id: 5,
      questionId: 3,
      questionTitle: "How to analyze the theme of ambition in Macbeth?",
      votes: 7,
      accepted: false,
      timestamp: "3 days ago"
    },
    {
      id: 8,
      questionId: 6,
      questionTitle: "What is the significance of the Green Revolution in India?",
      votes: 15,
      accepted: true,
      timestamp: "1 week ago"
    }
  ],
  badges: [
    { id: 1, name: "Curious Mind", description: "Asked 5 questions", icon: "MessageSquare" },
    { id: 2, name: "Helpful Hand", description: "Posted 10 answers", icon: "ThumbsUp" },
    { id: 3, name: "Math Enthusiast", description: "Active in Mathematics subject", icon: "BookOpen" }
  ]
};

const Profile: React.FC<ProfileProps> = ({ user }) => {
  // In a real app, you would fetch the user data based on the user prop
  const userData = mockUserData;
  
  const [activeTab, setActiveTab] = useState("questions");
  
  // For a real app, you would implement these functions
  const handleEditProfile = () => {
    alert("Edit profile functionality would be implemented here");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Sidebar - User Info */}
      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center mb-6">
            <div className="w-24 h-24 bg-indigo-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-indigo-700 text-3xl font-semibold">
                {userData.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <h2 className="text-xl font-bold">{userData.name}</h2>
            <p className="text-gray-600">Grade {userData.grade}</p>
            <p className="text-gray-600">{userData.school}</p>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <p className="text-gray-700 mb-4">{userData.bio}</p>
            
            <div className="text-sm text-gray-600">
              <p className="flex items-center mb-2">
                <Mail className="h-4 w-4 mr-2" />
                {userData.email}
              </p>
              <p className="flex items-center mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                Joined {userData.joinDate}
              </p>
            </div>
          </div>
          
          <button
            onClick={handleEditProfile}
            className="w-full mt-4 flex items-center justify-center bg-indigo-100 hover:bg-indigo-200 text-indigo-700 py-2 rounded-md"
          >
            <Settings className="h-4 w-4 mr-2" />
            <span>Edit Profile</span>
          </button>
        </div>
        
        {/* Badges */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <h3 className="font-semibold text-lg mb-4">Badges</h3>
          <div className="space-y-4">
            {userData.badges.map(badge => (
              <div key={badge.id} className="flex items-center">
                <div className="bg-indigo-100 p-2 rounded-full mr-3">
                  {badge.icon === "MessageSquare" && <MessageSquare className="h-5 w-5 text-indigo-600" />}
                  {badge.icon === "ThumbsUp" && <ThumbsUp className="h-5 w-5 text-indigo-600" />}
                  {badge.icon === "BookOpen" && <BookOpen className="h-5 w-5 text-indigo-600" />}
                </div>
                <div>
                  <p className="font-semibold">{badge.name}</p>
                  <p className="text-sm text-gray-600">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="lg:col-span-3">
        <div className="bg-white rounded-lg shadow-md p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="questions" className="flex items-center justify-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                <span>My Questions</span>
              </TabsTrigger>
              <TabsTrigger value="answers" className="flex items-center justify-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                <span>My Answers</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="questions">
              <h3 className="text-xl font-semibold mb-4">Questions You've Asked</h3>
              {userData.questions.length > 0 ? (
                <div className="space-y-4">
                  {userData.questions.map(question => (
                    <div key={question.id} className="border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
                      <a href={`/questions/${question.id}`} className="block">
                        <h4 className="text-lg font-semibold text-indigo-700 mb-2">{question.title}</h4>
                        <div className="flex justify-between items-center text-sm text-gray-600">
                          <div className="flex space-x-4">
                            <span className="flex items-center">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              {question.answers} answers
                            </span>
                            <span className="flex items-center">
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              {question.votes} votes
                            </span>
                          </div>
                          <span>Asked {question.timestamp}</span>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">You haven't asked any questions yet</p>
                  <a href="/ask" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                    Ask your first question
                  </a>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="answers">
              <h3 className="text-xl font-semibold mb-4">Answers You've Provided</h3>
              {userData.answers.length > 0 ? (
                <div className="space-y-4">
                  {userData.answers.map(answer => (
                    <div key={answer.id} className="border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
                      <a href={`/questions/${answer.questionId}`} className="block">
                        <h4 className="text-lg font-semibold text-indigo-700 mb-2">{answer.questionTitle}</h4>
                        <div className="flex justify-between items-center text-sm text-gray-600">
                          <div className="flex space-x-4">
                            <span className="flex items-center">
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              {answer.votes} votes
                            </span>
                            {answer.accepted && (
                              <span className="flex items-center text-green-600">
                                <CheckCircle className="h-4 w-4 mr-1" />
                                Accepted
                              </span>
                            )}
                          </div>
                          <span>Answered {answer.timestamp}</span>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">You haven't answered any questions yet</p>
                  <a href="/questions" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                    Browse questions to answer
                  </a>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;