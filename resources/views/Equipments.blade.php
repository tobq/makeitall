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

        .tab button:hover { /* set hover colour */
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

        .small {
            font-size: 15px;
        }

    </style>
    <script src="/js/equipments.js">
    </script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
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
    for ($i = 0; $i < count($software); $i++) {
        echo "<li>";
        echo "<a href='#'>";
        echo "<td>" . "Name: " . $software[$i]->name . "</td>";
        echo "</a>";
        echo "<div class = 'small'>" . "ID: " . $software[$i]->id . "&emsp;" . "Vendor: " . $software[$i]->vendor . "</div>";
        echo "</li>";
    }
    echo "
        <form id = 'softform'>
        ID: <input type = text name = 'id'>
        Name: <input type = text name = 'name'>
        Software: <input type = text name = 'software'>
        <button value = 'Add' id = 'addsoft' onclick = 'soft()'>Conform</button>
        <form>
        ";
    ?>
</div>
<div id='EquipmentPage' class='tabcontent'> <!-- create content for hardware tab -->
    <?php
    for ($i = 0; $i < count($hardware); $i++) {
        echo "<li>";
        echo "<a href='#'>";
        echo "<td>" . "Name: " . $hardware[$i]->name . "</td>";
        echo "</a>";
        echo "<div class = 'small'>" . "ID: " . $hardware[$i]->id . "&emsp;" . "Manufacturer: " . $hardware[$i]->manufacturer . "</div>";

        echo "</li>";
    }
    echo "
        <form id = 'hardform'>
        ID: <input type = text name = 'id'>
        Name: <input type = text name = 'name'>
        Hardware: <input type = text name = 'hardware'>
        <button value = 'Add' id = 'addhard' onclick = 'hard()'>Conform</button>
        <form>
        ";
    ?>
</div>
</body>
</html>
@endsection