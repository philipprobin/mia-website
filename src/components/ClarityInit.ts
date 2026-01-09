"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "uytih9fxum";

export default function ClarityInit() {
    useEffect(() => {
        // Prevent double init in dev (React Strict Mode mounts twice)
        if (typeof window !== "undefined" && !(window as any).__clarity_inited) {
            (window as any).__clarity_inited = true;
            Clarity.init(CLARITY_ID);
        }
    }, []);

    return null;
}
