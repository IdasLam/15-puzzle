# 15 Puzzle
A frontend application of the 15 puzzle which contains 15 tiles numbered 1-15 and 1 empty tile. 

This project was developed under a span of a few days.

## Requirements
The original assignment of the puzzle had the following requirements:
- Responsive
- Tiles should be numbered 1 and up
- There should be one empty tile
- The tiles gets moved by clicking on a tile in the same column or row, the tile and all tiles between the empty tile will move closer to the empty tile. Example: If the 05 gets clicked, the 05 and 10 will move one tile down.

01 - 02 - 03 - 04 - 05

06 - 07 - 08 - 09 - 10

11 - 12 - 13 - 14 - x

- Contain the font Open Sans
- The tiles should be randomized
- There should be a randomize button available
- When completing the puzzle there should be a prompt on the screen.

### Modifications
Most of the requirements where followed however some changes where made. The modifications where made in regard with no set deadline.

Instead of doing a simplified version of the 15 puzzle I decided to do the "normal" one to challenge myself. This was something that I decided to implement because it would make the game closer to the original but also as an additional feature to the project.

Another feature that I decided to add was a counter for how many moves the user had done.

I also decided to add a UI for the input of rows and columns of the puzzle. 

### Other comments
I strongly believe that the project could improve on the following parts:
- Testing
- UI
- Responsive UI
- More efficient code 

*Testing:* With more time testing should be created to check if the puzzle works as it should. Testing could be done with libraries such as Jest or Cypress.

*UI:* The UI of the puzzle could be improved and made more responsive than what it is. Animations and more complicated style could be added to make the puzzle more pleasant. Alongside with this responsiveness could be improved on. This means that when inputting many columns the view on a phone the puzzle will no longer fit the screen. A solution for this is to put a limit on the input for the rows and columns that can be inputted.

*More efficient code:* The code could me more efficient when the scaling of the columns and rows becomes larger. In the current state the puzzle will start to lag when generating the grid. An easy solution to this is to put an limit to how many rows and columns there can be. However more efficient code could also be looked into.

The project has been a fun and interesting to develop. I am most proud of the grid structure. The grid is made up by a nestled array: [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]. With the last tile, 16, tile corresponding to the empty tile. With this grid indexes could easily be identified.

## Main Technologies
- [MUI](https://mui.com/)
- [Styled components](https://emotion.sh/docs/styled)

## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.