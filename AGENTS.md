# Tree-Sitter Gupta - Agent Guidelines

## Build Commands
- `tree-sitter generate` - Generate parser.c from grammar.js (required after grammar changes)
- `tree-sitter build` - Build parser library
- `tree-sitter build --wasm` - Build WASM version for playground
- `make` - Alternative build via Makefile (creates static/shared libraries)
- `npm start` - Launch tree-sitter playground

## Test Commands
- `tree-sitter test` - Run grammar tests (use `-i <pattern>` for specific tests, `--file-name <name>` for single file)
- `tree-sitter test -u` - Update test expectations
- `npm test` - Node.js binding tests
- Language-specific: `cargo test` (Rust), `go test` (Go), `python -m pytest` (Python)

## Code Style
- Indentation: 2 spaces for JS/JSON/TOML/SCM, 4 spaces for C/Rust/Python/Swift, tabs for Go/Makefiles
- Grammar defined in `grammar.js` using tree-sitter DSL
- File extensions: `.apt`, `.apt.indented` for Gupta source files
- Follow tree-sitter binding conventions in `bindings/*/`

## Development Workflow
1. Edit `grammar.js` → `tree-sitter generate` → `tree-sitter build` → `tree-sitter test`
2. Parser source in `src/`, bindings in `bindings/{language}/`
3. Test files follow `*test.*` naming pattern