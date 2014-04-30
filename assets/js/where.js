//Javascript and JSON for 'where does the money go' rollover tree map

//JSON content
var where_stats_data = { 
	//Tooltips 
	"statsOffshore" : [ 
		//Remember that the count starts at zero 
		//NOTE: img links are currently hard coded to gh pages site -- fix later -- figure out how to make these relative given that Jekyll won't parse JS files and so can't use {{ site.url }} 
		{ 
			//Array ID -> 0 
			"Title" : "U.S. Treasury", 
			"Content" : "Some offshore revenue goes into the U.S. General Fund, which is the same place that money from individual and corporate income taxes go. The General Fund pays for roughly two-thirds of all federal expenditures, including:", 
			"PayFor" : "This is where the images would go with what this fund pays for.",
			"Img1" : "<img src=\"http://meiqimichelle.github.io/d3-minihack/assets/img/icon_1397.svg\" alt=\"Dogtags\"><h3>U.S. Military</h3>",
			"Img2" : "<img src=\"http://meiqimichelle.github.io/d3-minihack/assets/img/icon_13130.svg\" alt=\"Park\"><h3>U.S. Parks</h3>",
			"Img3" : "<img src=\"http://meiqimichelle.github.io/d3-minihack/assets/img/icon_1567.svg\" alt=\"Book and test tube\"><h3>U.S. Schools</h3>"
		}, 
		{ 	
			//Array ID -> 1 
			"Title" : "States", 
			"Content" : "This will be information on how offshore revenues are used in states.", 
			"PayFor" : "This is where the images would go with what this fund pays for."
		}, 
		{ 	
			//Array ID -> 2
			"Title" : "Historic Preservation Fund", 
			"Content" : "The <a href=\"http\://www.nps.gov/history/hpg/\">Historic Preservation Fund</a> helps preserve U.S. historical and archaeological sites and cultural heritage through grants to State and Tribal Historic Preservation Offices. Some examples of activities include:", 
			"Img1" : "<img src=\"http://meiqimichelle.github.io/d3-minihack/assets/img/icon_1566.svg\" alt=\"City buildings\"><h3><a href=\"http\://www.michiganmodern.org/\">Survey Modernist Architecture, Michigan</a></h3>",
			"Img2" : "<img src=\"http://meiqimichelle.github.io/d3-minihack/assets/img/icon_10119.svg\" alt=\"Schoolhouse\"><h3><a href=\"http\://ncptt.nps.gov/blog/tribal-heritage-grants/\">Restore Peoria Schoolhouse, Peoria Tribe of Indians, Oklahoma</a></h3>",
			"Img3" : "<img src=\"http://meiqimichelle.github.io/d3-minihack/assets/img/icon_7038.svg\" alt=\"Video camera\"><h3><a href=\"http\://ncptt.nps.gov/blog/tribal-heritage-grants/\">Document Yup’ik Songs & Dances, Calista Elders Council of Alaska</a></h3>"
		},
		{ 	
			//Array ID -> 3
			"Title" : "Land & Water Conservation Fund", 
			"Content" : "The <a href=\"http\://www.nps.gov/lwcf/\">Land & Water Conservation Fund</a> program provides matching grants to states and local governments for the acquisition and development of public outdoor recreation areas. </p><p>Here are a few places that were funded by LWCF grants:", 
			"Img1" : "<img src=\"http://meiqimichelle.github.io/d3-minihack/assets/img/icon_16251.svg\" alt=\"Mountains\"><h3><a href=\"http\://www.emnrd.state.nm.us/SPD/eaglenestlakestatepark.html\">Eagle Nest Lake State Park, New Mexico</a></h3>",
			"Img2" : "<img src=\"http://meiqimichelle.github.io/d3-minihack/assets/img/icon_26235.svg\" alt=\"Playground\"><h3><a href=\"http\://www.mitchellparkdc.org/history.html\">Mitchell Park, District of Columbia</a></h3>",
			"Img3" : "<img src=\"http://meiqimichelle.github.io/d3-minihack/assets/img/icon_25079.svg\" alt=\"Baseball field\"><h3><a href=\"http\://www.ofallon.org/parks/pages/family-sports-park\">Family Sports Park, Illinois</a></h3>"
		}, 
	] 
}


//Javascript for switching out the content depending on hover location
$(document).ready(function() {
	$('.stats-offshore > div').click(function(){ //when hover starts 

			//Get the ID of the current tooltip
			active_square = $(this).attr('rel'); 

			//Replace the HTML in the header with data from JSON array
			$('#offshore h2').html(where_stats_data.statsOffshore[active_square].Title);
			$('#offshore p').html(where_stats_data.statsOffshore[active_square].Content);
			$('#payimgs div:nth-child(1)').html(where_stats_data.statsOffshore[active_square].Img1);
			$('#payimgs div:nth-child(2)').html(where_stats_data.statsOffshore[active_square].Img2);
			$('#payimgs div:nth-child(3)').html(where_stats_data.statsOffshore[active_square].Img3);
			//$('#offshore').css("background-image", "url("+ banner_data.tooltips[active_tooltip].PayFor + ")"); 

		})
		// function(){ //When hover ends 

		// 	//Reset offshore to defaults 
		// 	$('#offshore h2').html("Go On"); 
		// 	$('#offshore p').html("Hover over one of the sections for more information"); 
		// 	//$('#offshore').css("background-image", ''); 

		// })
});



// default div
// then append div depending on what you hover over