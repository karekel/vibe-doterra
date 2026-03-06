"use client";

import React from "react";

interface ChoiceButtonProps {
    text: string;
    onClick: () => void;
    colorClass: string;
}

const ChoiceButton: React.FC<ChoiceButtonProps> = ({ text, onClick, colorClass }) => {
    return (
        <button
            onClick={onClick}
            className={`w-full py-5 px-6 text-center rounded-[32px] shadow-sm hover:shadow-md transition-all active:scale-95 transform border border-transparent hover:border-white/50 group ${colorClass}`}
        >
            <span className="text-gray-800 font-medium leading-tight group-hover:scale-105 transition-transform inline-block text-sm md:text-base">
                {text}
            </span>
        </button>
    );
};

export default ChoiceButton;
