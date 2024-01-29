console.log("update.js");
import { employee_list } from "./db.js";
import { refreshTable } from "./refreash.js";

//  updatehandler
export function updateHandler(event) {
  event.preventDefault();
  let button = event.target;

  // get modal
  let firstNameinput = document.getElementById("update_firstName");
  let lastNameinput = document.getElementById("update_lastName");
  let emailinput = document.getElementById("update_email");

  // Extract data from the clicked row
  console.log(button.dataset.first_name);
  firstNameinput.value = button.dataset.first_name;
  lastNameinput.value = button.dataset.last_name;
  emailinput.value = button.dataset.email;

  // change data of updatebutton
  let saveUpdateBtn = document.querySelector("#update_add_new_emp");
  saveUpdateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let edited_Data = {
      first_name: firstNameinput.value,
      Last_name: lastNameinput.value,
      Email_id: emailinput.value,
    };

    console.log(employee_list[button.dataset.id]);
    employee_list[button.dataset.id] = edited_Data;
    refreshTable(employee_list);

    // empty the input fields
    delete firstNameinput.value;
    delete lastNameinput.value;
    delete emailinput.value;

    saveUpdateBtn.removeEventListener("click", (e) => {});
  });
}