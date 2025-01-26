import React from 'react'

const Hero = () => {
    const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, Prisma , PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-36'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Nirmal Mishra</h1>
                        <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                            Full Stack Developer
                        </span>
                        <p className='my-2 max-w-xl py-6 font-light tracking-tight'>{HERO_CONTENT}</p>

                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div>
                        <img src="" alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero