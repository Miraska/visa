<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$country = $_POST['country'];
$comment = $_POST['comment'];
$token = "5131798485:AAFCkoPFDRtbmkNF6PO1EaXCKbS-bAVpgcQ";
$chat_id = "-670556109";

$arr = array(
  'Имя покупателя: ' => $name,
  'Телефон: ' => $phone,
  'Email: ' => $email,
  'Пользователь хочет приобрести: ' => $country,
  'Комментарий покупателля: ' => $comment
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Error";
}
?>