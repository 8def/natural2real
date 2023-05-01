# natural2real
An algorithm for an "impossible" bijection between the natural numbers and the real numbers between 0 and 1

Cantor's diagonalization argument has been used to show that the real numbers are of a higher cardinality than the natural numbers.
Cantor also showed that infinite subsets like the real numbers between 0 and 1 have the same cardinality as their parent sets.
This script demonstrates a bijection between the natural numbers and the real numbers between 0 and 1.
According to Cantor, this is impossible.

The algorithm employed to do this is written in javascript but probably shouldn't be, it's just the language I've used most recently.
It follows a fairly simple pattern. It iterates through the natural numbers and for each natural number it generates a real number between 0 and 1.
It generates this number by systematically running through every permutation of the 9 digits for each possible decimal place:


1 => 0.1

2 => 0.2

...

When a real number permutation ends in 0 it is skipped.


10 => 0.01 instead of 0.00

11 => 0.02

...

19 => 0.11 instead of 0.10
