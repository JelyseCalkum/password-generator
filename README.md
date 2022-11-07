# password-generator
PASSWORD GENERATOR PROJECT


SUMMARY:
This application emphasizes the use of Javascript to generate a random, secure password for the user. The project displays how using Javascript can make a dynamic 
change to an HTML document. A CSS document was also used to create this project.


DEPLOYMENT AND USAGE:
This project has been deployed to GitHub Pages. To see this project in action, you can follow this deployment link: https://jelysecalkum.github.io/passwordgenerator/ 

To check out the project files, visit my GitHub repository here: https://github.com/JelyseCalkum/passwordgenerator 



PROJECT FEATURES:

A generate button:
This will send the user a series of prompts.
After user data is collected, a random password will be generated using Javascript.
![Screenshot 1](https://user-images.githubusercontent.com/115381607/200198750-ea33f52e-b9b5-471f-b6f4-bfa20c14e907.png)


A Textarea:
This textarea will display the users password once it is generated.
![Screenshot 2](https://user-images.githubusercontent.com/115381607/200198795-03a25928-a201-463b-a975-b4040a09b0ff.png)




JAVASCRIPT-SPECIFIC PROJECT FEATURES:

Variable declaration area
An event listener (onclick) called generatePassword.
This will prompt the user for input between 8-128.
This variable is changed to an integer using ParseInt().
This will validate that the input is a number within range, or is a number.
This then uses the input to determine the types (or choices) or letters of characters used, using an if statement.
This then assigns values to the variables using arrays for character, number or alphabet.
Another variable is created to concatenate the above variables.
A for loop will loop through the enter prompt until it reaches the number entered by user.
A password variable takes the value from the for loop, and converts it to a string.
The string value then populates into the text area for the user using a UserInput function.


ACKNOWLEDGEMENTS:

Thank you to UofO's bootcamp for providing starter code as well as the acceptance criteria.
