<?php
$url = $_GET['url'];

//$url = 'http://snipurl.com/site/snip?link=' . urlencode($url);
$url = 'http://tinyurl.com/create.php?url=' . urlencode($url);

echo file_get_contents($url);
?>
