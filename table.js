async function init() {
  let employee_list = [];

  const BASE_URL = `https://f3fc3cfd-b1ac-4318-bc40-ab1b1a530ccd-00-2uvud6axgb4rs.riker.replit.dev`;
  const GET_EMPLOYEE = `employee`;

  async function getEmployee() {
    const response = await fetch(`${BASE_URL}/${GET_EMPLOYEE}`);
    const data = await response.json();

     employee_list = data;
  }
  await getEmployee();

  let saveUpdateBtn = document.querySelector("#update_add_new_emp");

  /////////// ADD //////////////////
  // add new employee in the record
  const add_new_emp_Btn = document.querySelector("#add_new_emp");
  add_new_emp_Btn.addEventListener("click", () => {
    const input_fields = document.querySelectorAll(".inputs");

    let obj = {
      first_name: input_fields[0].value,
      Last_name: input_fields[1].value,
      Email_id: input_fields[2].value,
    };

    // All fields are mendatory
    if (obj.first_name === "" && obj.Last_name === "" && obj.Email_id === "") {
      alert("all fields are mendatory");
    } else {
      employee_list.push(obj);

      // show newly added data
      refreshTable(employee_list);

      // empty the input fields
      input_fields[0].value = "";
      input_fields[1].value = "";
      input_fields[2].value = "";
    }
  });

  refreshTable(employee_list);
  /////////// ADD //////////////////

  /////////// UPDATE //////////////////
  // for action buttons only
  function attachClickEvent(btns, handler) {
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", handler);
    }
  }

  //  show all records in the table
  function refreshTable(employee_list) {
    const table_body = document.querySelector(".table_body");
    let table_rows = ``;

    for (let i = 0; i < employee_list.length; i++) {
      // console.log(`
      //   ${i}
      //   data-first_name=${employee_list[i].first_name}
      //   data-last_name=${employee_list[i].Last_name}
      //   data-email=${employee_list[i].Email_id}
      // `);

      table_rows += `
              <tr data-id=${i}> 
                  <td class="first_name" >${employee_list[i].first_name}</td>
                  <td class="last_name">${employee_list[i].Last_name}</td>
                  <td class="email">${employee_list[i].Email_id}</td>
                  <td class="actions"> 
                        <button class="btn btn-primary update-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#update_modal"
                            data-id=${i} 
                            data-first_name=${employee_list[i].first_name} 
                            data-last_name=${employee_list[i].Last_name} 
                            data-email=${employee_list[i].Email_id} 
                          >
                          Update
                        </button>
                       <button class="btn btn-warning edit delete-btn" data-id=${i} >Delete</button>
                       <button class="btn btn-success">view</button>
                  </td>
              </tr>`;
    }
    table_body.innerHTML = table_rows;

    updateEventsOnButtons();
  }

  refreshTable(employee_list);

  /////////// UPDATE-HANDLER //////////////////

  function updateHandler(event) {
    event.preventDefault();
    let button = event.target;

    // get modal
    let firstNameinput = document.getElementById("update_firstName");
    firstNameinput.dataset.id = button.dataset.id;
    let lastNameinput = document.getElementById("update_lastName");
    let emailinput = document.getElementById("update_email");

    // Extract data from the clicked row
    firstNameinput.value = button.dataset.first_name;
    lastNameinput.value = button.dataset.last_name;
    emailinput.value = button.dataset.email;
  }
  /////////// UPDATE-HANDLER //////////////////

  // change data of updatebutton

  saveUpdateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let firstNameinput = document.getElementById("update_firstName");
    let id = firstNameinput.dataset.id;
    let lastNameinput = document.getElementById("update_lastName");
    let emailinput = document.getElementById("update_email");

    let edited_Data = {
      first_name: firstNameinput.value,
      Last_name: lastNameinput.value,
      Email_id: emailinput.value,
    };
    console.log(edited_Data);

    employee_list[id] = edited_Data;
    refreshTable(employee_list);
  });

  /////////// DELETE-HANDLER //////////////////
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
  /////////// DELETE-HANDLER //////////////////

  function updateEventsOnButtons() {
    // UPDATE LOGIC
    const updateButtons = document.querySelectorAll(".update-btn");
    attachClickEvent(updateButtons, updateHandler);

    // DELETE LOGIC
    const deleteBtns = document.querySelectorAll(".delete-btn");
    attachClickEvent(deleteBtns, deleteHandler);
  }
}

init();