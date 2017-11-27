var dps = [];   //dataPoints. 
var chart;
var startTime;

var watchID;
var accelerometerOptions = { frequency: 100 };  // Update every 2 seconds

$(document).on("pagecreate", "#chartPage", function () {
	
	//store start time in unixtime 
	startTime = Date.now();
	
	//set uplistener for button
	$('#addButton').on('click', function() {
        
        
        updateFreq();
	
		
		
	});
	
	//setup chart
    chart = new CanvasJS.Chart("chartContainer",{
      	title :{
      		text: "A random chart"
      	},
      	axisX: {						
      		title: "Random Values"
      	},
      	axisY: {						
      		title: "Time (seconds)"
      	},
      	data: [{
      		type: "line",
      		dataPoints : dps
      	}]
   	});
	
	  
});

function startSensor() {
	watchID = navigator.accelerometer.watchAcceleration( accelerometerSuccess, accelerometerError, accelerometerOptions);
}


function stopSensor() {
	navigator.accelerometer.clearWatch(watchID);
}

function accelerometerSuccess(acceleration) {
	//set new random y values
    yVal = acceleration.y;

    //x value is time since start 
    xVal = Date.now() - startTime;
    //concert from milliseocnds to seconds (divide by a thousand)
    xVal = xVal / 1000;

    //add them to the data points to draw
    dps.push({x: xVal,y: yVal});

    //don't let the chart get too big 
    //if there are more than 100 data points then start removing older data points
    if (dps.length >  100 )
    {
        dps.shift();				
    }

    //redraw the chart
    chart.render();		
}

function updateFreq() {
	//do something to update freq. here.
    
    stopSensor();
    starSensor();
    
   
}

function updateChart(random) {
      	
      	//set new random y values
      	yVal = acceleration.y;
		
		//x value is time since start 
		xVal = Date.now() - startTime;
		//concert from milliseocnds to seconds (divide by a thousand)
		xVal = xVal / 1000;
      	
		//add them to the data points to draw
		dps.push({x: xVal,y: yVal});
      	
		//don't let the chart get too big 
		//if there are more than 100 data points then start removing older data points
      	if (dps.length >  100 )
      	{
      		dps.shift();				
      	}

		//redraw the chart
      	chart.render();		
	  }
