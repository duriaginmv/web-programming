function isValid()
{
    let login = document.getElementById("loginInp");
    let pass = document.getElementById("passInp");
    let passAgn = document.getElementById("passInpAgn");

    if (login.value.length < 5)
    {
        login.style["border-color"] = "red";
    }
    else
    {
        login.style["border-color"] = null;
    }

    if (/^[0-9a-zA-Z]+$/.test(pass.value) && pass.value.length < 5)
    {
        pass.style["border-color"] = null;
    }
    else
    {
        pass.style["border-color"] = "red";
    }

    if(pass.value === passAgn.value)
    {
        passAgn.style["border-color"] = null;
    }
    else
    {
        passAgn.style["border-color"] = "red";
    }
}