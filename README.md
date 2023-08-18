Project_Spaceman

## How to play
    - Player is given an unknown word space count and must guess the word one letter at a time
    - PLayer has a limit of 5 inocrrect guesses when choosing a letter
    - For each wrong guess a new body part is added to the spaceman
    - If the player chooses the correct letters for the word without running out of incorrect guesses, PLayer Wins.
    - If player fufills the creation of the spaceman with inncorrect guess, player loses

## User Stories
    - I want to be able to click on letter blocks 
        - A chosen correct letter will move that letter to the desginated word space
        - A inncorrect letter will change color to red and remain on board
    - I want to see how many incorrect guesses I have remaining
    - I want to be able to see the spaceman 
    - I want to see the spaceman gain a new body part with each wrong guess
    - I want to see blank spaces the correspond with the word to see how many letters the word has
    - I want to see a letter board
    - I want to see a 'Play Again' function
    - If I win, I want to see a 'Player wins' message
    - If I lose, I want to see a 'Player Loses' message

## Pseudocode
    - Letter Board
        - arrange alphabet seperately
        - use capatalized alphabet
        - pick random word 
        - after clicking letter
            - moves to the blank spaces corresponding the word if correct letter chosen
            - turns red and remains on board if wrong letter is chosen

    - Pre-Game
        - play button
        - have max 5 incorrect guesses
        - individual alaphabet letters
        - section for spaceman to be built
    
    - Post-Game
        - play again button
        - message state win or lose
    
    - Settings
        - create a difficulty setting
            - easy, medium, hard
                - harder the level, longer the word
        - create catergories
            - different catergories such as food, countries, software engineering terms
                - software engineering terms
                    - create hints such as a definiton
    
