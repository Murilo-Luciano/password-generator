## [passwords-generator](https://www.passwords-generator.com/)
Keep yourself safe with strongs passwords
![image](https://user-images.githubusercontent.com/61948229/219883760-6b485626-fd43-408f-8c99-22b573da49cf.png)

### Description
This project is a React application for generating random passwords with certain characteristics. It uses the Material-UI library for styling and consists of a single page with a header, password options, and password display.

The password options include password length, as well as options for including numbers, symbols, lowercase and uppercase letters in the password.

The password display includes the generated password, a copy button for copying the password to the clipboard, and an icon for refreshing the password.

Additionally, there is a password strength display that shows the strength of the generated password. The strength display changes based on the characteristics of the password.

The application uses a serverless function with an API endpoint to generate passwords. It fetches the generated password from this API and sets it to the state to display it on the page.

The application also displays a snackbar with an error message if the user tries to generate a password without selecting any options.
