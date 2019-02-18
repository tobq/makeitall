<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Make It All</title>
    <meta name="description" content="Make it all - Tech support web portal">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="/css/Log_in.css">
    @yield("head")

</head>

<body>
<section id="overlay-components">
    <div id="header-con">
        <a href="/" id="logo"><span id="logo-icon"></span>MakeItAll</a>
        <header>
            <div id="title">
                <p>Log in</p>
            </div>
        </header>
    </div>
</section>
<section id="body-content">
    <div id="log_in_container">
        <h3 align="center">Log in</h3>
        <form method="post">
            {{csrf_field()}}
            <div class="form-group">
                <label>Employee ID </label>
                <input type="email" name="email" class="form-control" />
            </div>
            <div class="form-group">
                <label>Password: </label>
                <input type="password" name="password" class="form-control" />
            </div>
            <div class="form-group">
                <input type="submit" name="login" class="button" value="Submit">
            </div>
        </form>
    </div>
</section>
@yield("javascript")
</body>

</html>