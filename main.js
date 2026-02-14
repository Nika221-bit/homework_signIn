function setCookie(name, value, minutesToExpire) {
  const date = new Date();
  date.setTime(date.getTime() + (minutesToExpire * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}


function getCookie(name) {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length);
    }
  }
  return null;
}


function logout() {
  localStorage.removeItem("user");
  sessionStorage.removeItem("user");
  document.cookie = "loginTime=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  alert("დრო ამოწურა!");
  document.getElementById("user").value = "";
  document.getElementById("pass").value = "";
}

setInterval(function() {
  if (getCookie("loginTime") === null) {
    logout();
  }
}, 10000); 

document.getElementById("accept").addEventListener("click",function(){
  const username = document.getElementById("user").value;
  const password = document.getElementById("pass").value;
  const rememberMe = document.getElementById("myCheckbox").checked;
  
  if (username === "admin" && password === "1234") {
    setCookie("loginTime", new Date().getTime(), 1);
    
    if (rememberMe) {
      localStorage.setItem("user", username);
    } else {
      sessionStorage.setItem("user", username);
    }
    alert("Login წარმატებულია!");
  } else {
    alert("არასწორი მონაცემები!");
  }
});

