// Import Modules
import clsx from 'clsx';

// Component Function
export default function Component({ data }) {
    // Get Score Data
    const leftScore = data.tourney.manager.gameplay.score.left;
    const rightScore = data.tourney.manager.gameplay.score.right;

    const leftPercentage = (leftScore / (leftScore + rightScore)) * 100;
    const rightPercentage = (rightScore / (leftScore + rightScore)) * 100




    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-tourney-blue/80 text-4xl text-left font-bold mr-8">{leftScore.toLocaleString()}</h1>
            <div className="relative w-screen h-2 bg-transparent rounded overflow-hidden">
                <div className="absolute left-1/2 top-0 h-full bg-tourney-blue origin-right rounded-l-md" style={{ width: `${leftPercentage}%`, transform: 'translateX(-100%)' }}></div>
                <div className="absolute left-1/2 top-0 h-full bg-tourney-red origin-left rounded-r-md" style={{ width: `${rightPercentage}%` }}></div>
            </div>
            <h1 className="text-tourney-red/80 text-4xl text-right font-bold ml-8">{rightScore.toLocaleString()}</h1>
        </div>
    );
};
