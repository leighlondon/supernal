evaluate-commands %sh{
    black="rgb:1d2125"
    darkgray="rgb:21252b"
    gray="rgb:808080"
    white="rgb:c0c0c0"
    pink="rgb:dd8ac7"
    lavender="rgb:c0aaee"
    purple="rgb:9274cc"
    blue="rgb:83b5f1"
    cyan="rgb:4ed1b6"
    green="rgb:6ece7f"
    yellow="rgb:ead75e"
    paleorange="rgb:dfbc85"
    orange="rgb:ebae46"
    coral="rgb:f6a497"
    red="rgb:f95959"
    error="rgb:f95959"

    echo "
         face global value      $cyan
         face global type       rgb:ead75e
         face global identifier $red+i
         face global variable   rgb:83b5f1
         face global function   rgb:ebae46
         face global module     rgb:dfbc85
         face global string     rgb:f6a497
         face global error      $error
         face global keyword    rgb:9274cc
         face global operator   rgb:f95959
         face global attribute  rgb:dd8ac7
         face global comment    rgb:808080
         face global meta       rgb:eb89a8
         face global builtin    rgb:dfbc85

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
