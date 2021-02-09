

function displayChart() {
    var table = '';
    var rows = document.getElementById("rows").value;
    var colmns = document.getElementById("columns").value;
    for (var r = 1; r <= rows; r++) {
        table += '<tr>';
        for (var c = 1; c <= colmns; c++) {
            table += '<td>' + 'Column: ' + c + ' Row: ' + r +  '</td>'; 
        }
        table += '</tr>';
    }
    document.getElementById("displayTable").innerHTML = '<table border=1>' + table + '</table>'

}