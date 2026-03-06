"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authUtil } from "@/lib/auth";
import GradientButton from "@/components/GradientButton";

export default function LoginPage() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (authUtil.login(password)) {
            router.push("/");
        } else {
            setError(true);
            setPassword("");
        }
    };

    return (
        <main className="min-h-screen bg-white flex flex-col items-center justify-center p-6 bg-doterra-gradient">
            <div className="w-full max-w-md space-y-12 text-center">
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-slate-800">My doTERRA AI診断</h1>
                    <p className="text-sm text-slate-500">by Team Eligo</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-4">
                        <p className="text-sm text-slate-600">パスワードを入力してください</p>
                        <div className="relative">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setError(false);
                                }}
                                placeholder="••••"
                                className={`w-full py-4 px-6 text-center text-2xl tracking-widest rounded-2xl border-2 transition-all outline-none ${error ? "border-red-400 bg-red-50" : "border-slate-100 bg-white shadow-inner focus:border-purple-300"
                                    }`}
                            />
                            {error && <p className="text-xs text-red-500 mt-2">パスワードが正しくありません</p>}
                        </div>
                    </div>

                    <GradientButton type="submit">ログイン</GradientButton>
                </form>

                <p className="text-xs text-slate-400 leading-relaxed">
                    パスワードがわからない場合は
                    <br />
                    管理者にお問い合わせください
                </p>
            </div>
        </main>
    );
}
