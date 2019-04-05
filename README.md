<!-- README.md *Content*
READMEs vary widely from one repository to the next. Epicodus recommends including as a minimum the following sections:

Application name
Names of contributors
Description of the project's purpose
Complete setup/installation instructions
License information with a copyright and date
Additional sections to consider:

Technologies used
Known bugs
Contact information
Support or contribution instructions

Outline of README sections: -->

# _beep-boop_

#### _Takes a number from the user and returns all numbers from 0 to inputted # with some exceptions, which will return a string in place of the number, 04/05/19_

#### By _**Hannah Melendy**_

## Description

_takes a number from a user and returns a range of numbers from 0 to the user inputted number._
_* Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
* Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
* Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that."_
_The rules in this list are in reverse order of importance: numbers containing a 3 take priority over those containing a 2, and so on._
_For example, 23 would be substituted with "I'm sorry, Dave. I'm afraid I can't do that."

##Specs

_
| Behavior | Input | Output |
| ------------- |-------------| -----|
| Takes number user inputs and outputs number | 4 | 4 |
| Takes number and outputs 0-(inputted number) | 4 | 0, 1, 2, 3, 4 |
| Exception to any number 1 added to behavior in line two: Numbers that contain a 1 will have all digits replaced (all digits together) with "Beep!" | 3 | 3, 2, "beep", 0 |
| Another exception added: Exception to any number containing a 2: the number will have all digits replaced (all digits together) with | 3 | 3, "boop", "beep", 0 |
| New exception: numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that." | 4 | 4, "I'm sorry, Dave. I'm afraid I can't do that.", "boop", "beep", 0 |
| The exception for 3 takes priority over 2, and 2 takes priority over 1. | 24 | "boop", "I'm sorry, Dave. I'm afraid I can't do that.", "boop", “boop”, "boop", “beep”, “beep”, “beep”, “beep”, “beep”, “beep”, "I'm sorry, Dave. I'm afraid I can't do that.", "boop”, “beep”, “beep”, 9, 8, 7, 6, 5, 4, "I'm sorry, Dave. I'm afraid I can't do that.", "boop", "beep", 0 |
_

_Spec: The program returns a range of numbers from 0 to the users inputted number
Input: "4"
Output: "0, 1, 2, 3, 4"_

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

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

Copyright (c) 2019 **_Hannah Melendy_**
