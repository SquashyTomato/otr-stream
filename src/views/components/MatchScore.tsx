// Import Modules
import clsx from 'clsx';

// Component Function
export default function Component({ data }) {
    // Get Score Data
    const leftScore = data.tourney.manager.gameplay.score.left;
    const rightScore = data.tourney.manager.gameplay.score.right;

    const total = leftScore + rightScore;
    const leadPercentage = Math.abs(leftScore - rightScore) / total * 100;

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-white/80 text-4xl text-left font-bold mr-8" style={{ transform: `translateX(-${leftScore.toString().length * 10}px)` }}>{leftScore.toLocaleString()}</h1>
            <div className="relative w-screen h-2 mx-6 bg-transparent rounded overflow-hidden">
                {leftScore > rightScore && (
                    <div className="absolute left-1/2 top-0 h-full bg-tourney-blue origin-right rounded-l-md" style={{ width: `${leadPercentage.toFixed(2)}%`, transform: 'translateX(-100%)' }}></div>
                )}
                {leftScore < rightScore && (
                    <div className="absolute left-1/2 top-0 h-full bg-tourney-red origin-left rounded-r-md" style={{ width: `${leadPercentage.toFixed(2)}%` }}></div>
                )}
            </div>
            <h1 className="text-white/80 text-4xl text-right font-bold ml-8" style={{ transform: `translateX(${rightScore.toString().length * 10}px)` }}>{rightScore.toLocaleString()}</h1>
        </div>
    );
};
