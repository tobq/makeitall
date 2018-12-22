@extends("layouts.base")
@section("head")
    <link rel="stylesheet" href="/css/call.css"/>
@endsection
@section("title")
    Report Call
@endsection
@section("content")
    <label for="a" class="required-field">Caller</label>
    <div id="employee-select"></div>
    <label for="reason-field">Call Reason</label>
    <div id="reason-select"></div>
    <label for="notes-field">Call Notes</label>
    <textarea id="notes-field">On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode On god nigga i finna go sicko mode
    </textarea>
    <label for="problem-select">Referenced problems</label>
    <div id="problem-select"></div>

    <label for="raw-select">Test</label>
    <div id="raw-select"></div>
    <div style="height: 400px; background: green;"></div>
@endsection
@section("javascript")
    <script src="/js/call.js"></script>
@endsection