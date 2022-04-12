import { aboutContent } from "@content/about";
import { Context, createContext } from "react";

// @ts-ignore
export const AboutContext: Context<[string, (content: string) => void]> = createContext([aboutContent, () => { }]);
