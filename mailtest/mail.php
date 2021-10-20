<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Send Mail Form Localhost In Php</title>
    <link rel="stylesheet" href="mail.css">
</head>

<body>
    <div id="container">
        <h2>Send Message</h2>
        <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="POST" autocomplete="OFF">
            <?php
            if(isset($_POST['send'])){
                $receiver = $_POST['receiver'];
                $subject = $_POST['subject'];
                $message = $_POST['message'];
                $sender = "FROM: ma382793@gmail.com";
                if(empty($receiver) || empty($subject) || empty($message)){
                    ?>
                    <div id="alert">All Inputs are required</div>
                    <?php
                }else{
                    if(mail($receiver,$subject,$message,$sender)){
                        ?>
                        <div id="alert">Message Sent Successfully To <br> <?php echo $receiver ?></div>
                        <?php
                    }else{
                        ?>
                        <div id="alert">Failed While Sending Your Mail<br>Please Check Your Connection.</div>
                        <?php
                    }
                }
            }
            ?>
            <!-- <div id="alert">All Inputs are required</div> -->
            <input type="email" name="receiver" placeholder="Email"><br>
            <input type="text" name="subject" placeholder="Subject"><br>
            <textarea name="message" placeholder="Enter Your Message Here."></textarea><br>
            <input type="submit" name="send" value="Send">
        </form>
    </div>
</body>

</html>