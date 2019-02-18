<!-- blade template layouts -->
@extends("layouts.base")
@section("head")
    <link rel="stylesheet" href="/css/dashboard.css"/>
    <link rel="stylesheet" href="/css/calls.css"/>
@endsection
@section("title")
    Calls
@endsection
@section("content")
    <!-- creates table to contain calls -->
    <table class = 'associatedcallstable'>
        <!-- creates row of headers -->
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
        <!-- Loop and reads all the columns in the call table -->
        @for($c = 0; $c < count($call); $c++)
        <tr>
            <td class="rowspace">
                <p class = 'notreasonfield'>{{ $call[$c]->id }}</p>
            </td>
            <td class="rowspace">
                <p class = 'notreasonfield'>{{ $call[$c]->operator_id }}</p>
            </td>
            <td class="rowspace">
                <p class = 'notreasonfield'>{{ $call[$c]->caller_id }}</p>
            </td>
            <td class="rowspace">
                <p class = 'notreasonfield'>{{ $call[$c]->date }}</p>
            </td>
            <td class="rowspace">
                <p class = 'callreason'>{{ $call[$c]->reason }}</p>
            </td>
        </tr>
        @endfor
    </table>
@endsection
