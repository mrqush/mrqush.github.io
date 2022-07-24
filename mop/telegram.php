<?php

/* https://api.telegram.org/bot1057723653:AAG-d7uES_XvfCqfeFNaJkqFmndRjUq7Zb8/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$token = "1057723653:AAG-d7uES_XvfCqfeFNaJkqFmndRjUq7Zb8";
$chat_id = "-322373749";
$arr = array(
  'Имя: ' => $name,
  'Телефон: ' => $phone
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>