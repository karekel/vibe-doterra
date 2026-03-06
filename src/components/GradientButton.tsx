"use client";

import React from "react";

interface GradientButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit";
    className?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({ children, onClick, type = "button", className = "" }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`w-full py-4 px-6 bg-gradient-to-r from-purple-400 to-pink-500 text-white font-bold rounded-full shadow-lg hover:opacity-90 transition-opacity active:scale-95 transform ${className}`}
        >
            {children}
        </button>
    );
};

export default GradientButton;
