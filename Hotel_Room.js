<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hotel Room</title>
    <style>
        #container{
            /* border: 1px solid red; */
            display: flex;
            width: 80%;
            margin: auto;
        }
        .card{
            /* border: 1px solid yellow; */
            margin: auto;
            width: 30%;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        }
        h1,p,h3{
            text-align: center;
        }
        h1,h3~p{
            color:gold;
        }
        img{
            width: 100%;
            height: 200px;
        }
        h1~p{
            display: block;
            /* border: 1px solid black; */
            width: 50%;
            margin: auto;
            margin-bottom: 30px;
        }
    </style>
</head>
<body>
    <h1>Hotel Room</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nostrum et nisi officia nesciunt praesentium, facere suscipit reiciendis, cum sed quia accusamus eum? Quas, a error accusamus suscipit veniam alias.</p>
    <div id="container">
        <div class="card">
            <img src="data:image/jpeg;base64,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"
            alt="single room">
            <h3>Single Room</h3>
            <p>100rs /- Night</p>
        </div>
        <div class="card">
            <img src="data:image/jpeg;base64,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"
            alt="family room">
            <h3>Family Room</h3>
            <p>300rs /- Night</p>
        </div>
        <div class="card">
            <img src="data:image/jpeg;base64,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"
            alt="Personlised room">
            <h3>Personalised Room</h3>
            <p>500rs /- Night</p>
        </div>
    </div>
</body>
</html>