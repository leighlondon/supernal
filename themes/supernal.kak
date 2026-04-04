evaluate-commands %sh{
    black="rgb:1d2125"
    darkgray="rgb:21252b"
    gray="rgb:363b40"
    white="rgb:cccccc"

    pink="rgb:dd8ac7"
    purple="rgb:9274cc"
    blue="rgb:83b5f1"
    cyan="rgb:83b5f1"
    green="rgb:6DF584"
    yellow="rgb:FFEE68"
    orange="rgb:FFB539"
    red="rgb:FC6984"
    error="rgb:FC4234"

    echo "
         face global value      $green
         face global type $yellow
         face global identifier $red+i
         face global variable   $blue
         face global function $purple
         face global module $red
         face global string     $orange
         face global error      $error
         face global keyword    $pink
         face global operator   $red
         face global attribute  $blue
         face global comment    $gray
         face global meta       $purple
         face global builtin    $blue

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

         # all status line: what we type, but also client @[session]
         face global StatusLine     $white,$black
         # insert mode, prompt mode
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
