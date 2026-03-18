import { writeFileSync } from "fs";

interface Payload {
    background: Hex;
    fg: {
        default: Hex;
    };
}

let BaseColors: ColorMapping = {
    red: "#fc6984",
    pink: "#e783e9",
    purple: "#bf81fa",
    lightblue: "#70bdf1",
    cyan: "#49e4da",
    green: "#49e4ab"
}

let pp: Payload = {
    background: BaseColors.cyan,
    fg: {
        default: BaseColors.red,
    }
}

function renderTheme({ name, payload }: { name: string, payload: Payload }): Theme {
    return {
        name: name,
        tokenColors: [{
            scope: ["comment", "punctuation.definition.comment", "string.comment"],
            settings: { foreground: payload.background }
        }],
        colors: {
            "menu.background": payload.background,
            "menu.selectionBackground": "#333942",
            "menubar.selectionBackground": "#333942",
            // title (top bar)
            "titleBar.activeBackground": "#1d2125",
            "titleBar.inactiveBackground": "#1d2125",
            "statusBar.foreground": payload.fg.default,
            "titleBar.border": "#363b40",
            // status bar (bottom bar)
            "statusBar.border": "#363b40",
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
            "activityBar.border": "#363b40",
            "sideBar.background": "#25282e",
            "sideBarSectionHeader.background": "#2d3138",
            "sideBar.border": "#363b40",
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
            "editor.foreground": "#d0d0d0",
            "banner.background": "#215dce",
            // diff stuff
            "diffEditor.insertedLineBackground": "#18a47c2f",
            "diffEditor.insertedTextBackground": "#18a47c2f",
            "gitDecoration.modifiedResourceForeground": "#ffee68", //todo(leigh): modified status theming
            // bracket highlights
            "editorBracketHighlight.foreground1": "#fc6984",
            "editorBracketHighlight.foreground2": "#e783e9",
            "editorBracketHighlight.foreground3": "#bf81fa",
            "editorBracketHighlight.foreground4": "#70bdf1",
            "editorBracketHighlight.foreground5": "#49e4da",
            "editorBracketHighlight.foreground6": "#49e4ab",
            "editorBracketHighlight.unexpectedBracket.foreground": "#ffb539"
        }
    }
}

let theme: Theme = {
    name: "supernal",

};

interface Theme {
    name?: string;
    colors?: ColorMapping;
    tokenColors?: [TokenColor];
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
