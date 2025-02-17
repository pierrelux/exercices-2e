// src/components/ReadingPracticeApp.jsx
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Alert, AlertDescription } from '../components/ui/alert';

// Enhanced reading passage for 2e année (Québec), more detailed and descriptive.
const readings = [
  {
    id: 1,
    title: "Le grizzli : un géant de la forêt",
    icon: "🐻",
    passage: `
      Le grizzli est un grand mammifère qui vit dans les forêts et les montagnes. Sa fourrure peut être brune ou dorée. On reconnaît facilement sa face large et joufflue.
      Avec ses puissantes pattes avant, il creuse la terre à la recherche de racines. Ses griffes sont longues, courbées et très solides.
      
      Ce géant a un sens de l'odorat incroyable. Il peut sentir la nourriture à plusieurs kilomètres ! Sa vue est semblable à celle d'un humain, mais son ouïe est plus fine.
      Au printemps, on le voit souvent se gratter contre les arbres pour perdre sa vieille fourrure.
      
      Bien qu'il aime les poissons, surtout les saumons, le grizzli mange aussi des plantes, des baies et même des insectes comme les coccinelles. Il est donc omnivore.
      L'hiver, il ne dort pas tout le temps : il sort parfois de sa tanière pour explorer.
      Enfin, c'est un animal solitaire. Il préfère marcher seul, sauf quand une maman grizzli veille sur ses petits.
    `,
    questions: [
      { 
        id: 1, 
        text: "Le grizzli creuse avec ses pattes arrière.", 
        answer: false, 
        highlight: "Avec ses puissantes pattes avant, il creuse la terre à la recherche de racines"
      },
      { 
        id: 2, 
        text: "Il peut sentir la nourriture de très loin.", 
        answer: true, 
        highlight: "Il peut sentir la nourriture à plusieurs kilomètres"
      },
      { 
        id: 3, 
        text: "Il mange uniquement du poisson.", 
        answer: false, 
        highlight: "le grizzli mange aussi des plantes, des baies et même des insectes"
      },
      { 
        id: 4, 
        text: "Il ne dort jamais en hiver.", 
        answer: false, 
        highlight: "L'hiver, il ne dort pas tout le temps : il sort parfois de sa tanière"
      },
      { 
        id: 5, 
        text: "C'est un animal qui aime être seul.", 
        answer: true, 
        highlight: "c'est un animal solitaire"
      }
    ]
  },
  {
    id: 2,
    title: "L'érable à sucre : l'arbre du Québec",
    icon: "🍁",
    passage: `
      L'érable à sucre est un arbre spécial au Québec. Au printemps, quand la neige commence à fondre, la sève sucrée monte dans son tronc.
      Les érables peuvent devenir très grands, jusqu'à 40 mètres de haut ! Leurs feuilles sont magnifiques : vertes en été et rouge vif en automne.
      
      Pour récolter le sirop, on fait un petit trou dans l'arbre. On y met une chaudière pour recueillir l'eau d'érable. Cette eau est transparente et un peu sucrée.
      Dans la cabane à sucre, on fait bouillir l'eau d'érable. Elle devient alors du délicieux sirop doré. Il faut beaucoup d'eau pour faire un peu de sirop !
      
      Les Premières Nations ont appris aux premiers colons comment récolter cette sève. Aujourd'hui, le Québec est le plus grand producteur de sirop d'érable au monde.
      On utilise le sirop pour faire de la tire d'érable, du beurre d'érable et même des bonbons à l'érable.
    `,
    questions: [
      {
        id: 1,
        text: "On récolte le sirop d'érable en été.",
        answer: false,
        highlight: "Au printemps, quand la neige commence à fondre, la sève sucrée monte dans son tronc"
      },
      {
        id: 2,
        text: "L'eau d'érable est dorée quand elle sort de l'arbre.",
        answer: false,
        highlight: "Cette eau est transparente et un peu sucrée"
      },
      {
        id: 3,
        text: "Le Québec produit plus de sirop d'érable que tous les autres endroits.",
        answer: true,
        highlight: "le Québec est le plus grand producteur de sirop d'érable au monde"
      }
    ]
  },
  {
    id: 3,
    title: "Le renard roux en hiver",
    icon: "🦊",
    passage: `
      Le renard roux est un animal très malin qui vit dans nos forêts. En hiver, sa fourrure devient plus épaisse pour le garder au chaud.
      Son pelage roux l'aide à se cacher dans les feuilles mortes. Ses oreilles pointues bougent dans toutes les directions pour entendre les petits animaux.
      
      Même sous la neige, le renard peut entendre une souris ! Il saute alors et plonge son museau dans la neige pour l'attraper.
      Sa longue queue touffue lui sert de couverture quand il dort et de balancier quand il court et saute.
      
      Le renard vit dans un terrier. C'est comme une petite maison creusée dans la terre. Il y garde ses petits au chaud et à l'abri.
      Les bébés renards, qu'on appelle des renardeaux, naissent au printemps. Ils adorent jouer ensemble près du terrier.
    `,
    questions: [
      {
        id: 1,
        text: "Le renard a la même fourrure toute l'année.",
        answer: false,
        highlight: "En hiver, sa fourrure devient plus épaisse pour le garder au chaud"
      },
      {
        id: 2,
        text: "Le renard peut trouver des souris sous la neige.",
        answer: true,
        highlight: "Même sous la neige, le renard peut entendre une souris"
      },
      {
        id: 3,
        text: "Les bébés renards s'appellent des renardeaux.",
        answer: true,
        highlight: "Les bébés renards, qu'on appelle des renardeaux"
      }
    ]
  },
  {
    id: 4,
    title: "Une journée à la cabane à sucre",
    icon: "🏡",
    passage: `
      C'est samedi et toute la famille va à la cabane à sucre ! Dans la voiture, Léa et son petit frère Thomas sont très excités.
      À leur arrivée, ils sentent tout de suite la bonne odeur du sirop chaud. Le propriétaire leur montre les seaux accrochés aux érables.
      
      Pour le dîner, ils mangent des mets traditionnels : des œufs dans le sirop, du jambon, des fèves au lard et des oreilles de crisse.
      Dehors, il y a de la neige propre. On y verse du sirop chaud qui devient de la tire d'érable. C'est délicieux sur un bâtonnet !
      
      Après le repas, toute la famille monte dans une calèche tirée par un gros cheval. Ils font une belle promenade dans les sentiers enneigés.
      À la fin de la journée, Léa achète une petite bouteille de sirop pour sa grand-maman. Thomas, lui, choisit des bonbons à l'érable.
    `,
    questions: [
      {
        id: 1,
        text: "La famille va à la cabane à sucre un soir.",
        answer: false,
        highlight: "C'est samedi et toute la famille va à la cabane à sucre"
      },
      {
        id: 2,
        text: "On fait la tire d'érable sur la neige.",
        answer: true,
        highlight: "Dehors, il y a de la neige propre. On y verse du sirop chaud qui devient de la tire d'érable"
      },
      {
        id: 3,
        text: "La famille fait une promenade à pied dans les sentiers.",
        answer: false,
        highlight: "toute la famille monte dans une calèche tirée par un gros cheval"
      }
    ]
  }
];

const ReadingPracticeApp = () => {
  const [answers, setAnswers] = useState({});
  const [feedback, setFeedback] = useState({});
  const [wrongAnswers, setWrongAnswers] = useState({});
  const [highlightedText, setHighlightedText] = useState(null);
  const [currentReadingIndex, setCurrentReadingIndex] = useState(0);

  const handleAnswer = (id, userAnswer, correctAnswer, highlight) => {
    setAnswers({ ...answers, [id]: userAnswer });
    setFeedback({ ...feedback, [id]: userAnswer === correctAnswer ? '✅' : '❌' });
    setWrongAnswers({ ...wrongAnswers, [id]: userAnswer !== correctAnswer });
    
    if (userAnswer !== correctAnswer) {
      setHighlightedText(highlight);
    } else {
      setHighlightedText(null);
    }
  };

  const nextReading = () => {
    if (currentReadingIndex < readings.length - 1) {
      setCurrentReadingIndex(currentReadingIndex + 1);
      setAnswers({});
      setFeedback({});
      setWrongAnswers({});
      setHighlightedText(null);
    }
  };

  const previousReading = () => {
    if (currentReadingIndex > 0) {
      setCurrentReadingIndex(currentReadingIndex - 1);
      setAnswers({});
      setFeedback({});
      setWrongAnswers({});
      setHighlightedText(null);
    }
  };

  const resetExercise = () => {
    setCurrentReadingIndex(0);
    setAnswers({});
    setFeedback({});
    setWrongAnswers({});
    setHighlightedText(null);
  };

  const currentReading = readings[currentReadingIndex];

  const renderPassageWithHighlight = (passage, highlightText) => {
    if (!highlightText) return <p className="text-gray-700 whitespace-pre-line">{passage}</p>;

    const parts = passage.split(highlightText);
    return (
      <p className="text-gray-700 whitespace-pre-line">
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < parts.length - 1 && (
              <span className="bg-yellow-200 px-1 rounded">{highlightText}</span>
            )}
          </React.Fragment>
        ))}
      </p>
    );
  };

  const getButtonStyle = (questionId, isTrue) => {
    // If this answer hasn't been selected yet, return default style
    if (!answers.hasOwnProperty(questionId)) {
      return "bg-gray-200 hover:bg-gray-300 text-gray-700";
    }

    // This is the selected button
    if (answers[questionId] === isTrue) {
      return feedback[questionId] === '✅' 
        ? "bg-green-500 text-white" // Correct answer
        : "bg-red-500 text-white";  // Wrong answer
    }

    // This is the unselected button
    return "bg-gray-200 text-gray-700 opacity-50";
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Button 
            onClick={previousReading} 
            disabled={currentReadingIndex === 0}
            variant="outline"
          >
            ← Précédent
          </Button>
          <CardTitle>
            {currentReading.title} {currentReading.icon}
          </CardTitle>
          <Button 
            onClick={nextReading} 
            disabled={currentReadingIndex === readings.length - 1}
            variant="outline"
          >
            Suivant →
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {renderPassageWithHighlight(currentReading.passage, highlightedText)}
        {currentReading.questions.map(q => (
          <div 
            key={q.id} 
            className="flex items-center gap-4 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-150 hover:shadow-md mb-2 border border-transparent hover:border-gray-200"
          >
            <p className="flex-1 text-lg">{q.text}</p>
            <Button 
              onClick={() => handleAnswer(q.id, true, q.answer, q.highlight)}
              className={getButtonStyle(q.id, true)}
              disabled={answers.hasOwnProperty(q.id)}
            >
              Vrai
            </Button>
            <Button 
              onClick={() => handleAnswer(q.id, false, q.answer, q.highlight)}
              className={getButtonStyle(q.id, false)}
              disabled={answers.hasOwnProperty(q.id)}
            >
              Faux
            </Button>
            <span className="text-xl font-bold">{feedback[q.id]}</span>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex justify-between items-center w-full">
        <p className="text-sm text-gray-500">Histoire {currentReadingIndex + 1} sur {readings.length}</p>
        <Button variant="outline" className="ml-auto" onClick={resetExercise}>
          Recommencer depuis le début
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ReadingPracticeApp;

