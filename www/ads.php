<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
         Wish List of <?php echo htmlentities($_GET["categories"])."<br/>";?>
        Yo yo!
        <?php
       $con = mysqli_connect("localhost", "phpuser", "phpuserpw");
        if (!$con) {
            exit('Connect Error (' . mysqli_connect_errno() . ') '. mysqli_connect_error());
        }
        else{ echo htmlentities("connection established");}
        //set the default client character set 
        mysqli_set_charset($con, 'utf-8');
        
        mysqli_select_db($con, "buddy");

        $category = mysqli_real_escape_string($con, htmlentities($_GET["categories"]));

        $ad = mysqli_query($con, "SELECT id FROM ads WHERE category='" . $category . "'");

        if (mysqli_num_rows($ad) < 1) {
            exit("Category " . htmlentities($_GET["categories"]) . " is empty. Please check other category and try again");
        }
        $row = mysqli_fetch_row($ad);
        $adID = $row[0];
        mysqli_free_result($ad);
        ?>
        
        <table border="blue">
            <th>Description</th>
            <th>Date</th>
        <?php
        $result = mysqli_query($con, "SELECT description, event_date FROM ads WHERE ad_id=" . $adID);
        while ($row = mysqli_fetch_array($result)) {
            echo "<tr><td>" . htmlentities($row["description"]) . "</td>";
            echo "<td>" . htmlentities($row["event_date"]) . "</td></tr>\n";
        }
        mysqli_free_result($result);
        mysqli_close($con);
        ?>
        </table>
    </body>
</html>
