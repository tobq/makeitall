@extends("layouts.base")
@section("head")
    <link rel="stylesheet" href="/css/dashboard.css"/>
    <link rel="stylesheet" href="/css/problem.css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="/js/dropdown.js"></script>
@endsection
@section("title")
    Problems
@endsection
@section("content")
    <div class="problemtitle"><h2>Problem ID</h2><h2>Title</h2><h2>Creation Date</h2><h2>Urgency</h2></div>
    <ul>
    @for($i = 0; $i < count($problem); $i++)
        <li class = 'problembutton'>
            <div class="problembuttoncontents">{{ $problem[$i]->id }}</div>
            <div class="problembuttoncontents">{{ $problem[$i]->title }}</div>
            <div class="problembuttoncontents">{{ $problem[$i]->creation }}</div>
            <div class="problembuttoncontents">
                <?php
                $x = $problem[$i]->priority;
                // NEED TO MAKE SOLVED BOOLEAN
                if ($x == 0){
                    echo "<div class = 'prioritybeggining'>Solved</div> ";
                }
                else if($x == 1){
                    echo "<div class = 'prioritybeggining'>Priority:</div><div class= 'priorityending' style = 'background-color: lightgreen'>low</div>";
                }
                else if($x == 2){
                    echo "<div class = 'prioritybeggining'>Priority:</div><div class= 'priorityending' style = 'background-color: yellow'>normal</div>";
                }
                else if($x == 3){
                    echo "<div class = 'prioritybeggining'>Priority:</div><div class= 'priorityending' style = 'background-color: #ff6666'>high</div>";
                }
                ?>
            </div>
        </li>
        <div class = 'dropdown'>
            <div class = "descriptionheader">Description: </div>
            <div class = "description">{{ $problem[$i]->description }}</div>
            <?php
            if ($x!=0){
                echo "
                <button class = 'solve' onclick ='solvefrom()'>Solve</button>
                <button class = 'edit' onclick ='editfrom()'>Edit</button>
                ";
            } else {
                // NEEDS A SOLVED COLUMN IN THE TABLE
                $tempstd = $problem[$i]->description;
                echo "
                <div class = 'descriptionheader'>How it was solved:</div>
                <div class = 'description'>$tempstd</div>
                ";
            }
            ?>
        </div>
    @endfor
    </ul>
@endsection
