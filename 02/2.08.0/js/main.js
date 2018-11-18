/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/
var svg = d3.select("#chart-area")
    .append("svg")
    .attr("width", "400")
    .attr("height", "400");

d3.json("../data/buildings.json").then(function(data){
    data.forEach(element => {
        console.log(element);
        element.height = +element.height;
        console.log(element);
    });
    var rects = svg.selectAll("rect")
    .data(data)
    .enter().append("rect")
        .attr("y",0)
        .attr("x", (d,i) => i*60)
        .attr("width", 40)
        .attr("height", (d,i) => d.height)
        .attr("fill", "grey")
    .data(data);



});
