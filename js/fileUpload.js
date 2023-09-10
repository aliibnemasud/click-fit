
$(document).ready(function () {
  $("#uploadForm").submit(function (e) {
    e.preventDefault();
    // Create a FormData object to send the file
    const formData = new FormData(this);
    $.ajax({
      url: "https://click-fit-server.taqiy.com/file",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function (response) {
        const image = `https://click-fit-server.taqiy.com/images/${response.filename}`;

        $(".image-border").css("background-image", "url(" + image + ")");

        // Display upload status
        $("#uploadStatus").html(
          `<div> File uploaded successfully. Path: <a target="_blank" href="${image}">${image}</a> </div>`
        );
      },
      error: function (error) {
        // Display error message on failure
        $("#uploadStatus").html("Error: " + error.responseText);
      },
    });
  });
});
