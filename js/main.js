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

    const userData = {
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
      body: JSON.stringify(userData),
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

/// Get all User
const table = document.getElementById("userTable");

const fetchUsers = () => {
  fetch("http://localhost:5000/user")
    .then((res) => res.json())
    .then((data) => {
      data.map((user, index) => {
        const newRow = `<tr>
        <th scope="row">${index + 1}</th>
        <td>${user?.email}</td>
        <td>${user?.type}</td>                       
        <td>
          <div class="d-inline-block">
          <button onclick="showData(${
            user?.id
          })" class="action-button"data-bs-toggle="modal" data-bs-target="#editModal">
              <i class="fas fa-edit"></i>
          </button>
          <button class="action-button">
              <i class="fas fa-trash-alt"></i>
          </button>
        </div>
        </td>
      </tr>`;

        table.querySelector("tbody").insertAdjacentHTML("beforeend", newRow);
      });
    });
};

fetchUsers();

let updateId;

const showData = async (data) => {
  await fetch(`http://localhost:5000/user/getUser/${data}`)
    .then((res) => res.json())
    .then((data) => {
      $("#eemail").val(data[0]?.email);
      $("#epassword").val(data[0]?.password);
      $("#etype").val(data[0]?.type);
      $("#estatus").val(data[0]?.active);

      updateId = data[0]?.id;
    });
};

// Hello

$(document).ready(
  $("#updatedUser").click( function () {

    const email = $("#eemail").val();
    const password = $("#epassword").val();
    const type = $("#etype").val();
    const status = $("#estatus").val();

    const userData = {
      email: email,
      password: password,
      type: type,
      active: status,
    };

    console.log(userData);

    fetch(`http://localhost:5000/user/updateUser/${updateId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
      $("#eemail").val("");
      $("#epassword").val("");
      $("#etype").val("");
      $("#estatus").val("");
      $('#editModal').modal('hide');
      alert("Data Updated Successfully!")
      });
  })
);
