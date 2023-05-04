# natural2real
An algorithm for an "impossible" bijection between the natural numbers and the real numbers.

My first bijection is limited to the reals between 0 and 1 and can be shown to be equivalent to reversing the digits and removing the decimal.
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

Of course, there is an even easier mapping technique (reversing the digits and removing or adding a decimal point). I chose to find this method for a more generalizable technique, which can be used to find the bijection between a set and its power set for example.

------------------------------------------------------------------------------------------------

Mapping Natural Numbers to Real Numbers (enumerating the uncountable)

Building off of this work I extended the technique to all real numbers with a new algorithm. This time real numbers have a whole number component and a fractional component, so I map each to the set of all positive integer pairs. The whole number component maps directly while the fractional component simply has its digits mapped in reverse order. Using Cantor's pairing formula positive real number thus form a bijection with the natural numbers by definition. Cantor's pairing formula can then be split into three formulas that work in parity using the properties of odd and even numbers to map positive real numbers to one half of Cantor's pairing formula's output and the negative real numbers to the other half.
