(comment) @comment @spell

[
  (double_quoted_string)
  (single_quoted_string)
] @string

[
(measurement) 
(int_literal)
(float_literal)
] @number

(identifier) @variable

"Function" @keyword.function

"Call" @keyword

"Set" @keyword

"(" @punctuation.bracket
")" @punctuation.bracket

[
  "If"
  "Else"
] @keyword.conditional

"Return" @keyword.return

(boolean) @boolean

[
  "+"
  "-"
  "*"
  "/"
  "||"
  "="
  "!="
  "<"
  ">"
  "<="
  ">="
] @operator

[
  "AND"
  "NOT"
  "OR"
] @keyword.operator


