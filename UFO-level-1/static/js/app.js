// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

function populateTable (data) {
    data.forEach((dataRow) => {

        const row = tbody.append("tr");

        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

// clear the table before displaying new data
function clearTable () {
    var table = document.getElementById("ufo-table");
    for(var i = table.rows.length - 1; i > 0; i--)
    {
        table.deleteRow(i);
    }
}

// call the tabe pop
populateTable(tableData);

// filter button
var filterButton = d3.select("#filter-btn");

filterButton.on("click", function () {
    
    // filter value date
    var filterDateElement = d3.select("#datetime");
    var filterDateValue = filterDateElement.property("value");

    // test code
    //console.log(filterDateElement);
    //console.log(filterDateValue);
 
     // clear table
     clearTable()   

    // if the date values is cleared then display all data
    if (filterDateValue === '' ) {
        populateTable(tableData);  
    }
    // if a date value is entered then diplay the filtered data
    else {
        var filteredData = data.filter(sightings => sightings.datetime === filterDateValue );
        
        // populate with filtered data
        populateTable(filteredData);  
    };
});
