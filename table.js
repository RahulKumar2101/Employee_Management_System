let employee_list = [
  {
    first_name: "ramesh",
    Last_name: "fadrate",
    Email_id: "ram@gmail.com",
  },
  {
    first_name: "john",
    Last_name: "cena",
    Email_id: "cena@gmail.com",
  },
  {
    first_name: "tom",
    Last_name: "cruice",
    Email_id: "tom@gmail.com",
  },
  {
    first_name: "abhay",
    Last_name: "singh",
    Email_id: "abhay@gmail.com",
  },
  {
    first_name: "rahul",
    Last_name: "kumar",
    Email_id: "rahul@gmail.com",
  },
  {
    first_name: "soni",
    Last_name: "kapoor",
    Email_id: "soni@gmail.com",
  },
];

// add new employee in the record
const add_new_emp_Btn = document.querySelector("#add_new_emp");
add_new_emp_Btn.addEventListener("click", () => {
  const input_fields = document.querySelectorAll(".inputs");
  // console.log('hello', input_fields);
  let obj = {
    first_name: input_fields[0].value,
    Last_name: input_fields[1].value,
    Email_id: input_fields[2].value,
  };
  if (
    input_fields[0].value != "" &&
    input_fields[1].value != "" &&
    input_fields[2].value != ""
  ) {
    employee_list.push(obj);
    refreshTable(employee_list);
  }
});


function attachClickEvent(btns, handler) {
  btns.forEach((button) => {
    button.addEventListener("click", handler);
  });
}

//  updatehandler
function updateHandler(event) {
  event.preventDefault();
  console.log("clicked");
  let button = event.target;

  // get modal
  let firstNameinput = document.getElementById("update_firstName");
  let lastNameinput = document.getElementById("update_lastName");
  let emailinput = document.getElementById("update_email");

  // Extract data from the clicked row
  // console.log(firstNameinput.value, 'before');
  firstNameinput.value = button.dataset.first_name;
  lastNameinput.value = button.dataset.last_name;
  emailinput.value = button.dataset.email;
  console.log(firstNameinput.value, 'after');

  // change data of updatebutton
  let saveUpdateData = document.querySelector("#update_add_new_emp");
  saveUpdateData.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(firstNameinput.value, 'inside save ');
    let edited_Data = {
      first_name: firstNameinput.value,
      Last_name: lastNameinput.value,
      Email_id: emailinput.value,
    };

    employee_list[button.dataset.id] = edited_Data;

    // employee_list[button.dataset.id] = edited_Data;
    // console.log(employee_list);
    refreshTable(employee_list);
    // }
    let saveUpdateData = document.querySelector("#update_add_new_emp");
    refreshTable(employee_list);
  });
}

// deletehandler
function deleteHandler(event) {
  console.log(event.target);
  let dlt = confirm(" are you sure to delete this item");
  if (dlt) {
    const button = event.target;
    employee_list.splice(button.dataset.id, 1);
    // console.log(employee_list.length);
    refreshTable(employee_list);
    
  }
}

//  show all records in the table
function refreshTable(employee_list) {
  // console.log("refresh table");
  const table_body = document.querySelector(".table_body");
  let table_rows = ``;

  for (let i = 0; i < employee_list.length; i++) {
    table_rows += `
            <tr data-id=${i}> 
                <td class="first_name" >${employee_list[i].first_name}</td>
                <td class="last_name">${employee_list[i].Last_name}</td>
                <td class="email">${employee_list[i].Email_id}</td>
                <td class="actions"> 
                      <button class="btn btn-primary" id= "update-btn" 
                          data-bs-toggle="modal"
                          data-bs-target="#update_modal"
                          data-id=${i} 
                          data-first_name=${employee_list[i].first_name} 
                          data-last_name=${employee_list[i].Last_name} 
                          data-email=${employee_list[i].Email_id} 
                        >
                        Update
                      </button>
                     <button class="btn btn-warning edit" id ="delete-btn" data-id=${i} >Delete</button>
                     <button class="btn btn-success">view</button>
                </td>
            </tr>`;
  }
  table_body.innerHTML = table_rows;

  // UPDATE LOGIC
  const updateButtons = document.querySelectorAll("#update-btn");
  attachClickEvent(updateButtons, updateHandler);

  // DELETE LOGIC
  const deleteBtns = document.querySelectorAll("#delete-btn");
  attachClickEvent(deleteBtns, deleteHandler);
}
refreshTable(employee_list);
// ele.addEventListener('click', function someHandeler(event) { // do something })




