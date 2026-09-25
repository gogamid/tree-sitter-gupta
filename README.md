# tree-sitter-gupta

Tree-sitter grammar for the Gupta / Team Developer / SQLWindows language, also known as APT.

Gupta source files use the `.apt` extension, or `.apt.indented` for the indentation-based export format.

## Syntax supported so far

This grammar is early and covers a small part of the language:

- line comments: `! comment text`
- block comments: `.data` ... `.enddata`
- keywords: `Function`, `Return`, `Set`, `Call`, `If`, `Else`, `NOT`, `AND`, `OR`, `TRUE`, `FALSE`
- literals: integers, floats, double and single quoted strings, measurements such as `10"` or `5'`
- operators: `+ - * / || = != < > <= >=`
- bare identifiers

Anything else currently produces `ERROR` nodes. The generated parser is kept in sync with `grammar.js`, so regenerate after editing the grammar.

## Usage

Node:

```js
const Parser = require("tree-sitter");
const Gupta = require("tree-sitter-gupta");

const parser = new Parser();
parser.setLanguage(Gupta);
```

Rust:

```rust
let mut parser = tree_sitter::Parser::new();
let language = tree_sitter_gupta::LANGUAGE;
parser
    .set_language(&language.into())
    .expect("Error loading Gupta parser");
```

Bindings for C, Go, Node, Python, Rust and Swift live under `bindings/`. Highlight queries are in `queries/highlights.scm`.

## Development

```bash
tree-sitter generate   # regenerate src/parser.c and src/*.json from grammar.js
tree-sitter test       # run the corpus tests in test/corpus
tree-sitter parse FILE # parse a file and print the tree
tree-sitter build --wasm
```

Other test suites:

```bash
cargo test                          # Rust binding, passes
npm test                            # Node binding, currently fails, see below
python -m pytest bindings/python    # Python binding
go test ./bindings/go/...           # Go binding, currently fails, see below
```

## Known issues

- The Node devDependency is `tree-sitter@^0.22.4`, which only understands parser ABI 14, while `tree-sitter-cli@^0.25.10` generates ABI 15. `npm test` therefore fails in `Parser.setLanguage`. Aligning the `tree-sitter` dependency with the CLI fixes it.
- There is no `go.sum`, so `go test ./bindings/go/...` fails at setup. Running `go mod tidy` once resolves it.
- Block comment content cannot itself contain the literal text `.enddata`; the token ends at the first such occurrence.
- The `.apt.indented` examples kept in this repository are small hand-written fixtures, not the internal application sources the grammar was developed against.

## License

MIT, see [LICENSE](LICENSE).
