// Import Modules
import type { ReactNode } from 'react';

// Import Components
import BeatmapData from '../components/BeatmapData.tsx';
import ContentBar from '../components/ContentBar.tsx';
import TeamScore from '../components/TeamScore.tsx';

// Import Assets
import BackgroundImage from '../../assets/overlay/background.png';
import ForegroundImage from '../../assets/overlay/foreground.png';
import LogoImage from '../../assets/overlay/logo.png';

// Layout Function
export default function Layout({ children }: { children: ReactNode }) {
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
                            <TeamScore id="1" alignment="left" color="blue" />
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
                        {children}
                    </div>

                    {/* Bottom Bar */}
                    <ContentBar
                        alignment='bottom'
                        left={
                            <BeatmapData />
                        }
                        right={
                            <TeamScore id="2" alignment="right" color="red" />
                        }
                    />
                </div>
            </div>
        </>
    );
};
