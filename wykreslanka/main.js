function srakaa() {
  height = document.getElementById("height").value;
  width = document.getElementById("width").value;
  table = document.getElementById("tablica");
  table_data_index = 0;
  for (let index = 0; index < height + 20; index++) {
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
    // console.log(row);

    for (let jndex = 0; jndex < width; jndex++) {
      data = document.createElement("td");
      data.id = "table_data_" + table_data_index;
      table_data_index = table_data_index + 1;
      data.innerHTML = String.fromCharCode(
        Math.floor(Math.random() * (90 - 65 + 1)) + 65
      );
      row.appendChild(data);
      // console.log(data);
    }
  }
  ijndex = 0; //table data id
  multiplayer=0;
  words.forEach((element) => {
    if (element.length <= width) {
      // console.log(element);
      switch (Math.floor(Math.random() * 2)) {
        case 1:
          splitted = element.toUpperCase();
          splitted = splitted.split("");
          console.log(splitted.length);
          
          try {
            console.log(splitted.length ,"<=", width, "-" ,multiplayer)
            if (splitted.length <= width - multiplayer) {
              splitted.forEach((element) => {
                console.log(element);
                document.getElementById("table_data_" + ijndex).innerHTML =
                  element;
                multiplayer++;
                ijndex++;
              });
            } else {
              console.log("za mała szerokość")
            }
          } catch (error) {
            // console.log("za mała miejsce");
          }

          break;
        default:
          
          break;
          
      }
      ijndex++;
      multiplayer++;
      if (multiplayer>=width) {
        multiplayer=0;
      }
    }
  });
}
words = [
  "angular",
  "be",
  "cat",
  "dog",
  "elephant",
  "fish",
  "giraffe",
  "house",
  "ice",
  "jungle",
  "kite",
  "lion",
  "mountain",
  "night",
  "ocean",
  "piano",
  "queen",
  "river",
  "sun",
  "tree",
  "umbrella",
  "vase",
  "whale",
  "xylophone",
  "yellow",
  "zebra",
  "apple",
  "banana",
  "cherry",
  "date",
  "eagle",
  "forest",
  "grape",
  "honey",
  "island",
  "jacket",
  "kangaroo",
  "lemon",
  "monkey",
  "nest",
];
