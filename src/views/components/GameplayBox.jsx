// Import Modules
import clsx from 'clsx';

// Component Function
export default function Component({ color }) {
    return (
        <div className={clsx(
            'w-[400px] h-[300px] outline-4 ',
            {
                'outline-tourney-red': color === 'red',
                'outline-tourney-blue': color === 'blue',
            }
        )}>
            <div className={clsx(
                'top-0 w-full h-4',
                {
                    'bg-tourney-red': color === 'red',
                    'bg-tourney-blue': color === 'blue',
                }
            )}>
            </div>
        </div>
    );
};
