"use client";

import React from "react";

interface ProgressDotsProps {
    current: number;
    total: number;
}

const ProgressDots: React.FC<ProgressDotsProps> = ({ current, total }) => {
    return (
        <div className="flex justify-between items-center gap-1 w-full max-w-[360px] mx-auto py-2">
            {Array.from({ length: total }).map((_, i) => (
                <div
                    key={i}
                    className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${i <= current ? "bg-yellow-400 shadow-[0_0_4px_rgba(250,204,21,0.8)]" : "bg-white/30"
                        }`}
                />
            ))}
        </div>
    );
};

export default ProgressDots;
