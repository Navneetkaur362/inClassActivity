# Quote Generator App:

Here we made one Quote generator app with Electron,HTML,CSS and Javascript.

# Project Structure:

There are four files used:

- 'index.html' - This is used for Setting up the structure of the UI.
- 'style.css' - To style the page.
- 'renderer.js' - this file handle the logic of quote generator.
- 'main.js' - to control the electron app.

# Features:

It will show the random quote that in defined in the list.
There is a button to generate a quote.

# steps

1. Install all the dependencies required like npm in the terminal.
2. Create the new file named index.html. This file defines the structure and layout of the application. It includes a heading for the Quote Generator, a container for displaying quotes, and a button to generate new quotes.
3. Install electron by using the following command in the terminal: npm install electron –save-dev
4. Run npm init to create package.json file. Add the following in the scripts of package.json file: "start": "electron ."
5. Create the new file named main.js. Import the app and BrowserWindow modules from Electron using require.
   Use app.whenReady().then(createWindow) to create a new window when the app is ready.
   Define a createWindow function that creates a BrowserWindow and loads index.html into it.
6. Create style.css and renderer.js to add the logic in generating the code.
7. Run npm start to start the application.
