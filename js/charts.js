
// Line Chart for Orders
const ordersChart = document.getElementById('myAreaChart').getContext('2d');

const myAreaChart = new Chart(ordersChart, {
    type: 'line',
    data: {
        labels: ['Aug1', 'Aug3', 'Aug5', 'Aug7', 'Aug9', 'Aug11','Aug13'],
        datasets: [{
            label: '# of Votes',
            data: [8000, 25000, 20000,32000, 30000,20000,40000],
            backgroundColor: 'rgba(24, 29, 49,0.6)',
            borderColor: 'rgb(103, 137, 131)',
            borderWidth: 3,
            tension:0.3,
            fill:true
        }]
    },

    options: {
      responsive: true,

        plugins:{
        legend:{
            display:false
        }},
        scales: {
          
             y: {
                beginAtZero: true,
                max:40000,
                min:0,
                ticks:{stepSize:10000},
               
             }
           
        }
    }
    
});

// Bar Chart for Visitor
var visitorChart = document.getElementById('myBarChart').getContext('2d');
      var myBarChart = new Chart(visitorChart, {
          type: 'bar',
          data: {
            labels: ["Jan", "Feb", "Mar", "April", "May", "June"],
            datasets: [{ 
                data: [4000,4500,13500,5000,7000,10000,12000],
                label: "Men",
                backgroundColor: 'rgba(24, 29, 49)',
              }, { 
                data: [6000,6000,15000,7000,10000,13000,14000],
                label: "Women",
                backgroundColor:  'rgb(103, 137, 131)',
              }
            ]
          },
          options:{
            responsive: true,

            scales:{
            y:{
              max:15000,
              min:0,
              ticks:{stepSize:5000}
            }
          }}
        });


// Liner Chart for Cities
var citiesChart = document.getElementById("myPieChart").getContext('2d');
var myPieChart = new Chart(citiesChart, {
    type: 'pie',
    data: {
        labels: ["Riyadh","Jeddah", "Sharqia","Mecca"],
        datasets: [{ 
            data: [40,20,10,30],
            backgroundColor: [
              'rgb(24, 29, 49)',
              'rgb(103, 137, 131)',
              'rgba(29, 34, 53,0.8)',
              'rgba(125, 167, 159,0.8)'
            ],
            borderWidth:2,
            borderColor:"white"
          }]
      },
    options: {
      maintainAspectRatio:false
    
    },
  });

// Liner Chart for Rat
var ratChart = document.getElementById("myLinearChart");

const myLinearChart = new Chart(ratChart, {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "April", "May", "June"],
        datasets: [{
            label: '# of Votes',
            data: [1,1.5,2.5,4,5,3],
            backgroundColor: 'rgba(24, 29, 49,0.2)',
            borderColor: 'rgb(103, 137, 131)',
            borderWidth: 2,
            tension:0.5,
            fill:true
        }]
    },
    options: {
      responsive: true,
        plugins:{
            legend:{
                display:false
            }
        },
        scales: {
            
            y: {
                beginAtZero: true,
                max:5,
                min:0,
                ticks:{stepSize:1}
            },
            
           
        }
    }
    
});