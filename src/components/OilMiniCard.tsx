"use client";

import React from "react";

interface OilMiniCardProps {
    label: string;
    name: string;
    description: string;
    color: "pink" | "purple";
}

const OilMiniCard: React.FC<OilMiniCardProps> = ({ label, name, description, color }) => {
    const accentColor = color === "pink" ? "text-[#f472b6] bg-[#fee2e2]" : "text-[#a78bfa] bg-[#ede9fe]";
    const borderColor = color === "pink" ? "border-[#fbcfe8]" : "border-[#ddd6fe]";

    return (
        <div className={`flex-1 p-5 rounded-3xl bg-white/80 border ${borderColor} shadow-sm space-y-3`}>
            <div className="space-y-1 text-center">
                <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${accentColor} uppercase tracking-widest`}>
                    {label}
                </span>
                <p className="text-xl font-black text-[#334155]">{name}</p>
            </div>
            <p className="text-[10px] text-slate-500 leading-relaxed">{description}</p>
        </div>
    );
};

export default OilMiniCard;
