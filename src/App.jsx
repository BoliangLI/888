
import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transform transition-transform hover:scale-[1.02]">
          <div className="mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            欢迎！
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            感谢您的访问。这是一个简单而优雅的欢迎页面，展示了现代 Web 开发的最佳实践。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 transform hover:-translate-y-0.5">
              开始探索
            </button>
            <button className="px-6 py-3 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-medium rounded-lg transition-colors duration-200">
              了解更多
            </button>
          </div>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          © {new Date().getFullYear()} 欢迎页面 • 简单而美好
        </div>
      </div>
    </div>
  );
}
