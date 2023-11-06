$(document).ready(function() {
    $('#showPassword').click(function() {
      var passwordInput = $('#passwordi');
      passwordInput.attr('type', passwordInput.attr('type') === 'password' ? 'text' : 'password');
    });
  }); //show pwd jquery

  $(document).ready(function() {
    $('#approve').click(function() {
      if ($(this).is(':checked')) {
        $('#submitButton').prop('disabled', false);
      } else {
        $('#submitButton').prop('disabled', true);
      }
    });
  }); //disabled btn until check jquery

  $(document).ready(function() {
    $('#passwordi').on('input', function() {
      var remainingChars = 8 - $(this).val().length;
      $('#charCount').text(remainingChars);
    });
  }); //chars remaining


var toastTrigger = document.getElementById('submitButton')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

document.getElementById('reg').addEventListener('input', function() {
    validateForm();
});

function validateForm() {
    const username = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('passwordi').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    usernameError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    if (username.trim() === "") {
        usernameError.textContent = "Введите электронную почту";
    }

    if (password.trim() === "") {
        passwordError.textContent = "Требуется пароль. ";
    }

    if (confirmPassword.trim() === "") {
        confirmPasswordError.textContent = "Требуется подтвердить пароль";
    } else if (confirmPassword !== password) {
        confirmPasswordError.textContent = "Пароли не совпадают";
    }

    const registerButton = document.getElementById('submitButton');
            registerButton.disabled = (username.trim() === "" && password.trim() === "" && confirmPassword.trim() === "");
 }
