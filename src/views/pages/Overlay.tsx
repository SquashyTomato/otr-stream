// Import Layout
import Overlay from '../layouts/Overlay.tsx';

// Import Components
import GameplayBox from '../components/GameplayBox.tsx';

// Page Function
export default function Page() {
    return (
        <>
            <Overlay>
                <div className="flex flex-col space-y-24">
                    <div className="flex space-x-6">
                        {Array.from({ length: 3 }, (_, index) => (
                            <GameplayBox key={index} color="blue" />
                        ))}
                    </div>
                    <div className="fixed inset-0 flex items-center justify-center">
                        <div className="flex flex-row space-x-2 text-4xl font-bold mt-24">
                            <h1 className="text-white/80">1,000,000</h1>
                            <h1 className="text-white/30">-</h1>
                            <h1 className="text-white/80">1,000,000</h1>
                        </div>
                    </div>
                    <div className="flex space-x-6">
                        {Array.from({ length: 3 }, (_, index) => (
                            <GameplayBox key={index} color="red" />
                        ))}
                    </div>
                </div>
            </Overlay>
        </>
    );
};
