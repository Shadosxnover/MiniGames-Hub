import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGamepad, FaPlay, FaKeyboard, FaRocket, FaDice, FaBrain, FaArrowsAltV } from 'react-icons/fa';
import { RiGamepadLine } from 'react-icons/ri';
import { GiSnake } from 'react-icons/gi';

const MinigameLanding = () => {
    const navigate = useNavigate();
    
    const minigames = [
        { 
            id: 1, 
            name: 'Higher or Lower', 
            image: 'assets/higher_or_lower.png',
            icon: <FaArrowsAltV className="text-blue-300" />,
            url: '/minigame1'
        },
        { 
            id: 2, 
            name: 'Word Blast', 
            image: 'assets/word-blast.png',
            icon: <FaGamepad className="text-yellow-300" />,
            url: 'https://wordblast.netlify.app/'
        },
        { 
            id: 3, 
            name: 'Tic Tac Toe', 
            image: 'https://static.vecteezy.com/system/resources/thumbnails/042/410/136/small/tic-tac-toe-xo-game-hand-drawn-grid-doodle-template-illustration-vector.jpg',
            icon: <RiGamepadLine className="text-green-300" />,
            url: '/minigame2'
        },
        { 
            id: 4, 
            name: 'Type Trail', 
            image: 'assets/type-trail.png',
            icon: <FaKeyboard className="text-blue-300" />,
            url: 'https://typetrail.netlify.app/'
        },
        { 
            id: 5, 
            name: 'Cosmic Cleanup', 
            image: 'assets/cosmic-cleanup.png',
            icon: <FaRocket className="text-purple-300" />,
            url: 'https://cosmic-cleanup.netlify.app/'
        },
        { 
            id: 6, 
            name: '3D Snake Game', 
            image: 'assets/3d-snake-game.png',
            icon: <GiSnake className="text-emerald-300" />,
            url: 'https://shadosxnover.github.io/3d-snake-game/'
        },
        { 
            id: 7, 
            name: '3D Dice Roll', 
            image: 'assets/3d-dice-roller.png',
            icon: <FaDice className="text-red-300" />,
            url: 'https://shadosxnover.github.io/3D-Dice-Roll/'
        },
        { 
            id: 8, 
            name: 'Box Mind Game', 
            image: 'assets/mind-box-game.png',
            icon: <FaBrain className="text-orange-300" />,
            url: 'https://shadosxnover.github.io/Box-Mind-Game/'
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0.8 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0.8 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 80
            }
        }
    };

    const handleGameClick = (minigame) => {
        if (minigame.url.startsWith('http')) {
            window.open(minigame.url, '_blank');
        } else {
            navigate(minigame.url);
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0.95 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen flex flex-col items-center p-6 relative"
        >
            <motion.div
                initial={{ y: -30, opacity: 0.9 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 50, delay: 0.1 }}
                className="mt-10 mb-16"
            >
                <h1 className="relative py-4 flex justify-center items-center">
                    <span className="absolute bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-5xl md:text-7xl font-extrabold text-transparent text-center blur-xl opacity-70 select-none pointer-events-none animate-pulse">
                        Welcome to Minigames Hub
                    </span>
                    
                    <span 
                        className="bg-clip-text text-5xl md:text-7xl font-extrabold text-transparent text-center z-10"
                        style={{
                            backgroundImage: 'linear-gradient(90deg, #3b82f6, #14b8a6, #ec4899, #3b82f6)',
                            backgroundSize: '300% 100%',
                            animation: 'gradientMove 8s infinite linear',
                            textShadow: '0 0 15px rgba(59,130,246,0.5), 0 0 30px rgba(236,72,153,0.3), 0 0 45px rgba(20,184,166,0.3)',
                            paddingBottom: '10px'
                        }}
                    >
                        Welcome to Minigames Hub
                    </span>
                </h1>
                
                <div className="mt-8">
                    <p className="text-gray-300 text-center text-lg md:text-xl font-medium">
                        Play fun and simple games instantly!
                    </p>
                    <motion.div 
                        className="w-24 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto mt-4 rounded-full shadow-lg"
                        initial={{ width: 0 }}
                        animate={{ width: '6rem' }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    />
                </div>
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl mt-6 pb-12"
            >
                {minigames.map((minigame) => (
                    <motion.div
                        key={minigame.id}
                        variants={itemVariants}
                        whileHover={{ 
                            scale: 1.03,
                            boxShadow: "0 10px 40px 0 rgba(59,130,246,0.3)",
                            borderColor: "#3b82f6"
                        }}
                        className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl border-2 border-gray-700 transition-all duration-300"
                    >
                        <div className="relative group">
                            <img
                                src={minigame.image}
                                alt={minigame.name}
                                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-8">
                            <div className="flex items-center mb-5">
                                <div className="p-4 rounded-full bg-gray-700 mr-4 shadow-md">
                                    {minigame.icon}
                                </div>
                                <h2 className="text-white text-3xl font-bold tracking-wide">{minigame.name}</h2>
                            </div>
                            <motion.button 
                                whileHover={{ scale: 1.05, boxShadow: "0 0 16px #ec4899" }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => handleGameClick(minigame)} 
                                className="w-full bg-gradient-to-r from-blue-500 via-teal-400 to-pink-500 text-white py-4 px-6 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 shadow-lg shadow-pink-500/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            >
                                <FaPlay className="text-xl" /> Play Now
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default MinigameLanding;
