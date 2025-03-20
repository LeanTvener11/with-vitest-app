"use client";

import { FC, useState, FormEvent } from 'react';


interface FormProps {
  namePlaceholder: string;
  emailPlaceholder: string;
  headline: string;
  text: string;
  buttonLabel: string;
  nameErrorText: string;
  emailErrorText: string;
}

const Form: FC<FormProps> = ({
  namePlaceholder,
  emailPlaceholder,
  headline,
  text,
  buttonLabel,
  nameErrorText,
  emailErrorText
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setNameError(!name ? true : false);
    setEmailError(!email ? true : false);
    
    // Validate
    if (!name || !email) return;

    setStatus('loading');
    
    try {
      const response = await fetch('https://api.example.com/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-2">{headline}</h2>
      <p className="text-gray-600 mb-6">{text}</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder={namePlaceholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
          />
          {nameError && (
            <p className="text-red-500 text-sm mt-1">{nameErrorText}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder={emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
          />
          {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailErrorText}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors disabled:bg-gray-400"
        >
          {buttonLabel}
        </button>
      </form>

      {status === 'loading' && (
        <div className="flex items-center justify-center gap-2 mt-4">
          <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Submitting...</span>
        </div>
      )}

      {status === 'success' && (
        <div className="flex items-center justify-center gap-2 mt-4 text-green-600">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Successfully submitted!</span>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center justify-center gap-2 mt-4 text-red-600">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
          <span>Something went wrong. Please try again.</span>
        </div>
      )}
    </div>
  );
};

export default Form;
