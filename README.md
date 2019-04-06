# _beep-boop_

#### _Takes a number from the user and returns all numbers from 0 to inputted # with some exceptions, which will return a string in place of the number, 04/05/19_

#### By _**Hannah Melendy**_

## Description

_takes a number from a user and returns a range of numbers from 0 to the user inputted number.
* Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
* Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
* Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that."_
_The rules in this list are in reverse order of importance: numbers containing a 3 take priority over those containing a 2, and so on._
_For example, 23 would be substituted with "I'm sorry, Dave. I'm afraid I can't do that."_

##Specs

_Spec: The program returns the string correlated with the inputted number._

| Behavior | Input | Output |
| ------------- |-------------| -----|
| Takes number user inputs and outputs number | 4 | 4 |
| Takes number and outputs 0-(inputted number) | 4 | 0, 1, 2, 3, 4 |
| Exception to any number 1 added to behavior in line two: Numbers that contain a 1 will have all digits replaced (all digits together) with "Beep!" | 3 | 3, 2, "beep", 0 |
| Another exception added: Exception to any number containing a 2: the number will have all digits replaced (all digits together) with | 3 | 3, "boop", "beep", 0 |
| New exception: numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that." | 4 | 4, "I'm sorry, Dave. I'm afraid I can't do that.", "boop", "beep", 0 |
| The exception for 3 takes priority over 2, and 2 takes priority over 1. | 24 | "boop", "I'm sorry, Dave. I'm afraid I can't do that.", "boop", “boop”, "boop", “beep”, “beep”, “beep”, “beep”, “beep”, “beep”, "I'm sorry, Dave. I'm afraid I can't do that.", "boop”, “beep”, “beep”, 9, 8, 7, 6, 5, 4, "I'm sorry, Dave. I'm afraid I can't do that.", "boop", "beep", 0 |

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

## Link to GitHub Pages

_h-len.github.io/beep-boop_

## Known Bugs

_the output into the console does so in an endless loop_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

_html, css, javascript_

### License

Copyright (c) 2019 **_Hannah Melendy_**
