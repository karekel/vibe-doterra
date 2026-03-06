"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "eligo_quiz_answers";

export const useQuizState = () => {
    const [answers, setAnswers] = useState<number[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                setAnswers(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse quiz answers", e);
            }
        }
        setIsLoaded(true);
    }, []);

    const setAnswer = (questionIndex: number, answerIndex: number) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = answerIndex;
        setAnswers(newAnswers);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newAnswers));
    };

    const resetQuiz = () => {
        setAnswers([]);
        localStorage.removeItem(STORAGE_KEY);
    };

    return { answers, setAnswer, resetQuiz, isLoaded };
};
