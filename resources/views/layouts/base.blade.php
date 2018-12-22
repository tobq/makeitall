<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Make It All</title>
    <meta name="description" content="Make it all - Tech support web portal">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="/css/app.css">
    @yield("head")
</head>

<body>
<nav>
    <a href="/" id="logo"><span id="logo-icon"></span>MakeItAll</a>
    <a href="/"><i class="material-icons">home</i>Dashboard</a>
    <a href="/"><i class="material-icons">assignment</i>Problems</a>
    <a href="/"><i class="material-icons">list</i>Calls</a>
    <a href="/"><i class="material-icons">group</i>Employees</a>
    <a href="/"><i class="material-icons">business_center</i>Equipment</a>
</nav>
<header>
    <div id="title">
        @yield("title")
    </div>

    <a href="/call" id="new-call-button">
        <i class="material-icons">call</i>New Call
    </a><i id="user-noti" class="material-icons">
        notifications
    </i><span id="user-menu" tabindex="1">
        <button id="user-display-picture" class="material-icons">
            person
        </button>
        <div id="user-menu-list">
            <a id="user-menu-name" href="/">$Alice</a>
            <a href="/">Settings</a>
            <a href="/">Something</a>
            <a href="/">Log Out</a>
        </div>
    </span>
</header>
<section id="body-content">
    @yield("content")
</section>
<script src="/js/app.js"></script>
@yield("javascript")

</body>

</html>