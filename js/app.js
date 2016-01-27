$(document).ready(function() {

    var selectedDistrict = "Queens";

    $("#queens").click(function() {
        selectedDistrict = "Queens";
        $("#defaultselected1").text(selectedDistrict);
    });

    $("#bronx").click(function() {
        selectedDistrict = "Bronx";
        $("#defaultselected1").text(selectedDistrict);
    });

    $("#manhatten").click(function() {
        selectedDistrict = "Manhatten";
        $("#defaultselected1").text(selectedDistrict);
    });

    $("#brooklyn").click(function() {
        selectedDistrict = "Brooklyn";
        $("#defaultselected1").text(selectedDistrict);
    });

    $("#statenisland").click(function() {
        selectedDistrict = "Staten Island";
        $("#defaultselected1").text(selectedDistrict);
    });

    var enlisted = [];
   	
   	enlisted = JSON.parse(localStorage.getItem("enlisted"));


  //   	$("#tableinsert").append("<tr id='trojbect" + "" + "' >");
  //   	$("#trobject").append("<th>" + "bleh" + "</th>");
  // //   	$("#trobject" + counter).append("<th>" + lastname);
		// // $("#trobject" + counter).append("<th>" + person.email);
		// // $("#trobject" + counter).append("<th>" + person.district);
		// $("#tableinsert").append("</tr>");


	$.makeTable = function (mydata) {
    $.each(mydata, function (index, value) {
        var TableRow = "<tr>";
        $.each(value, function (key, val) {
            TableRow += "<td>" + val + "</td>";
        });
        TableRow += "</tr>";
        $("#tableinsert").append(TableRow);
        console.log(TableRow);
    });
    return ($(table));
};


    var mydata = eval(localStorage.getItem("enlisted"));
	var table = $.makeTable(mydata);
	$(table).appendTo("#enlistmenttable");

    function saveinfo(email, name, phoneNumber,district){

    	var person = function(email, name, phoneNumber, district){
    		this.fname = name.split(' ')[0];
    		this.lname = name.split(' ')[1];
    		this.email = email;
    		this.phoneNumber = phoneNumber;
    		this.district = district;
    	};

    	var currentList = [];

    	if(localStorage.getItem("enlisted") != null) {
    		currentList = JSON.parse(localStorage.getItem("enlisted"));
    	}

    	currentList.push(new person(email, name, phoneNumber, district));

    	localStorage.setItem("enlisted", JSON.stringify(currentList));
    }

    $("#submitbutton1").click(function(e) {
        e.preventDefault();
        var email = $("#InputEmail1").val();
        var name = $("#Inputfname1").val();
        var phoneNumber = $("#Inputphonenumber1").val();
        var agreementCheck = $("#agreementcheck").is(':checked');

        if(agreementCheck == false) {
   			$("#infoalert").text("Please agree to the terms and conditions");
   		} else if(email.length == 0) {
   			$("#infoalert").text("Please enter a valid email address");
   		} else if(phoneNumber.length == 0) {
   			$("#infoalert").text("Please enter a valid phone number");
   		} else if(name.length == 0) {
   			$("#infoalert").text("Please enter a valid Name");
   		} else {
   			saveinfo(email,name,phoneNumber, selectedDistrict);
   		}

   		console.log(agreementCheck);
    });

});
