"use client";

import React from "react";
import Image from "next/image";

const GradientHeader = ({ children }: { children?: React.ReactNode }) => {
    return (
        <header className="w-full bg-gradient-to-r from-[#a78bfa] to-[#f472b6] h-24 relative flex items-center px-6 overflow-hidden">
            <div className="z-10 text-white">
                <h1 className="text-lg font-bold leading-tight tracking-tight">My doTERRA 診断</h1>
                <p className="text-xs opacity-90 font-medium">by Team Eligo</p>
            </div>

            {/* Compass Logo Placeholder - Positioned absolutely as per screenshot */}
            <div className="absolute right-[-20px] top-[-10px] opacity-40">
                <div className="w-32 h-32 border border-white/40 rounded-full flex items-center justify-center relative">
                    <div className="absolute inset-4 border border-white/20 rounded-full" />
                    <div className="w-0.5 h-full bg-white/20 absolute" />
                    <div className="w-full h-0.5 bg-white/20 absolute" />
                    <span className="text-white text-[10px] font-bold tracking-[0.5em] absolute bottom-4 text-center w-full">ELIGO</span>
                </div>
            </div>
            {children && <div className="z-10 ml-auto">{children}</div>}
        </header>
    );
};

export default GradientHeader;
