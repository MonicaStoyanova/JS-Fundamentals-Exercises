function passwordValidator(password) {

    let length = password.length;
    let digits = 0;
    let notAllowedSymbol = 0;


    for (let i = 0; i < length; i++) {
        let current = password.charCodeAt(i);
        if (current >= 48 && current <= 57) { // numbers
            digits++;
        } else if (current >= 65 && current <= 90) { // UPPERCASE
            continue;
        } else if (current >= 97 && current <= 122) { // lowercase
            continue;
        } else {
            notAllowedSymbol++;
        }
    }
    if (length > 6 && length <= 10 && notAllowedSymbol === 0 && digits >= 2) {
        console.log("Password is valid");
    }
    if (length < 6 || length > 10) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (notAllowedSymbol > 0) {
        console.log("Password must consist only of letters and digits");
    }
    if (digits < 2) {
        console.log("Password must have at least 2 digits");
    }
}
passwordValidator('Pa$s$s')