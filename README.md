# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Zhuoliang Pu

Time spent: 5-6 hours spent in total

Link to project: https://glitch.com/edit/#!/petal-glaze-snipe

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

* [x] Player will be infomred which round they are at.
* [x] Have different number of rounds (between 3 to 7) for each game.

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](your-link-here)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
Stackoverflow.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
  Creating a timer was the most challenging thing for me when creating this submission because I had compeletely no idea about how to implement it initially.
  But when I calmed down, I firstly wrote out the behaviors I would expect it to have, and in what conditions, for example, when would it start counting, when would it be reset, when 
  would it stay frozen, and etc. After that, I read the provided documentation throughly, and did some attemptation to test if I could implement some basic behaviors, which turns
  out to work. After that, I tried to find some examples online, and successfully found one from Stackoverflow. After making sure I fully understand how its code works, I used it as a template
  and refined its logic while consistently testing after each change to get my desired behaviors.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
The biggest quetion for me is how do we know the layouts and designs are appropriate? How can we make sure most people would like how we designed our user interface, and the functionality would still work as 
expected if people are seeing our web in different devices (like phones and tables)? Also, how do we make backup plans if some parts do not work as expected, for example, the picture or sound of pressing the buttons
failed to be loaded? Besides, there seems to be a lot of similar code used multiple times, how can we make the process of refactoring more effective if working on a much larger project?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
I would like to make it a much more complete game. Specifically, I would like to provide varies of difficulties that player can choose, and provide different themes with different background, sound effects, and textures for the buttons
so that there could be more choices for players. I would also like to create a challenge mode in which the game continues to get more difficult after each round and it won't ends if the player never lose, and the best
record would be recorded so that players can compete with each other if they want to. If possible I would also like to provide a dual-player option such that one person can press the buttons from another device and the other
needs to repeat what his or her mate just pressed to win. Or perhaps there could also be a multi-player option such that teams of 2 can compete with each other.




## License

    Copyright [Zhuoliang Pu]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.