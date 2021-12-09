    
    
    // Toggle the side navigation  
    const sidebarToggle = document.body.querySelector('#sidebarToggle');

    
//dataTable
$(document).ready(function () {
$('#myTable').DataTable({
    ajax: {
        url: 'data.json',
     
    },
    columns: [
        { data: 'name' },
        { data: 'address' },
        { data: 'city' },
        { data: 'age' },
        { data: 'last visit' },
        { data: 'orders' }
    ]
})

});