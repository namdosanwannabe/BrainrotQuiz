import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import QuestionCard from './components/QuestionCard'
import { useBrainrot } from './contexts/BrainrotContext'
import BrainrotQuestions from './Questions'

function App() {
    const { time, score, setScore, isFinished, setIsFinished, hasStarted, startGame } = useBrainrot();

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = BrainrotQuestions[currentQuestionIndex];

    const handleAnswerSelected = (isCorrect) => {
        if (currentQuestionIndex < BrainrotQuestions.length - 1) {
            if (isCorrect) {
                setScore(prevScore => prevScore + 1);
            }
        } else {
            setIsFinished(true);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < BrainrotQuestions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        } else {
            setIsFinished(true);
        }
    };

    return (
        <div className='relative'>
            <Header />
            <div className='mx-auto max-w-3xl px-4'>
                {!hasStarted ? (
                    <div className="flex flex-col items-center justify-center h-screen">
                        <button
                            className="px-8 py-4 bg-purple text-white text-2xl rounded-full hover:bg-purple/90 transition duration-300 cursor-pointer"
                            onClick={startGame}
                        >
                            Start Game
                        </button>
                    </div>
                ) : isFinished ? (
                    <div className="flex flex-col items-center justify-center bg-purple/10 rounded-2xl p-8 shadow-lg mt-12">
                        <h2 className="text-2xl sm:text-4xl text-center font-extrabold text-purple mb-6">
                            🎉 Congratulations! 🎉 <br />
                            {
                                score <= 5
                                    ? <span>You need to train more. 😂</span>
                                    : <span className="text-3xl">You are a certified Brainrot master! 😎</span>
                            }
                        </h2>
                        <p className="text-2xl font-semibold text-gray-800 mb-4">Your Score: <span className="text-purple">{score}</span></p>
                        <p className="text-2xl font-semibold text-gray-800">Time Remaining:
                            <span className="text-purple ml-2">{`${String(Math.floor(time / 60)).padStart(2, '0')}:${String(time % 60).padStart(2, '0')}`}</span>
                        </p>
                        <button
                            className="mt-8 px-6 py-3 bg-purple text-white text-lg rounded-full hover:bg-purple/90 transition duration-300 cursor-pointer"
                            onClick={() => window.location.reload()}
                        >
                            Play Again
                        </button>
                    </div>
                ) : (
                    <QuestionCard
                        key={currentQuestion.id}
                        question={currentQuestion.question}
                        options={currentQuestion.options}
                        correctAnswer={currentQuestion.answer}
                        image={currentQuestion.image}
                        onAnswerSelected={handleAnswerSelected}
                        isLastQuestion={currentQuestionIndex === BrainrotQuestions.length - 1}
                        onNext={handleNextQuestion}
                    />
                )}
            </div>
        </div>
    );

}

export default App;
