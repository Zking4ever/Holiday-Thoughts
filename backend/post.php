<?php
require "conn.php";

$title = $_GET['title'];
$msg = $_GET['msg'];
$like = 0;
$repost = 0;

$query = "insert into user_msg(title,msg,like_no,repost_no) value('$title','$msg',$like ,$repost)";
$response = mysqli_query($conn,$query);
if(!$response){
    die("Oopps!message not sent");
}
echo "posted";