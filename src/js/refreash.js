import { employee_list } from "./db.js";
import { updateHandler } from "./update.js";
import { deleteHandler } from "./delete.js";

// for action buttons only
function attachClickEvent(btns, handler) {
    btns.forEach((button) => {
      button.addEventListener("click", handler);
    });
}

//  show all records in the table
export function refreshTable(employee_list) {
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