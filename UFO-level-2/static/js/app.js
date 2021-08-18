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
    
    // take a copy of the original data
    var filteredData = tableData;

    // get entered date value
    var filterDateValue = d3.select("#datetime").property("value");

    // get entered city value
    var filterCityValue = d3.select("#city").property("value");
    
    // get entered state value
    var filterStateValue = d3.select("#state").property("value");

    // get entered country value
    var filterCountryValue = d3.select("#country").property("value");

    // get entered shape value
    var filterShapeValue = d3.select("#shape").property("value");     

    // test code
    console.log(filterDateValue);
    console.log(filterStateValue);
 
     // clear table
     clearTable()   

    // if the date is entered filter data
    if (filterDateValue != '' ) {
        filteredData = filteredData.filter(sightings => sightings.datetime === filterDateValue); 
    };

    // if the city is entered filter data
    if (filterCityValue != '') {
        filteredData = filteredData.filter(sightings => sightings.city === filterCityValue); 
    };

    // if the state is entered filter data
    if (filterStateValue != '') {
        filteredData = filteredData.filter(sightings => sightings.state === filterStateValue); 
    };

    // if the country is entered filter data
    if (filterCountryValue != '') {
        filteredData = filteredData.filter(sightings => sightings.country === filterCountryValue); 
    };

    // if the shape is entered filter data
    if (filterShapeValue != '') {
        filteredData = filteredData.filter(sightings => sightings.shape === filterShapeValue); 
    };

    // populate with filtered data
    populateTable(filteredData);  
});
