// Import Modules
import { useEffect, useState } from 'react';

// Import Components
import BeatmapData from './components/BeatmapData.jsx';
import ContentBar from './components/ContentBar.jsx';
import GameplayBox from './components/GameplayBox.jsx';
import TeamScore from './components/TeamScore.jsx';

// Import Scripts
import WebSocketClient from '../scripts/socket.js';

// Import Assets
import BackgroundImage from '../assets/overlay/background.png';
import ForegroundImage from '../assets/overlay/foreground.png';
import LogoImage from '../assets/overlay/logo.png';

// Page Function
export default function Page() {
    // State Variables
    const [data, setData] = useState(null);

    // WebSocket Connection
    useEffect(() => {
        //WebSocketClient.connect('127.0.0.1:24050');
        WebSocketClient.connect(window.location.host);

        const handleMessage = (data) => {
            console.log('[CLIENT] Data recieved from WebSocket Server:');
            //{JSON.stringify(data.tourney, null, 2)}
            console.log(data.tourney);
            try {
                const parsed = JSON.parse(data);
                setData(parsed);
            } catch (error) {
                console.error('[CLIENT] Error parsing WebSocket data:\n', error);
            }
        };

        WebSocketClient.subscribe(handleMessage);

        return () => {
            WebSocketClient.unsubscribe(handleMessage);
            WebSocketClient.close();
        };
    }, []);

    if (!data) {
        return <div className="flex items-center justify-center h-screen text-white">Loading...</div>;
    };

    return (
        <>
            <div className="relative w-screen h-screen overflow-hidden">
                {/* Background and Foreground Assets */}
                <img src={BackgroundImage} className="absolute inset-0 w-full h-full object-cover aspect-video -z-10" />
                <img src={ForegroundImage} className="absolute inset-0 w-full h-full object-cover aspect-video z-10" />

                {/* Overlay Contents */}
                <div className="relative z-0">
                    {/* Top Bar */}
                    <ContentBar
                        alignment='top'
                        left={
                            <TeamScore data={data} alignment="left" color="blue" />
                        }
                        middle={
                            <img src={LogoImage} className="h-18" />
                        }
                        right={
                            <h4 className="text-white/30">YORUMCULAR<br /><br /><br /></h4>
                        }
                    />

                    {/* Overlay Specifics */}
                    <div className="fixed inset-0 flex items-center justify-center">
                        <div className="flex flex-col space-y-24">
                            <div className="flex space-x-6">
                                {Array.from({ length: 3 }, (_, index) => (
                                    <GameplayBox key={index} color="blue" />
                                ))}
                            </div>
                            <div className="fixed inset-0 flex items-center justify-center">
                                <div className="flex flex-row space-x-2 text-4xl font-bold mt-24">
                                    <h1 className="text-white/80">{data.tourney.manager.gameplay.score.left.toLocaleString()}</h1>
                                    <h1 className="text-white/30">-</h1>
                                    <h1 className="text-white/80">{data.tourney.manager.gameplay.score.right.toLocaleString()}</h1>
                                </div>
                            </div>
                            <div className="flex space-x-6">
                                {Array.from({ length: 3 }, (_, index) => (
                                    <GameplayBox key={index} color="red" />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <ContentBar
                        alignment='bottom'
                        left={
                            <BeatmapData data={data} />
                        }
                        right={
                            <TeamScore data={data} alignment="right" color="red" />
                        }
                    />
                </div>
            </div>
        </>
    );
};
