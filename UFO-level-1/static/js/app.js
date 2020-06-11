// from data.js
const tableData = [...data];

// YOUR CODE HERE!
function createTable(newdata) {
    var mainTable = d3.select('tbody');
    newdata.forEach(
        function(sighting) {
            var row = mainTable.append('tr');
            row.append('td').text(`${sighting.datetime}`);
            row.append('td').text(`${sighting.city}`);
            row.append('td').text(`${sighting.state}`);
            row.append('td').text(`${sighting.country}`);
            row.append('td').text(`${sighting.shape}`);
            row.append('td').text(`${sighting.durationMinutes}`);
            row.append('td').text(`${sighting.comments}`);
        }
    );
}
function updatePage() {
    console.log("updateTable has been called");
    var filterByDate = document.getElementById("datetime").value;
    var filteredData = [...tableData];
    filteredData.forEach(
        function(sighting, index) {
            if (sighting.datetime !== filterByDate) {
                delete filteredData[index];
            } else {
            }
        });
        console.log(filteredData);
    var trs = d3.select('tbody').selectAll("tr");
    trs.remove();
    createTable(filteredData);
}
createTable(tableData);
// var filterBtn = d3.select('#filter-btn');
// filterBtn.on("click", updatePage());