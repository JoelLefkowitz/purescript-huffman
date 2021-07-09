{ name = "huffman"
, license = "MIT"
, repository = "https://github.com/JoelLefkowitz/purescript-huffman.git"
, dependencies =
  [ "assert"
  , "console"
  , "debug"
  , "effect"
  , "ordered-collections"
  , "psci-support"
  , "repr"
  , "strings"
  , "stringutils"
  ]
, packages = ./packages.dhall
, sources = [ "src/**/*.purs", "test/**/*.purs" ]
}
