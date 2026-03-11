import React from 'react'
import { RiRobot3Line } from "react-icons/ri";
import { HiSparkles } from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";
import { motion } from 'framer-motion';
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../utils/firebase';
import axios from 'axios'
import { serverURL } from '../App';

const containerVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: {
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

function Auth() {

    const handleGoogleAuth = async () => {
        try {
            const response = await signInWithPopup(auth, provider)

            console.log(response)
            let userInstance = response.user;
            let name = userInstance.displayName;
            let email = userInstance.email;

            console.log(name, email)

            const result = await axios.post(serverURL + '/api/auth/googleAuth', { name, email }, {withCredentials: true})
            console.log(result.data)
        } catch (error) {
            console.log('error in handleGoogleAuth', error.message)
        }
    }

    return (
        <div className='w-full min-h-screen bg-[#F7F7BF] flex items-center justify-center px-6 py-20 font-poppins'>

            {/* Ambient background blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-1/4 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-40"
                />
                <motion.div
                    animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-20 right-1/4 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-30"
                />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className='relative w-full max-w-md p-10 rounded-[2.5rem] bg-[#F5E8A7] shadow-[0_25px_60px_rgba(200,180,100,0.25)] border border-[#E9E9C0]'
            >

                {/* Logo Section */}
                <motion.div variants={itemVariants} className='flex flex-col items-center justify-center gap-3 mb-10'>
                    <motion.div
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        whileTap={{ scale: 0.92 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className='bg-[#F7ED5D] p-3 rounded-2xl shadow-inner cursor-pointer'
                    >
                        <RiRobot3Line size={24} className="text-[#8B7D10]" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, letterSpacing: "0.1em" }}
                        animate={{ opacity: 1, letterSpacing: "0.4em" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className='text-sm font-bold tracking-[0.4em] text-[#A59938] mt-1'
                    >
                        PREPPER
                    </motion.h2>
                </motion.div>

                {/* Heading & Text */}
                <motion.div variants={itemVariants} className="text-center space-y-3 mb-10">
                    <h1 className='font-semibold text-3xl text-slate-900 leading-[1.2]'>
                        Continue with{' '}
                        <motion.span
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            className='relative  inline-flex items-center gap-1 text-[#C4AC0F] bg-[#FFFBD9] px-4 py-1.5 rounded-full cursor-default'
                        >
                            <motion.span
                                animate={{ rotate: [0, 15, -10, 15, 0] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                            >
                                <HiSparkles size={22} className="text-[#FFD700]" />
                            </motion.span >
                            Prepper
                        </motion.span>
                    </h1>
                    <motion.p
                        variants={itemVariants}
                        className='text-slate-600 text-[15px]'
                    >
                        Ace your next interview with AI-powered practice sessions tailored just for you.
                    </motion.p>
                </motion.div>

                {/* Auth Button */}
                <motion.div variants={itemVariants} className="space-y-4">
                    <motion.button
                        onClick={handleGoogleAuth}
                        whileHover={{ scale: 1.03, boxShadow: "0 8px 25px rgba(200,180,50,0.35)" }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="w-full bg-[#F7ED5D] hover:bg-[#FFD700] flex items-center justify-center gap-3 py-4 px-4 border border-[#E9E9C0] rounded-2xl font-medium text-slate-800 transition-colors shadow-sm"
                    >
                        <motion.span
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                        >
                            <FcGoogle size={20} />
                        </motion.span>
                        Continue with Google
                    </motion.button>
                </motion.div>

                {/* Divider */}
                {/* <motion.div variants={itemVariants} className="flex items-center gap-3 my-6">
                    <div className="flex-1 h-px bg-[#E0D888]" />
                    <span className="text-xs text-[#A59938]">or</span>
                    <div className="flex-1 h-px bg-[#E0D888]" />
                </motion.div> */}

                {/* Footer */}
                <motion.p
                    variants={itemVariants}
                    className="text-center text-xs mt-10 text-slate-500"
                >
                    Need help?{' '}
                    <motion.span
                        whileHover={{ color: "#1e293b" }}
                        className="underline cursor-pointer transition-colors"
                    >
                        Contact Support
                    </motion.span>
                </motion.p>

            </motion.div>
        </div>
    )
}

export default Auth