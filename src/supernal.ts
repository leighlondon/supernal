import { writeFileSync } from "fs";
import {
    type ColorScheme,
    type VSCodeTheme,
    type WorkbenchColors,
    type TokenColorRule,
    type Palette
} from "./types";

const Base: any = {
    Black: "#1d2125",
    DarkGray: "#21252b",
    Gray: "#363b40",
    LightGray: "#5f5f74",
    Yellow: "#f2e069",
    PaleYellow: "#f5e593",
    Orange: "#ecae42",
    PaleOrange: "#f2be6a",
    SuperPaleOrange: "#ebca95",
    OrigRed: "#fc6984",
    Red: "#f95959",
    PaleRed: "#f48989",
    Pink: "#c67fbc",
    PalePink: "#d79ebb",
    Purple: "#a07ee3ed",
    PalePurple: "#c8a6ea",
    Blue: "#56a1ed",
    PaleBlue: "#7ec1ed",
    Cyan: "#68eae1",
    PaleCyan: "#98e3de",
    Green: "#37f495",
    PaleGreen: "#80ffc0d5",
    DarkWhite: "#888a8d",
    White: "#d0d0d0",
    PaleWhite: "#e8e5e5",

    turqoise: "#55dfc4",
    darkTurqoise: "#19ac8e",
    green: "#40e083",
    darkGreen: "#36c471",
    blue: "#72baea",
    darkBlue: "#2ea4f2",
    purple: "#966bc8",
    darkPurple: "#7753a1",
    yellow: "#f1d049",
    orange: "#d98c49",
    lightOrange: "#e7b15a",
    darkOrange: "#d27e46",
    red: "#e56052",
    darkRed: "#c9584c",

}

let supernal: any = {
    bg: {
        default: Base.DarkGray,
        darker: Base.Black,
        lighter: Base.LightGray,
    },
    border: Base.Gray,
    fg: {
        default: Base.White,
        comment: Base.DarkWhite,
        punctuation: Base.OrigRed,
        keyword: Base.Purple,

        constant: Base.Blue,
        number: Base.Cyan,
        string: Base.PaleRed,

        namespace: Base.White,
        primitive: Base.Pink,
        type: Base.blue,
        interface: Base.Blue,
        property: Base.White,
        enum: Base.darkTurqoise,
        enumMember: Base.turqoise,
        variable: Base.White,
        // to add: parameter


        function: Base.PaleOrange,
        macro: Base.SuperPaleOrange,
    },
    headings: [Base.Purple, Base.Blue, Base.PaleBlue, Base.Green, Base.Yellow, Base.Orange],
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
        Base.red,
        Base.orange,
        Base.yellow,
        Base.green,
        Base.turqoise,
        Base.blue,
        Base.purple,
        Base.Pink,
        Base.White,
    ],
    colors: Base,
}

function syntaxHighlights(s: ColorScheme): TokenColorRule[] {
    return [{
        scope: ["comment", "punctuation.definition.comment", "string.comment"],
        settings: { foreground: s.fg.comment }
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
        scope: ["constant.character.escape"],
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
            "meta.interpolation",
            "meta.attribute",
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
            "meta.table"
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
            "entity.name.function.macro"
        ],
        settings: {
            foreground: s.fg.macro
        }
    }, {
        scope: [
            "entity.name.tag"
        ],
        settings: {
            foreground: "#53bff9"
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
        scope: ["entity.name.type", "storage.type.java", "storage.type.generic"],
        settings: {
            foreground: s.fg.type,
        }
    }, {
        scope: ["entity.name.namespace", "storage.modifier.package", "entity.name.import", "storage.modifier.import"],
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
    }]
}

function semanticTheming(s: any): WorkbenchColors {
    return {
        "property.declaration": s.fg.property,
        "parameter": s.fg.default,
        "string.format": s.fg.punctuation,
        "macro": s.fg.macro,
        "type.defaultLibrary": s.fg.primitive,
        "type": s.fg.type,
        "interface": s.fg.interface,
        "builtinType": s.fg.primitive,
        "variable": s.fg.variable,
        "variable.readonly": s.fg.constant,
        "namespace": s.fg.namespace,
        "enum": s.fg.enum,
        "enumMember": s.fg.enumMember,
        "function": s.fg.function,
        "constant": s.fg.constant,
        "keyword": s.fg.keyword,
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

writeFileSync('themes/supernal-color-theme.json', renderVSCodeTheme(vsCodeTheme({ name: 'supernal', scheme: supernal })));
