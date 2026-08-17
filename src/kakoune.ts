import { type Hex, type Palette, type ColorScheme } from "./types";

export const rgb = (h: Hex): string => `rgb:${h.slice(1)}`;

export function renderKakouneTheme(p: Palette, s: ColorScheme): string {
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
