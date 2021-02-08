// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");


// This single line of code is doing a lot. It tells JavaScript to find the <tbody> tag within the HTML and add a table row ("tr").
//let row = tbody.append("tr");

// Loop Through Data Rows
//loop through each field in the dataRow argument. These fields will become table data and will be wrapped in <td> tags when they're appended to the HTML table

//Object.values(dataRow).forEach((val) => {});

// variable that will append a row to the table body.  
////let cell = row.append("td");

//cell.text(val);

// Let's take a look at our fully assembled function:

// data.forEach((dataRow) => {
//     let row = tbody.append("tr");
//     Object.values(dataRow).forEach((val) => {
//       let cell = row.append("td");
//       cell.text(val);
//       }
//     );
//   });

  // With this function, we have done the following:

// Looped through each object in the array
// Appended a row to the HTML table
// Added each value from the object into a cell
// For example, this is the very first object in our array



  /// The complete buildTable function we created should match the one below

  function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }

  //We'll need to add a second function to our code that will focus on filtering the table we just built.



  function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }
  
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);
// Now you're ready to start building your webpage!

// The time has come to build the webpage. This is known territory for Dana, so she's excited to take a short brain break and work with 
//the more familiar tools of Bootstrap and HTML. It's also a test to see if the JavaScript code is working.

//The time has come to build the webpage. This is known territory for Dana, so she's excited to take a short brain break and work with 
// the more familiar tools of Bootstrap and HTML. It's also a test to see if the JavaScript code is working.