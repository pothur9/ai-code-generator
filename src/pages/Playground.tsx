import React, { useState } from 'react';
import { Editor } from '../components/playground/Editor';
import { Preview } from '../components/playground/Preview';
import { ChatInterface } from '../components/playground/ChatInterface';

export function Playground() {
  const [code, setCode] = useState('');
  const [html, setHtml] = useState('');

  return (
    <div className="flex h-screen pt-16">
      <div className="flex-1 flex">
        <div className="w-1/2 p-4">
          <Editor code={code} onChange={setCode} />
        </div>
        <div className="w-1/2 p-4">
          <Preview html={html} />
        </div>
      </div>
      <div className="w-96 border-l border-gray-200 dark:border-gray-800">
        <ChatInterface />
      </div>
    </div>
  );
}