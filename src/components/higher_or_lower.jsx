import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

function Game1() {
    const [numberToGuess, setNumberToGuess] = useState(Math.floor(Math.random() * 100) + 1);
    const [guess, setGuess] = useState('');
    const [result, setResult] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [gameFinished, setGameFinished] = useState(false);
    const [feedback, setFeedback] = useState(null);
    const inputRef = useRef(null);
    
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleGuess = () => {
        if (gameFinished || !guess) return;
        
        const userGuess = parseInt(guess);
        setAttempts(attempts + 1);
        
        if (userGuess === numberToGuess) {
            setResult('Congratulations! You guessed the number!');
            setGameFinished(true);
            setFeedback('correct');
        } else if (userGuess < numberToGuess) {
            setResult('Higher!');
            setFeedback('higher');
            setTimeout(() => setFeedback(null), 800);
        } else {
            setResult('Lower!');
            setFeedback('lower');
            setTimeout(() => setFeedback(null), 800);
        }
        setGuess('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !gameFinished) {
            handleGuess();
        }
    };

    const resetGame = () => {
        setNumberToGuess(Math.floor(Math.random() * 100) + 1);
        setGuess('');
        setResult('');
        setAttempts(0);
        setGameFinished(false);
        setFeedback(null);
        inputRef.current.focus();
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-900 via-indigo-900 to-purple-900"
        >
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 80 }}
                className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-2xl max-w-md w-full mx-4"
            >
                <h1 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Higher or Lower</h1>
                
                <div className="mb-6">
                    <p className="text-lg mb-2 text-gray-700 dark:text-gray-300">Guess a number between 1 and 100</p>
                    <div className="relative">
                        <input
                            type="number"
                            value={guess}
                            onChange={(e) => setGuess(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className={`w-full p-4 text-lg rounded-lg focus:outline-none focus:ring-2 transition-all
                            ${gameFinished ? 'bg-gray-100 text-gray-500' : 'bg-white text-gray-800'} 
                            border-2 ${feedback === 'higher' ? 'border-red-500' : feedback === 'lower' ? 'border-blue-500' : feedback === 'correct' ? 'border-green-500' : 'border-gray-300'}`}
                            placeholder="Enter your guess"
                            ref={inputRef}
                            disabled={gameFinished}
                        />
                        {feedback === 'higher' && (
                            <motion.div 
                                initial={{ y: 0 }}
                                animate={{ y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="absolute right-4 top-1/2 text-red-500 transform -translate-y-1/2"
                            >
                                ↑
                            </motion.div>
                        )}
                        {feedback === 'lower' && (
                            <motion.div 
                                initial={{ y: 0 }}
                                animate={{ y: 20 }}
                                transition={{ duration: 0.5 }}
                                className="absolute right-4 top-1/2 text-blue-500 transform -translate-y-1/2"
                            >
                                ↓
                            </motion.div>
                        )}
                    </div>
                </div>
                
                <div className="flex flex-col space-y-4">
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={handleGuess}
                        className={`w-full py-3 px-4 rounded-lg font-bold text-white text-lg transition-colors
                        ${gameFinished 
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'}`}
                        disabled={gameFinished}
                    >
                        Guess
                    </motion.button>
                    
                    {gameFinished && (
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            onClick={resetGame}
                            className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-lg"
                        >
                            Play Again
                        </motion.button>
                    )}
                </div>

                <div className="mt-6 text-center">
                    {result && (
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className={`text-xl font-medium ${gameFinished ? 'text-green-600 dark:text-green-400' : 'text-gray-800 dark:text-white'}`}
                        >
                            {result}
                        </motion.p>
                    )}
                    <p className="mt-2 text-gray-600 dark:text-gray-400">Attempts: {attempts}</p>
                </div>
                
                {gameFinished && (
                    <motion.div 
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="mt-6 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-800"
                    >
                        <p className="text-center text-green-800 dark:text-green-300">
                            You found the number <span className="font-bold">{numberToGuess}</span> in {attempts} {attempts === 1 ? 'try' : 'tries'}!
                        </p>
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    );
}

export default Game1;
