// Page Function
export default function Page() {
    return (
        <>
            <nav className="bg-stone-800 px-4 py-2">
                <div className="flex items-center justify-center">
                    <span className="text-lg font-bold">OTR Stream</span>
                </div>
            </nav>
            <div className="mx-12 mt-4">
                <div className="bg-stone-700 px-6 py-4 my-2 rounded-lg shadow-md">
                    <h1 className="text-lg font-bold">Welcome to OTR Stream App</h1>
                    <p className="text-sm text-gray-200 mt-1">
                        This is the Management Interface for the Live Overlay.
                        <hr className="text-gray-400 my-2" />
                        Put the URL into your OBS Browser Source with the resolution 1920x1080. Overlay URL: <a href="https://127.0.0.1:7727/#live">https://127.0.0.1:7727/#live</a>
                    </p>
                </div>

                <div className="bg-stone-700 px-6 py-4 my-2 rounded-lg shadow-md">
                    <h1 className="text-lg font-bold">Match & Team Setup</h1>
                    <hr className="text-gray-400 my-2" />
                    <p className="text-sm text-gray-200 mt-1">
                        Best Of:
                        <br />
                        Team 1 (Blue): (Name / Score)
                        <br />
                        Team 2 (Red): (Name / Score)
                        <br />
                    </p>
                </div>
            </div>
        </>
    );
};
