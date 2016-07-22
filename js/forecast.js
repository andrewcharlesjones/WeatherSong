$('#push').click(function() {
	console.log('pushed')
	
	var postParameters = {};

		$.ajax({

	        url: 'https://api.forecast.io/forecast/06fb875fe64b04cde7670d7a0feb597c/' + currlat + ',' + currlng,
	        // data: {
	        //     q: responseObject[0].name,
	        //     type: 'track'
	        // },
	        success: function (response) {
	        	console.log(response)

	        	$('#curr_weather').html("<p>It is currently " + response.currently.apparentTemperature + " degrees where you are.</p>");
	           	
	        }
	    });
});
