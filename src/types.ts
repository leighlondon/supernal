export type Hex = `#${string}`;

export interface Palette {
    Black: Hex;
    DarkGray: Hex; Gray: Hex; LightGray: Hex;
    Pink: Hex; PalePink: Hex;
    Red: Hex; PaleRed: Hex;
    Orange: Hex; PaleOrange: Hex; SuperPaleOrange: Hex;
    Green: Hex; PaleGreen: Hex;
    Yellow: Hex; PaleYellow: Hex;
    Blue: Hex; PaleBlue: Hex;
    Purple: Hex; PalePurple: Hex;
    Cyan: Hex; PaleCyan: Hex;
    DarkWhite: Hex; White: Hex; PaleWhite: Hex;
}

export interface ColorScheme {
    bg: {
        default: Hex;
        darker: Hex;
        lighter: Hex;
    };
    border: Hex;
    fg: {
        number: Hex;
        default: Hex;
        comment: Hex;
        variable: Hex;
        namespace: Hex;
        string: Hex;
        constant: Hex;
        type: Hex;
        interface: Hex;
        punctuation: Hex;
        function: Hex;
        macro: Hex;
        keyword: Hex;
        property: Hex;
    };
    headings: Hex[];
    bracketColors: Hex[];
    jsonKeyColors: Hex[];
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
