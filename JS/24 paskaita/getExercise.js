/* 
1. Yes or No?

Sukurkite programėlę, kurį gali atsakyti į visus gyvenimo klausimus principu
taip arba ne!

1. Sukurkite funkciją, kurią iškvietus bus kreipiamasi į nutolusį serverį.
Kiekvieną kartą gausite atsakymą yes/no ir GIF image, kuris asocijuotas su
gautu atsakymu.
2. Sukurkite minimalią formą su teksto laukeliu (klausimui) ir submit
mygtuku. Submitinus formą, iškvieskite anksčiau sukurtą funkciją.

Kai gausite atsakymą iš serverio:
    a. Išvalykite formą, kad nebūtų galima pakartotinai submitinti;
    b. Po forma atvaizduokite užduota klausimą, gautą atsakymą
    ir GIF nuotraukėlę.

Galite viską minimaliai pastilizuoti, kad
atrodytų šiek tiek gražiau nei defaultinis naršyklės stilius.

Pastabos: 
1. Forma neturėtų perkrauti puslapio, nes tokiu atveju kreipimasis
į serverį bus nutrauktas.
2. Formos negalima submitinti, jei klausimas nėra įvestas.
3. Kol vyksta kreipimasis, submit mygtukas turi būti disabled. Tam
galite pasitelkti paskutinį promise bloką - finally.
4. Šioje užduotyje mes nesiunčiame jokios inforacijos į serverį, o 
tiesiog gauname atsitiktinį atsakymą :)

Klausimas vaizduotei sužadinti:
Should I eat whole bucket of ice cream?


*/

const YES_NO_API = 'https://yesno.wtf/api';

/* 
2. Dad Jokes

Sukurkite programėlę, kuri atsiųs atsitiktinį "tėvelio bajerį" iš serverio ir viską
atvaizduos. Jums reikės:
1. Sukurti funkciją, kuri kreipsis į serverį ir gaus atsitiktinį juokelį bei jį atvaizduos
užkrovus puslapį.
2. Po juokelio atvaizdavimo vieta sukurkite du mygtukus: Next ir Save. Next mygtukas
pakartotinai kvies ankstesnę funkciją ir atvaizduos naują juokelį. Save mygtukas 
išsaugos patikusį juokelį į local storage ir taip pat parsiųs naują juokelį bei jį atvaizduos. 
3. Sukurkite papildomą puslapį (pasiekiamas nuoroda iš pagrindinio), kuriame iš local storage
ištrauksite visus geriausius juokelius ir juos atvaizduosite lentelėje.

Pastabos:
1. Prieš parodant Save mygtuką, patikrinkite ar local storage nėra tokio paties juokelio (tam
naudokite ID reikšmes);
2. Atkreipkit dėmesį, kad šis serveris gali grąžinti ir visą HTML, kad gautumėt informaciją
JSON formatu, turėsite pridėti papildomą request header Accept: application/json

*/

const DAD_JOKES_API = 'https://icanhazdadjoke.com/';
