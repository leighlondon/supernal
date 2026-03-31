export type Hex = `#${string}`;

export interface Palette {
    Black: Hex;
    DarkGray: Hex;
    Gray: Hex;
    LightGray: Hex;
    Yellow: Hex;
    Orange: Hex;
    Red: Hex;
    Pink: Hex;
    Purple: Hex;
    Blue: Hex;
    PaleBlue: Hex;
    Green: Hex;
    White: Hex;
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
