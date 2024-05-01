// Function to load the text file
function loadTextFile(file, div_id) {
  fetch(file)
    .then(function(response) {
      return response.text();
    })
    .then(function(text) {
      let paragraphs = text.split("    ");
      let storyDiv = document.getElementById(div_id);
      paragraphs.forEach(function (paragraph) {
        let p = document.createElement("p");
        p.textContent = paragraph;
        storyDiv.appendChild(p);
       });
    })
    .catch(function(error) {
      console.log('Error:', error);
    });
}

// Load the text file and display it in the div
loadTextFile("story01.1.txt", "story01.1_content");