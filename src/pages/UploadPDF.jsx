import React, { useState } from 'react';
import Header from '../partials/Header';

const UploadPDF = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadStatus, setUploadStatus] = useState('');
  const [topics, setTopics] = useState('');

  const handleFileChange = (e) => {
    setSelectedFiles(Array.from(e.target.files));
    setUploadStatus('');
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFiles.length) {
      setUploadStatus('Please select one or more PDF files to upload.');
      return;
    }
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append('pdfs', file);
    });
    try {
      const response = await fetch('http://localhost:3001/api/upload-pdfs', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      if (response.ok) {
        setUploadStatus('Upload successful!');
        setSelectedFiles([]);
        setTopics(result.topics || '');
      } else {
        setUploadStatus('Upload failed. Please try again.');
        setTopics('');
      }
    } catch (error) {
      setUploadStatus('An error occurred. Please try again.');
      setTopics('');
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-purple-100 flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl pt-24 pb-12"> {/* Add top and bottom padding to prevent header overlap */}
          <div className="w-full p-8 rounded-3xl shadow-2xl bg-white bg-opacity-90 backdrop-blur-xl border-2 border-blue-200 transition-all duration-500">
            <h2 className="text-3xl font-extrabold mb-6 text-gray-900 text-center tracking-tight drop-shadow-lg">Upload Previous Year Question Papers (PDFs)</h2>
            <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
              <label htmlFor="pdf-upload" className="flex flex-col items-center justify-center border-4 border-dashed border-blue-400 rounded-2xl py-12 px-6 cursor-pointer transition-all duration-300 hover:border-purple-400 bg-blue-50 bg-opacity-60 shadow-lg hover:shadow-purple-400">
                <svg className="w-14 h-14 text-blue-600 mb-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v6m0 0l-3-3m3 3l3-3m6-6V7a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0a2 2 0 01-2 2H6a2 2 0 01-2-2" />
                </svg>
                <span className="text-blue-700 font-semibold mb-2 text-lg">Click to select or drag & drop your PDFs</span>
                <input
                  id="pdf-upload"
                  type="file"
                  accept="application/pdf"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                />
                {selectedFiles.length > 0 && (
                  <span className="mt-3 text-base text-gray-800 font-medium bg-blue-100 rounded-lg px-4 py-2 shadow">Selected: {selectedFiles.map(f => f.name).join(', ')}</span>
                )}
              </label>
              <button
                onClick={handleUpload}
                className="btn bg-gradient-to-r from-blue-600 to-purple-500 text-white rounded-2xl px-8 py-4 font-bold shadow-xl hover:from-purple-500 hover:to-blue-600 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  Upload PDFs
                </span>
              </button>
              {uploadStatus && (
                <p className={`text-base mt-2 text-center font-semibold ${uploadStatus.includes('successful') ? 'text-green-600' : uploadStatus.includes('Uploading') ? 'text-blue-600' : 'text-red-500'}`}>
                  {uploadStatus}
                </p>
              )}
            </div>
            {topics && (
              <div className="mt-10 p-8 rounded-2xl bg-blue-50 bg-opacity-80 border-2 border-blue-300 shadow-xl w-full max-w-2xl mx-auto">
                <h3 className="text-2xl font-extrabold mb-4 text-blue-700 tracking-tight">Most Important Topics</h3>
                <pre className="whitespace-pre-wrap text-gray-900 text-lg leading-relaxed">{topics}</pre>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default UploadPDF;