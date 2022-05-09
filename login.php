<?php
$username = $_POST['username'];
$password = $_POST['password'];
$usercontrol = "g140910076@sakarya.edu.tr";
$passcontrol = "g140910076";

if ($username and $password) {

} else {
    header("location:login.html");
}
if ($usercontrol == $username and $passcontrol == $password) {
    echo "HOŞGELDİNİZ g140910076";
    header("Refresh: 3; url=index.html");
} else {
    echo "Kullanıcı adı veya şifre hatalı. Giriş Sayfasına yönlendiriliyorsunuz...";
    header("Refresh: 3; url=login.html");
}
?>