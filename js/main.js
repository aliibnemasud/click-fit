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

// Add User
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

    await fetch("https://click-fit-server.taqiy.com/user/addUser", {
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
        location.reload();
      });
  });
});

/// Get all User show table

const table = document.getElementById("userTable");

const fetchUsers = () => {
  fetch("https://click-fit-server.taqiy.com/user")
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
            user?.ID
          })" class="action-button"data-bs-toggle="modal" data-bs-target="#editModal">
              <i class="fas fa-edit"></i>
          </button>
          <button onclick="deleteUser(${user?.ID})" class="action-button">
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
  await fetch(`https://click-fit-server.taqiy.com/user/getUser/${data}`)
    .then((res) => res.json())
    .then((data) => {
      $("#eemail").val(data[0]?.email);
      $("#epassword").val(data[0]?.password);
      $("#etype").val(data[0]?.type);
      $("#estatus").val(data[0]?.active);

      updateId = data[0]?.ID;
    });
};

// Update User

$(document).ready(
  $("#updatedUser").click(function () {
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

    fetch(`https://click-fit-server.taqiy.com/user/updateUser/${updateId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        $("#editModal").modal("hide");
        location.reload();
      });
  })
);

// Delete a user
const deleteUser = async (data) => {
  const confirm = window.confirm("Want to Delete this user?");
  if (confirm) {
    await fetch(`https://click-fit-server.taqiy.com/user/deleteUser/${data}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        location.reload();
      });
  }
};
