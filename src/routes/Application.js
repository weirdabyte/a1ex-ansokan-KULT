import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';

const Application = () => {
  const showText = {
    hidden: { opacity: 0 },
    show: {
      opacity: [0, 0, 0, 1],
      transition: {
        duration: 2,
      },
    },
  };
  return (
    <div className="page-wrap">
      <Navigation />
      <div className="content-wrap">
        <div className="lines-wrap">
          <div className="content">
            <motion.div
              className="text-container"
              variants={showText}
              initial="hidden"
              animate="show"
              exit={{ opacity: [1, 0, 0, 0] }}
            >
              <h1 className="heading">HEJ KULT!</h1>
              <p className="text">
                Tack för sist, <br />
                <br />
                Jag har fått chansen att hälsa på dom flesta av er och ni verkar
                vara ett härligt gäng, ett gäng som jag väldigt gärna vill bli
                en del av. Jag, som nyexaminerad "webmaster", har en väldigt
                bred grund att stå på med kurser i Design, Programmering och
                Databasteknik. Utan förkunskap och efter två år i skolan känner
                jag att jag knappt har börjat skrapa på ytan av vad det innebär
                att arbeta med Front-end, något som jag vill bli en mästare i.
                Ett intership hos er är jag HELT säker på skulle ge mig den
                bästa starten på min karriär och ge mig dom verktyg jag behöver
                för att bli den bästa utvecklaren jag kan bli. Jag är också
                säker på att vi kommer trivas med att arbeta ihop, vilket är
                väldigt viktigt för mig, men vi kommer också ha det kul och
                skapa bra minnen tillsammans.
                <br />
                <br />
                Så varför ska ni välja mig? <br />
                <br />
                Jag är framförallt motiverad att lära mig. Jag känner att för
                första gången är jag intresserad av något jag vill arbeta med,
                så att lära mig blir bara kul. Jag förstår också vikten av att
                omge mig med människor som är duktiga på det dom gör, drivna och
                motvierade att göra det bästa jobbet dom kan, som i sin tur gör
                att jag utvecklas både yrkesmässigt och som människa. Jag är
                också en väldigt lojal, pålitlig och uppåtgående person,
                samtidigt som jag är organiserad, noggrann och lägger stor vikt
                i detaljer. Jag har ingen ambition om att bli den bästa
                utvecklaren i världen, jag vill bli den bästa jag kan bli i allt
                jag ger mig in i, och genom chansen att arbeta med er på Kult är
                jag på god väg mot att uppnå mina ambitioner.
                <br />
                <br />
                Mvh Alex Thelander
              </p>
            </motion.div>

            <motion.div
              className="line-one"
              initial={{ rotate: -45, x: 0, y: 0, width: '45%' }}
              animate={{
                rotate: 4,
                x: -80,
                y: -150,
                width: 800,
              }}
              exit={{ rotate: -45, x: 0, y: 0, width: '45%' }}
              transition={{ duration: 1.5 }}
            />

            <motion.div
              className="line-two"
              initial={{ rotate: 0, x: 0, y: 0, width: '64%' }}
              animate={{
                opacity: 0,
              }}
              exit={{ opacity: 1, rotate: 0, x: 0, y: 0, width: '64%' }}
              transition={{ duration: 1 }}
            />

            <motion.div
              className="line-three"
              initial={{ rotate: 45, x: 0, y: 0, width: '45%' }}
              animate={{
                rotate: -80,
                x: 320,
                y: 100,
                width: 700,
              }}
              exit={{ rotate: 45, x: 0, y: 0, width: '45%' }}
              transition={{ duration: 1.5 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
