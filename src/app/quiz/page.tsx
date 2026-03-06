"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthGuard } from "@/hooks/useAuthGuard";
import { useQuizState } from "@/hooks/useQuizState";
import { questions } from "@/lib/questions";

const CHOICE_COLORS = [
    "#EC8FA0", // bright rose / red
    "#F4BE88", // bright peach / orange
    "#B8AADC", // bright lavender / purple
    "#90BFB0", // bright sage / green
];

export default function QuizPage() {
    const { isChecking } = useAuthGuard();
    const { answers, setAnswer, isLoaded } = useQuizState();
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (isLoaded) setCurrentIndex(answers.length);
    }, [isLoaded, answers.length]);

    if (isChecking || !isLoaded) return null;
    if (currentIndex >= 20) { router.push("/result"); return null; }

    const currentQuestion = questions[currentIndex];

    return (
        <main
            style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                overflowY: "auto",
                backgroundImage: "url('/bg-quiz.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    padding: "20px 32px 32px",
                    boxSizing: "border-box",
                }}
            >
                {/* Q番号 */}
                <h2
                    style={{
                        color: "#ffffff",
                        fontFamily: "CyGrotesk, sans-serif",
                        fontWeight: "normal",
                        fontSize: "4.5rem",
                        lineHeight: 1,
                        marginBottom: "8px",
                    }}
                >
                    Q.{currentIndex + 1}
                </h2>

                {/* 質問文 */}
                <p
                    style={{
                        color: "#ffffff",
                        fontSize: "0.95rem",
                        fontWeight: "normal",
                        lineHeight: 1.7,
                        textAlign: "center",
                        marginBottom: "0",
                    }}
                >
                    {currentQuestion.text}
                </p>

                {/* 画像プレースホルダー（上下余白） */}
                <div
                    style={{
                        width: "100%",
                        marginTop: "12px",
                        marginBottom: "12px",
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            aspectRatio: "16 / 9",
                            background: "rgba(255, 255, 255, 0.22)",
                            borderRadius: "16px",
                        }}
                    />
                </div>

                {/* 選択肢ボタン */}
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                    }}
                >
                    {currentQuestion.choices.map((choice, idx) => (
                        <button
                            key={idx}
                            onClick={() => setAnswer(currentIndex, idx)}
                            style={{
                                width: "100%",
                                minHeight: "56px",
                                padding: "12px 20px",
                                borderRadius: "9999px",
                                backgroundColor: CHOICE_COLORS[idx % 4],
                                border: "1.5px solid rgba(255, 255, 255, 0.85)",
                                color: "#ffffff",
                                fontSize: "0.85rem",
                                fontWeight: 500,
                                textAlign: "center",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxSizing: "border-box",
                            }}
                        >
                            {choice.text}
                        </button>
                    ))}
                </div>
            </div>
        </main>
    );
}
