    
    
    // Toggle the side navigation  
    const Btn = document.body.querySelector('#sidebarToggleBtn');
    const fullPage = document.body.querySelector('#fullPage');
    Btn.addEventListener("click",function(){
    });
//dataTable
$(document).ready(function () {
$('#myTable').DataTable({
    "ajax": '../json/data.json',
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

