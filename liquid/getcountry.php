<?php

$countryCode = 'US';
$url = 'http://api.ipinfodb.com/v3/ip-country/?key=427c69a496f00c48864a4c7dafbc6c0cf4564a45d3970326dd72b2c17fd8102f&format=json&ip=' . $_SERVER["REMOTE_ADDR"];
$str = file_get_contents($url);
$array = json_decode($str);
if ($array) {
    $countryCode = !empty($array['countryCode']) ? $countryCode : "US";
}
echo $countryCode;
?>
