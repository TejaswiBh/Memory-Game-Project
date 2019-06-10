# Memory Game Project

## Table of Contents

-   [Instructions](#instructions)
-   [Contributing](#contributing)
-   [Scratch project link](<#For-downloading-the-Scratch-Project-use-the-below- Link>)
-   [Steps followed](<#Steps-followed>)
-   [How to play the game](<#How-to-play-the-game?>)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## For downloading the Scratch Project use the below Link

<https://github.com/udacity/fend-project-memory-game>

## Steps followed

 **_To complete the Project I have done the below steps_**

-   I have downloaded the `zip file` and placed it in my current working folder. Then, I have extracted that zip file and opened the **index.html** in browser.

-   First I have created an array variable called 'cards' and  added an event listener called `click` to all the cards which means  whenever I have clicked the card, the corresponding card should be displayed.

-   After the first click is made, the timer will start which is written in `startTimer()` function.

-   The cards that are clicked are stored in a array variable called `clickedVar`.If the no of clicks become two i.e clickedVar length becomes two,then the cards are compared for matching.

-   If the cards are  `matched`, then the cards remain displayed and clickedVar is assigned to nothing which means its length is `zero`.

-   If the cards are  `not matched`, then after 300 millisec the cards are not displayed and clickedVar is assigned to nothing which means its length is `zero`.

-   The no of moves in the game are stored in a variable called `movcnt` and it is displayed in the game and each time this value varies based on no. of moves made by the player.

-   Based on the no. of moves the star rating is decreased which is provided in the `starRating()` function.

-   If the match count becomes eight which is stored in the variable `matchcnt`, which means the game is over then the timer is stopped which is written in `setInterval` called by the `stopTimer()` function.The final `starRating` for the player in the game is provided according to the moves.

-   Also, after the game is over which means winning the game, the  **popup window** is displayed which provides messages like `Congratulations`, 'star rating', `time` taken to complete and 'playAgain' button.

-   When the `playAgain` is clicked the game starts from the first.

-   Also the game contains `restart` button ,when it is clicked the game starts from first.

-   The cards also shuffles when the playAgain is clicked and also when the game is restarted or reloaded which is provided in `shuffle()` function.

## How to play the game?

First give click on one card and then click another card to match the previous card. Repeat this process untill all the cards are matched.
