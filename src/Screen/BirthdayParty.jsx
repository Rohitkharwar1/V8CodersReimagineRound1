import React from 'react';
import './BirthdayParty.css';
import { motion } from 'framer-motion';

const BirthdayParty = () => {
  return (
    <div className="birthday-party">
      <div className="background">
        {/* Animated balloons */}
        <div className="balloons">
          <motion.div
            className="balloon"
            animate={{
              y: [0, 20, 0],
              scale: [1, 1.2, 1],
              transition: {
                y: {
                  yoyo: Infinity,
                  duration: 1.5,
                  ease: 'easeInOut',
                },
                scale: {
                  yoyo: Infinity,
                  duration: 1.5,
                  ease: 'easeInOut',
                },
              },
            }}
          />
          <motion.div
            className="balloon"
            animate={{
              y: [0, 15, 0],
              scale: [1, 1.1, 1],
              transition: {
                y: {
                  yoyo: Infinity,
                  duration: 1.8,
                  ease: 'easeInOut',
                },
                scale: {
                  yoyo: Infinity,
                  duration: 1.8,
                  ease: 'easeInOut',
                },
              },
            }}
          />
          <motion.div
            className="balloon"
            animate={{
              y: [0, 25, 0],
              scale: [1, 1.3, 1],
              transition: {
                y: {
                  yoyo: Infinity,
                  duration: 2,
                  ease: 'easeInOut',
                },
                scale: {
                  yoyo: Infinity,
                  duration: 2,
                  ease: 'easeInOut',
                },
              },
            }}
          />
        </div>
        {/* Confetti */}
        <div className="confetti">
          <motion.div
            className="confetti-piece"
            animate={{
              rotate: [0, 360],
              transition: {
                rotate: {
                  yoyo: Infinity,
                  duration: 1,
                  ease: 'easeInOut',
                },
              },
            }}
          />
          <motion.div
            className="confetti-piece"
            animate={{
              rotate: [0, -360],
              transition: {
                rotate: {
                  yoyo: Infinity,
                  duration: 1.2,
                  ease: 'easeInOut',
                },
              },
            }}
          />
          <motion.div
            className="confetti-piece"
            animate={{
              rotate: [0, 180],
              transition: {
                rotate: {
                  yoyo: Infinity,
                  duration: 1.5,
                  ease: 'easeInOut',
                },
              },
            }}
          />
        </div>
      </div>
      {/* Birthday cake */}
      <div className="cake">
        <motion.div
          className="candle"
          animate={{
            scale: [1, 1.2, 1],
            transition: {
              scale: {
                yoyo: Infinity,
                duration: 1.2,
                ease: 'easeInOut',
              },
            },
          }}
        />
        <motion.div
          className="cake-base"
          animate={{
            rotate: [0, 360],
            transition: {
              rotate: {
                yoyo: Infinity,
                duration: 2,
                ease: 'easeInOut',
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default BirthdayParty;
