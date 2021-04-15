<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- bootstrap style -->
    <link rel="stylesheet" href="./assets/libs/bootstap/bootstrap-5.0.0-beta3-dist/css/bootstrap.min.css">

    <!-- custom styling -->
    <link rel="stylesheet" href="./assets/css/style.css">


    <!-- bootstrap script -->
    <script src="./assets/libs/bootstap/bootstrap-5.0.0-beta3-dist/js/bootstrap.min.js"></script>
</head>
<body>
    <div class="container" style=" height: 100vh;">
        <div class="row">
            <div class="col-sm-12 hero">
               <h1>NORWAY IS AMAIZING COUNTRY</h1>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12 text-center"><br>
                <h3>Contact form</h3> <br>          
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 left-side"></div>

            <div class="col-md-6" right-side>
                <div class="contacts-form">
                    <div class="row">
                      <div class="col-sm-12 text-center">
                          <h4>Contact Information</h4>
                      </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="firstName">First name:</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="lastName">Last name:</label>
                                <input type="text" class="form-control">  
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group">
                                <label for="address">Address</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <p class="mb-0">Please check info:</p>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled>
                            <label class="form-check-label" for="flexCheckDisabled">
                            Disabled checkbox
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled>
                            <label class="form-check-label" for="flexCheckCheckedDisabled">
                              Disabled checked checkbox
                            </label>
                        </div>

                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
