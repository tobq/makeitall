@extends("layouts.base")
@section("head")
    <link rel="stylesheet" href="/css/homepage.css"/>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet">
@endsection
{{--The user is greeted with their name--}}
@section("title")
    Welcome {{Session::get('name')}}
@endsection
@section("content")
    {{--the page starts with problem statistics to give them an overview of the company wide problem changing process--}}
    <section class="statistics">
        <h3 id="stat">Problem Statistics</h3>
        <div class="background">
            <div class="none">
                <div class="av-sp">
                    <div class="icons">
                        <m class="material-icons">
                            person
                        </m>
                    </div>
                    {{--pulls statistics out of database--}}
                    <?php
                    echo "<h1>";
                    $count = 0;
                    echo DB::select('SELECT count(employee_id) c from specialist WHERE employee_id NOT IN (SELECT employee_id from specialist_problem)')[0]->c;
                    echo "</h1>";
                    ?>
                    <div class="spec">
                        <h4>Available</h4>
                        <h4>Specialists</h4>
                    </div>
                </div>
                <div class="av-sp2">
                    <div class="icons">
                        <m class="material-icons">
                            error_outline
                        </m>
                    </div>
                    <?php
                    //each employee in employee that is a specialist that has
                    echo "<h1>";
                    echo DB::select('SELECT count(id) c from problem WHERE id NOT IN (SELECT problem_id from problem_solution)')[0]->c;
                    echo "</h1>"
                    ?>
                    <div class="spec">
                        <h4>Unsolved</h4>
                        <h4>Problems</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {{--most recent problems are ordered and displayed on the page in a sleek horizontal scroll--}}
    <section class="recent-heading">
        <h3>Recent Problems</h3>
        <div class="recent">
            <h5 id="most">< Most Recent</h5>
            <h5 id="less">Less Recent ></h5>
        </div>
    </section>

    <section class="card">
        <?php
        for ($i = 0; $i < count($problem); $i++) {
            echo "<div class='card--content'>";
            echo "<div class='container-head'>";
            echo "<p class='problem-id'>Problem ID: {$problem[$i]->id}";
            echo "</p>";
            echo "<p class='date'>Created: {$problem[$i]->creation}";
            echo "</p>";
            echo "</div>";
            echo "<p class='problem-title'>{$problem[$i]->title}";
            echo "</p>";
            echo "<p class='desc'>{$problem[$i]->description}";
            echo "</p>";
            echo "</div>";
        }
        ?>
    </section>
    <section class="recent-heading">
        <h3>Urgent Problems</h3>
        <div class="recent">
            <h5 id="most">These problems have the highest urgency</h5
        </div>
    </section>
    {{--problems with 'high' as their urgency (3, the highest value) are displayed seperately so they can be monitored--}}
    <section id="urgent" class="card">
        <?php
        foreach ($problem as $prob) {
            if ($prob->priority == 3) {
                echo "<div class='card--content'>";
                echo "<p class='problem-id'>Problem ID: {$prob->id}";
                echo "</p>";
                echo "<p class='date'>Created: {$prob->creation}";
                echo "</p>";
                echo "<p class='problem-title'>" . $prob->title;
                echo "</p>";
                echo "<p class='desc'>" . $prob->description;
                echo "</p>";
                echo "</div>";
            }
        }
        ?>
    </section>


@endsection
