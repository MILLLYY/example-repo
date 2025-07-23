//this selects the container where elements will be injected
const container = document.querySelector(".periodic-table");

//loops through each item in the periodic table data array
elements.forEach((el) => {
  //creates  a div element for each element
  const div = document.createElement("div");
  div.className = "element";

  //applies grid position from the data
  div.style.gridColumn = el.gridColumn;
  div.style.gridRow = el.gridRow;

  //injects the atomic number , symbol and name
  div.innerHTML = `
    <span class="atomic-number">${el.number}</span>
    <span class="symbol">${el.symbol}</span>
    <span class="name">${el.name}</span>
  `;

  //this appends this element to the table
  container.appendChild(div);
});
