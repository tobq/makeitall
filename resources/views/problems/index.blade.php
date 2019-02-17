@extends("layouts.base")
@section("head")
    <meta name = 'csrf-token' content = '{{@csrf_token()}}'>
    <link rel="stylesheet" href="/css/dashboard.css"/>
    <link rel="stylesheet" href="/css/problem.css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="/js/dropdown.js"></script>
@endsection
@section("title")
    Problems
@endsection
@section("content")
    <div id="problemtitle"><h2>Problem ID</h2><h2>Title</h2><h2>Creation Date</h2><h2>Urgency</h2></div>
    <div class="spacing"></div>
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
                <button class = 'edit' >Edit</button>
                <button class = 'solve' >Solve</button>
                ";
                ?>

            <?php echo "<form class = 'solvededitform' id = 'editform{$problem[$i]->id}'>"; ?>
                <p class = 'formheader'> Edit problem form</p>
                <div class="underline formunderline"></div>
                Description:<textarea class = 'formtextarea' name = 'description'>{{ $problem[$i]->description }}</textarea>
                <div class = 'priority'>
                    Urgency:
                    <label>
                        @php
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
                <?php echo"<button type = 'submit' class = 'confirmsolved' onclick = 'edit(event,{$problem[$i]->id})'>Confirm</button>"; ?>
            </form>

            <?php echo "<form class = 'solvededitform' id = 'solvedform$i'>" ?>
                <p class = 'formheader'> Solve problem form</p>
                <div class="underline formunderline"></div>
                How was the problem solved: <textarea class = 'formtextarea'></textarea>
                <?php echo"<button type = 'update' class = 'confirmsolved' onclick = 'solve($i)'>Confirm</button>"; ?>
            </form>

            <?php
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
                // NEEDS A SOLVED COLUMN IN THE TABLE
                $tempstd = $problem[$i]->description;
                echo "
                <div class = 'descriptionheader'>How it was solved:</div>
                <div class = 'description'>$tempstd</div>
                ";
            }
            ?>
            <p class = 'associatedcalls'>Associated calls ⬇️</p>
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
                            <td colspan = "5">
                                <h2 style = 'text-align: center; width: 100%;'>No Associated calls</h2>
                            </td>
                            <?php
                            break;
                        }
                    }
                ?>
            </table>
        </div>
    @endfor
    </ul>
@endsection
