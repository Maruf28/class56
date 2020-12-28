
function Calculate()
{
    var n = Number(document.getElementById("l").value);
    var areaoutput = n * n;
    var perimeteroutput = 4 * n;
     document.getElementById("area").innerHTML = areaoutput;
            document.getElementById("Perimeter").innerHTML = perimeteroutput;
}