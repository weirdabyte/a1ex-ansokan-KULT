import React from 'react';
import Navigation from '../components/Navigation';
import Form from '../components/Form'; //
import {motion} from 'framer-motion';

const Contact = () => {
  const showContent = {
    hidden: {opacity: 0},
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
            <motion.div
              variants={showContent}
              initial="hidden"
              animate="show"
              exit={{opacity: [1, 0, 0, 0]}}
            >
              <h1 className="heading-three">Säg Hej!</h1>
            </motion.div>
            <motion.div
              className="line-one"
              initial={{rotate: -45, x: 0, y: 0, width: '45%'}}
              animate={{
                rotate: -95,
                x: -160,
                y: 90,
                width: 500,
              }}
              exit={{rotate: -45, x: 0, y: 0, width: '45%'}}
              transition={{delay: 0.1, duration: 1.5}}
            />
            <motion.div
              className="line-two"
              initial={{rotate: 0, x: 0, y: 0, width: '64%'}}
              animate={{
                opacity: 0,
                width: 700,
              }}
              exit={{
                width: '64%',
                opacity: 1,
              }}
              transition={{delay: 0.1, duration: 1.5}}
            />
            <motion.div
              className="line-three"
              initial={{rotate: 45, x: 0, y: 0, width: '45%'}}
              animate={{
                rotate: 110,
                x: 170,
                y: -190,
                width: 300,
              }}
              exit={{rotate: 45, x: 0, y: 0, width: '45%'}}
              transition={{delay: 0, duration: 1.5}}
            />
            <motion.div
              variants={showContent}
              initial="hidden"
              animate="show"
              exit={{opacity: [1, 0, 0, 0]}}
            >
              <Form />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
