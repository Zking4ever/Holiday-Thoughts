<?php
$host ="localhost";
$user ="root";
$password ="";
$dbname = "easter";
$conn = mysqli_connect($host,$user,$password,$dbname);

if($conn->connect_error){
     echo "ERROR while connecting to server";
     die;
}