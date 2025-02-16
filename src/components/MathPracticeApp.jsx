// src/components/MathPracticeApp.jsx
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Alert, AlertDescription } from '../components/ui/alert';

const exercises = [
  {
    id: 1,
    title: "Les livres de la bibliothèque",
    description: "Une bibliothèque possède 84 livres sur ses étagères. Un jour, 24 livres sont prêtés aux élèves. Le lendemain, 16 autres sont également empruntés.",
    question: "Combien de livres restent dans la bibliothèque après ces deux jours ?",
    answer: 44,
    hint: "Pense à soustraire d'abord les premiers livres prêtés, puis les seconds !"
  },
  {
    id: 2,
    title: "Les ballons de la fête",
    description: "Pour une fête, on gonfle 53 ballons. Malheureusement, 18 s'envolent et 7 éclatent.",
    question: "Combien de ballons restent-ils ?",
    answer: 28,
    hint: "Additionne d'abord les ballons perdus avant de les soustraire du total !"
  },
  // Add all other exercises here...
];

const MathPracticeApp = () => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);

  const handleSubmit = () => {
    const isCorrect = parseInt(userAnswer) === exercises[currentExercise].answer;
    if (isCorrect) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const nextExercise = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setUserAnswer('');
      setShowResult(false);
      setShowHint(false);
    }
  };

  const resetExercise = () => {
    setCurrentExercise(0);
    setUserAnswer('');
    setShowResult(false);
    setShowHint(false);
    setScore(0);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Exercices de Raisonnement 🚀</CardTitle>
          <CardDescription>Score: {score}/{exercises.length}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              {exercises[currentExercise].title}
            </h2>
            <p className="text-gray-600">
              {exercises[currentExercise].description}
            </p>
            <p className="font-medium mt-4">
              💡 {exercises[currentExercise].question}
            </p>
          </div>

          <div className="flex space-x-2">
            <Input
              type="number"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Ta réponse ici"
              className="w-40"
              disabled={showResult}
            />
            {!showResult && (
              <Button onClick={handleSubmit} disabled={!userAnswer}>
                Vérifier
              </Button>
            )}
          </div>

          {!showResult && (
            <Button
              variant="outline"
              onClick={() => setShowHint(!showHint)}
              className="mt-2"
            >
              {showHint ? "Cacher l'indice" : "Voir l'indice"}
            </Button>
          )}

          {showHint && (
            <Alert>
              <AlertDescription>
                {exercises[currentExercise].hint}
              </AlertDescription>
            </Alert>
          )}

          {showResult && (
            <div className="space-y-4">
              <Alert variant={parseInt(userAnswer) === exercises[currentExercise].answer ? "success" : "error"}>
                <AlertDescription>
                  {parseInt(userAnswer) === exercises[currentExercise].answer
                    ? "🎉 Bravo ! C'est la bonne réponse !"
                    : `❌ Ce n'est pas la bonne réponse. La réponse correcte est ${exercises[currentExercise].answer}.`}
                </AlertDescription>
              </Alert>
              
              <Button
                onClick={nextExercise}
                disabled={currentExercise === exercises.length - 1}
                className="w-full"
              >
                Exercice suivant
              </Button>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button variant="outline" onClick={resetExercise} className="w-full">
            Recommencer depuis le début
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MathPracticeApp;
