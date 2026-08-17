import { writeFileSync } from "fs";
import { renderKakouneTheme } from "./kakoune";
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
    LightGray: "#5f5f74",
    DarkGray: "#21252b",
    DarkerGray: "#1b1c1f",
    Black: "#191e24",
}


const supernal: types.ColorScheme = {
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

function syntaxHighlights(s: types.ColorScheme): types.TokenColorRule[] {
    return [{
        scope: ["comment", "punctuation.definition.comment", "string.comment"],
        settings: { foreground: s.syntax.comment }
    }, {
        scope: ["comment.documentation", "string.quoted.docstring"],
        settings: { foreground: s.syntax.documentation }
    }, {
        name: "Numbers",
        scope: ["constant.numeric"],
        settings: { foreground: s.syntax.number }
    }, {
        name: "Strings",
        scope: ["string"],
        settings: { foreground: s.syntax.string }
    }, {
        name: "Escape",
        scope: ["constant.character.escape", "support.other.escape"],
        settings: { foreground: s.syntax.number }
    }, {
        name: "Keywords",
        scope: [
            "keyword",
            "constant.language.boolean",
            "markup.inline.raw",
        ],
        settings: { foreground: s.syntax.keyword }
    }, {
        name: "Variable",
        scope: [
            "variable.other",
        ],
        settings: { foreground: s.syntax.variable }
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
            foreground: s.syntax.punctuation,
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
            foreground: s.syntax.constant,
            fontStyle: "italic",
        }
    }, {
        scope: ["variable.parameter"],
        settings: { foreground: s.syntax.parameter },
    }, {
        scope: [
            "support.type.primitive",
            "storage.type.primitive",

        ],
        settings: {
            foreground: s.syntax.primitive,
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
            foreground: s.syntax.property,
        }
    }, {
        scope: [
            "storage.type",
            "storage.modifier"
        ],
        settings: {
            foreground: s.syntax.keyword,
        }
    }, {
        scope: [
            "entity.name.function",
        ],
        settings: {
            foreground: s.syntax.function,
        }
    }, {
        scope: [
            "support.function",
            "meta.macro",
            "entity.name.function.macro",
        ],
        settings: {
            foreground: s.syntax.macro
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
            foreground: s.syntax.type,
        }
    }, {
        scope: ["entity.name.namespace", "storage.modifier.package", "storage.modifier.import"],
        settings: { foreground: s.syntax.namespace }
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
            foreground: s.syntax.constant,
        },
    }, {
        scope: ["entity.name.import"],
        settings: { foreground: s.syntax.default }
    }]
}

function semanticTheming(s: types.ColorScheme): types.WorkbenchColors {
    return {
        "property": s.syntax.property,
        "parameter": s.syntax.parameter,
        "string.format": s.syntax.punctuation,
        "macro": s.syntax.macro,
        "type.defaultLibrary": s.syntax.primitive,
        "type": s.syntax.type,
        "interface": s.syntax.interface,
        "builtinType": s.syntax.primitive,
        "variable": s.syntax.variable,
        "namespace": s.syntax.namespace,
        "enum": s.syntax.enum,
        "type.interface": s.syntax.interface,
        "enumMember": s.syntax.enumMember,
        "function": s.syntax.function,
        "constant": s.syntax.constant,
        "keyword": s.syntax.keyword,
        "variable.readonly": s.syntax.constant,
        "comment.documentation": s.syntax.documentation,
        "hcl-blockLabel": s.syntax.parameter,
        "hcl-blockType": s.syntax.keyword,
        "hcl-blockLabel.terraform-type": s.syntax.type,
    }
}

const darkerdarkerGray = "#1b1d23";

function uiTheming(s: types.ColorScheme): types.WorkbenchColors {
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
