@extends("layouts.base")
@section("content")
<!DOCTYPE html>
<head>
<style>
#body-content { /* style body conten */
	width: 100%;
	right: 30px;
	bottom: 30px;
	position: relative;
}
.tab {
  background-color: #d3d3d3; /* set background colour for unactive tabs */
  margin-bottom: 80px;
}

.tab button { /* style the button */
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  border-radius: 0px 0px 10px 10px;
  margin: 2px;
  width: 175px;
  font-size: 16px;
  height: 40px;
}

.tab button:hover {/* set hover colour */
  background-color: #d3d3d3;
}

.tab button.active { /* set active colour */
  background-color: #f0dd75;
}

.tabcontent {
	display: none;
}

li { /* order and style the list */
    font: 200 20px/1.5 Helvetica, Verdana, sans-serif;
    border-bottom: 1px solid #ccc;
    width: 1280px;
	list-style: none;
	padding-left: 20px;
}

li:last-child {
    border: none;
}

li a { /* hover over specific list */
    text-decoration: none;
    color: #000;
    -webkit-transition: font-size 0.3s ease, background-color 0.3s ease;
    -moz-transition: font-size 0.3s ease, background-color 0.3s ease;
    -o-transition: font-size 0.3s ease, background-color 0.3s ease;
    -ms-transition: font-size 0.3s ease, background-color 0.3s ease;
    transition: font-size 0.3s ease, background-color 0.3s ease;
    display: block;
    width: 1280px;
}

li a:hover {
    font-size: 30px;
    background: #f7f7f9;
}

</style>
<script>
function openTab(evt, tabs) { //create function for tabs
  var i, tabcontent, tablinks;  //declare variables

  tabcontent = document.getElementsByClassName("tabcontent"); //search for all elements with class tab elements
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  

  tablinks = document.getElementsByClassName("tablinks"); // search for all elements with class tablinks
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabs).style.display = "block"; 
  evt.currentTarget.className += " active"; // show the current tab
}
</script>
</head>
<body>
@section("title")
Equipment
@endsection
<div class="tab"> <!-- create tabs to navigate between software and hardware -->
<button class="tablinks" onclick="openTab(event, 'AuthorisedSoftware')">Software</button>
<button class="tablinks" onclick="openTab(event, 'EquipmentPage')">Hardware</button>
</div>
<div id='AuthorisedSoftware' class='tabcontent'> <!-- create content for software tab -->
<?php
$user = DB::table('software')->where('id', '1')->first(); //retrieve information from the database and store it in variable
echo "<li><a>"; echo "ID: ".$user->id . "&emsp;&emsp;&emsp;"; echo "Name: ".$user->name . "&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;"; echo "Vendor: ".$user->vendor; echo "</a></li>"; //display information for software with ID 1
echo "<br/>";
$user1 = DB::table('software')->where('id', '2')->first();
echo "<li><a>"; echo "ID: ".$user1->id . "&emsp;&emsp;&emsp;"; echo "Name: ".$user1->name . "&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;"; echo "Vendor: ".$user1->vendor; echo "</a></li>"; //display information for software with ID 2
echo "<br/>";
$user2 = DB::table('software')->where('id', '3')->first();
echo "<li><a>"; echo "ID: ".$user2->id . "&emsp;&emsp;&emsp;"; echo "Name: ".$user2->name . "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"; echo "Vendor: ".$user2->vendor; echo "</a></li>"; //display information for software with ID 3
echo "<br/>";
$user3 = DB::table('software')->where('id', '4')->first();
echo "<li><a>"; echo "ID: ".$user3->id . "&emsp;&emsp;&emsp;"; echo "Name: ".$user3->name . "&emsp;&emsp;&emsp;"; echo "Vendor: ".$user3->vendor; echo "</a></li>"; //display information for software with ID 4
echo "<br/>";
$user4 = DB::table('software')->where('id', '5')->first();
echo "<li><a>"; echo "ID: ".$user4->id . "&emsp;&emsp;&emsp;"; echo "Name: ".$user4->name . "&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;"; echo "Vendor: ".$user4->vendor; echo "</a></li>"; //display information for software with ID 5
echo "<br/>";
$user5 = DB::table('software')->where('id', '6')->first();
echo "<li><a>"; echo "ID: ".$user5->id . "&emsp;&emsp;&emsp;"; echo "Name: ".$user5->name . "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"; echo "Vendor: ".$user5->vendor; echo "</a></li>"; //display information for software with ID 6
?>
</div>
<div id='EquipmentPage' class='tabcontent'> <!-- create content for hardware tab -->
<?php
$user = DB::table('hardware')->where('id', '1')->first();
echo "<li><a>";echo "ID: ".$user->id . "&emsp;&emsp;&emsp;";echo "Name: ".$user->name . "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;";echo "Manufacturer: ".$user->manufacturer;echo "</a></li>";
echo "<br/>";
$user1 = DB::table('hardware')->where('id', '2')->first();
echo "<li><a>"; echo "ID: ".$user1->id . "&emsp;&emsp;&emsp;"; echo "Name: ".$user1->name . "&emsp;&emsp;&emsp;&emsp;&emsp;"; echo "Manufacturer: ".$user1->manufacturer; echo "</a></li>";
echo "<br/>";
$user2 = DB::table('hardware')->where('id', '3')->first();
echo "<li><a>"; echo "ID: ".$user2->id . "&emsp;&emsp;&emsp;"; echo "Name: ".$user2->name . "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"; echo "Manufacturer: ".$user2->manufacturer; echo "</a></li>";
echo "<br/>";
$user3 = DB::table('hardware')->where('id', '4')->first();
echo "<li><a>"; echo "ID: ".$user3->id . "&emsp;&emsp;&emsp;"; echo "Name: ".$user3->name . "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"; echo "Manufacturer: ".$user3->manufacturer; echo "</a></li>";
echo "<br/>";
$user5 = DB::table('hardware')->where('id', '5')->first();
echo "<li><a>"; echo "ID: ".$user5->id . "&emsp;&emsp;&emsp;"; echo "Name: ".$user5->name . "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"; echo "Manufacturer: ".$user5->manufacturer; echo "</a></li>";
echo "<br/>";
$user6 = DB::table('hardware')->where('id', '6')->first();
echo "<li><a>"; echo "ID: ".$user6->id . "&emsp;&emsp;&emsp;"; echo "Name: ".$user6->name . "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"; echo "Manufacturer: ".$user6->manufacturer; echo "</a></li>";
?>
</div>
</body>
</html>
@endsection