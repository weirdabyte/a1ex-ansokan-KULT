import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/images/profilbild.jpg';
import Navigation from '../components/Navigation';

const About = () => {
  const showContent = {
    hidden: { opacity: 0 },
    show: {
      opacity: [0, 0, 0, 1],
      transition: {
        duration: 2.2,
      },
    },
  };

  return (
    <div className="page-wrap">
      <Navigation />
      <div className="content-wrap">
        <div className="lines-wrap">
          <div className="content">
            <motion.img
              layout
              className="profile-image"
              alt="Profile picture"
              src={profileImage}
              variants={showContent}
              initial="hidden"
              animate="show"
              exit={{ opacity: [1, 0, 0, 0] }}
            />
            <motion.div
              className="text-container"
              variants={showContent}
              initial="hidden"
              animate="show"
              exit={{ opacity: [1, 0, 0, 0] }}
            >
              <h1 className="heading-two">Så.. vem är jag?</h1>
              <p className="text-two">
                Jag föddes 1989 i Linköping, Sverige, där jag även växte upp.
                Mina föräldrar gav mig namnet Alex, och det har inte ändrats
                sedan dess. I vidaregående studerade jag Samhällsvetenskaplig
                linje med inriktning ekonomi, något som jag inte haft speciellt
                mycket använding av och ångrar bittert.
                <br />
                <br />
                Jag flyttade till Köpenhamn i 2010 för att pröva lyckan som
                kock, då jag älskar att laga mat, och gick på skola i ca 2år
                innan jag insåg att jag inte var passionerad nog att fortsätta
                den vägen.
                <br />
                <br />
                I september 2013 flyttade jag till Oslo av den enkla anledningen
                att många av mina vänner bodde här, och förälskade mig väldigt
                snabbt i staden och allt den har att erbjuda.
                <br />
                <br />
                <br />
                Här har jag dom senaste åren jobbat med diverse, bland annat som
                postman på Bring, kört truck på diverse lager som exempelvis
                Asko och Bohus, och startat och drivit ett Kafé ute på Nesodden,
                innan jag bestämde mig för att studera webbutveckling, någonting
                jag alltid vart intresserad av men aldrig följt upp.
                <br />
                <br />
                På fritiden gillar jag att vara aktiv med bland annat löpning
                och styrketräning, en tur i skogen eller liknande. Är väldigt
                glad i mat och dricka, även om jag är allergisk mot halva
                världen. Jag anser också att det är få ting som slår en go fest
                med vänner.
                <br />
                <br />I övrigt så är jag glad i snowboard, gaming, familjen,
                vänner, resa och bada bastu. Tror jag fick med det mesta här.
                <br />
                <br />
                Tack för mig, <br /> Alex Thelander
              </p>
            </motion.div>

            <motion.div
              className="line-one"
              initial={{ rotate: -45, x: 0, y: 0, width: '45%' }}
              animate={{
                rotate: -90,
                x: -110,
                y: -100,
                width: 350,
              }}
              exit={{ rotate: -45, x: 0, y: 0, width: '45%' }}
              transition={{ delay: 0.1, duration: 1.5 }}
            />
            <motion.div
              className="line-two"
              initial={{ rotate: 0, x: 100, y: 0, width: '64%' }}
              animate={{
                width: 700,
              }}
              exit={{ rotate: 0, x: 0, y: 0, width: '64%' }}
              transition={{ delay: 0.1, duration: 1.5 }}
            />
            <motion.div
              className="line-three"
              initial={{ rotate: 45, x: 0, y: 0, width: '45%' }}
              animate={{
                rotate: 90,
                x: 180,
                y: 190,
                width: 400,
              }}
              exit={{ rotate: 45, x: 0, y: 0, width: '45%' }}
              transition={{ delay: 0, duration: 1.5 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
