let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let company = document.getElementById("company");
let address = document.getElementById("address");


let addUserBtn = document.getElementById("add-user-btn");

let userTableBody = document.getElementById("user_table_body");

async function addUser() {
  try {
    const { error } = await supabase
      .from("users-info") 
      .insert({
        First_Name: firstName.value,
        Last_Name: lastName.value,
        Company_Name: company.value,
        Address: address.value,
      });

    if (error) throw error;
    firstName.value = "";
    lastName.value = "";
    company.value = "";
    address.value = "";

    Swal.fire({
      title: "User Added",
      text: "User Sucesfully Added in the System",
      icon: "success",
    });

    userTableBody.innerHTML = "";

    getUsers();
  } catch (error) {
    console.log(error);
  }
}

async function getUsers() {
  try {
    const { data, error } = await supabase.from("users-info").select();
    if (error) throw error;

    console.log(data);

    if (data) {
      data.map((val, index) => {
        return (userTableBody.innerHTML += `
     <tr>
                        <td scope="col">${val.First_Name}</td>
                        <td scope="col">${val.Last_Name}</td>
                        <td scope="col">${val.Company_Name}</td>
                        <td scope="col">${val.Address}</td>
                        <td> <span> <i id="delete_user" onclick="deleteUser(${val.id})" class="fa-solid fa-trash"></i> </span> </td>
                      </tr>
    `);
      });
    }
  } catch (error) {
    console.log(error);
  }
}

addUserBtn.addEventListener("click", addUser);

window.onload = getUsers();