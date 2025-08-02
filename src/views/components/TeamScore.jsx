// Import Modules
import clsx from 'clsx';

// Component Function
export default function Component({ data, alignment, color }) {
    const pointsToWin = Math.floor((parseInt(data.tourney.manager.bestOF) / 2) + 1);
    const currentPoints = parseInt(data.tourney.manager.stars[alignment]);
    const remainingPoints = pointsToWin - currentPoints;

    return (
        <div className={clsx(
            'flex flex-col space-y-1',
            {
                'items-start text-left': alignment === 'left',
                'items-end text-right': alignment === 'right',
            }
        )}>
            <h3 className="text-white text-2xl font-bold">{data.tourney.manager.teamName[alignment]}</h3>
            <div className="flex justify-between space-x-3">
                {Array.from({ length: currentPoints }, (_, index) => (
                    <div key={index} className={clsx(
                        'w-5 h-5 outline-2',
                        {
                            'bg-tourney-red outline-tourney-red': color === 'red',
                            'bg-tourney-blue outline-tourney-blue': color === 'blue',
                        },
                    )}></div>
                ))}
                {Array.from({ length: remainingPoints }, (_, index) => (
                    <div key={index} className={clsx(
                        'w-5 h-5 outline-2',
                        {
                            'outline-tourney-red': color === 'red',
                            'outline-tourney-blue': color === 'blue',
                        },
                    )}></div>
                ))}
            </div>
        </div>
    );
};
