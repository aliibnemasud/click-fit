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

        $(".image-border").css("background-image", "url(" + image + ")");

        // Display upload status
        $("#uploadStatus").html(`File uploaded successfully. Path: ${image}`);
      },
      error: function (error) {
        // Display error message on failure
        $("#uploadStatus").html("Error: " + error.responseText);
      },
    });
  });
});

// add data to the MySql Database
$(document).ready(function () {
  $("#myForm").submit(async function (e) {
    e.preventDefault();

    // Get values from form fields
    let email = $("#email").val();
    let password = $("#password").val();
    let type = $("#type").val();
    let status = $("#status").val();

    const productData = {
      email: email,
      password: password,
      type: type,
      active: status,
    };

    await fetch("http://localhost:5000/user/addUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        $("#email").val("");
        $("#password").val("");
        $("#type").val("");
        $("#status").val("");       
        alert("Product Added Successfully!!!");
      });
  });
});
