<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../bootstrap-4.0.0-beta.2/favicon.ico">

    <title>Diversity Policy</title>

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="starter-template.css">
    <script src="citation-machine.js"></script>

</head>

<body>

<!-- Header Navigation Bar -->

<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <a class="navbar-brand" href="home.php">DiversityPolicy.com</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" href="home.php">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="schools.php">Schools</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Contribute</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="login.php">Login</a>
            </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
</nav>

<main role="main" class="container" style="width: 60%; padding-top: 6rem; padding-bottom: 6rem">

    <form>
        <h2>Cite Something!</h2>
        <br>
        <div class="form-group">
            <label for="inputTitle">Policy Title</label>
            <input type="text" class="form-control" id="inputTitle" placeholder="Title">
        </div>
        <div class="form-group">
            <label for="inputSchool">School</label>
            <input type="text" class="form-control" id="inputSchool" placeholder="School">
        </div>
        <div class="form-group">
            <label for="inputDept">Academic Dept.</label>
            <input type="text" class="form-control" id="inputDept" placeholder="Academic Dept.">
        </div>

        <div class="form-group">
            <label for="inputLink">Link</label>
            <input type="text" class="form-control" id="inputLink" placeholder="Link">
        </div>
        <div class="form-group">
            <label for="inputState">State</label>
            <input type="text" class="form-control" id="inputState" placeholder="State">
        </div>
        <div class="form-group">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity" placeholder="City">
        </div>
    </form>
    <br>
    <button class="btn btn-outline-primary" onclick="cite()">Cite!</button>
    <br>
    <div class="text-center">
        <p id="citationDisplay"></p>
    </div>

</main><!-- /.container -->

<br>
<br>

<footer>
    <div class="footer-copyright">
        <div class="container-fluid text-center">
            ©2018 Copyright: <a href="home.php"> DiversityPolicy.com </a>

        </div>
    </div>
</footer>

<br>
<br>


<!-- Bootstrap core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script>window.jQuery || document.write('<script src="../../../../assets/js/vendor/jquery.min.js"><\/script>')</script>
<script src="../../bootstrap-4.0.0-beta.2/assets/js/vendor/popper.min.js"></script>
<script src="../../bootstrap-4.0.0-beta.2/dist/js/bootstrap.min.js"></script>

</body>
</html>