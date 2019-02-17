@extends("layouts.base")
@section("head")
    <link rel="stylesheet" href="/css/call.css"/>
@endsection
@section("title")
    Report Call
@endsection
@section("content")
    <section id="form"></section>
    <section id="suggestions">
        <h1>Suggested Problems</h1>
        <div id="suggestions-list"></div>
    </section>
@endsection
@section("javascript")
    <script src="/js/call.js"></script>
@endsection