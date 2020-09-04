# _Super Galactic Age Calculator_

_4 September 2020_

#### _A web project that calculates a user's various planet ages (for Epicodus)_

#### By _**Vanessa Stewart**_

## Description

This is a project completed for Epicodus to practice testing business logic with Jest, using webpack to bundle and lint code, running an npm to manage dependencies, and implementing ES6 features including classes and template literals, and following a Red, Green Refactor workflow during test-driven development.

The original directions are as follows:

_A_ solar year lasts 365 days on planet Earth. However, the length of a solar year varies from planet to planet. For instance, a solar year on Mercury lasts 88 days. Write an application that determines a user's age based on a planet's solar years._

_Take a person's age in years and create a class that does the following:_

* _Returns their age in Mercury years. (A Mercury year is .24 Earth years.)_
* _Returns their age in Venus years. (A Venus year is .62 Earth years.)_
* _Returns their age in Mars years. (A Mars year is 1.88 Earth years.)_
* _Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)_
* _Determines how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user's life expectancy. You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy._
* _If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy._


## Specifications
|Test #| Behavior | Input    | Output   |
| -------- | -------- | -------- | -------- |
| 1 | Program returns user's age in Mercury years. | 31 | 129 |
| 2 | Program returns user's age in Venus years. | 31 | 50 |
| 3 | Program returns user's age in Mars years. | 31 | 16 |
| 4 | Program returns user's age in Jupiter years. | 31 | 2 |
| 5 | Given a user input of their expected life expectancy given their demographics, program returns years a user has left to live on each planet | Life Expectancy: 79; Earth Age: 31  | Mercury Years Left: 200; Venus Years Left: 77; Earth Years Left: 48; Mars Years Left: 25; Jupiter Years Left: 4;  |
| 6 | If a user, has surpassed the average life expectancy, the program returns the number of years they have lived past the life expectancy.| Life Expectancy: 79; Earth Age: 100 | Mercury Years Lived Past Expectancy: 87; Venus Years Lived Past Expectancy: 33; Earth Years Lived Past Expectancy: 21; Mars Years Lived Past Expectancy: 11; Jupiter Years Lived Past Expectancy: 1;||

## Setup/Installation Requirements

To View Project:
* Open a web browser of your choice and navigate to the following page:

To Extend This Project:
* Clone this project using the 'git clone' command in terminal/command line.
* Navigate to cloned folder in terminal and run 'npm install'to download all dependencies.
* Open the cloned repo in a text editor of your choice.
* Use 'index.html' as the central HTML file and 'main.js' as the central JS file to make changes.
* To view project in a browser: Run 'npm run start', which will bundle HTML and JS files and launch a server.
* Have fun!

## Known Bugs

_There are no known bugs at this time._

## Support and contact details

_Connect with me at vamariestewart@gmail.com with ideas to improve this project._

## Technologies Used

* HTML5
* CSS/Bootstrap
* JavaScript/jQuery
* Jest
* webpack

### License

Copyright (c) 2020 **_Vanessa Stewart_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
