import React from 'react';
import { Terminal, Play, Save } from 'lucide-react';
import { Button } from '../ui/Button';

interface EditorProps {
  code: string;
  onChange: (value: string) => void;
}

export function Editor({ code, onChange }: EditorProps) {
  return (
    <div className="flex flex-col h-full bg-gray-900 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <Terminal className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-300">main.tsx</span>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="secondary" size="sm">
            <Save className="w-4 h-4 mr-1" />
            Save
          </Button>
          <Button variant="primary" size="sm">
            <Play className="w-4 h-4 mr-1" />
            Run
          </Button>
        </div>
      </div>
      <div className="flex-1 p-4">
        <textarea
          value={code}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-full bg-transparent text-gray-300 font-mono resize-none focus:outline-none"
          spellCheck="false"
        />
      </div>
    </div>
  );
}