"use client";

const AUTH_KEY = "eligo_authed";

export const authUtil = {
    isAuthed: (): boolean => {
        if (typeof window === "undefined") return false;
        return localStorage.getItem(AUTH_KEY) === "1";
    },
    login: (password: string): boolean => {
        const required = process.env.NEXT_PUBLIC_APP_PASSWORD;
        if (password === required) {
            localStorage.setItem(AUTH_KEY, "1");
            return true;
        }
        return false;
    },
    logout: () => {
        localStorage.removeItem(AUTH_KEY);
    },
};
