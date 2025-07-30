// Import Modules
import clsx from 'clsx';
import type { ReactNode } from 'react';

// Define Properties
type Props = {
    alignment: 'top' | 'bottom';
    left?: ReactNode;
    middle?: ReactNode;
    right?: ReactNode;
};

// Component Function
export default function Component({ alignment, left, middle, right }: Props) {
    return (
        <div className={clsx(
            'fixed w-full h-[120px] bg-black/50',
            {
                'top-0': alignment === 'top',
                'bottom-0': alignment === 'bottom',
            },
        )}>
            <div className="flex items-center relative w-full h-full px-12">
                {/* Content Left */}
                <div className="mr-auto">{left}</div>
                {/* Content Middle */}
                <div className="absolute left-1/2 transform -translate-x-1/2">{middle}</div>
                {/* Content Right */}
                <div className="ml-auto">{right}</div>
            </div>
        </div>
    );
};
