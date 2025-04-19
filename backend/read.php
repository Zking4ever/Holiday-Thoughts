<?php

$filename ="posts";
$file = fopen($filename,"r");

if(!$file){
    echo "connecting to server...";
}else{
    $read = fread($file,1000000);
    echo $read;
}
?>