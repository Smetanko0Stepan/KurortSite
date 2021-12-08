function Exit()
{
  window.open("index.html", "_self");
}

function Login()
{
    document.getElementById('id01').style.display='block'
}

function Close()
{
  document.getElementById('id01').style.display='none'
}

function Check()
{
  var firstinput = document.getElementById("input1").value;
  var secondinput = document.getElementById("input2").value;
  if(firstinput === "max727239@gmail.com" && secondinput === "1111")
    window.open("rezume.html", "_self");
}