// from data.js
var tableData = data;

// select the table body
var tbody = d3.select("tbody");

// function populate (append) the talbe with data 
function populateTable (data) {
    data.forEach((dataRow) => {

        const row = tbody.append("tr");

        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

// clear the table before displaying (appending) new data
function clearTable () {
    var table = document.getElementById("ufo-table");
    for(var i = table.rows.length - 1; i > 0; i--)
    {
        table.deleteRow(i);
    }
}

// call the table populate 
populateTable(tableData);

// get a handle for the filter button
var filterButton = d3.select("#filter-btn");

// function to trigger when button in clicked
filterButton.on("click", function () {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // get entered date value
    var filterDateValue = d3.select("#datetime").property("value");

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
