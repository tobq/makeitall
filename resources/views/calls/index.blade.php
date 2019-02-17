@extends("layouts.base")
@section("head")
    <link rel="stylesheet" href="/css/dashboard.css"/>
    <link rel="stylesheet" href="/css/calls.css"/>
@endsection
@section("title")
    Calls
@endsection
@section("content")
    @for($c = 0; $c < count($call); $c++)
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
    </table>
    @endfor
@endsection
