module.exports = grammar({
  name: "gupta",

  extras: ($) => [
    /\s/, // Handle whitespace
    $.comment, // Handle comments
  ],

  rules: {
    source_file: ($) => repeat($._definition),

    _definition: ($) =>
      choice(
        $.measurement,
        $.float_literal,
        $.int_literal,
        $.function_definition,
        $.call_expression,
        $.set_expression,
        $.conditional_expression,
        $.boolean,
        $.double_quoted_string,
        $.single_quoted_string,
        $.operator,
      ),

    operator: ($) =>
      choice(
        "+",
        "-",
        "*",
        "/",
        "||",
        "=",
        "!=",
        "<",
        ">",
        "<=",
        ">=",
        "NOT",
        "AND",
        "OR",
      ),

    function_definition: ($) => seq("Function", ":", $.identifier, "Return"),

    set_expression: ($) => seq("Set", $.identifier, "="),

    call_expression: ($) => seq("Call", $.identifier, "(", ")"),

    conditional_expression: ($) => seq("If", optional("Else")),

    identifier: ($) => /[A-Za-z_][A-Za-z_0-9]*/,

    int_literal: ($) => /\d+/,

    float_literal: ($) => seq($.int_literal, ".", $.int_literal),

    measurement: ($) => token(prec(2, seq(/\d+(\.\d+)?/, /["']/))),

    single_quoted_string: ($) => /'[^']*'/,

    double_quoted_string: ($) => /"[^"]*"/,

    boolean: ($) => /TRUE|FALSE/,

    comment: ($) => /!.*/,
  },
});
