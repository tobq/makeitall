<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Make It All</title>
    <meta name="description" content="Make it all - Tech support web portal">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="/css/login.css"/>
    <script src="/js/Login.js" async defer></script>
</head>

<body>
<form id="body-content">
    <div id="logo">
        <div class="logo-image"></div>
        MakeItAll
        <div class="logo-image"></div>
    </div>
    <br/>
    <div id="login-fields">
        <input id="login-id" placeholder="ID"/>
        <input id="login-password" type="password" placeholder="Password"/>
    </div>
    <br/>
    <button id="login">Log In</button>
</form>
</body>
</html>