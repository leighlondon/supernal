import { writeFileSync } from "fs";
import { semanticTheming, syntaxHighlights } from "./syntax";
import {
    type ColorScheme,
    type VSCodeTheme,
    type WorkbenchColors,
    type Palette,
    rgb,
} from "./types";

const p: Palette = {
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
    LightGray: "#5f5f74",
    DarkGray: "#21252b",
    DarkerGray: "#1b1c1f",
    Black: "#191e24",
}

const supernal: ColorScheme = {
    bg: {
        default: p.DarkGray,
        darker: p.Black,
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
    bracketColors: [
        "#fc6984",
        "#ea7398",
        "#d87aaa",
        "#c67fbc",
        "#b283cd",
        "#9e86de",
        "#8887ef",
        "#6f87ff",
    ],
    jsonKeyColors: [
        p.Red,
        p.Orange,
        p.Yellow,
        p.Green,
        p.Blue,
        p.DarkBlue,
        p.Purple,
        p.Pink,
        p.White,
    ],
}

function uiTheming(s: any): WorkbenchColors {
    return {
        "menu.background": s.bg.default,
        "menu.selectionBackground": "#333942",
        "menubar.selectionBackground": "#333942",
        "list.hoverBackground": "#333942",
        // title (top bar)
        "titleBar.activeBackground": darkerdarkerGray,
        "titleBar.activeForeground": "#8b9798",
        "titleBar.inactiveBackground": darkerdarkerGray,
        "titleBar.inactiveForeground": "#545f62",
        "titleBar.border": darkerdarkerGray,
        // status bar (bottom bar)
        "statusBar.foreground": s.syntax.default,
        "statusBar.border": darkerdarkerGray,
        "statusBar.background": s.bg.darker,
        "statusBar.debuggingBackground": "#952642",
        "statusBar.noFolderBackground": "#6a3394",
        // tabs
        "tab.activeBackground": mid,
        "tab.inactiveBackground": mid,
        "tab.border": p.DarkGray,
        "tab.hoverBorder": "#0854a7",
        "editorGroupHeader.tabsBackground": mid,
        // side bar & activity bar
        "activityBarBadge.background": "#0854a7",
        "sideBar.background": darkgray,
        "sideBarSectionHeader.background": s.bg.darker,
        "sideBar.border": darkerdarkerGray,
        "activityBar.border": darkerdarkerGray,
        "activityBar.background": darkerdarkerGray,
        // editor
        "editor.background": mid,
        "editorPane.background": "#333942",
        "editor.selectionBackground": "#354350",
        "peekViewEditor.background": "#282d35",
        "peekViewResult.background": "#23262c",
        "quickInput.background": s.bg.default,
        "list.activeSelectionBackground": "#333942",
        "panel.background": s.bg.default,
        "editor.foreground": s.syntax.default,
        "banner.background": "#215dce",
        // diff stuff
        "diffEditor.insertedLineBackground": "#18a47c2f",
        "diffEditor.insertedTextBackground": "#18a47c2f",
        "gitDecoration.modifiedResourceForeground": "#ffee68", //todo(leigh): modified status theming
        // bracket highlights
        "editorBracketHighlight.foreground1": s.bracketColors[0],
        "editorBracketHighlight.foreground2": s.bracketColors[1],
        "editorBracketHighlight.foreground3": s.bracketColors[2],
        "editorBracketHighlight.foreground4": s.bracketColors[3],
        "editorBracketHighlight.foreground5": s.bracketColors[4],
        "editorBracketHighlight.foreground6": s.bracketColors[5],
        "editorBracketHighlight.unexpectedBracket.foreground": s.syntax.function
    }
}

const darkerdarkerGray = "#13171c";
const darkgray = "#181a20"
const mid = "#1c2026";

const mids = {
    bg: "#3a4449",
    fg: "",
    hover: "#333942",
}


function vsCodeTheme({ name, scheme }: { name: string, scheme: ColorScheme }): VSCodeTheme {
    return {
        name: name,
        colors: uiTheming(scheme),
        tokenColors: syntaxHighlights(scheme),
        semanticHighlighting: true,
        semanticTokenColors: semanticTheming(scheme),
    }
}

function renderVSCodeTheme(theme: VSCodeTheme): string {
    return JSON.stringify(theme, null, 2);
}

function renderKakouneTheme(p: Palette, s: ColorScheme): string {
    return `evaluate-commands %sh{
    black="${rgb(p.Black)}"
    darkgray="${rgb(p.DarkGray)}"
    gray="${rgb(p.LighterGray)}"
    white="${rgb(p.White)}"
    pink="${rgb(p.Pink)}"
    lavender="${rgb(p.Lavender)}"
    purple="${rgb(p.Purple)}"
    blue="${rgb(p.Blue)}"
    cyan="${rgb(p.Aqua)}"
    green="${rgb(p.Green)}"
    yellow="${rgb(p.Yellow)}"
    paleorange="${rgb(p.PaleOrange)}"
    orange="${rgb(p.Orange)}"
    coral="${rgb(p.Coral)}"
    red="${rgb(p.Red)}"
    error="${rgb(p.Red)}"

    echo "
         face global value      $cyan
         face global type       ${rgb(s.syntax.type)}
         face global identifier $red+i
         face global variable   ${rgb(s.syntax.parameter)}
         face global function   ${rgb(s.syntax.function)}
         face global module     ${rgb(s.syntax.namespace)}
         face global string     ${rgb(s.syntax.string)}
         face global error      $error
         face global keyword    ${rgb(s.syntax.keyword)}
         face global operator   ${rgb(s.syntax.punctuation)}
         face global attribute  ${rgb(s.syntax.primitive)}
         face global comment    ${rgb(s.syntax.comment)}
         face global meta       ${rgb(s.syntax.property)}
         face global builtin    ${rgb(s.syntax.macro)}

         face global title    $red
         face global header   $green
         face global bold     $pink
         face global italic   default+i
         face global mono     $green
         face global block    $blue+i
         face global link     $green
         face global bullet   $green
         face global list     $white

         face global Default $white

         face global PrimarySelection   $black,$purple
         face global PrimaryCursor      $black,$lavender
         face global PrimaryCursorEol   $black,$gray
         face global SecondarySelection $black,$blue
         face global SecondaryCursor    $black,$gray
         face global SecondaryCursorEol $black,$gray

         face global MatchingChar $black,$blue
         face global Search $blue,$green
         face global CurrentWord $white,$blue

         # listchars
         face global Whitespace $gray,$black
         # ~lines at EOB
         face global BufferPadding $gray

         face global LineNumbers        $gray
         face global LineNumberCursor   $lavender,+b
         face global LineNumbersWrapped $darkgray,+i

         # when item focused in menu
         face global MenuForeground $black,$yellow
         # default bottom menu and autocomplete
         face global MenuBackground $gray,$black
         # complement in autocomplete like path
         face global MenuInfo       $purple,$black

         # clippy
         face global Information    $yellow,$black
         face global Error          $black,$red

         # all status line: what we type,but also client @[session]
         face global StatusLine     $white,$black
         # insert mode,prompt mode
         face global StatusLineMode $black,$pink
         # message like '1 sel'
         face global StatusLineInfo  $purple,$black
         # count
         face global StatusLineValue $green,$black
         face global StatusCursor    $white,$yellow
         # like the word 'select:' when pressing 's'
         face global Prompt          $black,$yellow
"
}
`
}

writeFileSync('themes/supernal-color-theme.json', renderVSCodeTheme(vsCodeTheme({ name: 'supernal', scheme: supernal })));
writeFileSync('themes/supernal.kak', renderKakouneTheme(p, supernal));
