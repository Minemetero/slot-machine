//array to store logs
let logs = [];

// override console.log to log and capture logs
function captureLogs(includeDetails = false) {
     const originalLog = console.log;

     console.log = function (message) {

          if (logs.length === 0) {
               // add timestamp at the beginning of the logs array
               logs.push(
                    `Game results`
               );
          }
          // try to access the stackdetails for more info (optional)
          let logDetails = "";
          if (includeDetails) {
               try {
                    throw new Error();
               } catch (e) {
                    const stackLines = e.stack.split("\n");

                    if (stackLines.length >= 3) {
                         const logLocation = stackLines[2].trim();
                         logDetails = logLocation;
                    }
               }
          }

          // add log message with optional file and line number details as new line
          //logs.push(`${message}\n   ${logDetails ? logDetails  : ""}`);
          // test formatting
          logs.push(
               `${message.toString().padEnd(60, ".")}${logDetails ? logDetails.padStart(60) : ""
               }`
          );

          originalLog.apply(console, arguments);
     };
}

function downloadLogs() {
     const logsString = logs.join("\n"); // join logs with newlines

     // create a blob
     const blob = new Blob([logsString], { type: "text/plain" });

     // create a link
     const link = document.createElement("a");
     link.href = window.URL.createObjectURL(blob);
     link.download = "ASOIAF-THEORY-LOGS.txt"; // default filename
     document.body.appendChild(link);

     link.click();

     // clean up => remove the link after usage
     document.body.removeChild(link);
}

//USAGE EXAMPLE
// call captureLogs to start capturing console.log from here
//captureLogs(); // without details
captureLogs(true); // WITH details (filename/lines if accessible)

// button to trigger download - or call downloadLogs()
const downloadButton = document.createElement("button");
downloadButton.textContent = "Download Logs";
downloadButton.id = 'position2'
downloadButton.addEventListener("click", downloadLogs);
document.body.appendChild(downloadButton);

let oints = 0;
let win = false
let winCount = 0;

const play = (/* amount */) => {

     oints++;
     if (oints >= 7) {
          document.getElementById('result').textContent = 'Game Over';
          const btn=document.getElementById('again'); if(btn) btn.disabled=true;
          return;
     }

     //     for (let index = 0; index < amount; index++) {
     //   while (win == false) {
     const first = document.getElementById("first");
     const second = document.getElementById("second");
     const third = document.getElementById("third");

     const result = document.getElementById('result')

     const firstl = Math.floor(Math.random() * 10) + 1;
     const secondl = Math.floor(Math.random() * 10) + 1;
     const thirdl = Math.floor(Math.random() * 10) + 1;

     first.innerHTML = '';
     second.innerHTML = '';
     third.innerHTML = '';
     result.innerHTML = '';

     first.innerHTML = firstl;
     second.innerHTML = secondl;
     third.innerHTML = thirdl;

     if (firstl == secondl && firstl == thirdl && secondl == thirdl) {
          document.getElementById('result').textContent = 'You win';
          const btn=document.getElementById('again'); if(btn) btn.disabled=true;
          return;          
          // winCount++;
          // if (winCount == 100) { win = true; }
     } else {
          console.log("You lose");
     }
     //   }
     //     }
}