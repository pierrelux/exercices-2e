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
  {
    id: 3,
    title: "Les fruits du marché",
    description: "Un marchand de fruits reçoit 72 pommes le matin. Pendant la journée, il en vend 34 puis en reçoit 20 autres.",
    question: "Combien de pommes a-t-il à la fin de la journée ?",
    answer: 58,
    hint: "Calcule d'abord combien il reste après la vente, puis ajoute les nouvelles pommes !"
  },
  {
    id: 4,
    title: "La boîte de crayons",
    description: "Camille a une boîte contenant 68 crayons. Elle en donne 15 à son amie et 10 à son frère.",
    question: "Combien de crayons lui restent-ils ?",
    answer: 43,
    hint: "Additionne d'abord les crayons donnés avant de les soustraire du total !"
  },
  {
    id: 5,
    title: "Les élèves en classe",
    description: "Il y a 30 élèves dans une classe. 8 élèves partent en sortie scolaire le matin. Ensuite, 5 autres élèves sont absents l'après-midi.",
    question: "Combien d'élèves restent en classe l'après-midi ?",
    answer: 17,
    hint: "Soustrais d'abord les élèves en sortie, puis les élèves absents !"
  },
  {
    id: 6,
    title: "Les timbres de collection",
    description: "Paul collectionne 150 timbres. Un jour, il en donne 40 à son cousin et reçoit 25 nouveaux timbres en échange.",
    question: "Combien de timbres Paul a-t-il après l'échange ?",
    answer: 135,
    hint: "Commence par soustraire les timbres donnés, puis ajoute les nouveaux timbres !"
  },
  {
    id: 7,
    title: "Les cartes de jeu",
    description: "Un groupe d'amis se partage 120 cartes de jeu. Clara prend 28 cartes, puis Léo en prend 32.",
    question: "Combien de cartes restent à partager ?",
    answer: 60,
    hint: "Additionne d'abord les cartes prises par Clara et Léo, puis soustrais du total !"
  },
  {
    id: 8,
    title: "Les chocolats de Noël",
    description: "Une boîte contient 95 chocolats. Après le réveillon, 40 chocolats ont été mangés. Le lendemain, on ajoute 20 chocolats dans la boîte.",
    question: "Combien de chocolats y a-t-il après ces changements ?",
    answer: 75,
    hint: "Soustrais d'abord les chocolats mangés, puis ajoute les nouveaux chocolats !"
  },
  {
    id: 9,
    title: "Les tickets du cinéma",
    description: "Un cinéma vend 85 tickets le matin. L'après-midi, il en vend 40 autres mais doit en rembourser 10 à des clients.",
    question: "Combien de tickets ont été réellement vendus ?",
    answer: 115,
    hint: "Additionne d'abord tous les tickets vendus, puis soustrais les tickets remboursés !"
  },
  {
    id: 10,
    title: "Les morceaux de gâteau",
    description: "Un gâteau est coupé en 70 parts. Pendant la matinée, 20 parts sont mangées. L'après-midi, on en ajoute 15 nouvelles parts avant que 10 autres parts ne soient mangées.",
    question: "Combien de parts de gâteau restent à la fin de la journée ?",
    answer: 55,
    hint: "Fais les calculs dans l'ordre : soustrais les parts mangées le matin, ajoute les nouvelles parts, puis soustrais les parts mangées l'après-midi !"
  }
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
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Button 
            onClick={() => {
              setCurrentExercise(currentExercise - 1);
              setUserAnswer('');
              setShowResult(false);
              setShowHint(false);
            }} 
            disabled={currentExercise === 0}
            variant="outline"
          >
            ← Précédent
          </Button>
          <CardTitle>
            {exercises[currentExercise].title} 🚀
          </CardTitle>
          <Button 
            onClick={() => {
              setCurrentExercise(currentExercise + 1);
              setUserAnswer('');
              setShowResult(false);
              setShowHint(false);
            }} 
            disabled={currentExercise === exercises.length - 1}
            variant="outline"
          >
            Suivant →
          </Button>
        </div>
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
              {currentExercise < exercises.length - 1 ? "Exercice suivant" : "Terminer"}
            </Button>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center w-full">
        <p className="text-sm text-gray-500">Exercice {currentExercise + 1} sur {exercises.length}</p>
        <Button variant="outline" className="ml-auto" onClick={resetExercise}>
          Recommencer depuis le début
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MathPracticeApp;

