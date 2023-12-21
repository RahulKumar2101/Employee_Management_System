import { employee_list } from "./db.js";
import { refreshTable } from "./refreash.js";

// deletehandler
export function deleteHandler(event) {
    console.log(event.target);
    let dlt = confirm(" are you sure to delete this item");
    if (dlt) {
      const button = event.target;
      employee_list.splice(button.dataset.id, 1);
      // console.log(employee_list.length);
      refreshTable(employee_list);
    }
}