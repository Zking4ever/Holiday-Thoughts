<?php
//preparing an assositive array to store recods to be wroten
$catagory = $_GET['title'];
$msg = $_GET['msg'];
$myarr = array($catagory,$msg);


$filename ="posts";
$file = fopen($filename,'a');

if(!$file){
    echo "file not created";
}
else{
    $write = fwrite($file,$myarr[0]."Title_message".$myarr[1]."postEnd"."\n");
    if($write){
        echo "writen to file";
    }
}
?>