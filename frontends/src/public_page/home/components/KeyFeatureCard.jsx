import React from 'react'

const KeyFeatureCard = () => {
    const featureCard = [
        {
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZY_E9PDm_ULFqrQjDUgnIy17a2hAr4UEuaw&s",
            name: "AI Task Suggestions",
            description: "Get intelligent task recommendations automatically tailored for your workflow."
        },
        {
            imageUrl: "https://exusia.com/wp-content/uploads/2021/10/OVERVIEW.png",
            name: "Employee Analytics",
            description: "Track, analyze, and optimize workforce performance and efficiency effortlessly."
        },
        {
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWSmSRl7yFP2COnIViCOgBhEXLrHPqKlnVQg&s",
            name: "Real-Time Collaboration",
            description: "Collaborate instantly with team members using live updates and shared workspaces."
        },
        {
            imageUrl: "https://play-lh.googleusercontent.com/Q75-y9y_JHOIdk4mDY2LDGD-9MzMfA3mfaW0pFW543guhwFibfAeu63WYJu5L3sEwSQ=w240-h480-rw",
            name: "Smart Reminders",
            description: "Never miss a deadline with automated reminders and intelligent alerts."
        },
    ]
    return (
        <div className='flex items-center justify-center flex-col'>
            <div className='flex items-center gap-2 justify-center'>
                <div className='h-[1px] w-14 mt-1 bg-zinc-700'></div>
                <h1 className='text-md capitalize font-[Poppins] font-bold'>key feature</h1>
                <div className='h-[1px] w-14 mt-1 bg-zinc-700'></div>
            </div>
            <p className='text-[16px] tracking-tight font-semibold'>Empower Your Workforce with Smart Solution</p>
            <div className='w-full py-4 mt-4 md:flex  items-center justify-center gap-10'>
                {featureCard.map((card, index) => (
                    <div key={index} className="w-[290px] md:mt-0 mt-2 min-w-[180px] max-w-[95vw] bg-white/80 border border-zinc-300 rounded-lg shadow flex flex-col items-center overflow-hidden">
                        <div className="w-full h-[140px] flex items-center justify-center overflow-hidden bg-zinc-100">
                            <img
                                className="w-full h-full object-contain"
                                src={card.imageUrl}
                                alt={card.name}
                                loading="lazy"
                                onError={e => {
                                    e.target.onerror = null;
                                    e.target.src = "/fallback-image.png";
                                }}
                            />
                        </div>
                        <div className="p-3 flex flex-col items-center">
                            <h2 className="font-semibold font-[Poppins] text-center text-base text-blue-900 mb-1">{card.name}</h2>
                            <p className="text-zinc-700 text-sm text-center font-[Poppins]">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default KeyFeatureCard
