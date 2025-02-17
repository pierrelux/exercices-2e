// src/components/ReadingPracticeApp.jsx
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Alert, AlertDescription } from '../components/ui/alert';

// Enhanced reading passage for 2e année (Québec), more detailed and descriptive.
const readings = [
  {
    id: 1,
    title: "La compétition d'escalade",
    icon: "🧗",
    passage: `
      C'est la première fois que Léo participe à une compétition d'escalade. Dans le gymnase, des murs colorés s'élèvent jusqu'au plafond, couverts de prises de différentes formes.
      Avant de grimper, chaque participant a cinq minutes pour étudier sa voie. Léo observe attentivement les prises bleues qu'il devra utiliser. Son entraîneuse lui rappelle de bien respirer.
      
      Les grimpeurs ne peuvent pas voir les autres concurrents avant leur tour. Ils attendent dans une salle spéciale qu'on appelle la zone d'isolation. Là-bas, Léo s'échauffe et révise ses techniques.
      
      Quand c'est son tour, Léo attache son baudrier de sécurité et vérifie deux fois ses nœuds. Une fois sur le mur, il prend son temps, cherchant les meilleures positions pour ses pieds.
      
      À mi-chemin, il trouve un endroit pour reposer ses bras : une prise large qu'on appelle un repos. De là-haut, il entend les encouragements de ses coéquipiers.
    `,
    questions: [
      {
        id: 1,
        text: "Les grimpeurs peuvent regarder les autres participants avant leur tour.",
        answer: false,
        highlight: "Les grimpeurs ne peuvent pas voir les autres concurrents avant leur tour"
      },
      {
        id: 2,
        text: "Léo peut utiliser toutes les prises sur le mur.",
        answer: false,
        highlight: "Léo observe attentivement les prises bleues qu'il devra utiliser"
      },
      {
        id: 3,
        text: "Les participants ont le temps d'étudier leur parcours avant de grimper.",
        answer: true,
        highlight: "chaque participant a cinq minutes pour étudier sa voie"
      },
      {
        id: 4,
        text: "Un repos est un moment où l'on descend du mur.",
        answer: false,
        highlight: "une prise large qu'on appelle un repos"
      },
      {
        id: 5,
        text: "La sécurité est vérifiée plusieurs fois avant de grimper.",
        answer: true,
        highlight: "attache son baudrier de sécurité et vérifie deux fois ses nœuds"
      }
    ]
  },
  {
    id: 2,
    title: "Le club de robotique",
    icon: "🤖",
    passage: `
      Tous les mercredis après l'école, Malik retrouve ses amis au club de robotique. Dans la bibliothèque transformée en atelier, des boîtes de pièces colorées attendent les jeunes inventeurs.
      Cette semaine, ils construisent un robot qui peut suivre une ligne noire sur le sol. Malik a dessiné les plans pendant que sa coéquipière Emma a programmé les capteurs.
      
      Leur professeure, madame Tremblay, leur montre comment les robots sont utilisés dans la vraie vie. Par exemple, dans les hôpitaux, des robots transportent les médicaments et le matériel médical.
      
      Le plus difficile est de faire tourner le robot aux coins. Emma a trouvé la solution : il faut que le robot ralentisse avant de tourner, comme une personne qui marche.
      
      À la fin du trimestre, il y aura une exposition où tous les robots du club seront présentés. Les parents pourront voir les inventions, et chaque équipe expliquera comment son robot fonctionne.
    `,
    questions: [
      {
        id: 1,
        text: "Le club de robotique se réunit dans une salle de classe.",
        answer: false,
        highlight: "Dans la bibliothèque transformée en atelier"
      },
      {
        id: 2,
        text: "Malik et Emma se sont partagé les tâches différemment.",
        answer: true,
        highlight: "Malik a dessiné les plans pendant que sa coéquipière Emma a programmé les capteurs"
      },
      {
        id: 3,
        text: "Les robots dans les hôpitaux servent à soigner les patients.",
        answer: false,
        highlight: "dans les hôpitaux, des robots transportent les médicaments et le matériel médical"
      },
      {
        id: 4,
        text: "Le robot doit ralentir dans les virages pour bien fonctionner.",
        answer: true,
        highlight: "il faut que le robot ralentisse avant de tourner, comme une personne qui marche"
      },
      {
        id: 5,
        text: "Les élèves devront seulement montrer leurs robots à l'exposition.",
        answer: false,
        highlight: "chaque équipe expliquera comment son robot fonctionne"
      }
    ]
  },
  {
    id: 3,
    title: "La bibliothèque de jeux vidéo",
    icon: "🎮",
    passage: `
      La bibliothèque du quartier a une nouvelle section : des jeux vidéo éducatifs ! Camille découvre que ces jeux sont très différents de ceux auxquels elle joue d'habitude.
      Dans un jeu de construction, elle doit résoudre des problèmes de mathématiques pour débloquer de nouvelles pièces. Plus elle résout de problèmes, plus elle peut construire des structures complexes.
      
      Son jeu préféré est un simulateur de ville où il faut gérer un budget. Elle apprend à économiser l'argent virtuel pour construire des parcs, des écoles et même un système de recyclage.
      
      La bibliothécaire explique qu'on peut emprunter trois jeux pour deux semaines. Mais attention : il faut d'abord finir ses devoirs ! Les parents doivent signer une fiche de permission.
      
      Chaque mois, il y a un tournoi où les enfants partagent leurs créations et leurs stratégies. Le mois dernier, Camille a montré comment elle a construit une ville écologique.
    `,
    questions: [
      {
        id: 1,
        text: "Les enfants peuvent emprunter autant de jeux qu'ils veulent.",
        answer: false,
        highlight: "on peut emprunter trois jeux pour deux semaines"
      },
      {
        id: 2,
        text: "Dans le jeu de construction, il faut faire des calculs.",
        answer: true,
        highlight: "elle doit résoudre des problèmes de mathématiques pour débloquer de nouvelles pièces"
      },
      {
        id: 3,
        text: "Les parents doivent donner leur autorisation.",
        answer: true,
        highlight: "Les parents doivent signer une fiche de permission"
      },
      {
        id: 4,
        text: "Le simulateur de ville sert uniquement à construire des bâtiments.",
        answer: false,
        highlight: "un simulateur de ville où il faut gérer un budget"
      },
      {
        id: 5,
        text: "Les tournois servent à gagner contre les autres joueurs.",
        answer: false,
        highlight: "les enfants partagent leurs créations et leurs stratégies"
      }
    ]
  },
  {
    id: 4,
    title: "Le jardin communautaire",
    icon: "🌱",
    passage: `
      Dans le quartier Saint-Roch, il y a un grand jardin où tout le monde peut cultiver des légumes. Chaque famille a son petit carré de terre.
      Sofia et son papa ont choisi de planter des tomates cerises, des carottes et des fines herbes. Ils ont aussi ajouté des fleurs mauves pour attirer les papillons.
      
      Leur voisine de jardin, madame Chen, cultive des légumes qu'on ne trouve pas souvent à l'épicerie. Elle leur a fait goûter des pois mange-tout et leur a expliqué comment les faire grimper sur des ficelles.
      
      Deux fois par semaine, les jardiniers utilisent un grand réservoir d'eau de pluie pour arroser leurs plantes. Sofia a appris que l'eau de pluie est meilleure que celle du robinet pour les légumes.
      
      À la fin de l'été, tous les jardiniers organisent une grande fête. Chacun prépare un plat avec ses récoltes. Sofia a hâte de faire goûter sa sauce aux tomates cerises !
    `,
    questions: [
      {
        id: 1,
        text: "Les jardiniers doivent utiliser l'eau du robinet pour leurs plantes.",
        answer: false,
        highlight: "les jardiniers utilisent un grand réservoir d'eau de pluie pour arroser leurs plantes"
      },
      {
        id: 2,
        text: "Madame Chen cultive les mêmes légumes que tout le monde.",
        answer: false,
        highlight: "madame Chen cultive des légumes qu'on ne trouve pas souvent à l'épicerie"
      },
      {
        id: 3,
        text: "Sofia et son père ont planté des fleurs seulement pour leur beauté.",
        answer: false,
        highlight: "Ils ont aussi ajouté des fleurs mauves pour attirer les papillons"
      },
      {
        id: 4,
        text: "Les pois mange-tout poussent en grimpant.",
        answer: true,
        highlight: "leur a expliqué comment les faire grimper sur des ficelles"
      },
      {
        id: 5,
        text: "Chaque famille peut cultiver où elle veut dans le jardin.",
        answer: false,
        highlight: "Chaque famille a son petit carré de terre"
      }
    ]
  },
  {
    id: 5,
    title: "Le club de sciences",
    icon: "🔬",
    passage: `
      Le club de sciences expérimente aujourd'hui avec l'air et l'eau. Sarah et ses amis ont installé trois stations différentes pour leurs expériences.
      À la première station, ils créent des bulles géantes avec une solution spéciale. En ajoutant du glycérol à l'eau savonneuse, les bulles deviennent plus résistantes et durent plus longtemps.
      
      La deuxième station teste la flottaison. Les élèves découvrent que certains objets flottent dans l'eau salée mais coulent dans l'eau normale. Ils notent leurs observations dans un carnet.
      
      À la dernière station, ils fabriquent une mini-tornade dans une bouteille. En mélangeant de l'eau avec du colorant et en faisant tourner la bouteille, ils créent un tourbillon impressionnant.
      
      Chaque équipe doit présenter une hypothèse avant chaque expérience et expliquer si leurs prédictions étaient correctes.
    `,
    questions: [
      {
        id: 1,
        text: "Le glycérol sert à faire des bulles plus grosses.",
        answer: false,
        highlight: "En ajoutant du glycérol à l'eau savonneuse, les bulles deviennent plus résistantes et durent plus longtemps"
      },
      {
        id: 2,
        text: "L'eau salée change la façon dont les objets flottent.",
        answer: true,
        highlight: "certains objets flottent dans l'eau salée mais coulent dans l'eau normale"
      },
      {
        id: 3,
        text: "Les élèves font leurs expériences sans préparation.",
        answer: false,
        highlight: "Chaque équipe doit présenter une hypothèse avant chaque expérience"
      },
      {
        id: 4,
        text: "La mini-tornade se forme toute seule dans la bouteille.",
        answer: false,
        highlight: "en faisant tourner la bouteille, ils créent un tourbillon"
      },
      {
        id: 5,
        text: "Les élèves vérifient si leurs prédictions étaient justes.",
        answer: true,
        highlight: "expliquer si leurs prédictions étaient correctes"
      }
    ]
  },
  {
    id: 6,
    title: "L'atelier de bande dessinée",
    icon: "📚",
    passage: `
      Dans l'atelier de bande dessinée, Lucas apprend que créer une histoire n'est pas aussi simple qu'il pensait. L'animatrice explique qu'il faut d'abord faire un scénario avant de dessiner.
      Pour commencer, chaque élève crée une fiche pour son personnage principal. Lucas dessine une jeune inventrice qui transforme des objets ordinaires en machines extraordinaires.
      
      L'animatrice montre différentes façons de diviser la page en cases. Les grandes cases servent pour les moments importants, alors que les petites cases montrent les actions rapides.
      Pour les dialogues, on utilise des bulles de différentes formes : rondes pour parler normalement, en nuage pour les pensées, et en éclair pour crier.
      
      Lucas découvre aussi l'importance des expressions du visage. Un simple changement dans les sourcils ou la bouche peut montrer si son personnage est content, surpris ou inquiet.
    `,
    questions: [
      {
        id: 1,
        text: "On peut commencer à dessiner sans faire de scénario.",
        answer: false,
        highlight: "il faut d'abord faire un scénario avant de dessiner"
      },
      {
        id: 2,
        text: "Toutes les bulles de dialogue ont la même forme.",
        answer: false,
        highlight: "on utilise des bulles de différentes formes : rondes pour parler normalement, en nuage pour les pensées, et en éclair pour crier"
      },
      {
        id: 3,
        text: "Les grandes cases sont utilisées pour les moments importants.",
        answer: true,
        highlight: "Les grandes cases servent pour les moments importants"
      },
      {
        id: 4,
        text: "Le personnage de Lucas est un super-héros.",
        answer: false,
        highlight: "Lucas dessine une jeune inventrice qui transforme des objets ordinaires en machines extraordinaires"
      },
      {
        id: 5,
        text: "Les expressions du visage aident à comprendre les émotions.",
        answer: true,
        highlight: "Un simple changement dans les sourcils ou la bouche peut montrer si son personnage est content, surpris ou inquiet"
      }
    ]
  },
  {
    id: 7,
    title: "Une partie de soccer sous la pluie",
    icon: "⚽",
    passage: `
      L'équipe de Yasmine doit jouer un match important, même s'il pleut depuis ce matin. Le terrain est glissant, et les joueurs doivent adapter leur façon de jouer.
      L'entraîneuse explique qu'il faut faire des passes plus courtes aujourd'hui. Le ballon roule différemment sur l'herbe mouillée, et il est plus difficile à contrôler quand il arrive trop vite.
      
      Dans les buts, Antoine porte des gants spéciaux qui gardent leur adhérence même sous la pluie. Il doit aussi être plus attentif car le ballon peut changer de direction dans les flaques d'eau.
      
      À la mi-temps, toute l'équipe change de chandail. L'entraîneuse leur donne aussi des conseils pour économiser leur énergie, car courir dans la boue est plus fatigant que d'habitude.
      
      Finalement, le match se termine par un match nul. Yasmine est fière de son équipe : ils ont su s'adapter aux conditions difficiles, et personne n'a abandonné malgré la pluie.
    `,
    questions: [
      {
        id: 1,
        text: "Le match a été annulé à cause de la pluie.",
        answer: false,
        highlight: "L'équipe de Yasmine doit jouer un match important, même s'il pleut depuis ce matin"
      },
      {
        id: 2,
        text: "Les joueurs font les mêmes passes que d'habitude.",
        answer: false,
        highlight: "il faut faire des passes plus courtes aujourd'hui. Le ballon roule différemment sur l'herbe mouillée"
      },
      {
        id: 3,
        text: "Le gardien de but utilise un équipement particulier pour la pluie.",
        answer: true,
        highlight: "Antoine porte des gants spéciaux qui gardent leur adhérence même sous la pluie"
      },
      {
        id: 4,
        text: "Les joueurs gardent les mêmes chandails tout le match.",
        answer: false,
        highlight: "À la mi-temps, toute l'équipe change de chandail"
      },
      {
        id: 5,
        text: "Jouer dans la boue demande plus d'efforts.",
        answer: true,
        highlight: "courir dans la boue est plus fatigant que d'habitude"
      }
    ]
  },
  {
    id: 8,
    title: "La murale collective",
    icon: "🎨",
    passage: `
      Les élèves de l'école ont décidé de transformer le mur gris de la cour en une œuvre d'art colorée. Avant de commencer à peindre, ils ont voté pour choisir le thème : la nature en ville.
      Chaque classe est responsable d'une partie différente. La classe de Zoé dessine les arbres et les fleurs, pendant que d'autres groupes ajoutent des oiseaux, des papillons et même des jardins sur les balcons.
      
      Une artiste du quartier, Maria, leur montre comment mélanger les couleurs pour créer de nouvelles teintes. Elle explique aussi qu'il faut d'abord faire un croquis au crayon avant d'appliquer la peinture.
      
      Pour que la peinture ne coule pas, les élèves commencent par le haut du mur et descendent progressivement. Ils utilisent des pinceaux de différentes tailles : les gros pour le fond, les fins pour les détails.
      
      À la fin du projet, chaque élève signe son nom dans un petit coin. Maintenant, quand les parents viennent chercher leurs enfants, ils s'arrêtent pour admirer cette création collective.
    `,
    questions: [
      {
        id: 1,
        text: "Les élèves ont commencé à peindre dès le premier jour.",
        answer: false,
        highlight: "Avant de commencer à peindre, ils ont voté pour choisir le thème"
      },
      {
        id: 2,
        text: "Toutes les classes travaillent sur la même partie du mur.",
        answer: false,
        highlight: "Chaque classe est responsable d'une partie différente"
      },
      {
        id: 3,
        text: "Les élèves peignent de haut en bas pour éviter les coulures.",
        answer: true,
        highlight: "Pour que la peinture ne coule pas, les élèves commencent par le haut du mur et descendent progressivement"
      },
      {
        id: 4,
        text: "Les gros et petits pinceaux servent au même usage.",
        answer: false,
        highlight: "les gros pour le fond, les fins pour les détails"
      },
      {
        id: 5,
        text: "L'artiste Maria vient de l'école.",
        answer: false,
        highlight: "Une artiste du quartier, Maria"
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

