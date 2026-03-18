import { writeFileSync } from "fs";

interface Payload {
    background: Hex;
    border: Hex;
    fg: {
        default: Hex;
        comment: Hex;
    };
    colors: Palette;
}

interface Palette {
    black: Hex;
    darkgray: Hex;
    lightgray: Hex;
    gray: Hex;
    red: Hex;
    pink: Hex;
    purple: Hex;
    lightblue: Hex;
    cyan: Hex;
    green: Hex;
    orange: Hex;
    white: Hex;
}

const BaseColors: Palette = {
    black: "#1d2125",
    darkgray: "#21252b",
    gray: "#363b40",
    lightgray: "#5f5f74",
    orange: "#ffb539",
    red: "#fc6984",
    pink: "#e783e9",
    purple: "#bf81fa",
    lightblue: "#70bdf1",
    cyan: "#49e4da",
    green: "#49e4ab",
    white: "#d0d0d0",
}

let pp: Payload = {
    background: BaseColors.darkgray,
    border: BaseColors.gray,
    fg: {
        comment: BaseColors.lightgray,
        default: BaseColors.white,
    },
    colors: BaseColors,
}

function syntaxHighlights(p: Payload): TokenColor[] {
    return [{
        scope: ["comment", "punctuation.definition.comment", "string.comment"],
        settings: { foreground: p.fg.comment }
    }]
}

function uiTheming(p: Payload): ColorMapping {
    return {
        "menu.background": p.background,
        "menu.selectionBackground": "#333942",
        "menubar.selectionBackground": "#333942",
        // title (top bar)
        "titleBar.activeBackground": "#1d2125",
        "titleBar.inactiveBackground": "#1d2125",
        "statusBar.foreground": p.fg.default,
        "titleBar.border": p.border,
        // status bar (bottom bar)
        "statusBar.border": p.border,
        "statusBar.background": "#1d2125",
        "statusBar.debuggingBackground": "#952642",
        "statusBar.noFolderBackground": "#6a3394",
        // tabs
        "tab.activeBackground": "#1d2125",
        "tab.inactiveBackground": "#25282e",
        "tab.border": "#505050",
        "tab.hoverBorder": "#0854a7",
        "editorGroupHeader.tabsBackground": "#25282e",
        // side bar & activity bar
        "activityBarBadge.background": "#0854a7",
        "sideBar.background": "#25282e",
        "sideBarSectionHeader.background": "#2d3138",
        "sideBar.border": p.border,
        "activityBar.border": p.border,
        "activityBar.background": "#1d2125",
        // editor
        "editor.background": "#1c2026",
        "editorPane.background": "#333942",
        "editor.selectionBackground": "#443550",
        "peekViewEditor.background": "#282d35",
        "peekViewResult.background": "#23262c",
        "quickInput.background": "#21252b",
        "list.activeSelectionBackground": "#333942",
        "input.background": "#21252b",
        "input.border": "#505050",
        "panel.background": "#21252b",
        "editor.foreground": p.fg.default,
        "banner.background": "#215dce",
        // diff stuff
        "diffEditor.insertedLineBackground": "#18a47c2f",
        "diffEditor.insertedTextBackground": "#18a47c2f",
        "gitDecoration.modifiedResourceForeground": "#ffee68", //todo(leigh): modified status theming
        // bracket highlights
        "editorBracketHighlight.foreground1": p.colors.red,
        "editorBracketHighlight.foreground2": p.colors.pink,
        "editorBracketHighlight.foreground3": p.colors.purple,
        "editorBracketHighlight.foreground4": p.colors.lightblue,
        "editorBracketHighlight.foreground5": p.colors.cyan,
        "editorBracketHighlight.foreground6": p.colors.green,
        "editorBracketHighlight.unexpectedBracket.foreground": p.colors.orange
    }
}


function renderTheme({ name, payload }: { name: string, payload: Payload }): Theme {
    return {
        name: name,
        tokenColors: syntaxHighlights(payload),
        colors: uiTheming(payload),
    }
}

let theme: Theme = {
    name: "supernal",

};

interface Theme {
    name?: string;
    colors?: ColorMapping;
    tokenColors?: TokenColor[];
}

type Hex = `#${string}`;

interface ColorMapping {
    [index: string]: Hex;
}
interface TokenColor {
    name?: string;
    scope: string[];
    settings: TokenColorSettings;
}

interface TokenColorSettings {
    foreground?: Hex;
    fontStyle?: string;
}


writeFileSync('./blah.json', JSON.stringify(renderTheme({ name: 'supernal', payload: pp })));
