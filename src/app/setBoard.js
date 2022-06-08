setBoard()
{
    color = "white"
    html = "<table class=\"table-responsive-sm\"  style=\"width:100%\">";
    for (let i = 1; i <= 8; i++) {
        html += "<tr>";
        color = color == "#ECDBBA" ? "#2D4263" : "#ECDBBA";
        for (let j = 1; j <= 8; j++) {
            color = color == "#ECDBBA" ? "#2D4263" : "#ECDBBA";
            html += "<th class=\"board\" id=\"cell" + i + "-" + j + "\"  style=\"background-color:" + color + ";\"></th>";
        }
        html += "</tr>";
        //color = color=="white"? "#595248" : "white";
    }
    document.getElementById("spielArea").innerHTML = html;
//black
// cell1-4 king
    document.getElementById("cell1-5").innerHTML = "<img src=\"assets/kingBlack.png \" class=\"item\">";
//cell2-4 pawn
    document.getElementById("cell2-4").innerHTML = "<img src=\"assets/pawnBlack.png \" class=\"item\">";

//white
//cell8-4 king
    document.getElementById("cell8-4").innerHTML = "<img src=\"assets/kingWhite.png \" class=\"item\">";

//cell7-4 pawn
    document.getElementById("cell7-5").innerHTML = "<img src=\"assets/pawnWhite.png \" class=\"item\">";
}