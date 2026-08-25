import { writeFileSync } from "fs";
import { renderKakouneTheme } from "./kakoune";
import { semanticTheming, syntaxHighlights } from "./syntax";
import * as types from "./types";

const p: types.Palette = {
    Red: "#f95959",
    Coral: "#f6a497",
    Orange: "#ebae46",
    PaleOrange: "#dfbc85",
    Yellow: "#ead75e",
    PaleYellow: "#d7cf9c",
    Green: "#6ece7f",
    Aqua: "#4ed1b6",
    Blue: "#83b5f1",
    DarkBlue: "#3a97f3",
    Purple: "#9274cc",
    Lavender: "#c0aaee",
    Rose: "#eb89a8",
    Pink: "#dd8ac7",
    White: "#c0c0c0",
    LighterGray: "#808080",
    Gray: "#363b40",
    LightGray: "#323943",
    DarkGray: "#21252b",
    DarkerGray: "#1b1c1f",
    Black: "#191e24",
}


const supernal: any = {
    editor: {
        bg: p.DarkGray,
        fg: p.White,
    },
    bg: {
        darker: p.Black,
        default: p.DarkGray,
        lighter: p.LightGray,
    },
    focus: {
        default: p.LightGray,
        darker: p.DarkGray,
        lighter: p.LighterGray,
    },
    border: p.Gray,
    syntax: {
        default: p.White,
        comment: p.LighterGray,
        documentation: p.PaleYellow,
        punctuation: p.Red,
        keyword: p.Purple,
        constant: p.DarkBlue,
        number: p.Aqua,
        string: p.Coral,
        namespace: p.PaleOrange,
        parameter: p.Blue,
        primitive: p.Pink,
        type: p.Yellow,
        interface: p.Yellow,
        enum: p.Aqua,
        property: p.Rose,
        enumMember: p.Lavender,
        variable: p.White,
        function: p.Orange,
        macro: p.PaleOrange,
    },
    headings: [p.Purple, p.DarkBlue, p.Blue, p.Green, p.Yellow, p.Orange],
    bracketColors: ["#fc6984", "#ea7398", "#d87aaa", "#c67fbc", "#b283cd", "#9e86de", "#8887ef", "#6f87ff"],
    jsonKeyColors: [p.Red, p.Orange, p.Yellow, p.Green, p.Blue, p.DarkBlue, p.Purple, p.Pink, p.White],
}


const darkerdarkerGray = "#1b1d23";

function uiTheming(s: any): types.WorkbenchColors {
    return {
        "menu.background": s.bg.default,

        // title (top bar)
        "titleBar.activeBackground": s.bg.darker,
        "titleBar.activeForeground": s.syntax.default,
        "titleBar.inactiveBackground": s.bg.default,
        "titleBar.inactiveForeground": "#545f62",
        "list.hoverBackground": s.bg.lighter,

        // status bar (bottom bar)
        "statusBar.foreground": s.syntax.default,
        "statusBar.background": s.bg.darker,
        "statusBar.debuggingBackground": "#952642",
        "statusBar.noFolderBackground": "#6a3394",

        // bracket highlights
        "editorBracketHighlight.foreground1": s.bracketColors[0],
        "editorBracketHighlight.foreground2": s.bracketColors[1],
        "editorBracketHighlight.foreground3": s.bracketColors[2],
        "editorBracketHighlight.foreground4": s.bracketColors[3],
        "editorBracketHighlight.foreground5": s.bracketColors[4],
        "editorBracketHighlight.foreground6": s.bracketColors[5],
        "editorBracketHighlight.unexpectedBracket.foreground": s.syntax.function

    }
    return {
        "menu.selectionBackground": "#333942",
        "menubar.selectionBackground": "#333942",
        "list.hoverBackground": "#333942",

        // tabs
        "tab.activeBackground": s.bg.darker,
        "tab.inactiveBackground": s.bg.darker,
        "tab.border": "#505050",
        "tab.hoverBorder": "#0854a7",
        "editorGroupHeader.tabsBackground": darkerdarkerGray,
        // side bar & activity bar
        "activityBarBadge.background": "#0854a7",
        "sideBar.background": "#25282e",
        "sideBarSectionHeader.background": s.bg.darker,
        "sideBar.border": darkerdarkerGray,
        "activityBar.border": darkerdarkerGray,
        "activityBar.background": darkerdarkerGray,
        // editor
        "editor.background": "#1c2026",
        "editorPane.background": "#333942",
        "editor.selectionBackground": "#354350",
        "peekViewEditor.background": "#282d35",
        "peekViewResult.background": "#23262c",
        "quickInput.background": s.bg.default,
        "list.activeSelectionBackground": "#333942",
        "input.background": s.bg.default,
        "input.border": "#505050",
        "panel.background": s.bg.default,
        "editor.foreground": s.syntax.default,
        "banner.background": "#215dce",
        // diff stuff
        "diffEditor.insertedLineBackground": "#18a47c2f",
        "diffEditor.insertedTextBackground": "#18a47c2f",
        "gitDecoration.modifiedResourceForeground": "#ffee68", //todo(leigh): modified status theming
    }
}

function vsCodeTheme({ name, scheme }: { name: string, scheme: types.ColorScheme }): types.VSCodeTheme {
    return {
        name: name,
        colors: uiTheming(scheme),
        tokenColors: syntaxHighlights(scheme),
        semanticHighlighting: true,
        semanticTokenColors: semanticTheming(scheme),
    }
}

function renderVSCodeTheme(theme: types.VSCodeTheme): string {
    return JSON.stringify(theme, null, 2);
}

writeFileSync('themes/supernal-color-theme.json', renderVSCodeTheme(vsCodeTheme({ name: 'supernal', scheme: supernal })));
writeFileSync('themes/supernal.kak', renderKakouneTheme(p, supernal));
