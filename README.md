# _Super Galactic Age Calculator_

_4 September 2020_

#### _A web project that calculates a user's various planet ages (for Epicodus)_

#### By _**Vanessa Stewart**_

## Description

This is a project completed for Epicodus to practice testing business logic with Jest, using webpack to bundle and lint code, running an npm to manage dependencies, implementing ES6 features including classes and template literals, and following a Red, Green Refactor workflow during test-driven development.

The original directions are as follows:

_A solar year lasts 365 days on planet Earth. However, the length of a solar year varies from planet to planet. For instance, a solar year on Mercury lasts 88 days. Write an application that determines a user's age based on a planet's solar years._

_Take a person's age in years and create a class that does the following:_

* _Returns their age in Mercury years. (A Mercury year is .24 Earth years.)_
* _Returns their age in Venus years. (A Venus year is .62 Earth years.)_
* _Returns their age in Mars years. (A Mars year is 1.88 Earth years.)_
* _Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)_
* _Determines how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user's life expectancy. You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy._
* _If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy._

Futher exploration challenges included:
* Add a UI to your application.
* Return the date of a user's next birthday on each planet.
* Return the age Keith Richards will be in dog years on the planet Jupiter in 2073.
* Assuming that the average lifespan of a mayfly is 5 minutes, determine how many mayfly lifespans a human user has lived and then compare it the current age (in Earth years) of our sun.
* Make your application look nice and give it a solar theme!

## Specifications
| Test # | Behavior | Input | Output |
| -------- | -------- | -------- | -------- |
| 1 | Program creates a Calculator Constructor that stores user's age and life expectancy inputs. | Earth Age: 31; Life Expectancy: 79 | Calculator.age = 31; Calculator.lifeExpectancy = 79 |
| 2 | Program returns user's age in Mercury years. | 31 | 129 |
| 3 | Program returns user's age in Venus years. | 31 | 50 |
| 4 | Program returns user's age in Mars years. | 31 | 16 |
| 5 | Program returns user's age in Jupiter years. | 31 | 2 |
| 6 | Given a user input of their expected life expectancy given their demographics, program returns years a user has left to live on planets Mercury through Jupiter | Earth Age: 31; Life Expectancy: 79  | Mercury Years Left: 200; Venus Years Left: 77; Earth Years Left: 48; Mars Years Left: 25; Jupiter Years Left: 4;  |
| 7 | If a user, has surpassed the average life expectancy, the program returns the number of years they have lived past the life expectancy.| Life Expectancy: 79; Earth Age: 100 | Mercury Years Lived Past Expectancy: 87; Venus Years Lived Past Expectancy: 33; Earth Years Lived Past Expectancy: 21; Mars Years Lived Past Expectancy: 11; Jupiter Years Lived Past Expectancy: 1;|

## Stretch Specifications
| Test # | Behavior | Input | Output |
| -------- | -------- | -------- | -------- |
| 8 | Program returns user's age in Saturn years. | 31 | 1.052 |
| 9 | Program returns user's age in Uranus years. | 31 | 0.369 |
| 10 | Program returns user's age in Neptune years. | 31 | 0.188 |
| 11 | Program returns user's age in Pluto years. | 31 | 0.125 |
| 12 | Given a user input of their expected life expectancy given their demographics, program returns years a user has left to live on planets Saturn through Pluto | Earth Age: 31; Life Expectancy: 79  | Saturn Years Left: 1.629; Uranus Years Left: 0.571; Neptune Years Left: 0.291; Pluto Years Left: 0.193;  |
| 13 | If a user, has surpassed the average life expectancy, the program returns the number of years they have lived past the life expectancy.| Life Expectancy: 79; Earth Age: 100 | Saturn Years Lived Past Expectancy: 0.713; Uranus Years Lived Past Expectancy: 0.250; Neptune Years Lived Past Expectancy: 0.127; Pluto Years Lived Past Expectancy: 0.084;|

## Setup/Installation Requirements
To View This Project:
* Open a broswer of your choice and navigate to the following page: https://vanmars.github.io/galactic-age-calculator/dist.index.html.
 

To Extend This Project:
* Clone this project using the 'git clone' command in terminal/command line.
* Navigate to cloned folder in terminal and run 'npm install' to download all dependencies.
* Open the cloned repo in a text editor of your choice.
* Use 'index.html' as the central HTML file and 'main.js' as the central JS file to make changes.
* Have fun!

Once project is cloned and dependencies are installed, to view project in a browser: 
* Run 'npm run start' in terminal, which will bundle HTML and JS files and launch a server.
OR
* Run 'npm run build', in terminal, which will bundle files, then open dist/index.html in a browswer or with your own server.


## Known Bugs

* Link to extra features leads no where as this page is not built out yet. Hope to complete the extra challenges in future and will add them to this page.

Items to Improve:
* Tweak image sizing on planet cards so cards are all of equal height
* Add extra functions page to fulfill all futher exploration challenges.

## Support and contact details

_Connect with me at vamariestewart@gmail.com with ideas to improve this project._

## Technologies Used

* HTML5
* CSS/Bootstrap
* JavaScript/jQuery
* Jest
* Webpack

### License

Copyright (c) 2020 **_Vanessa Stewart_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
