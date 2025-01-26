
import { DiPostgresql, DiRedis } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { SiExpress, SiMongodb, SiPrisma } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { motion } from "motion/react"

const IconVariants = (duration: number) => ({
    initial: { y: -10, x: -1 },
    animate: {
        y: [-10, 10], // Keyframes for y-axis
        x: [-1, 1],   // Keyframes for x-axis
        transition: {
            duration: duration, // Duration of animation
            ease: "linear", // Linear easing for smooth animation
            repeat: Infinity, // Infinite looping
            repeatType: "reverse", // Reverses back and forth
        },
    },
});

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <h1 className='my-20 text-center text-4xl'>Technologies</h1>
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }} className='flex flex-wrap items-center justify-center gap-4'>
                {/*  @ts-ignore */}
                <motion.div variants={IconVariants(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                {/*  @ts-ignore */}
                <motion.div variants={IconVariants(5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <TbBrandNextjs className='text-7xl' />
                </motion.div>
                {/*  @ts-ignore */}
                <motion.div variants={IconVariants(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMongodb className='text-7xl text-green-500' />
                </motion.div>
                {/*  @ts-ignore */}
                <motion.div variants={IconVariants(1)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaNodeJs className='text-7xl text-green-400' />
                </motion.div>
                {/*  @ts-ignore */}
                <motion.div variants={IconVariants(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <DiPostgresql className='text-7xl text-sky-700' />
                </motion.div>
                {/*  @ts-ignore */}
                <motion.div variants={IconVariants(4)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiPrisma className='text-7xl text-gray-400' />
                </motion.div>
                {/*  @ts-ignore */}
                <motion.div variants={IconVariants(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiExpress className='text-7xl text-cyan-400' />
                </motion.div>
                {/*  @ts-ignore */}
                <motion.div variants={IconVariants(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <DiRedis className='text-7xl text-cyan-700' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies