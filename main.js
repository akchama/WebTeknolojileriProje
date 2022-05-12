function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("İsim alanı boş bırakılamaz");
        return false;
    }
    let email = document.forms["myForm"]["femail"].value;
    let result = String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    if (result == null || result == "") {
        alert("Gecersiz eposta adresi!")
        return false;
    }
}