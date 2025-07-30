// Import Modules
import clsx from 'clsx';

// Define Properties
type Props = {
    color: 'blue' | 'red';
};

// Component Function
export default function Component({ color }: Props) {
    return (
        <div className={clsx(
            'w-[400px] h-[300px] outline-4 ',
            {
                'outline-red-700/80': color === 'red',
                'outline-blue-700/80': color === 'blue',
            }
        )}>
            <div className={clsx(
                'top-0 w-full h-4',
                {
                    'bg-red-700/80': color === 'red',
                    'bg-blue-700/80': color === 'blue',
                }
            )}>
            </div>
        </div>
    );
};
