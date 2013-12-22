//module pattern
(function() {
	//Load the json data for france.
	$.ajax({
      url: '/data/france-departements',
      type: "GET",
      dataType: "json",
      success: function (data) {
		drawMap(data);
		//$('div#dataContainer').html(JSON.stringify(data));
      }
	});

	function drawMap(geojson){
      //Define the current with and heigth
      var width = 600;
      var height = 400;
      var path = d3.geo.path();
      //Define a coherent projection.
      var projection = d3.geo.conicConformal() // Lambert-93
                             .center([2.454071, 47.279229]) // Center on the french map.
                             .scale(2000);
      //set the projection to the current path.
      path.projection(projection);

      //Svg in the map container.
       var svg = d3.select('div#map').append("svg")
                   .attr("width", width)
                   .attr("height", height);
 
      var deps = svg.append("g")
                    .attr("id", "departements");
      //Load the features
      var features = deps.selectAll("path")
                         .data(geojson.features);
      //Create the color scale. 
      var colorScale = d3.scale.category20c();

      features.enter()
              .append("path")
              .attr('class', 'departement')
              .attr('fill', function(d) { 
                return colorScale(+d.properties.CODE_DEPT); 
              })
             .attr("d", path)
             .on('click', countyClickHandler);

      var centered;
	function countyClickHandler(d){
		console.log('data:', d)
		$('div#name').html(d.properties.NOM_DEPT);
		//Source: http://bl.ocks.org/mbostock/2206340
        var x, y, k;
        if (d && centered !== d) {
            var centroid = path.centroid(d);
            x = centroid[0];
            y = centroid[1];
            k = 5;
            centered = d;
        } else {
            x = width / 2;
            y = height / 2;
            k = 1;
            centered = null;
        }
 
        deps.selectAll("path")
            .classed("active", centered && function(d) { return d === centered; });
 
        var trStr = "translate(" + width / 2 + "," + height / 2 + ")" +
            "scale(" + k + ")translate(" + -x + "," + -y + ")";
         
        deps.transition()
            .duration(1000)
            .attr("transform", trStr);
		console.log('click handler');
	}
 
	}
	

}());
