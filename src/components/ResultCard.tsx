"use client";

import React from "react";

interface ResultCardProps {
    title: string;
    content: string;
    className?: string;
    titleColor?: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ title, content, className = "", titleColor = "text-[#f472b6]" }) => {
    return (
        <div className={`bg-white/90 backdrop-blur-sm p-8 rounded-[2.5rem] shadow-sm border border-white/40 space-y-4 ${className}`}>
            <h3 className={`font-black text-lg ${titleColor} tracking-tight`}>{title}</h3>
            <p className="text-[#334155] leading-loose text-[0.925rem] whitespace-pre-wrap font-medium">
                {content}
            </p>
        </div>
    );
};

export default ResultCard;
