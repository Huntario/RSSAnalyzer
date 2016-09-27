$(function(){
	var data = {
		labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
		datasets: [
		{
			label: "Reddit",
			fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [.43, .56, .33, .44, .12, 1, -.5]
		},
		{
			label: "WA Post",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [-.43, .56, -.33, -.44, -.12, -.10, -1]
		},
		{
			label: "CNN",
            fillColor: "rgba(196,151,205,0.2)",
            strokeColor: "rgba(196,151,205,1)",
            pointColor: "rgba(196,151,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(196,151,205,1)",
            data: [.40, .22, .12, .22, .44, -1, -.10]	
		},
		{
			label: "FOX",
            fillColor: "rgba(160,205,151,0.2)",
            strokeColor: "rgba(160,205,151,1)",
            pointColor: "rgba(160,205,151,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(160,205,151,1)",
            data: [.34, .56, .67, .45, .40, -.66, .10]
		},
		{
			label: "BBC",
            fillColor: "rgba(209,138,179,0.2)",
            strokeColor: "rgba(209,138,179,1)",
            pointColor: "rgba(209,138,179,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(209,138,179,1)",
            data: [-.20, -.92, -.42, -.62, -.54, -1, -.75]
		}]
	};

	var option = {
		responsive: true,
	};

	// get the context of the canvas element we want to select
	var ctx = document.getElementById("myChart").getContext('2d');
	var myLineChart = new Chart(ctx).Line(data, option);
	// 'line' defines type of the chart
});