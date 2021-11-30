function showData(a) {
  datadv.style.display = "block";
  loader.style.display = "none";
  url = "https://reqres.in/api/users?page=1";
  fetch(url)
    .then((response) => {
      return response.json(); // we can return jason nas well as parts
    })
    .then((data) => {
      console.log(data);
      var value = data;
      var img1 = value["data"][0]["avatar"];
      document.getElementById("img1").src = img1;
      var img2 = value["data"][1]["avatar"];
      document.getElementById("img2").src = img2;
      var img3 = value["data"][2]["avatar"];
      document.getElementById("img3").src = img3;
      var img4 = value["data"][3]["avatar"];
      document.getElementById("img4").src = img4;
      var img5 = value["data"][4]["avatar"];
      document.getElementById("img5").src = img5;
      var img6 = value["data"][5]["avatar"];
      document.getElementById("img6").src = img6;
      ///// name
      var first1 = value["data"][0]["first_name"];
      var last1 = value["data"][0]["last_name"];
      document.getElementById("user_name1").innerHTML =
        "NAME :" + first1 + " " + last1;
      var first1 = value["data"][1]["first_name"];
      var last1 = value["data"][1]["last_name"];
      document.getElementById("user_name2").innerHTML =
        "NAME :" + first1 + " " + last1;
      var first1 = value["data"][2]["first_name"];
      var last1 = value["data"][2]["last_name"];
      document.getElementById("user_name3").innerHTML =
        "NAME :" + first1 + " " + last1;
      var first1 = value["data"][3]["first_name"];
      var last1 = value["data"][3]["last_name"];
      document.getElementById("user_name4").innerHTML =
        "NAME :" + first1 + " " + last1;
      var first1 = value["data"][4]["first_name"];
      var last1 = value["data"][4]["last_name"];
      document.getElementById("user_name5").innerHTML =
        "NAME :" + first1 + " " + last1;
      var first1 = value["data"][5]["first_name"];
      var last1 = value["data"][5]["last_name"];
      document.getElementById("user_name6").innerHTML =
        "NAME :" + first1 + " " + last1;
      /////mail
      var mail1 = value["data"][0]["email"];
      document.getElementById("user_mail1").innerHTML = "MAIL : " + mail1;
      var mail2 = value["data"][1]["email"];
      document.getElementById("user_mail2").innerHTML = "MAIL : " + mail2;
      var mail3 = value["data"][2]["email"];
      document.getElementById("user_mail3").innerHTML = "MAIL : " + mail3;
      var mail3 = value["data"][3]["email"];
      document.getElementById("user_mail4").innerHTML = "MAIL : " + mail3;
      var mail3 = value["data"][4]["email"];
      document.getElementById("user_mail5").innerHTML = "MAIL : " + mail3;
      var mail3 = value["data"][5]["email"];
      document.getElementById("user_mail6").innerHTML = "MAIL : " + mail3;
    });
}
