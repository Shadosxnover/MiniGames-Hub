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
            image: 'https://img.freepik.com/free-vector/colorful-up-down-arrows-3d-style_1017-30386.jpg',
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
            image: 'https://img.freepik.com/free-vector/flat-design-galaxy-background_23-2149497647.jpg',
            icon: <FaRocket className="text-purple-300" />,
            url: 'https://cosmic-cleanup.netlify.app/'
        },
        { 
            id: 6, 
            name: '3D Snake Game', 
            image: 'https://cdn.dribbble.com/users/3362824/screenshots/15653498/snake_gif.gif',
            icon: <GiSnake className="text-emerald-300" />,
            url: 'https://shadosxnover.github.io/3d-snake-game/'
        },
        { 
            id: 7, 
            name: '3D Dice Roll', 
            image: 'https://cdn.dribbble.com/users/6533/screenshots/2072085/media/06c5125455317a0885f3c7d2a132b6d5.gif',
            icon: <FaDice className="text-red-300" />,
            url: 'https://shadosxnover.github.io/3D-Dice-Roll/'
        },
        { 
            id: 8, 
            name: 'Box Mind Game', 
            image: 'https://cdn.dribbble.com/users/1338391/screenshots/15322229/media/28105948b7b756becebe9e3f4ab92b02.jpg',
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

    // Handle routing or external navigation
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
                className="mt-10 mb-10"
            >
                <h1 className="relative py-4 flex justify-center items-center">
                    <span className="absolute bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-5xl md:text-7xl font-extrabold text-transparent text-center blur-sm opacity-40 select-none pointer-events-none">
                        Welcome to Minigames Hub
                    </span>
                    <span className="bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-5xl md:text-7xl font-extrabold text-transparent text-center z-10 drop-shadow-lg">
                        Welcome to Minigames Hub
                    </span>
                </h1>
                <p className="text-gray-300 text-center mt-2 text-lg md:text-xl font-medium">
                    Play fun and simple games instantly!
                </p>
                <motion.div 
                    className="w-24 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto mt-4 rounded-full shadow-lg"
                    initial={{ width: 0 }}
                    animate={{ width: '6rem' }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                />
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl mt-6 pb-12"
            >
                {minigames.map((minigame) => (
                    <motion.div
                        key={minigame.id}
                        variants={itemVariants}
                        whileHover={{ 
                            scale: 1.04,
                            boxShadow: "0 8px 32px 0 rgba(59,130,246,0.25)",
                            borderColor: "#3b82f6"
                        }}
                        className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl border-2 border-gray-700 transition-all duration-300"
                    >
                        <div className="relative group">
                            <img
                                src={minigame.image}
                                alt={minigame.name}
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Reduced opacity overlay to improve image brightness */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                <div className="p-3 rounded-full bg-gray-700 mr-3 shadow-md">
                                    {minigame.icon}
                                </div>
                                <h2 className="text-white text-2xl font-bold tracking-wide">{minigame.name}</h2>
                            </div>
                            <motion.button 
                                whileHover={{ scale: 1.05, boxShadow: "0 0 16px #ec4899" }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => handleGameClick(minigame)} 
                                className="w-full bg-gradient-to-r from-blue-500 via-teal-400 to-pink-500 text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-pink-500/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            >
                                <FaPlay /> Play Now
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default MinigameLanding;
