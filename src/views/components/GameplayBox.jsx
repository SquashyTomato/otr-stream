// Import Modules
import clsx from 'clsx';

// Component Function
export default function Component({ number, color, data }) {
    // Get IPC Client
    const currentClient = data.tourney.ipcClients[number];
    const isSpectating = (currentClient?.spectating && currentClient.spectating.name) ? true : false;

    return (
        <div className={clsx(
            'w-[400px] h-[324px] outline-4 ',
            {
                'bg-green-400 outline-tourney-red': color === 'red',
                'bg-green-400 outline-tourney-blue': color === 'blue',
            }
        )}>
            <div className={clsx(
                'top-0 w-full h-[24px] flex items-center px-2',
                {
                    'bg-tourney-red': color === 'red',
                    'bg-tourney-blue': color === 'blue',
                }
            )}>
                <h3 className="text-white text-2xl text-left font-semibold">{isSpectating ? currentClient.spectating.name : 'Open'}</h3>
            </div>
        </div>
    );
};
