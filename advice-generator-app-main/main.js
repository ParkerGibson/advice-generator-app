import React from 'react';
import { getAdvice } from "./getAdvice";

export const adviceFunc = async () => {
    const advice = await getAdvice();
}

