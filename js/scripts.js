    
    
    // Toggle the side navigation  
    
//dataTable
$(document).ready(function () {
$('#myTable').DataTable({
    "ajax": 'json/data.json',
    "columns": [
        { "data": 'name' },
        { "data": 'address' },
        { "data": 'city' },
        { "data": 'age' },
        { "data": 'last visit' },
        { "data": 'orders' }
    ]
})


});


