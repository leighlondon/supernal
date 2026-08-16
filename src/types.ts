export type Hex = `#${string}`;

export interface Palette {
    Red: Hex;
    Coral: Hex;
    Orange: Hex;
    PaleOrange: Hex;
    Yellow: Hex;
    Green: Hex;
    Aqua: Hex;
    Blue: Hex;
    DarkBlue: Hex;
    PaleYellow: Hex;
    Purple: Hex;
    Lavender: Hex;
    Rose: Hex;
    Pink: Hex;
    White: Hex;
    LighterGray: Hex;
    LightGray: Hex;
    Gray: Hex;
    DarkGray: Hex;
    DarkerGray: Hex;
    Black: Hex;
}

export interface ColorScheme {
    bg: {
        default: Hex;
        darker: Hex;
        lighter: Hex;
    };
    focus: {
        darker: Hex;
        lighter: Hex;
        default: Hex;
    };
    border: Hex;
    syntax: {
        number: Hex;
        default: Hex;
        comment: Hex;
        documentation: Hex;
        variable: Hex;
        namespace: Hex;
        string: Hex;
        primitive: Hex;
        constant: Hex;
        type: Hex;
        interface: Hex;
        punctuation: Hex;
        function: Hex;
        macro: Hex;
        keyword: Hex;
        property: Hex;
        parameter: Hex;
        enum: Hex;
        enumMember: Hex;
    };
    headings: Hex[];
    bracketColors: Hex[];
    jsonKeyColors: Hex[];
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

export const rgb = (h: Hex): string => `rgb:${h.slice(1)}`;
