<?php

$host ="localhost";
$user ="root";
$password ="";
$dbname = "easter";
/*
$host ="sql313.infinityfree.com";
$user ="if0_38776549";
$password ="AQNorWukqUko";
$dbname = "if0_38776549_user_posts";
*/
$conn = mysqli_connect($host,$user,$password,$dbname);

if($conn->connect_error){
     echo "ERROR while connecting to server";
     die;
}