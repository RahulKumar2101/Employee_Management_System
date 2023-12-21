import { employee_list } from "./js/db.js";
import { refreshTable } from "./js/refreash.js";

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
  if (
    obj.first_name === "" &&
    obj.Last_name === "" &&
    obj.Email_id === ""
  ) {
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

console.log("default call");
refreshTable(employee_list);