import { writeFileSync } from "fs";
import {
    type ColorScheme,
    type VSCodeTheme,
    type WorkbenchColors,
    type TokenColorRule,
    type Palette
} from "./types";

const Base: Palette = {
    Black: "#1d2125",
    DarkGray: "#21252b",
    Gray: "#363b40",
    LightGray: "#5f5f74",
    Yellow: "#e7d352",
    PaleYellow: "#ffee68",
    Orange: "#ffb539",
    PaleOrange: "#f1c070",
    Red: "#fc6984",
    PaleRed: "#f87c93",
    Pink: "#f390ec",
    PalePink: "#f7affa",
    Purple: "#bf81fa",
    PalePurple: "#d9b6f9",
    Blue: "#6f87ff",
    PaleBlue: "#70bdf1",
    Cyan: "#49e4da",
    PaleCyan: "#7fefe8",
    Green: "#49e4ab",
    PaleGreen: "#7decc3",
    DarkWhite: "#a1a1a1",
    White: "#d0d0d0",
    PaleWhite: "#e8e5e5",
}

let supernal: ColorScheme = {
    bg: {
        default: Base.DarkGray,
        darker: Base.Black,
        lighter: Base.LightGray,
    },
    border: Base.Gray,
    fg: {
        comment: Base.LightGray,
        default: Base.White,
    },
    colors: Base,
}

function syntaxHighlights(s: ColorScheme): TokenColorRule[] {
    return [{
        scope: ["comment", "punctuation.definition.comment", "string.comment"],
        settings: { foreground: s.fg.comment }
    },
    {
        scope: ["variable.other"],
        settings: { foreground: s.fg.default }
    },
    {
        name: "Numbers",
        scope: ["constant.numeric"],
        settings: { foreground: s.colors.PaleCyan }
    },
    {
        name: "Strings",
        scope: ["string"],
        settings: { foreground: s.colors.PalePurple }
    },
    {
        name: "Escape",
        scope: ["constant.character.escape"],
        settings: {
            foreground: "#86d5f4",
        }
    },
    {
        name: "Keywords",
        scope: [
            "keyword",
            "constant.language.boolean",
            "markup.inline.raw",
        ],
        settings: { foreground: s.colors.Purple }
    },
    {
        scope: [
            "variable.other.property",
            "constant.other",
        ],
        settings: { foreground: s.colors.Blue }
    },
    {
        scope: [
            "constant.character",
            "keyword.operator",
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
            "punctuation.definition.list",
            "meta.attribute",
            "storage.modifier",
        ],
        settings: {
            foreground: s.colors.Red,
        }
    },
    {
        scope: ["variable.language.self"],
        settings: { fontStyle: "italic" }
    },
    {
        scope: [
            "constant.language",
            "variable.other.constant",
        ],
        settings: {
            foreground: s.colors.PaleBlue,
            fontStyle: "italic",
        }
    },
    {
        scope: [
            "support.type.property-name",
            "meta.table"
        ],
        settings: {
            foreground: s.colors.Purple,
        }
    },
    {
        scope: [
            "storage.type"
        ],
        settings: {
            foreground: s.colors.Pink,
        }
    },
    {
        scope: [
            "support.function",
            "meta.macro",
            "entity.name.function.macro"
        ],
        settings: {
            foreground: "#e7d352"
        }
    },
    {
        scope: [
            "entity.name.function",
        ],
        settings: {
            foreground: s.colors.PaleOrange,
        }
    },
    {
        scope: [
            "punctuation.definition.interpolation",
            "meta.interpolation",
        ],
        settings: {
            foreground: s.colors.PaleGreen,
        }
    },
    {
        scope: [
            "entity.name.tag"
        ],
        settings: {
            foreground: "#53bff9"
        }
    },
    {
        scope: ["markup.bold.markdown"],
        settings: {
            fontStyle: "bold"
        }
    },
    {
        scope: ["markup.italic.markdown"],
        settings: {
            fontStyle: "italic"
        }
    },
    {
        scope: ["markup.strikethrough.markdown"],
        settings: {
            fontStyle: "strikethrough"
        }
    },
    {
        scope: ["markup.bold.markdown markup.italic.markdown"],
        settings: {
            fontStyle: "italic bold"
        }
    },
    {
        scope: ["markup.bold.markdown markup.underline.markdown"],
        settings: {
            fontStyle: "bold underline"
        }
    },
    {
        scope: ["markup.underline.markdown"],
        settings: {
            fontStyle: "underline"
        }
    },
    {
        scope: ["markup.inserted"],
        settings: {
            foreground: "#49e4ab",
        }
    },
    {
        scope: ["markup.fenced_code.block.markdown"],
        settings: {
            foreground: "#898989",
        }
    },
    {
        scope: ["entity.name.type"],
        settings: {
            foreground: s.colors.PaleYellow,
        }
    },
    {
        scope: ["entity.name.namespace"],
        settings: { foreground: s.colors.Yellow }
    },
    {
        name: "JSON Key - Level 0",
        scope: [
            "source.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
            foreground: s.colors.Red
        }
    },
    {
        name: "JSON Key - Level 1",
        scope: [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
            foreground: s.colors.Orange
        }
    },
    {
        name: "JSON Key - Level 2",
        scope: [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
            foreground: s.colors.Yellow
        }
    },
    {
        name: "JSON Key - Level 3",
        scope: [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
            foreground: s.colors.Green
        }
    },
    {
        name: "JSON Key - Level 4",
        scope: [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
            foreground: s.colors.Cyan
        }
    },
    {
        name: "JSON Key - Level 5",
        scope: [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
            foreground: s.colors.PaleBlue
        }
    },
    {
        name: "JSON Key - Level 6",
        scope: [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
            foreground: s.colors.Purple
        }
    },
    {
        name: "JSON Key - Level 7",
        scope: [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
            foreground: s.colors.Pink
        }
    },
    {
        name: "JSON Key - Level 8",
        scope: [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
            foreground: s.colors.White,
        }
    },
    {
        name: "markup-h1",
        scope: [
            "markup.heading heading.1"
        ],
        settings: {
            foreground: s.colors.Purple
        }
    },
    {
        name: "markup-h2",
        scope: [
            "markup.heading heading.2",
        ],
        settings: {
            foreground: s.colors.Blue
        }
    },
    {
        name: "markup-h3",
        scope: [
            "markup.heading heading.3",
        ],
        settings: {
            foreground: s.colors.PaleBlue
        }
    },
    {
        name: "markup-h4",
        scope: [
            "markup.heading heading.4",
        ],
        settings: {
            foreground: s.colors.Cyan
        }
    },
    {
        name: "markup-h5",
        scope: [
            "markup.heading heading.5",
        ],
        settings: {
            foreground: s.colors.Green
        }
    },
    {
        name: "markup-h6",
        scope: [
            "markup.heading heading.6",
        ],
        settings: {
            foreground: s.colors.Yellow
        }
    },
    {
        scope: ["meta.link"],
        settings: {
            foreground: s.colors.PaleBlue,
        },
    }]
}

function semanticTheming(s: ColorScheme): WorkbenchColors {
    return {
        "parameter": s.colors.PaleBlue,
        "macro": s.colors.PaleYellow,
        "type": s.colors.Orange,
        "interface": s.colors.PaleYellow,
        "namespace": s.colors.PaleYellow,
        "enumMember": s.colors.PaleOrange,
        "function": s.colors.PaleOrange,
        "constant": s.colors.PaleBlue,
        "keyword": s.colors.Purple,
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
        "editorBracketHighlight.foreground1": s.colors.Red,
        "editorBracketHighlight.foreground2": s.colors.Pink,
        "editorBracketHighlight.foreground3": s.colors.Purple,
        "editorBracketHighlight.foreground4": s.colors.PaleBlue,
        "editorBracketHighlight.foreground5": s.colors.Cyan,
        "editorBracketHighlight.foreground6": s.colors.Green,
        "editorBracketHighlight.unexpectedBracket.foreground": s.colors.Orange
    }
}


function renderTheme({ name, scheme }: { name: string, scheme: ColorScheme }): VSCodeTheme {
    return {
        name: name,
        colors: uiTheming(scheme),

        tokenColors: syntaxHighlights(scheme),

        semanticHighlighting: true,
        semanticTokenColors: semanticTheming(scheme),
    }
}

writeFileSync('themes/supernal-color-theme.json', JSON.stringify(renderTheme({ name: 'supernal', scheme: supernal })));
