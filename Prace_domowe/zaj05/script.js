const daysOfWeek = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
const months = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'];
const d = new Date();

const heading = document.getElementById("heading");
const paragraph_one = document.getElementById("paragraph-one");
const paragraph_two = document.getElementById("paragraph-two");
const paragraph_three = document.getElementById("paragraph-three");
const paragraph_four = document.getElementById("paragraph-four");
Heading(heading);
Paragraph_one(paragraph_one);
Paragraph_two(paragraph_two);
Paragraph_tree(paragraph_three);
Paragraph_four(paragraph_four);
function Heading(element){
    element.textContent="Kacper Kruczek";
}
function Paragraph_one(element){
    let text ="";
    text+="Data, która pojawi się przy otwarciu tej strony to: ";
    
    text+=daysOfWeek[d.getDay()] + ", " +d.getDate();//w zadaniu sa przecinki
    text+=", " +months[d.getMonth()];// nie wiem czy maja oddzielac tylko komentarze czy wartosci
    text+=", "+ d.getFullYear()+ "r";//wiec ze wzgledu tego ze nie chce utracic punktów to je zostawie 
    text+="<br />";
    text+="Godzina w momencie otwarcia strony: ";
    
    text+=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+":"+d.getMilliseconds();
    element.innerHTML=text;
}
function Paragraph_two(element){
    let zdanie="Podstawą szczęścia jest wolność, a podstawą wolności odwaga";
    let text="";
    text+="Operuję na zdaniu: \"Podstawą szczęścia jest wolność, a podstawą wolności odwaga.\"<br /><br />";
    text+="Trzynastym znakiem w tym zdaniu jest: "+zdanie.charAt(13)+".<br />";
    text+="Znaki pomiędzy 7. a 12. pozycją to: "+zdanie.substring(7,12)+".<br />";
    text+="Pierwszy raz znak 'ą' pojawia się na miejscu: "+zdanie.indexOf("ą")+".<br />";
    text+="Ten ciąg ma "+zdanie.length+" znaków.";
    let podmienione_zdanie=zdanie.replace("podstawą","fundamentem")
    text+="Po zamianie 'podstawą' na 'fundamentem' mamy: "+podmienione_zdanie+".<br />";
    let podzielone_zdanie=zdanie.split(',');
    text+="Część zdania przed przecinkiem )to: "+podzielone_zdanie[0]+".<br />";
    text+="Druga część zdania po odwróceniu to: "+podzielone_zdanie[1].split("").reverse().join("");
    element.innerHTML=text;
    
}
function Paragraph_tree(element){
    let text="";
    text+="Korzystam z dodatkowych wiadomości o obiekcie Math ze strony:<a href=\"http://kursjs.pl/kurs/math.php\">http://kursjs.pl/kurs/math.php</a><br /><br />";
   
    text+="Zadanie 1. Mam funkcję kwadratową:<br />";
    text+="f(x) = x^2 + 5x + 6<br /><br />";
    wyroznik=5*5-4*6;
    if (wyroznik>=0){
        text+="Wyróżnik tego trójmianu to: "+wyroznik+".<br />"
        text+="Pierwiastek kwadratowy tego wyróżnika to: "+Math.sqrt(wyroznik)+".<br />";
        text+="Miejscami zerowymi tej funkcji są: "+(-5-Math.sqrt(wyroznik))/(2*1)+ " i "+ (-5+Math.sqrt(wyroznik))/(2*1)+".";
    }
    else{
        text+="Wyrożnik jest ujemny nie ma miejsc zerowych.";
    }
    element.innerHTML=text;
}
function Paragraph_four(element){
    let text="Kontynuuję pracę z obiektem Math i używam obiektu Number:<br /><br />";

    text+="Zadanie 2. Obliczam wartość funkcji:<br />";
    text+="f(x) = sqrt(|sin(ln(2^(x))) + max(0, x) + |-e^(2x) + min(-1, x)||) <br />";
    text+="dla x = pi/6.<br /><br />";
    let x=Math.PI/6;

    let sin =Math.sin( Math.log( Math.pow( 2, x)));

    let max=Math.max( 0, x )
    
    let pow=Math.pow( Math.E, 2*x);
    let min=Math.min( -1, x);
    let abs=Math.abs( -1*pow + min);
    let wynik=Math.sqrt( Math.abs( sin + max + abs ));
    text+="Mój wynik to: " + wynik+".<br />";
    text+="Wynik w notacji wykładniczej to: "+wynik.toExponential()+".<br />";
    text+="Po zaokrąleniu wyniku w górę mam: "+Math.ceil(wynik)+".<br />";

    element.innerHTML=text;

}


