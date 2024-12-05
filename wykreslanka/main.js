function srakaa() {
  height = document.getElementById("height").value;
  width = document.getElementById("width").value;
  table = document.getElementById("tablica");
  table_data_index = 0;
  for (let index = 0; index < height+20; index++) {
    try {
      table.removeChild(table.rows[0]);
    } catch {
      console.log("niedziala");
    }
  }

  for (var index = 0; index < height; index++) {
    row = document.createElement("tr");
    row.id = "table_row_" + index;
    table.appendChild(row);
    console.log(row);

    for (let jndex = 0; jndex < width; jndex++) {
      data = document.createElement("td");
      data.id = "table_data_" + table_data_index;
      table_data_index = table_data_index + 1;
      data.innerHTML = String.fromCharCode(
        Math.floor(Math.random() * (90 - 65 + 1)) + 65
      );
      row.appendChild(data);
      console.log(data);
    }
  }
}
