<!-- blade template layouts -->
@extends("layouts.base")
@section("head")
    <!-- validation token -->
    <meta name = 'csrf-token' content = '{{@csrf_token()}}'>
    <!-- CSS linking -->
    <link rel="stylesheet" href="/css/dashboard.css"/>
    <link rel="stylesheet" href="/css/problem.css"/>
    <!-- JS linking -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="/js/dropdown.js"></script>
    <script src="/js/Solutions.js" async defer></script>
@endsection
@section("title")
    Problems
@endsection
@section("content")
    <!-- Headers for the columns  -->
    <div id="problemtitle"><h2>Problem ID</h2><h2>Title</h2><h2>Creation Date</h2><h2>Urgency</h2></div>
    <!-- Spacing   -->
    <div class="spacing"></div>
    <ul>
        <!-- loop through each problem record -->
    @for($i = 0; $i < count($problem); $i++)
        <!-- List of infomation in the problem table -->
        <li class = 'problembutton'>
            <div class="problembuttoncontents">{{ $problem[$i]->id }}</div>
            <div class="problembuttoncontents">{{ $problem[$i]->title }}</div>
            <div class="problembuttoncontents">{{ $problem[$i]->creation }}</div>
            <div class="problembuttoncontents">
                <?php
                $x = $problem[$i]->priority;
                $solvedcheck = false;
                // checks if there is a solution
                for($j = 0; $j < count($problem_solution); $j++) {
                    if ($problem_solution[$j]->problem_id == $problem[$i]->id) {
                        $solvedcheck = true;
                        echo "<div class = 'prioritybeggining'>Solved</div> ";
                    }
                }
                // determines what to output based on the priority
                if($x == 1 && $solvedcheck==false){
                    echo "<div class= 'priorityending' style = 'background-color: lightgreen'>low</div>";
                }
                else if($x == 2 && $solvedcheck==false){
                    echo "<div class= 'priorityending' style = 'background-color: yellow'>normal</div>";
                }
                else if($x == 3 && $solvedcheck==false){
                    echo "<div class= 'priorityending' style = 'background-color: #ff6666'>high</div>";
                }
                ?>
            </div>
        </li>
        <!-- Contains the infomation that appears when you click the button -->
        <div class = 'dropdown'>
            <div class = "descriptionheader">Description: </div>
            <div class = "description">{{ $problem[$i]->description }}</div>
            <?php

            // if the problem hasn't been solved
            if ($x!=0){
                echo "
                <button class = 'edit' >Edit</button>
                <button class = 'solve' >Solve</button>
                ";
                ?>
            <!-- Creates a edit form which is used to edit the corresponding problem -->
            <?php echo "<form class = 'solvededitform' id = 'editform{$problem[$i]->id}'>"; ?>
                <p class = 'formheader'> Edit problem form</p>
                <div class="underline formunderline"></div>
                <!-- Edit  description -->
            Description:<textarea class = 'formtextarea' name = 'description'>{{ $problem[$i]->description }}</textarea>
                <!-- Edit priority -->
                <div class = 'priority'>
                    Urgency:
                    <label>
                        @php
                            // PHP used to give unique IDs
                            echo "<input id = 'low$i' type = 'radio' name = 'editPriority' value = '1'/>Low";
                        @endphp
                    </label>
                    <label>
                        @php
                            echo "<input id = 'normal$i' type = 'radio' name = 'editPriority' value = '2'/>Normal";
                        @endphp
                    </label>
                    <label>
                        @php
                            echo "<input id = 'high$i' type = 'radio' name = 'editPriority' value = '3'/>High";
                        @endphp
                    </label>
                </div>
                <!-- Confirm button, which submits the edit by triggering a js function -->
                <button type = 'submit' class = 'confirmsolved' onclick = 'edit({{$problem[$i]->id}})'>Confirm</button>
            </form>

            <!-- Solved form -->
            <?php echo "<form class = 'solvededitform' id = 'solvedform$i'>" ?>
                <p class = 'formheader'> Solve problem form</p>
                <!-- Where the employee select will be -->
                <div class="multiselect-con"></div>
                <div class="underline formunderline"></div>
                <p class = 'howwas'>How was the problem solved:</p> <textarea class = 'formtextarea' name = 'description'></textarea>
                <?php echo"<button type = 'update' class = 'confirmsolved' onclick = 'solve($i)'>Confirm</button>"; ?>
            </form>

            <?php
                // Sets the checked priority
                $priority = $problem[$i]-> priority;
                if ($priority == 1){
                    echo "<script>document.getElementById('low$i').checked = true;</script>";
                }
                else if ($priority == 2){
                    echo "<script>document.getElementById('normal$i').checked = true;</script>";
                }
                else if ($priority == 3){
                    echo "<script>document.getElementById('high$i').checked = true;</script>";
                }

            } else {
                // Triggers if the problem has already been solved
                echo "<div class = 'descriptionheader'>How it was solved:</div>";
                for($k = 0; $k < count($problem_solution); $k++) {
                    if ($problem_solution[$k]->problem_id == $problem[$i]->id) {
                        // Retrieves description of how it was solved
                        echo "<div class = 'description'>{$problem_solution[$k]->description}</div>";
                    }
                }
            }
            ?>
            <p class = 'associatedcalls'>Associated calls ⬇️</p>
            <!-- Table of associated calls -->
            <table class = 'associatedcallstable'>
                <tr>
                    <th class = 'notreason'>
                        Call ID
                    </th>
                    <th class = 'notreason'>
                        Operator ID
                    </th>
                    <th class = 'notreason'>
                        Caller ID
                    </th>
                    <th class = 'notreason'>
                        Date
                    </th>
                    <th class = 'reason'>
                        Reason
                    </th>
                </tr>
                <?php
                    // Fors and ifs are retrieving the calls related to the problem
                    for($cp = 0; $cp < count($call_problem); $cp++){
                        if($call_problem[$cp]->problem_id == $problem[$i]->id){
                            for($c = 0; $c < count($call); $c++){
                                if($call[$c]->id==$call_problem[$cp]->call_id){
                                    ?>
                                    <tr>
                                        <td>
                                            <p class = 'notreasonfield callid'>{{ $call[$c]->id }}</p>
                                        </td>
                                        <td>
                                            <p class = 'notreasonfield calloperatorid'>{{ $call[$c]->operator_id }}</p>
                                        </td>
                                        <td>
                                            <p class = 'notreasonfield callcallerid'>{{ $call[$c]->caller_id }}</p>
                                        </td>
                                        <td>
                                            <p class = 'notreasonfield calldate'>{{ $call[$c]->date }}</p>
                                        </td>
                                        <td>
                                            <p class = 'callreason'>{{ $call[$c]->reason }}</p>
                                        </td>
                                    </tr>
                                    <?php
                                }
                            }
                        }
                        else {
                            ?>
                            <!-- outputs if there are no associated calls -->
                            <td colspan = "5">
                                <h2 style = 'text-align: center; width: 100%;'>No Associated calls</h2>
                            </td>
                            <?php
                            // exits the loop
                            break;
                        }
                    }
                ?>
            </table>
        </div>
    @endfor
    </ul>
@endsection
