// The sequence of messages that will appear on the screen
const hackerLines = [
    "> Initializing bypass protocols...",
    "> Connecting to secure proxy server...",
    "> Connection established. Status: UNDETECTED",
    "> Accessing target device...",
    "> ERROR: High levels of procrastination detected.",
    "> Scanning secret homework folders...",
    "> WARNING: Folder 'Math_Homework' actually consists entirely of memes.",
    "> Locating secret snack supply coordinates...",
    "> Accessing emergency chocolate reserves...",
    "> [!!!] CRITICAL ALERT [!!!]",
    "> [!!!] Lose your weight nga 🥀 [!!!]",
    "> Target has been successfully pranked! Have a nice day! 😎"
];

let lineIndex = 0;
const outputDiv = document.getElementById("terminal-output");

function printNextLine() {
    if (lineIndex < hackerLines.length) {
        // Create a new paragraph element for the line of text
        const newLine = document.createElement("p");
        newLine.textContent = hackerLines[lineIndex];

        // Append it to the terminal output
        outputDiv.appendChild(newLine);

        // Automatically scroll to the bottom as new lines appear
        window.scrollTo(0, document.body.scrollHeight);

        lineIndex++;
    } else {
        // Stop the loop once all lines are printed
        clearInterval(terminalInterval);
    }
}

// Print a new line every 800 milliseconds (adjust this number to make it faster or slower)
const terminalInterval = setInterval(printNextLine, 800);