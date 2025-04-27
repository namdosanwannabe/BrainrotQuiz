import React, { useState } from 'react';
import { useBrainrot } from '../contexts/BrainrotContext'

function QuestionCard({ question, options, correctAnswer, image, onAnswerSelected, isLastQuestion, onNext }) {
    const { time } = useBrainrot();
    const [isAnswered, setIsAnswered] = useState(false);

    const handleAnswerSelection = (option) => {
        setIsAnswered(true);
        onAnswerSelected(option === correctAnswer);
    };

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <div className="my-8 mx-auto max-w-md md:max-w-lg w-full flex flex-col items-center px-4">
            <img src={image} alt="Question Image" className="w-64 h-64 sm:w-96 sm:h-96 object-cover rounded-lg mb-4" />
            <div className='w-full'>
                <h2 className="text-2xl font-bold mb-4">{question}</h2>
                <div className="flex flex-col gap-2">
                    {options.map((option, index) => (
                        <button
                            key={index}
                            className={`p-2 text-lg rounded-full transition-colors cursor-pointer ${isAnswered
                                ? option === correctAnswer
                                    ? 'bg-purple text-white'
                                    : 'bg-warning/90 text-white'
                                : 'bg-gray-200 hover:bg-gray-300'
                                }`}
                            disabled={isAnswered}
                            onClick={() => handleAnswerSelection(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
            <div className='w-full flex justify-between mt-4'>
                <p className='w-24 h-12 text-center flex justify-center items-center px-12 py-3 border-purple border-2 rounded-full text-lg font-medium text-purple'>
                    {formatTime(time)}
                </p>
                {!isLastQuestion && isAnswered && (
                    <button
                        className="h-12 flex justify-center items-center px-4 py-3 bg-purple text-white hover:text-purple hover:bg-transparent hover:border-purple border-2 transition-colors duration-300 ease-in-out rounded-full text-lg font-medium cursor-pointer"
                        onClick={onNext}
                    >
                        Next Question
                    </button>
                )}
            </div>
        </div>
    );
}

export default QuestionCard;
