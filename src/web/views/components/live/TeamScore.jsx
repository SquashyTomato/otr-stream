// Import Modules
import clsx from 'clsx';

// Component Function
export default function Component({ id, alignment, color }) {
    return (
        <div className={clsx(
            'flex flex-col space-y-1',
            {
                'items-start text-left': alignment === 'left',
                'items-end text-right': alignment === 'right',
            }
        )}>
            <h3 className="text-white text-2xl font-bold">Team {id}</h3>
            <div className="flex justify-between space-x-3">

                {Array.from({ length: 5 }, (_, index) => (
                    <div key={index} className={clsx(
                        'w-5 h-5 outline-2',
                        {
                            'bg-red-700 outline-red-700': color === 'red',
                            'bg-blue-700 outline-blue-700': color === 'blue',
                        },
                    )}></div>
                ))}
            </div>
        </div>
    );
};
