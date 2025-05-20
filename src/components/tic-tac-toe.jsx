import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {
    const [player1Name, setPlayer1Name] = useState('Player 1');
    const [player2Name, setPlayer2Name] = useState('Player 2');
    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);
    const [darkMode, setDarkMode] = useState(false);
    const [gameBoard, setGameBoard] = useState(['', '', '', '', '', '', '', '', '']);
    const [gameOver, setGameOver] = useState(false);
    const [turn, setTurn] = useState('X');
    const [winner, setWinner] = useState(null);

    // Load theme preference from localStorage on component mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('ticTacToeDarkMode');
        if (savedTheme !== null) {
            setDarkMode(savedTheme === 'true');
        }
    }, []);

    const handlePlayerNameChange = (e, player) => {
        if (player === 'player1') {
            setPlayer1Name(e.target.value);
        } else {
            setPlayer2Name(e.target.value);
        }
    };

    const handleDarkModeChange = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        // Save theme preference to localStorage
        localStorage.setItem('ticTacToeDarkMode', newDarkMode);
    };

    const handleGameBoardClick = (index) => {
        if (gameOver || gameBoard[index] !== '') return;

        const newGameBoard = [...gameBoard];
        newGameBoard[index] = turn;
        setGameBoard(newGameBoard);

        const gameWon = checkForWinner(newGameBoard);

        if (!gameWon) {
            setTurn(turn === 'X' ? 'O' : 'X');
        }
    };


    const checkForWinner = (board) => {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                setGameOver(true);
                setWinner(board[a]);
                if (board[a] === 'X') {
                    setPlayer1Score(player1Score + 1);
                } else {
                    setPlayer2Score(player2Score + 1);
                }
                return true;
            }
        }

        if (!board.includes('')) {
            setGameOver(true);
            setWinner('Tie');
            return true;
        }

        return false;
    };

    const handleReset = () => {
        setGameBoard(['', '', '', '', '', '', '', '', '']);
        setGameOver(false);
        setTurn('X');
        setWinner(null);
        setPlayer1Score(0);
        setPlayer2Score(0);
    };
    
    const restartGame = () => {
        setGameBoard(['', '', '', '', '', '', '', '', '']);
        setGameOver(false);
        setTurn('X');
        setWinner(null);
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}
        >
            <div className="flex justify-between items-center p-6">
                <h1 className="text-4xl md:text-6xl font-bold text-center mx-auto">
                    Tic Tac Toe
                </h1>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
                    onClick={handleDarkModeChange}
                >
                    {darkMode ? (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    )}
                </motion.button>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-4">
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                    <label className="block text-sm font-medium mb-2">Player X</label>
                    <input
                        type="text"
                        value={player1Name}
                        onChange={(e) => handlePlayerNameChange(e, 'player1')}
                        className={`p-2 rounded w-full ${
                            darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'
                        } border ${turn === 'X' ? 'border-blue-500' : 'border-gray-300'}`}
                    />
                    <p className="text-lg font-bold mt-2">
                        Score: {player1Score}
                    </p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                    <label className="block text-sm font-medium mb-2">Player O</label>
                    <input
                        type="text"
                        value={player2Name}
                        onChange={(e) => handlePlayerNameChange(e, 'player2')}
                        className={`p-2 rounded w-full ${
                            darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'
                        } border ${turn === 'O' ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    <p className="text-lg font-bold mt-2">
                        Score: {player2Score}
                    </p>
                </div>
            </div>

            <div className="flex justify-center items-center p-4">
                <p className={`text-xl font-bold ${turn === 'X' ? 'text-blue-500' : 'text-red-500'}`}>
                    {turn === 'X' ? player1Name : player2Name}'s turn
                </p>
            </div>

            <div className="flex justify-center items-center p-4">
                <div className="grid grid-cols-3 gap-3">
                    {gameBoard.map((cell, index) => (
                        <motion.button
                            key={index}
                            whileHover={cell === '' && !gameOver ? { scale: 1.05 } : {}}
                            whileTap={cell === '' && !gameOver ? { scale: 0.95 } : {}}
                            className={`flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-lg text-4xl font-bold ${
                                darkMode ? 'bg-gray-700' : 'bg-gray-200'
                            } ${
                                cell === 'X' ? 'text-blue-500' : cell === 'O' ? 'text-red-500' : ''
                            }`}
                            onClick={() => handleGameBoardClick(index)}
                        >
                            {cell}
                        </motion.button>
                    ))}
                </div>
            </div>

            {gameOver && (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col md:flex-row justify-center items-center gap-4 p-6"
                >
                    <div className={`text-center p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                        <p className="text-xl font-bold mb-4">
                            {winner === 'Tie' ? "It's a tie!" : (
                                <span>
                                    {winner === 'X' ? player1Name : player2Name} wins!
                                </span>
                            )}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`py-2 px-4 rounded-lg ${
                                    darkMode 
                                        ? 'bg-blue-600 hover:bg-blue-700' 
                                        : 'bg-blue-500 hover:bg-blue-600'
                                } text-white`}
                                onClick={restartGame}
                            >
                                New Round
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`py-2 px-4 rounded-lg ${
                                    darkMode 
                                        ? 'bg-red-600 hover:bg-red-700' 
                                        : 'bg-red-500 hover:bg-red-600'
                                } text-white`}
                                onClick={handleReset}
                            >
                                Reset Game
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
}

export default App;
