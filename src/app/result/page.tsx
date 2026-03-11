"use client";

import { useRouter } from "next/navigation";
import { useAuthGuard } from "@/hooks/useAuthGuard";
import { useQuizState } from "@/hooks/useQuizState";
import { calculateResult } from "@/lib/scoring";
import { personalityCopy, phaseCopy } from "@/lib/copy";
import { getRecommendedOils } from "@/lib/oils";
import { vibeCopy } from "@/lib/vibe";

export default function ResultPage() {
    const { isChecking } = useAuthGuard();
    const { answers, resetQuiz, isLoaded } = useQuizState();
    const router = useRouter();

    if (isChecking || !isLoaded) return null;

    if (answers.length < 20) {
        router.push("/");
        return null;
    }

    const result = calculateResult(answers);
    const pData = personalityCopy[result.personality];
    const phData = phaseCopy[result.phase];
    const oils = getRecommendedOils(result.personality, result.phase);
    const vibe = vibeCopy[`${result.personality}_${result.phase}`];

    const coreImageMap: Record<string, string> = {
        EL: "/結果/EL.jpg",
        EF: "/結果/EF.jpg",
        IL: "/結果/IL.jpg",
        IF: "/結果/IF.jpg",
    };
    const phaseImageMap: Record<string, string> = {
        DETOX: "/結果/DETOX.jpg",
        ACTIVE: "/結果/Active.jpg",
        HEALING: "/結果/Healing.jpg",
        EXPRESSION: "/結果/expression.jpg",
        AMBIVALENCE: "/結果/Ambibarent.jpg",
    };

    const handleReset = () => {
        resetQuiz();
        router.push("/");
    };

    return (
        <main
            style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                overflowY: "auto",
                backgroundImage: "url('/bg-result.png')",
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
                    padding: "48px 28px 60px",
                    boxSizing: "border-box",
                    gap: "24px",
                }}
            >
                {/* ── CORE Card ── */}
                <div
                    style={{
                        width: "100%",
                        borderRadius: "24px",
                        backgroundColor: "#DE828C",
                        overflow: "hidden",
                    }}
                >
                    <div style={{ padding: "28px 24px 20px", textAlign: "center" }}>
                        <h2
                            style={{
                                color: "#ffffff",
                                fontFamily: "CyGrotesk, sans-serif",
                                fontWeight: "normal",
                                fontSize: "2.5rem",
                                lineHeight: 1,
                                margin: "0 0 16px 0",
                            }}
                        >
                            Your CORE
                        </h2>
                        <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.5)", marginBottom: "20px" }} />
                        <p
                            style={{
                                color: "#ffffff",
                                fontSize: "1.05rem",
                                fontWeight: 700,
                                margin: 0,
                            }}
                        >
                            {pData.resultLabel}
                        </p>
                    </div>

                    <div style={{ padding: "0 24px 20px" }}>
                        <img
                            src={coreImageMap[result.personality]}
                            alt={result.personality}
                            style={{
                                width: "100%",
                                borderRadius: "16px",
                                display: "block",
                            }}
                        />
                    </div>

                    <div style={{ padding: "0 24px 20px" }}>
                        <p
                            style={{
                                color: "#ffffff",
                                fontSize: "0.83rem",
                                lineHeight: 1.85,
                                margin: 0,
                                whiteSpace: "pre-wrap",
                            }}
                        >
                            {formatText(pData.bodyText)}
                        </p>
                    </div>

                    <div
                        style={{
                            padding: "20px 24px 28px",
                            backgroundColor: "rgba(0,0,0,0.12)",
                        }}
                    >
                        <p
                            style={{
                                color: "rgba(255,255,255,0.75)",
                                fontSize: "0.72rem",
                                textAlign: "center",
                                margin: "0 0 16px 0",
                            }}
                        >
                            そんなあなたに必要なオイルは…
                        </p>
                        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                            <img
                                src={encodeURI(`/オイル/${oils.core.name.normalize('NFD')}.png`)}
                                alt={oils.core.name}
                                style={{
                                    width: "80px",
                                    height: "107px",
                                    objectFit: "contain",
                                    borderRadius: "10px",
                                    flexShrink: 0,
                                }}
                            />
                            <div>
                                <p
                                    style={{
                                        color: "#ffffff",
                                        fontSize: "1.25rem",
                                        fontStyle: "italic",
                                        fontWeight: 700,
                                        margin: "0 0 6px 0",
                                    }}
                                >
                                    {oils.core.name}
                                </p>
                                <p
                                    style={{
                                        color: "rgba(255,255,255,0.85)",
                                        fontSize: "0.8rem",
                                        lineHeight: 1.65,
                                        margin: 0,
                                        whiteSpace: "pre-wrap",
                                    }}
                                >
                                    {formatText(oils.core.description)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── PHASE Card ── */}
                <div
                    style={{
                        width: "100%",
                        borderRadius: "24px",
                        backgroundColor: "#9E97C8",
                        overflow: "hidden",
                    }}
                >
                    <div style={{ padding: "28px 24px 20px", textAlign: "center" }}>
                        <h2
                            style={{
                                color: "#ffffff",
                                fontFamily: "CyGrotesk, sans-serif",
                                fontWeight: "normal",
                                fontSize: "2.5rem",
                                lineHeight: 1,
                                margin: "0 0 16px 0",
                            }}
                        >
                            Your Phase
                        </h2>
                        <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.5)", marginBottom: "20px" }} />
                        <p
                            style={{
                                color: "#ffffff",
                                fontSize: "1.05rem",
                                fontWeight: 700,
                                margin: "0 0 8px 0",
                            }}
                        >
                            {phData.subtitle}
                        </p>
                        <p
                            style={{
                                color: "rgba(255,255,255,0.85)",
                                fontSize: "0.85rem",
                                margin: 0,
                            }}
                        >
                            「{phData.phaseLabel}」
                        </p>
                    </div>

                    <div style={{ padding: "0 24px 20px" }}>
                        <img
                            src={phaseImageMap[result.phase]}
                            alt={result.phase}
                            style={{
                                width: "100%",
                                borderRadius: "16px",
                                display: "block",
                            }}
                        />
                    </div>

                    <div
                        style={{
                            padding: "0 24px 20px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                        }}
                    >
                        <ContentSection title="現在の心象風景" content={phData.mindscape} />
                        <ContentSection title="マインドの状態（心）" content={phData.mindState} />
                        <ContentSection title="フィジカルの状態（体）" content={phData.physicalState} />
                    </div>

                    <div
                        style={{
                            padding: "20px 24px 28px",
                            backgroundColor: "rgba(0,0,0,0.12)",
                        }}
                    >
                        <p
                            style={{
                                color: "rgba(255,255,255,0.75)",
                                fontSize: "0.72rem",
                                textAlign: "center",
                                margin: "0 0 16px 0",
                            }}
                        >
                            そんなあなたに必要なオイルは…
                        </p>
                        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                            <img
                                src={encodeURI(`/オイル/${oils.phase.name.normalize('NFD')}.png`)}
                                alt={oils.phase.name}
                                style={{
                                    width: "80px",
                                    height: "107px",
                                    objectFit: "contain",
                                    borderRadius: "10px",
                                    flexShrink: 0,
                                }}
                            />
                            <div>
                                <p
                                    style={{
                                        color: "#ffffff",
                                        fontSize: "1.25rem",
                                        fontStyle: "italic",
                                        fontWeight: 700,
                                        margin: "0 0 6px 0",
                                    }}
                                >
                                    {oils.phase.name}
                                </p>
                                <p
                                    style={{
                                        color: "rgba(255,255,255,0.85)",
                                        fontSize: "0.8rem",
                                        lineHeight: 1.65,
                                        margin: 0,
                                        whiteSpace: "pre-wrap",
                                    }}
                                >
                                    {formatText(oils.phase.description)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── VIBE Card ── */}
                <div
                    style={{
                        width: "100%",
                        borderRadius: "24px",
                        backgroundColor: "#4BB8B2",
                        overflow: "hidden",
                    }}
                >
                    <div style={{ padding: "28px 24px 20px", textAlign: "center" }}>
                        <h2
                            style={{
                                color: "#ffffff",
                                fontFamily: "CyGrotesk, sans-serif",
                                fontWeight: "normal",
                                fontSize: "2.5rem",
                                lineHeight: 1,
                                margin: "0 0 16px 0",
                            }}
                        >
                            Your Vibe
                        </h2>
                        <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.5)", marginBottom: "20px" }} />
                        <p
                            style={{
                                color: "#ffffff",
                                fontSize: "1.05rem",
                                fontWeight: 700,
                                margin: 0,
                            }}
                        >
                            {vibe.title}
                        </p>
                    </div>

                    <div
                        style={{
                            padding: "0 24px 20px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                        }}
                    >
                        <ContentSection title="現在地" content={vibe.currentState} />
                        <ContentSection title="必要な処方箋" content={vibe.prescription} />
                    </div>

                    <div style={{ padding: "0 24px 20px" }}>
                        <div
                            style={{
                                display: "flex",
                                gap: "12px",
                                justifyContent: "center",
                            }}
                        >
                            {oils.vibe.map((oil, i) => (
                                <img
                                    key={i}
                                    src={encodeURI(`/オイル/${oil.name.normalize('NFD')}.png`)}
                                    alt={oil.name}
                                    style={{
                                        width: "80px",
                                        height: "107px",
                                        objectFit: "contain",
                                        borderRadius: "10px",
                                        flexShrink: 0,
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    <div
                        style={{
                            padding: "20px 24px 28px",
                            backgroundColor: "rgba(0,0,0,0.12)",
                            display: "flex",
                            flexDirection: "column",
                            gap: "18px",
                        }}
                    >
                        {oils.vibe.map((oil, i) => (
                            <div key={i}>
                                <p
                                    style={{
                                        color: "#ffffff",
                                        fontSize: "1.0rem",
                                        fontWeight: 700,
                                        margin: "0 0 2px 0",
                                    }}
                                >
                                    {oil.name}
                                    <span
                                        style={{
                                            fontSize: "0.72rem",
                                            fontWeight: 400,
                                            marginLeft: "8px",
                                            opacity: 0.8,
                                        }}
                                    >
                                        {oil.subtitle}
                                    </span>
                                </p>
                                <p
                                    style={{
                                        color: "rgba(255,255,255,0.85)",
                                        fontSize: "0.8rem",
                                        lineHeight: 1.65,
                                        margin: 0,
                                        whiteSpace: "pre-wrap",
                                    }}
                                >
                                    {formatText(oil.description)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Reset Button */}
                <button
                    onClick={handleReset}
                    style={{
                        width: "80%",
                        padding: "16px",
                        borderRadius: "9999px",
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        border: "2px solid rgba(255, 255, 255, 0.75)",
                        color: "#ffffff",
                        fontSize: "1rem",
                        fontWeight: 500,
                        letterSpacing: "0.12em",
                        cursor: "pointer",
                        backdropFilter: "blur(6px)",
                        marginTop: "8px",
                    }}
                >
                    もう一度診断する
                </button>
            </div>
        </main>
    );
}

function formatText(text: string): string {
    return text.replace(/\n/g, "").replace(/。/g, "。\n").trimEnd();
}

function ContentSection({ title, content }: { title: string; content: string }) {
    return (
        <div>
            <p
                style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    margin: "0 0 6px 0",
                }}
            >
                【{title}】
            </p>
            <p
                style={{
                    color: "#ffffff",
                    fontSize: "0.82rem",
                    lineHeight: 1.85,
                    margin: 0,
                    whiteSpace: "pre-wrap",
                }}
            >
                {formatText(content)}
            </p>
        </div>
    );
}
