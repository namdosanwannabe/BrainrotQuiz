import { useContext, useEffect, useState, createContext } from "react";

const BrainrotContext = createContext();

export function useBrainrot() {
    const context = useContext(BrainrotContext);
    if (!context) {
        throw new Error("useBrainrot must be used within a BrainrotProvider");
    }
    return context;
}

export function BrainrotProvider({ children }) {
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(60);
    const [isFinished, setIsFinished] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        if (hasStarted && !isFinished && time > 0) {
            const timer = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime <= 1) {
                        clearInterval(timer);
                        setIsFinished(true);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [hasStarted, time, isFinished]);

    const startGame = () => {
        setHasStarted(true);
        setScore(0);
        setTime(60);
        setIsFinished(false);
    };

    return (
        <BrainrotContext.Provider value={{
            score,
            time,
            isFinished,
            hasStarted,
            setScore,
            setTime,
            setIsFinished,
            startGame,
        }}>
            {children}
        </BrainrotContext.Provider>
    );
}
