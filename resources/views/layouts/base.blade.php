<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Make It All</title>
    <meta name="description" content="Make it all - Tech support web portal">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="/css/app.css">
    @yield("head")
</head>

<body>
<section id="overlay-components">
    <div id="header-con">
        <a href="/" id="logo"><span id="logo-icon"></span>MakeItAll</a>
        <header>
            <div id="title">
                @yield("title")
            </div>

            <a href="/calls/create" id="new-call-button">
                <i class="material-icons">call</i>New Call
            </a><i id="user-noti" class="material-icons">
                notifications
            </i><span id="user-menu"></span>
        </header>
    </div>
    <nav>
        <a href="/"><i class="material-icons">home</i>Dashboard</a>
        <a href="/problems"><i class="material-icons">assignment</i>Problems</a>
        <a href="/calls"><i class="material-icons">list</i>Calls</a>
        <a href="/employees"><i class="material-icons">group</i>Employees</a>
        <a href="/"><i class="material-icons">business_center</i>Equipment</a>
    </nav>
</section>
<section id="body-content">
    @yield("content")
</section>
<script src="/js/app.js"></script>
@yield("javascript")

</body>

</html>
