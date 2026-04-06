import { writeFileSync } from "fs";
import {
    type ColorScheme,
    type VSCodeTheme,
    type WorkbenchColors,
    type TokenColorRule,
    type Palette,
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
    Black: "#1d2125",
}

const rgb = (h: Hex): string => h.slice(1);

const supernal: ColorScheme = {
    bg: {
        default: p.DarkGray,
        darker: p.Black,
        lighter: p.LightGray,
    },
    border: p.Gray,
    fg: {
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

function syntaxHighlights(s: ColorScheme): TokenColorRule[] {
    return [{
        scope: ["comment", "punctuation.definition.comment", "string.comment"],
        settings: { foreground: s.fg.comment }
    }, {
        scope: ["comment.documentation", "string.quoted.docstring"],
        settings: { foreground: s.fg.documentation }
    }, {
        name: "Numbers",
        scope: ["constant.numeric"],
        settings: { foreground: s.fg.number }
    }, {
        name: "Strings",
        scope: ["string"],
        settings: { foreground: s.fg.string }
    }, {
        name: "Escape",
        scope: ["constant.character.escape", "support.other.escape"],
        settings: { foreground: s.fg.number }
    }, {
        name: "Keywords",
        scope: [
            "keyword",
            "constant.language.boolean",
            "markup.inline.raw",
        ],
        settings: { foreground: s.fg.keyword }
    }, {
        name: "Variable",
        scope: [
            "variable.other",
        ],
        settings: { foreground: s.fg.variable }
    }, {
        scope: [
            "constant.character",
            "keyword.operator",
            "constant.other.placeholder",
            "punctuation.other",
            "punctuation.other.colon",
            "punctuation.other.comma",
            "punctuation.other.period",
            "punctuation.other.semi",
            "punctuation.colon",
            "punctuation.comma",
            "punctuation.period",
            "punctuation.semi",
            "punctuation.separator",
            "punctuation.definition.attribute",
            "punctuation.definition markup.fenced_code.block",
            "punctuation.brackets",
            "punctuation.bracket",
            "punctuation.definition.list",
            "punctuation.definition.interpolation",
            "keyword.other.interpolation",
            "variable.other.normal",
            "meta.template.expression",
            // "storage.modifier",
        ],
        settings: {
            foreground: s.fg.punctuation,
        }
    }, {
        scope: ["variable.language.self"],
        settings: { fontStyle: "italic" }
    }, {
        scope: [
            "constant.language",
            "variable.other.constant",
        ],
        settings: {
            foreground: s.fg.constant,
            fontStyle: "italic",
        }
    }, {
        scope: ["variable.parameter"],
        settings: { foreground: s.fg.parameter },
    }, {
        scope: [
            "support.type.primitive",
            "storage.type.primitive",

        ],
        settings: {
            foreground: s.fg.primitive,
        }
    }, {
        scope: [
            "support.type.property-name",
            "meta.attribute",
            "entity.name.tag",
            "meta.table",
            "entity.other.inherited-class",
        ],
        settings: {
            foreground: s.fg.property,
        }
    }, {
        scope: [
            "storage.type",
            "storage.modifier"
        ],
        settings: {
            foreground: s.fg.keyword,
        }
    }, {
        scope: [
            "entity.name.function",
        ],
        settings: {
            foreground: s.fg.function,
        }
    }, {
        scope: [
            "support.function",
            "meta.macro",
            "entity.name.function.macro",
        ],
        settings: {
            foreground: s.fg.macro
        }
    }, {
        scope: ["markup.bold.markdown"],
        settings: {
            fontStyle: "bold"
        }
    }, {
        scope: ["markup.italic.markdown"],
        settings: {
            fontStyle: "italic"
        }
    }, {
        scope: ["markup.strikethrough.markdown"],
        settings: {
            fontStyle: "strikethrough"
        }
    }, {
        scope: ["markup.bold.markdown markup.italic.markdown"],
        settings: {
            fontStyle: "italic bold"
        }
    }, {
        scope: ["markup.bold.markdown markup.underline.markdown"],
        settings: {
            fontStyle: "bold underline"
        }
    }, {
        scope: ["markup.underline.markdown"],
        settings: {
            fontStyle: "underline"
        }
    }, {
        scope: ["markup.inserted"],
        settings: {
            foreground: "#49e4ab",
        }
    }, {
        scope: ["markup.fenced_code.block.markdown"],
        settings: {
            foreground: "#898989",
        }
    }, {
        scope: ["entity.name.type", "entity.name.class", "storage.type.java", "storage.type.generic"],
        settings: {
            foreground: s.fg.type,
        }
    }, {
        scope: ["entity.name.namespace", "storage.modifier.package", "storage.modifier.import"],
        settings: { foreground: s.fg.namespace }
    }, {
        name: "JSON Key - Level 0",
        scope: [
            "source.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
            foreground: s.jsonKeyColors[0]
        }
    }, {
        name: "JSON Key - Level 1",
        scope: [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
            foreground: s.jsonKeyColors[1]
        }
    }, {
        name: "JSON Key - Level 2",
        scope: [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
            foreground: s.jsonKeyColors[2]
        }
    }, {
        name: "JSON Key - Level 3",
        scope: [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
            foreground: s.jsonKeyColors[3]
        }
    }, {
        name: "JSON Key - Level 4",
        scope: [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
            foreground: s.jsonKeyColors[4]
        }
    }, {
        name: "JSON Key - Level 5",
        scope: [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
            foreground: s.jsonKeyColors[5]
        }
    }, {
        name: "JSON Key - Level 6",
        scope: [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
            foreground: s.jsonKeyColors[6]
        }
    }, {
        name: "JSON Key - Level 7",
        scope: [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
            foreground: s.jsonKeyColors[7]
        }
    }, {
        name: "JSON Key - Level 8",
        scope: [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
            foreground: s.jsonKeyColors[8],
        }
    }, {
        name: "markup-h1",
        scope: [
            "markup.heading heading.1"
        ],
        settings: {
            foreground: s.headings[0]
        }
    }, {
        name: "markup-h2",
        scope: [
            "markup.heading heading.2",
        ],
        settings: {
            foreground: s.headings[1]
        }
    }, {
        name: "markup-h3",
        scope: [
            "markup.heading heading.3",
        ],
        settings: {
            foreground: s.headings[2]
        }
    }, {
        name: "markup-h4",
        scope: [
            "markup.heading heading.4",
        ],
        settings: {
            foreground: s.headings[3]
        }
    }, {
        name: "markup-h5",
        scope: [
            "markup.heading heading.5",
        ],
        settings: {
            foreground: s.headings[4]
        }
    }, {
        name: "markup-h6",
        scope: [
            "markup.heading heading.6",
        ],
        settings: {
            foreground: s.headings[5]
        }
    }, {
        scope: ["meta.link"],
        settings: {
            foreground: s.fg.constant,
        },
    }, {
        scope: ["entity.name.import"],
        settings: { foreground: s.fg.default }
    }]
}

function semanticTheming(s: ColorScheme): WorkbenchColors {
    return {
        "property": s.fg.property,
        "parameter": s.fg.parameter,
        "string.format": s.fg.punctuation,
        "macro": s.fg.macro,
        "type.defaultLibrary": s.fg.primitive,
        "type": s.fg.type,
        "interface": s.fg.interface,
        "builtinType": s.fg.primitive,
        "variable": s.fg.variable,
        "namespace": s.fg.namespace,
        "enum": s.fg.enum,
        "type.interface": s.fg.interface,
        "enumMember": s.fg.enumMember,
        "function": s.fg.function,
        "constant": s.fg.constant,
        "keyword": s.fg.keyword,
        "variable.readonly": s.fg.constant,
        "comment.documentation": s.fg.documentation,
        "hcl-blockLabel": s.fg.parameter,
        "hcl-blockType": s.fg.keyword,
        "hcl-blockLabel.terraform-type": s.fg.type,
    }
}

function uiTheming(s: ColorScheme): WorkbenchColors {
    return {
        "menu.background": s.bg.default,
        "menu.selectionBackground": "#333942",
        "menubar.selectionBackground": "#333942",
        // title (top bar)
        "titleBar.activeBackground": s.bg.darker,
        "titleBar.inactiveBackground": s.bg.darker,
        "statusBar.foreground": s.fg.default,
        "titleBar.border": s.border,
        // status bar (bottom bar)
        "statusBar.border": s.border,
        "statusBar.background": s.bg.darker,
        "statusBar.debuggingBackground": "#952642",
        "statusBar.noFolderBackground": "#6a3394",
        // tabs
        "tab.activeBackground": s.bg.darker,
        "tab.inactiveBackground": "#25282e",
        "tab.border": "#505050",
        "tab.hoverBorder": "#0854a7",
        "editorGroupHeader.tabsBackground": "#25282e",
        // side bar & activity bar
        "activityBarBadge.background": "#0854a7",
        "sideBar.background": "#25282e",
        "sideBarSectionHeader.background": "#2d3138",
        "sideBar.border": s.border,
        "activityBar.border": s.border,
        "activityBar.background": "#1d2125",
        // editor
        "editor.background": "#1c2026",
        "editorPane.background": "#333942",
        "editor.selectionBackground": "#443550",
        "peekViewEditor.background": "#282d35",
        "peekViewResult.background": "#23262c",
        "quickInput.background": s.bg.default,
        "list.activeSelectionBackground": "#333942",
        "input.background": s.bg.default,
        "input.border": "#505050",
        "panel.background": s.bg.default,
        "editor.foreground": s.fg.default,
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
        "editorBracketHighlight.unexpectedBracket.foreground": s.fg.function
    }
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

function renderKakouneTheme(p: Palette): string {
    return `evaluate-commands %sh{
    black="rgb:${rgb(p.Black)}"
    darkgray="rgb:${rgb(p.DarkGray)}"
    gray="rgb:${rgb(p.LighterGray)}"
    white="rgb:${rgb(p.White)}"
    pink="rgb:${rgb(p.Pink)}"
    lavender="rgb:${rgb(p.Lavender)}"
    purple="rgb:${rgb(p.Purple)}"
    blue="rgb:${rgb(p.Blue)}"
    cyan="rgb:${rgb(p.Aqua)}"
    green="rgb:${rgb(p.Green)}"
    yellow="rgb:${rgb(p.Yellow)}"
    paleorange="rgb:${rgb(p.PaleOrange)}"
    orange="rgb:${rgb(p.Orange)}"
    coral="rgb:${rgb(p.Coral)}"
    red="rgb:${rgb(p.Red)}"
    error="rgb:${rgb(p.Red)}"

    echo "
         face global value      $cyan
         face global type       $pink
         face global identifier $red+i
         face global variable   $blue
         face global function   $orange
         face global module     $paleorange
         face global string     $coral
         face global error      $error
         face global keyword    $purple
         face global operator   $red
         face global attribute  $pink
         face global comment    $gray
         face global meta       $red
         face global builtin    $paleorange

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
         face global PrimaryCursor      $black,$red
         face global PrimaryCursorEol   $black,$gray
         face global SecondarySelection $black,$pink
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
         face global LineNumberCursor   $red,$black+b
         face global LineNumbersWrapped $darkgray,$black+i

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
writeFileSync('themes/supernal.kak', renderKakouneTheme(p));
