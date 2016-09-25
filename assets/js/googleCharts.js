google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          nytScoreChart,wapScoreChart,cnnScoreChart,bbcScoreChart,foxScoreChart,sagScoreChart,tgnScoreChart,teeScores
        ]);

        var options = {
          title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }


      //paste this in html to use this graph <div id="curve_chart" style="width: 100%; height: 500px"></div>