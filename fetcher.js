const fs = require("fs");
const request = require("request");

// Get command-line arguments
const args = process.argv.slice(2);
const url = args[0];
const filePath = args[1];

// Make the HTTP request to fetch the resource
request.get({ url, encoding: null }, (error, response, body) => {
  if (error) {
    console.error("Error downloading resource:", error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error("Error downloading resource. Status code:", response.statusCode);
    return;
  }

  // Save the content to the local file
  fs.writeFile(filePath, body, err => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
    }
  });
});
