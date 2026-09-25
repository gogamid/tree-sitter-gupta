package tree_sitter_gupta_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_gupta "github.com/gogamid/tree-sitter-gupta/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_gupta.Language())
	if language == nil {
		t.Errorf("Error loading Gupta grammar")
	}
}
