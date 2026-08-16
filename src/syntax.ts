import {
    type ColorScheme,
    type TokenColorRule,
    type WorkbenchColors,
} from "./types";

export function syntaxHighlights(s: ColorScheme): TokenColorRule[] {
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

export function semanticTheming(s: ColorScheme): WorkbenchColors {
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
