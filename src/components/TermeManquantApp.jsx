import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';

const exercises = [
  {
    id: 1,
    title: "La neige et le ski",
    text: "Mes parents et moi aimons beaucoup faire du ski. Plus il y a de la neige, plus nous sommes heureux! Il a fait une grosse tempête aujourd'hui. Il est tombé 45 centimètres de neige. Maman s'écrit : Il y a maintenant 179 centimètres de neige au sol. On doit aller skier!",
    question: "Combien de centimètres de neige y avait-il avant la grosse tempête?",
    terms: {
      debut: "134", // Initial snow amount
      milieu: "45", // Snow fallen
      fin: "179"    // Final amount
    }
  },
  {
    id: 2,
    title: "Les billes dans la cour",
    text: "Pierre joue aux billes dans la cour de récréation. Au début de la récréation, il a 23 billes. Son ami lui donne quelques billes pendant qu'ils jouent. À la fin de la récréation, Pierre compte ses billes et en a 35.",
    question: "Combien de billes l'ami de Pierre lui a-t-il données?",
    terms: {
      debut: "23",  // Initial marbles
      milieu: "12", // Unknown - Marbles received
      fin: "35"     // Final amount
    }
  },
  {
    id: 3,
    title: "Les poissons de l'aquarium",
    text: "L'aquarium de l'école a 19 poissons. La maîtresse ajoute 8 nouveaux poissons aujourd'hui. Combien y a-t-il de poissons maintenant dans l'aquarium?",
    question: "Combien y a-t-il de poissons dans l'aquarium maintenant?",
    terms: {
      debut: "19",  // Initial fish
      milieu: "8",  // New fish added
      fin: "27"     // Unknown - Final amount
    }
  },
  {
    id: 4,
    title: "La bibliothèque de classe",
    text: "La bibliothèque de classe a 45 livres. La maîtresse apporte quelques nouveaux livres. Maintenant il y a 63 livres sur les étagères.",
    question: "Combien de nouveaux livres la maîtresse a-t-elle apportés?",
    terms: {
      debut: "45",  // Initial books
      milieu: "18", // Unknown - New books
      fin: "63"     // Final amount
    }
  },
  {
    id: 5,
    title: "Les bonbons d'Halloween",
    text: "Léa commence sa tournée d'Halloween avec 12 bonbons déjà dans son sac. Elle visite plusieurs maisons et reçoit 25 bonbons supplémentaires. À la fin de la soirée, combien de bonbons a-t-elle?",
    question: "Combien de bonbons Léa a-t-elle à la fin de la soirée?",
    terms: {
      debut: "12",  // Initial candy
      milieu: "25", // Additional candy
      fin: "37"     // Unknown - Final amount
    }
  },
  {
    id: 6,
    title: "Les points du match",
    text: "À la mi-temps du match de basket, l'équipe a 28 points. Ils marquent 16 points en deuxième mi-temps. Quel est le score final?",
    question: "Combien de points l'équipe a-t-elle à la fin du match?",
    terms: {
      debut: "28",  // Initial score
      milieu: "16", // Points scored
      fin: "44"     // Unknown - Final score
    }
  },
  {
    id: 7,
    title: "La collection de cartes",
    text: "Thomas a une collection de cartes Pokémon. Il commence avec quelques cartes et son cousin lui en donne 15 pour son anniversaire. Maintenant il en a 42.",
    question: "Combien de cartes Thomas avait-il au début?",
    terms: {
      debut: "27",  // Unknown - Initial cards
      milieu: "15", // Cards received
      fin: "42"     // Final amount
    }
  },
  {
    id: 8,
    title: "Les économies",
    text: "Sarah a 35 euros dans sa tirelire. Elle achète un jouet et il lui reste 17 euros.",
    question: "Combien a coûté le jouet?",
    terms: {
      debut: "35",  // Initial savings
      milieu: "18", // Unknown - Toy cost
      fin: "17"     // Final amount
    }
  },
  {
    id: 9,
    title: "Les gâteaux du goûter",
    text: "Pour le goûter, maman sort 24 gâteaux. Après la récréation, il en reste 9.",
    question: "Combien de gâteaux ont été mangés?",
    terms: {
      debut: "24",  // Initial cookies
      milieu: "15", // Unknown - Cookies eaten
      fin: "9"      // Final amount
    }
  },
  {
    id: 10,
    title: "Les autocollants",
    text: "Julie a 31 autocollants dans son album. Sa meilleure amie lui en donne 13 de plus. Combien d'autocollants a-t-elle maintenant?",
    question: "Combien d'autocollants Julie a-t-elle à la fin?",
    terms: {
      debut: "31",  // Initial stickers
      milieu: "13", // Stickers received
      fin: "44"     // Unknown - Final amount
    }
  }
];

const TermeManquantApp = () => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [userAnswers, setUserAnswers] = useState({
    debut: '',
    milieu: '',
    fin: ''
  });
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleSubmit = () => {
    const correct = Object.keys(userAnswers).every(
      key => userAnswers[key] === exercises[currentExercise].terms[key]
    );
    if (correct) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const nextExercise = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setUserAnswers({ debut: '', milieu: '', fin: '' });
      setShowResult(false);
    }
  };

  const resetExercise = () => {
    setCurrentExercise(0);
    setUserAnswers({ debut: '', milieu: '', fin: '' });
    setShowResult(false);
    setScore(0);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Terme Manquant 🔍
          </CardTitle>
          <CardDescription>
            Score: {score}/{exercises.length}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              {exercises[currentExercise].title}
            </h2>
            <p className="text-gray-600">
              {exercises[currentExercise].text}
            </p>
            <p className="font-medium mt-4">
              💡 {exercises[currentExercise].question}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Histoire séquentielle</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="font-medium">Début</label>
                <Input
                  type="number"
                  value={userAnswers.debut}
                  onChange={(e) => setUserAnswers({...userAnswers, debut: e.target.value})}
                  placeholder="?"
                  disabled={showResult}
                />
              </div>
              <div className="space-y-2">
                <label className="font-medium">Milieu</label>
                <Input
                  type="number"
                  value={userAnswers.milieu}
                  onChange={(e) => setUserAnswers({...userAnswers, milieu: e.target.value})}
                  placeholder="?"
                  disabled={showResult}
                />
              </div>
              <div className="space-y-2">
                <label className="font-medium">Fin</label>
                <Input
                  type="number"
                  value={userAnswers.fin}
                  onChange={(e) => setUserAnswers({...userAnswers, fin: e.target.value})}
                  placeholder="?"
                  disabled={showResult}
                />
              </div>
            </div>
          </div>

          {!showResult && (
            <Button 
              onClick={handleSubmit}
              disabled={!userAnswers.debut || !userAnswers.milieu || !userAnswers.fin}
              className="w-full"
            >
              Vérifier
            </Button>
          )}

          {showResult && (
            <div className="space-y-4">
              <Alert variant={
                Object.keys(userAnswers).every(
                  key => userAnswers[key] === exercises[currentExercise].terms[key]
                ) ? "success" : "error"
              }>
                <AlertDescription>
                  {Object.keys(userAnswers).every(
                    key => userAnswers[key] === exercises[currentExercise].terms[key]
                  ) 
                    ? "🎉 Bravo ! Tu as trouvé tous les termes correctement !"
                    : `❌ Ce n'est pas tout à fait ça. Les termes corrects sont : Début: ${exercises[currentExercise].terms.debut}, Milieu: ${exercises[currentExercise].terms.milieu}, Fin: ${exercises[currentExercise].terms.fin}`
                  }
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

export default TermeManquantApp;
