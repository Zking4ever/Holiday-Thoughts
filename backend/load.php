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
    $display.= "<style>
.item{
  animation: items ease;
  animation-timeline:view();
  animation-range:entry 0% cover 40%;
 }
 @keyframes items {
  from{
      opacity: 0;
      transform: translateY(100px);
      scale:0.5;
  }
  to{
      opacity: 100%;
      transform: translateY(0px);
      scale:1;
  }</style>";
  
  echo $display;
}
