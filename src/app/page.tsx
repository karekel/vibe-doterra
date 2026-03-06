"use client";

import { useRouter } from "next/navigation";
import { useAuthGuard } from "@/hooks/useAuthGuard";

export default function Home() {
    const { isChecking } = useAuthGuard();
    const router = useRouter();

    if (isChecking) return null;

    return (
        <main
            className="flex-1 flex flex-col min-h-screen"
            style={{
                backgroundImage: "url('/bg-start.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="flex flex-col flex-1 px-8">

                {/* 上部スペース */}
                <div className="flex-[2]" />

                {/* VIBE FINDER タイトル（中央寄せ・カスタムフォント） */}
                <h1
                    className="text-[3.2rem] tracking-wider leading-none text-center whitespace-nowrap"
                    style={{ color: "#ffffff", fontFamily: "CyGrotesk, sans-serif", fontWeight: "normal" }}
                >
                    VIBE FINDER
                </h1>

                {/* タイトルとテキストの間隔 */}
                <div className="flex-[1]" />

                {/* ボディテキスト（中央寄せ・白） */}
                <div
                    className="flex flex-col items-center space-y-5 text-center"
                    style={{ color: "#ffffff" }}
                >
                    <p className="text-[0.82rem] font-semibold leading-relaxed">
                        自らの人生をデザインしていくために。
                    </p>
                    <p className="text-[0.8rem] font-normal leading-loose">
                        一番最初にすべきことは、<br />
                        今の自分の「現在地」を客観的に把握することです。
                    </p>
                    <p className="text-[0.8rem] font-normal leading-loose">
                        VIBE FINDERは、あなたの基本性格と、<br />
                        現在の心身のフェーズ（バイブス）を分析し、<br />
                        今のあなたに最も必要な<br />
                        5本のエッセンシャルオイルを導き出します。
                    </p>
                    <p className="text-[0.8rem] font-normal leading-loose">
                        これは単なる香り選びや占いではありません。<br />
                        自分自身の状態を知り、<br />
                        日々のコンディションを最適化していくための、<br />
                        極めて実践的なツールです。
                    </p>
                    <p className="text-[0.82rem] font-semibold leading-relaxed">
                        さあ、あなたの可能性を<br />
                        最大化するオイルを見つけましょう。
                    </p>
                </div>

                {/* テキストとボタンの間隔 */}
                <div className="flex-[1.5]" />

                {/* STARTボタン（透明・白枠） */}
                <div className="flex justify-center">
                    <button
                        onClick={() => router.push("/quiz")}
                        className="w-[72%] py-[1.1rem] rounded-full text-[1.6rem] font-light tracking-[0.25em] transition-all active:scale-95"
                        style={{
                            color: "#ffffff",
                            background: "rgba(255, 255, 255, 0.15)",
                            border: "2px solid rgba(255, 255, 255, 0.75)",
                            backdropFilter: "blur(6px)",
                        }}
                    >
                        START
                    </button>
                </div>

                {/* 下部スペース */}
                <div className="flex-[1]" />

            </div>
        </main>
    );
}
