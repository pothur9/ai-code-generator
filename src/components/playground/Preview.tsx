import React from 'react';
import { RefreshCw } from 'lucide-react';
import { Button } from '../ui/Button';

interface PreviewProps {
  html: string;
}

export function Preview({ html }: PreviewProps) {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-300">Preview</span>
        <Button variant="secondary" size="sm">
          <RefreshCw className="w-4 h-4 mr-1" />
          Refresh
        </Button>
      </div>
      <div className="flex-1 p-4">
        <iframe
          srcDoc={html}
          className="w-full h-full border-0"
          title="preview"
          sandbox="allow-scripts"
        />
      </div>
    </div>
  );
}