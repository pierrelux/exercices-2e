// src/components/App.jsx
import React, { useState } from 'react';
import MathPracticeApp from './MathPracticeApp';
import TermeManquantApp from './TermeManquantApp';
import { Button } from './ui/button';

const App = () => {
  const [currentApp, setCurrentApp] = useState('math'); // 'math' or 'terme'

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center space-x-4 mb-8">
          <Button 
            variant={currentApp === 'math' ? 'default' : 'outline'}
            onClick={() => setCurrentApp('math')}
          >
            Exercices de Raisonnement
          </Button>
          <Button 
            variant={currentApp === 'terme' ? 'default' : 'outline'}
            onClick={() => setCurrentApp('terme')}
          >
            Terme Manquant
          </Button>
        </div>

        {currentApp === 'math' ? <MathPracticeApp /> : <TermeManquantApp />}
      </div>
    </div>
  );
};

export default App;
