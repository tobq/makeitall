@extends('layouts.base')
@section('content')
        <!DOCTYPE html>
<html lang="en">
<head>
    <link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed" rel="stylesheet"> 
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link href="/css/employee.css" rel="stylesheet">
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
    //This section holds all employees
    $id = 0; //Set variable, id to 0 - this will be used to dynamically assign list elements an id ranging from 0 to the number of employees
    echo "<div>"; //Div will store employee list
    echo "<ul id='allList' style='position: relative; left:32px; top: 50px;'>"; //Create the list
    for($i = 0; $i < count($employee); $i++) { //Loop through the employees table and create a new list item at each iteration
        echo "<li style = 'padding: 6px 0px;'>";
        echo "<a onclick = 'myFunction($id)' href='#'>"; //When the row is clicked, a function is called to display a dropdown of all employee information
        //Output employee info in dropdown by pulling from database
        echo "<td style = 'font-size: 14pt;'><b>".$employee[$i] -> first_name." ".$employee[$i] -> last_name."</b></td>";
        echo "</a>";
        echo "<div style = 'font-size: 12pt;'> Employee ID: ".$employee[$i] -> id."</div>";
        echo "<div class = 'dropdown hidden' style = 'border-radius: 10px 10px 10px 10px;' id=$id>";
        echo "<div class = 'boxes'>";
        echo "<p style='position:relative; left:25px; top:25px;'><b style='font-size:20pt'>Information</b>"; echo '</br></br>';
        echo "<b>Name: </b>".$employee[$i] -> first_name.' '.$employee[$i] -> last_name; echo '</br>';
        echo '<b>Employee ID: </b> '.$employee[$i] -> id; echo "</br>";
        echo '<b>Job Title:</b> '.$employee[$i] -> job_title; echo "</br>";
        //Loop through department table to produce department name for each employee
        for($j=0; $j < count($department); $j++){
            if($employee[$i] -> department_id == $department[$j] -> id) {
                echo '<b>Department:</b> '.$department[$j] -> name; echo "</br>";
            }
        }
        echo '<b>Telephone Number:</b> '.$employee[$i] -> telephone;
        echo '</div>';
        //If an employee is a specialist, pull problems currently assigned to them from the database
        for($k=0; $k < count($specialist_problem); $k++) {
            if($specialist_problem[$k] -> specialist_id == $employee[$i] -> id) {
                echo "<div class = 'boxes' style='left:560px; bottom:350px; margin-left:7%;overflow-y:scroll;'>";
                echo '<p style="position:relative; margin-left: 20px; top: 20px;"><b style="font-size:20pt;">Current Problems</b>';
                echo "</br></br>";
                echo "<b>Problem ID:</b> ".$problem[$k] -> id; echo "</br>";
                echo "<b>Title: </b> ".$problem[$k] -> title; echo "</br>";
                echo "<b>Date Created:</b> ".$problem[$k] -> creation; echo "</br>";
                echo "<b>Priority:</b> ".$problem[$k] -> priority; echo "</br>";
                echo "<b>Description:</b> ".$problem[$k] -> description;
                echo "</p>";
                echo "</div>";
            }
        }
        echo "</p>";
        echo "</div>";
        echo "</li>";
        $id = $id + 1;

    }
    echo "</div>";

    $id1 = $id + 1;
    //This section holds all specialists
    echo "<div>"; //Div will store specialists list
    echo "<ul id = 'spclstList' class = 'hidden' style='position: relative; left:32px; top: 50px;'>";
    for($i = 0; $i < count($employee); $i++) { //Loop through the employees table and create a new list item at each iteration
        if(strpos($employee[$i] -> job_title, 'Specialist') !== false) {
            echo "<li style = 'padding: 6px 0px;'>";
            echo "<a onclick = 'myFunction($id)' href='#'>"; //When the row is clicked, a function is called to display a dropdown of all specialist information
            //Output specialist info in dropdown by pulling from database
            echo "<td style = 'font-size: 14pt;'><b>".$employee[$i] -> first_name." ".$employee[$i] -> last_name."</b></td>";
            echo "</a>";
            echo "<div style = 'font-size: 12pt;'> Employee ID: ".$employee[$i] -> id."</div>";
            echo "<div class = 'dropdown hidden' style = 'border-radius: 10px 10px 10px 10px;' id=$id>";
            echo "<div class = 'boxes'>";
            echo "<p style='position:relative; left:25px; top:25px;'><b style='font-size:20pt'>Information</b>"; echo '</br></br>';
            echo "<b>Name: </b>".$employee[$i] -> first_name.' '.$employee[$i] -> last_name; echo '</br>';
            echo '<b>Employee ID: </b> '.$employee[$i] -> id; echo "</br>";
            echo '<b>Job Title:</b> '.$employee[$i] -> job_title; echo "</br>";
            
            //Loop through department table to produce department name for each employee
            for($j=0; $j < count($department); $j++){
                if($employee[$i] -> department_id == $department[$j] -> id) {
                    echo '<b>Department:</b> '.$department[$j] -> name; echo "</br>";
                }
            }
            echo '<b>Telephone Number:</b> '.$employee[$i] -> telephone;
            echo "<div class = 'boxes' style='left:600px; bottom:237px; width:600px; margin-left:7%;overflow-y:scroll;'>";
            echo '<p style="position:relative; margin-left: 20px; top: 20px;"><b style="font-size:20pt;">Current Problems</b>';
            
            //Pull problems currently assigned to specialists from the database
            for($k=0; $k < count($specialist_problem); $k++) {
                if($specialist_problem[$k] -> specialist_id == $employee[$i] -> id) {
                    echo "</br></br>";
                    echo "<b>Problem ID:</b> ".$problem[$k] -> id; echo "</br>";
                    echo "<b>Title: </b> ".$problem[$k] -> title; echo "</br>";
                    echo "<b>Date Created:</b> ".$problem[$k] -> creation; echo "</br>";
                    echo "<b>Priority:</b> ".$problem[$k] -> priority; echo "</br>";
                    echo "<b>Description:</b> ".$problem[$k] -> description;
                    echo "</p>";
                    echo "</div>";
                }
            }
            echo '</p>';
            echo "</p>";
            echo "</div>";
            echo "</li>";
            $id = $id + 1;
        }
    }
    echo "</div>";

    $id2 = $id1 + 1;

    //This will contain all non specialists
    echo "<div>";
    echo "<ul id = 'othrList' class = 'hidden' style='position: relative; left:32px; top: 50px;'>";
    for($i = 0; $i < count($employee); $i++) {
        if(strpos($employee[$i] -> job_title, 'Specialist') == false) {
            echo "<li style = 'padding: 6px 0px;'>";
            echo "<a onclick = 'myFunction($id)' href='#'>"; //When the row is clicked, a function is called to display a dropdown of all non specialist information
            //Output non specialist info in dropdown by pulling from database
            echo "<td style = 'font-size: 14pt;'><b>".$employee[$i] -> first_name." ".$employee[$i] -> last_name."</b></td>";
            echo "</a>";
            echo "<div style = 'font-size: 12pt;'> Employee ID: ".$employee[$i] -> id."</div>";
            echo "<div class = 'dropdown hidden' style = 'border-radius: 10px 10px 10px 10px;' id=$id>";
            echo "<p style='position:relative; left:25px;'><b>Name: </b>".$employee[$i] -> first_name." ".$employee[$i] -> last_name; echo "</br>";
            echo '<b>Employee ID: </b> '.$employee[$i] -> id; echo "</br>";
            echo '<b>Job Title:</b> '.$employee[$i] -> job_title; echo "</br>";

            //Loop through department table to produce department name for each employee
            for($j=0; $j < count($department); $j++){
                if($employee[$i] -> department_id == $department[$j] -> id) {
                    echo '<b>Department:</b> '.$department[$j] -> name; echo "</br>";
                }
            }
            echo '<b>Telephone Number:</b> '.$employee[$i] -> telephone;
            echo "</p>";
            echo "</div>";
            echo "</li>";
            $id = $id + 1;
        }
    }
    echo "</div>";
    ?>
    <?php

    ?>
    </ul>
</div>
<script type = text/javascript>
    function all1(){ //Set filter tab colour based on which one is clicked 
        document.getElementById("all").style.backgroundColor = "#f0dd75";
        document.getElementById("oth").style.backgroundColor = "#d3d3d3";
        document.getElementById("spc").style.backgroundColor = "#d3d3d3";
        document.getElementById("allList").className = "unhidden";
        document.getElementById("spclstList").className = "hidden";
        document.getElementById("othrList").className = "hidden";
    }
    function spc() { //Set filter tab colour based on which one is clicked 
        document.getElementById("all").style.backgroundColor = "#d3d3d3";
        document.getElementById("oth").style.backgroundColor = "#d3d3d3";
        document.getElementById("spc").style.backgroundColor = "#f0dd75";
        document.getElementById("allList").className = "hidden";
        document.getElementById("spclstList").className = "unhidden";
        document.getElementById("othrList").className = "hidden";
    }
    function oth() {  //Set filter tab colour based on which one is clicked 
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