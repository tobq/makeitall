@extends('layouts.base')
@section('content')
<!DOCTYPE html>
<html lang="en">
<head>
<link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <style>
		@import "compass/css3";
			html, body {
    	max-width: 100%;
			overflow-y: visible;
				}
		.mainPage {
			position: relative;
			width: 1280px;
			height: 700px;
			background-color: white;
			bottom: 28px;
			left: -390px;
		}
		.show {display: block;}
		.spclstTab {
        border-radius: 0px 0px 10px 10px;
        box-shadow: none;
        outline: none;
        width: 15%;
        height: 40px;
        margin-top: 0.2%;
        font-size: 20px;
        position: relative;
        bottom: 3px;
        left: 10px;
        }
		.hidden {
        display:none;
        }
    .unhidden{
        display:block;
      	}
		.dropdown {
			width: 1285px;
		  height: 400px;
			background: #d3d3d3;
			bottom: 60px;
			overflow: hidden;
		}
		ul {
		  list-style-type: none;
		  margin: 0;
		  padding: 0;
		}

		li {
		  font: 200 20px/1.5 Helvetica, Verdana, sans-serif;
			border-bottom: 1px solid #ccc;
			width: 1280px;
		}

		li:last-child {
		  border: none;
		}

		li a {
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
		  background: #ccebff;
		}
		a:link { color: #000000; text-decoration: none}
		a:visited { text-decoration: none; color:black; }
    </style>
    <title>Employees</title>
</head>

<body>
		@section("title")
    Employees
		@endsection
	<div class="mainPage">

			<button id="all" class="spclstTab" style="background: #f0dd75;" onclick = all1();>All</button>
			<button id="spc" class="spclstTab" style="background: #d3d3d3;" onclick = spc();>Specialists</button>
			<button id="oth" class="spclstTab" style="background: #d3d3d3;" onclick = oth();>Other</button>

			<?php
			$db = pg_connect("host=localhost dbname=makeitall user=postgres password=qwertyuiop");

				$query = "SELECT * FROM employee";
					$result = pg_query($query);
					if (!$result) {
							echo "Problem with query " . $query . "<br/>";
							echo pg_last_error();
							exit();
					}
			
			$id = 0;
			echo "<div>";
			echo "<ul id='allList' style='position: relative; left:32px; top: 50px;'>";
			while($row = pg_fetch_assoc($result)) {
				$empId = $row["id"];
				$fNAme = $row["first_name"];
				$lName = $row["last_name"];
				$job = $row["job_title"];
				$deptId = $row["department_id"];
				$deptQuery = "SELECT * FROM department WHERE id=".$deptId;
				$deptResult  = pg_query($deptQuery);
				$deptName;
				while($rowNew = pg_fetch_assoc($deptResult)) {
					$deptName = $rowNew["name"];
				}
				echo "<li style = 'padding: 6px 0px;'>";
				echo "<a onclick = 'myFunction($id)' href='#'>";
				echo "<td style = 'font-size: 14pt;'><b>".$row["first_name"]." ".$row["last_name"]."</b></td>"; 
				echo "</a>";
				echo "<div style = 'font-size: 12pt;'> Employee ID: $empId </div>";
				echo "<div class = 'dropdown hidden' style = 'border-radius: 10px 10px 10px 10px;' id=$id>";
					echo "<p style='position:relative; left:25px;'><b>Name:</b> $fNAme $lName"; echo "</br>";
					echo '<b>Employee ID:</b> '.$empId; echo "</br>";
					echo '<b>Job Title:</b> '.$job; echo "</br>";
					echo '<b>Department:</b> '.$deptName;
					echo "</p>";

				echo "</div>";
				echo "</li>";
				$id = $id + 1; 
				
			}
			echo "</div>";

			$query1 = "SELECT * FROM employee WHERE job_title LIKE '%Specialist%'";
			$result1 = pg_query($query1);

			if (!$result1) {
				echo "Problem with query " . $query1 . "<br/>";
				echo pg_last_error();
				exit();
			}
				
				$id1 = $id + 1;
				echo "<div>";
				echo "<ul id = 'spclstList' class = 'hidden' style='position: relative; left:32px; top: 50px;'>";
				while($row1 = pg_fetch_assoc($result1)) {
					$fNAme1 = $row1["first_name"];
					$lName1 = $row1["last_name"];
					$job1 = $row1["job_title"];
					$empId1 = $row1["id"];
					$deptId1	= $row1["department_id"];
					$deptQuery1 = "SELECT * FROM department WHERE id=".$deptId1;
					$deptResult1  = pg_query($deptQuery1);
					$deptName1;
					while($rowNew1 = pg_fetch_assoc($deptResult1)) {
						$deptName1 = $rowNew1["name"];
					}
					echo "<li style = 'padding: 6px 0px;'>";
					echo "<a onclick = 'myFunction1($id1)' href='#'>";
					echo "<td style = 'font-size: 14pt;'><b>".$row1["first_name"]." ".$row1["last_name"].'</b></td>'; 
					echo "</a>";
					echo "<div style = 'font-size: 12pt;'>Employee ID: $empId1 </div>";
					echo "<div class = 'dropdown hidden' style = 'border-radius: 10px 10px 10px 10px;' id=$id1>";
					  echo "<p style='position:relative; left:25px;'><b>Name:</b> $fNAme1 $lName1"; echo "</br>";
						echo '<b>Employee ID:</b> '.$empId1; echo "</br>";
						echo '<b>Job Title:</b> '.$job1; echo "</br>";
						echo '<b>Department:</b> '.$deptName1;
						echo "</p>";
						echo "</div>";
						echo "</li>";
					$id1 = $id1 + 1;
				}
				echo "</div>";

			$query = "SELECT * FROM employee WHERE job_title NOT LIKE '%Specialist%'";
			$result = pg_query($query);

			if (!$result) {
				echo "Problem with query " . $query . "<br/>";
				echo pg_last_error();
				exit();
			}

			$id2 = $id1 + 1;
			echo "<div>";
			echo "<ul id = 'othrList' class = 'hidden' style='position: relative; left:32px; top: 50px;'>";
			while($row2 = pg_fetch_assoc($result)) {
				$fNAme2 = $row2["first_name"];
				$lName2 = $row2["last_name"];
				$job2 = $row2["job_title"];
				$empId2 = $row2["id"];
				$deptId2	= $row2["department_id"];
					$deptQuery2 = "SELECT * FROM department WHERE id=".$deptId2;
					$deptResult2  = pg_query($deptQuery2);
					$deptName2;
					while($rowNew2 = pg_fetch_assoc($deptResult2)) {
						$deptName2 = $rowNew2["name"];
					}
				echo "<li style = 'padding: 6px 0px;'>";
				echo "<a onclick = 'myFunction2($id2)' href='#'>";
				echo "<td style = 'font-size: 14pt;'><b>".$row2["first_name"]." ".$row2["last_name"].'</b></td>';
				echo "</a>";
				echo "<div style = 'font-size: 12pt;'> Employee ID: $empId2 </div>";
				echo "<div class = 'dropdown hidden' style = 'border-radius: 10px 10px 10px 10px;' id=$id2>";
						echo "<p style='position:relative; left:25px;'><b>Name:</b> $fNAme2 $lName2"; echo "</br>";
						echo '<b>Employee ID:</b> '.$empId2; echo "</br>";
						echo '<b>Job Title:</b> '.$job2; echo "</br>";
						echo '<b>Department:</b> '.$deptName1;
						echo "</p>";
				echo "</div>";
				echo "</li>";
				$id2 = $id2 + 1;
			}
			echo "</div>";		
			 ?>
			 <?php
			 	
			 ?>
		</ul>
	</div>
<script type = text/javascript>
	function all1(){
		document.getElementById("all").style.backgroundColor = "#f0dd75";
    document.getElementById("oth").style.backgroundColor = "#d3d3d3";
    document.getElementById("spc").style.backgroundColor = "#d3d3d3";

		document.getElementById("allList").className = "unhidden";
		document.getElementById("spclstList").className = "hidden";
		document.getElementById("othrList").className = "hidden";
	}

	function spc() {
		document.getElementById("all").style.backgroundColor = "#d3d3d3";
    document.getElementById("oth").style.backgroundColor = "#d3d3d3";
    document.getElementById("spc").style.backgroundColor = "#f0dd75";

		document.getElementById("allList").className = "hidden";
		document.getElementById("spclstList").className = "unhidden";
		document.getElementById("othrList").className = "hidden";

	}

	function oth() {
		document.getElementById("all").style.backgroundColor = "#d3d3d3";
    document.getElementById("oth").style.backgroundColor = "#f0dd75";
    document.getElementById("spc").style.backgroundColor = "#d3d3d3";

		document.getElementById("allList").className = "hidden";
		document.getElementById("spclstList").className = "hidden";
		document.getElementById("othrList").className = "unhidden";
	}

	function myFunction($id) {
		document.getElementById($id).classList.toggle('hidden');
	}
	function myFunction1($id1) {
		document.getElementById($id1).classList.toggle('hidden');
	}
	function myFunction2($id2) {
		document.getElementById($id2).classList.toggle('hidden');
	}
	</script>
</body>
</html>
@endsection