/* const makeRequest = async (url, method) => {
  const result = await $.ajax({
    url: url,
    method: method,
  });
  return result;
};
const getData = () => {
  makeRequest("http://numbersapi.com/1/30/date?json", "GET")
  .then((res) =>    
    $('#text').text(res.text)   
  );
};
getData() */

const fetchData = () => {
  fetch("http://numbersapi.com/1/30/date?json")
    .then((res) => res.json())
    .then((data) => {
      $("#text").text(data.text);
      $("#year").text(data.year);
      $("#number").text(data.number);
      $("#type").text(data.type);
    });
};

fetchData();

$(document).ready(function () {
  $("#uploadForm").submit(function (e) {
    e.preventDefault();

    // Create a FormData object to send the file
    const formData = new FormData(this);

    $.ajax({
      url: "http://localhost:5000/file",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function (response) {
        const image = `http://localhost:5000/images/${response.filename}`;
        // Display the uploaded image
        $("#uploadedImage").attr("src", image);

        // Display upload status
        $("#uploadStatus").html("File uploaded successfully.");
      },
      error: function (error) {
        // Display error message on failure
        $("#uploadStatus").html("Error: " + error.responseText);
      },
    });
  });
});
