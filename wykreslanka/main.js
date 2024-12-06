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
  ijndex=0;
  splitted_word=[];
  words.forEach(element => {
    if (element>=width) {
      splitted_word[ijndex] = element.split("");
      // console.log(splitted_word)  
      ijndex++;
      
    }
  });
  ijndex=0;
  for (let index = 0; index < height; index++) {
    // console.log(words[index])
    if (splitted_word[index].length <= width) {
      console.log(splitted_word[index])
      switch (Math.floor(Math.random() * 2)) {
        case 1:
          
          
          console.log(splitted_word);
          splitted_word[index].forEach((element) => {
            // console.log(ijndex)
            
            document.getElementById("table_data_" + ijndex).innerHTML = element;
            ijndex++;
          });
          break;
        default:
          break;
      }
    }
    
  }
 
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
