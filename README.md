# **Overview**
This is a console app, when you input a string, the app returns an array of words hidden in the input string.

## **Setup**
1. Before you start the app, make sure **NodeJS** is installed to your environment. If you don't have it, install it from this link. https://nodejs.org/en/

2. Download or pull this project to your local machine. Open your terminal and move to the location where you saved the folder

3. Use `npm install` command to install the dependencies

## **How to Use**
When you want to start the app, put `node input.js` command in your terminal. When the app starts, "Enter a word: " message will be displayed, you can put in any words and hit the Enter key. Enjoy!

## **Run Tests**
When you want to run all the tests, use the `npm test` command.
When you want to run a spesific test, add `.only` or to skip a test, add `.skip` behind describe or it method.
If you want to run a specific file, use `node_modules/.bin/mocha --spec ./test/{<fileName>.js}` in the terminal.

## **Assumptions**
- The user only needs English words as an output.
- The user will input only one word. Sentences are not considered.
- When user inputs only one character, the app won't recognized it as an English word.
- Numbers, sysmbols or other languages letters are expected in the input. If these are present, app will show an error message.
- When the user does not input any words and hits the Enter Key, the app will display a message.
- The maximum number of characters allowed is 20.
- English words are provided by a third party, we don't need to validate the dictionary.

## **Tools that I used**
Note: I don't have a Java environment on my personal machine so I used JavaScript to do the assignment. I have used Mocha/Chai Automation tools before, and they are easy to set up for everybody so I picked these tools this time.
- Mocha: JavaScript test framework https://mochajs.org/
- Chai: Automation test assersion library for node. https://www.chaijs.com/
- word-list: List of English words. I used this module instead of isEnglishWord. (I don't have a Java environment so I can't use the isEnglishWord method)
