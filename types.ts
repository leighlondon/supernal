export type Hex = `#${string}`;

export interface Palette {
    black: Hex;
    darkgray: Hex;
    lightgray: Hex;
    gray: Hex;
    pink: Hex;
    purple: Hex;
    indigo: Hex;
    lightblue: Hex;
    cyan: Hex;
    green: Hex;
    yellow: Hex;
    orange: Hex;
    red: Hex;
    white: Hex;
}

export interface ColorScheme {
    background: Hex;
    border: Hex;
    fg: {
        default: Hex;
        comment: Hex;
    };
    colors: Palette;
}

export interface WorkbenchColors {
    [index: string]: Hex;
}

export interface TokenColorStyle {
    foreground?: Hex;
    fontStyle?: string;
}
export interface TokenColorRule {
    name?: string;
    scope: string[];
    settings: TokenColorStyle;
}


export interface VSCodeTheme {
    name: string;
    colors: WorkbenchColors;
    tokenColors: TokenColorRule[];
    semanticHighlighting?: boolean;
    semanticTokenColors?: WorkbenchColors;
}
