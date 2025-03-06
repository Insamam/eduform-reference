import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Info } from 'lucide-react';

const subjects = [
  "Mathematics", "Science", "English", "History", "Geography", 
  "Computer Science", "Physics", "Chemistry", "Biology", "Economics"
];

const AskQuestion: React.FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [tags, setTags] = useState("");
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!title.trim()) newErrors.title = "Title is required";
    else if (title.length < 15) newErrors.title = "Title should be at least 15 characters";
    
    if (!body.trim()) newErrors.body = "Question details are required";
    else if (body.length < 30) newErrors.body = "Please provide more details (at least 30 characters)";
    
    if (!subject) newErrors.subject = "Subject is required";
    if (!grade) newErrors.grade = "Grade is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, you would submit the question to your backend
      alert("Your question has been submitted!");
      navigate("/questions");
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Ask a Question</h1>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <Info className="h-5 w-5 text-blue-500" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              Tips for getting good answers quickly:
            </p>
            <ul className="mt-1 text-sm text-blue-700 list-disc list-inside">
              <li>Make sure your question is clear and specific</li>
              <li>Include all the necessary details and context</li>
              <li>Check if your question has already been asked</li>
              <li>Use proper grammar and formatting</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Question Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              placeholder="e.g., How do I solve quadratic equations using the quadratic formula?"
            />
            {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
            <p className="mt-1 text-sm text-gray-500">
              Be specific and imagine you're asking a question to a classmate
            </p>
          </div>
          
          <div className="mb-6">
            <label htmlFor="body" className="block text-sm font-medium text-gray-700 mb-1">
              Question Details
            </label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={8}
              className={`w-full border ${errors.body ? 'border-red-500' : 'border-gray-300'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              placeholder="Include all the information someone would need to answer your question..."
            ></textarea>
            {errors.body && <p className="mt-1 text-sm text-red-600">{errors.body}</p>}
            <p className="mt-1 text-sm text-gray-500">
              Include any relevant details, what you've tried so far, and what you're having trouble with
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <select
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={`w-full border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              >
                <option value="">Select a subject</option>
                {subjects.map((sub, index) => (
                  <option key={index} value={sub}>{sub}</option>
                ))}
              </select>
              {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
            </div>
            
            <div>
              <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">
                Grade
              </label>
              <select
                id="grade"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                className={`w-full border ${errors.grade ? 'border-red-500' : 'border-gray-300'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              >
                <option value="">Select your grade</option>
                <option value="10">Grade 10</option>
                <option value="11">Grade 11</option>
                <option value="12">Grade 12</option>
              </select>
              {errors.grade && <p className="mt-1 text-sm text-red-600">{errors.grade}</p>}
            </div>
          </div>
          
          <div className="mb-8">
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
              Tags
            </label>
            <input
              type="text"
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., algebra, equations (separate with commas)"
            />
            <p className="mt-1 text-sm text-gray-500">
              Add up to 5 tags to describe what your question is about
            </p>
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-semibold"
            >
              Post Your Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;