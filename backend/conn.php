<?php

$host ="eastermessages.chmgoo8wk5c6.eu-north-1.rds.amazonaws.com";
$user ="admin";
$password ="9iWmTphoR0oKEJsldnHm";
$dbname = "eastermessages";

/*
$host ="localhost";
$user ="root";
$password ="";
$dbname = "easter";

$host ="sql313.infinityfree.com";
$user ="if0_38776549";
$password ="AQNorWukqUko";
$dbname = "if0_38776549_user_posts";
*/
$conn = mysqli_connect($host,$user,$password,$dbname,3360);

if($conn->connect_error){
     echo "ERROR while connecting to server";
}
else {
     echo "connected to db";
}