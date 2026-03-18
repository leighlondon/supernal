import { writeFileSync } from "fs";
import { type Palette, type ColorScheme, type VSCodeTheme, type WorkbenchColors, type TokenColorRule } from "./types";

const BaseColors: Palette = {
    black: "#1d2125",
    darkgray: "#21252b",
    gray: "#363b40",
    lightgray: "#5f5f74",
    yellow: "#ffee68",
    orange: "#ffb539",
    red: "#fc6984",
    pink: "#e783e9",
    purple: "#bf81fa",
    indigo: "#6f87ff",
    lightblue: "#70bdf1",
    cyan: "#49e4da",
    green: "#49e4ab",
    white: "#d0d0d0",
}

let supernal: ColorScheme = {
    background: BaseColors.darkgray,
    border: BaseColors.gray,
    fg: {
        comment: BaseColors.lightgray,
        default: BaseColors.white,
    },
    colors: BaseColors,
}

function syntaxHighlights(s: ColorScheme): TokenColorRule[] {
    return [{
        scope: ["comment", "punctuation.definition.comment", "string.comment"],
        settings: { foreground: s.fg.comment }
    },
    {
        scope: ["variable.other"],
        settings: { foreground: s.fg.default, }
    },
    {
        name: "Numbers",
        scope: ["constant.numeric"],
        settings: { foreground: "#49e4da", }
    },
    {
        name: "Strings",
        scope: ["string"],
        settings: { foreground: s.colors.pink, }
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
            "constant.other",
            "constant.language.boolean",
            "markup.inline.raw",
            "fenced_code.block.language"
        ],
        settings: { foreground: s.colors.purple, }
    },
    {
        scope: ["variable.other.property",],
        settings: { foreground: s.colors.indigo, }
    },
    {
        scope: [
            "keyword.operator.assignment",
        ],
        settings: {
            foreground: "#fa81ce",
        }
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
            foreground: s.colors.red,
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
            foreground: "#70bdf1",
            fontStyle: "italic",
        }
    },
    {
        scope: [
            "support.type.property-name",
            "meta.table"
        ],
        settings: {
            foreground: "#bb6ae7",
        }
    },
    {
        scope: [
            "storage.type"
        ],
        settings: {
            foreground: s.colors.pink,
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
            foreground: "#f1c070",
        }
    },
    {
        scope: [
            "punctuation.definition.interpolation",
            "meta.interpolation",
        ],
        settings: {
            foreground: "#e783e9"
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
            foreground: "#f1f090",
        }
    },
    {
        scope: ["entity.name.namespace"],
        settings: { foreground: s.colors.yellow, }
    },
    {
        name: "JSON Key - Level 0",
        scope: [
            "source.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
            foreground: s.colors.red,
        }
    },
    {
        name: "JSON Key - Level 1",
        scope: [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
            foreground: s.colors.orange,
        }
    },
    {
        name: "JSON Key - Level 2",
        scope: [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
            foreground: s.colors.yellow,
        }
    },
    {
        name: "JSON Key - Level 3",
        scope: [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
            foreground: "#49e4ab"
        }
    },
    {
        name: "JSON Key - Level 4",
        scope: [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
            foreground: "#49e4da"
        }
    },
    {
        name: "JSON Key - Level 5",
        scope: [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
            foreground: "#70bdf1"
        }
    },
    {
        name: "JSON Key - Level 6",
        scope: [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
            foreground: "#bf81fa"
        }
    },
    {
        name: "JSON Key - Level 7",
        scope: [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
            foreground: "#e783e9"
        }
    },
    {
        name: "JSON Key - Level 8",
        scope: [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
            foreground: "#d0d0d0"
        }
    },
    {
        name: "JSON Key - Level 0",
        scope: [
            "heading.1"
        ],
        settings: {
            foreground: "#fc6984"
        }
    },
    {
        name: "JSON Key - Level 1",
        scope: [
            "markup.heading heading.2",
        ],
        settings: {
            foreground: "#ffb539"
        }
    },
    {
        name: "JSON Key - Level 2",
        scope: [
            "markup.heading heading.3",
        ],
        settings: {
            foreground: "#ffee68"
        }
    },
    {
        name: "JSON Key - Level 3",
        scope: [
            "markup.heading heading.4",
        ],
        settings: {
            foreground: "#49e4ab"
        }
    },
    {
        name: "JSON Key - Level 4",
        scope: [
            "markup.heading heading.5",
        ],
        settings: {
            foreground: "#49e4da"
        }
    },
    {
        name: "JSON Key - Level 5",
        scope: [
            "markup.heading heading.6",
        ],
        settings: {
            foreground: "#70bdf1"
        }
    },
    {
        name: "JSON Key - Level 6",
        scope: [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
            foreground: "#bf81fa"
        }
    },
    {
        name: "JSON Key - Level 7",
        scope: [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
            foreground: "#e783e9"
        }
    },
    {
        name: "JSON Key - Level 8",
        scope: [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
            foreground: "#d0d0d0"
        }
    },
    {
        scope: ["meta.link"],
        settings: {
            foreground: "#70bdf1",
        },
    }]
}

function uiTheming(s: ColorScheme): WorkbenchColors {
    return {
        "menu.background": s.background,
        "menu.selectionBackground": "#333942",
        "menubar.selectionBackground": "#333942",
        // title (top bar)
        "titleBar.activeBackground": "#1d2125",
        "titleBar.inactiveBackground": "#1d2125",
        "statusBar.foreground": s.fg.default,
        "titleBar.border": s.border,
        // status bar (bottom bar)
        "statusBar.border": s.border,
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
        "sideBar.border": s.border,
        "activityBar.border": s.border,
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
        "editor.foreground": s.fg.default,
        "banner.background": "#215dce",
        // diff stuff
        "diffEditor.insertedLineBackground": "#18a47c2f",
        "diffEditor.insertedTextBackground": "#18a47c2f",
        "gitDecoration.modifiedResourceForeground": "#ffee68", //todo(leigh): modified status theming
        // bracket highlights
        "editorBracketHighlight.foreground1": s.colors.red,
        "editorBracketHighlight.foreground2": s.colors.pink,
        "editorBracketHighlight.foreground3": s.colors.purple,
        "editorBracketHighlight.foreground4": s.colors.lightblue,
        "editorBracketHighlight.foreground5": s.colors.cyan,
        "editorBracketHighlight.foreground6": s.colors.green,
        "editorBracketHighlight.unexpectedBracket.foreground": s.colors.orange
    }
}


function renderTheme({ name, scheme }: { name: string, scheme: ColorScheme }): VSCodeTheme {
    return {
        name: name,
        tokenColors: syntaxHighlights(scheme),
        colors: uiTheming(scheme),
    }
}

writeFileSync('./blah.json', JSON.stringify(renderTheme({ name: 'supernal', scheme: supernal })));
