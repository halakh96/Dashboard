
// Line Chart for Orders
const ordersChart = document.getElementById('myAreaChart').getContext('2d');

const myAreaChart = new Chart(ordersChart, {
    type: 'line',
    data: {
        labels: ['Aug1', 'Aug3', 'Aug5', 'Aug7', 'Aug9', 'Aug11','Aug13'],
        datasets: [{
            label: '# of Votes',
            data: [0.8, 2.5, 2,3.2, 3.3,2,4],
            backgroundColor: 'rgba(55, 49, 94,0.7)',
            borderColor: 'rgb(218, 65, 103)',
            borderWidth: 2,
            tension:0.3,
            fill:true
        }]
    },
    options: {
        scales: {
          
             y: {
                beginAtZero: true,
             },
           
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
                data: [400,400,1400,500,700,1000,1200],
                label: "Men",
                backgroundColor: 'rgb(55, 49, 94)',
              }, { 
                data: [600,600,1500,700,1000,1300,1400],
                label: "Women",
                backgroundColor: 'rgb(218, 65, 103)',
              }
            ]
          },
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
                "rgb(220, 92, 124)",
              "rgb(55, 49, 94)",
              "rgb(218, 65, 103)",
              "rgb(64, 29, 186)"
            ],
            borderWidth:2,
            borderColor:"white"
          }]
      },
    options: {
      scales: {
        xAxes: [{ 
           display: false,
        }],
        yAxes: [{
           display: false,
        }],
      }
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
            backgroundColor: 'rgba(55, 49, 94,0.2)',
            borderColor: 'rgb(218, 65, 103)',
            borderWidth: 2,
            tension:0.5,
            fill:true
        }]
    },
    options: {
        scales: {
            
            y: {
                beginAtZero: true,
            },
            
           
        }
    }
    
});