
function loguear()
{

    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("clave").value;


    if (user=="Yika" && pass=="1234") 
    {
        window.location="Pag.html";
    }

    else
    {
        alert("Datos incorrectos");
    }

}