module Data.Huffman.Alphabet where

import Prelude
import Data.Set (Set, fromFoldable)
import Data.String (Pattern(..), split)
import Data.String.Unsafe (char)
import Data.Huffman.Symbol (Symbol(..))
import Data.String.Repr (joinWith)

newtype Alphabet
  = Alphabet (Set Symbol)

instance eqAlphabet :: Eq Alphabet where
  eq (Alphabet x) (Alphabet y) = x == y

instance showAlphabet :: Show Alphabet where
  show (Alphabet set) = "[" <> joinWith ", " set <> "]"

fromString :: String -> Alphabet
fromString str = Alphabet (fromFoldable symbols)
  where
  symbols = Symbol <<< char <$> split (Pattern "") str
