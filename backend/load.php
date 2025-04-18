<?php
require 'conn.php';

$load_query = "select * from user_msg";

$response = mysqli_query($conn,$load_query);
if(!$response){
    die("loading data...");
}
while ($row = mysqli_fetch_array($response)){
    //lets prpare a box for handling response
    $display ="<div class='item'><div class='title'>";
    $display.="title: $row[1]";
    $display.="</div><div class='msg'>";
    $display.="message: $row[2]";
    $display.="</div><div class='like'>";
    $display.= "likes: $row[3]";
    $display.="</div><div class='repost'>";
    $display.= "reposts: $row[4]";
    $display.="</div></div>";
    echo $display;
}
