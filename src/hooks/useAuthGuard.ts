"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { authUtil } from "@/lib/auth";

export const useAuthGuard = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        if (pathname === "/login") {
            setIsChecking(false);
            return;
        }

        if (!authUtil.isAuthed()) {
            router.push("/login");
        } else {
            setIsChecking(false);
        }
    }, [router, pathname]);

    return { isChecking };
};
