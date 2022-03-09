let jaCliquei;
let jaCliquei3;

function sorteador(num) {
    let urlCarta = "";
    switch (num) {
        case 0:
            urlCarta = "00-TheFool.png";
            break;
        case 1:
            urlCarta = "01-TheMagician.png";
            break;
        case 2:
            urlCarta = "02-TheHighPriestess.png";
            break;
        case 3:
            urlCarta = "03-TheEmpress.png";
            break;
        case 4:
            urlCarta = "04-TheEmperor.png";
            break;
        case 5:
            urlCarta = "05-TheHierophant.png;";
            break;
        case 6:
            urlCarta = "06-TheLovers.png";
            break;
        case 7:
            urlCarta = "07-TheChariot.png";
            break;
        case 8:
            urlCarta = "08-Strength.png";
            break;
        case 9:
            urlCarta = "09-TheHermit.png";
            break;
        case 10:
            urlCarta = "10-WheelOfFortune.png";
            break;
        case 11:
            urlCarta = "11-Justice.png";
            break;
        case 12:
            urlCarta = "12-TheHangedMan.png";
            break;
        case 13:
            urlCarta = "13-Death.png";
            break;
        case 14:
            urlCarta = "14-Temperance.png";
            break;
        case 15:
            urlCarta = "15-TheDevil.png";
            break;
        case 16:
            urlCarta = "16-TheTower.png";
            break;
        case 17:
            urlCarta = "17-TheStar.png";
            break;
        case 18:
            urlCarta = "18-TheMoon.png";
            break;
        case 19:
            urlCarta = "19-TheSun.png";
            break;
        case 20:
            urlCarta = "20-Judgement.png";
            break;
        case 21:
            urlCarta = "21-TheWorld.png";
            break;
        case 22:
            urlCarta = "Cups01.png";
            break;
        case 23:
            urlCarta = "Cups02.png";
            break;
        case 24:
            urlCarta = "Cups03.png";
            break;
        case 25:
            urlCarta = "Cups04.png";
            break;
        case 26:
            urlCarta = "Cups05.png";
            break;
        case 27:
            urlCarta = "Cups06.png";
            break;
        case 28:
            urlCarta = "Cups07.png";
            break;
        case 29:
            urlCarta = "Cups08.png";
            break;
        case 30:
            urlCarta = "Cups09.png";
            break;
        case 31:
            urlCarta = "Cups10.png";
            break;
        case 32:
            urlCarta = "Cups11.png";
            break;
        case 33:
            urlCarta = "Cups12.png";
            break;
        case 34:
            urlCarta = "Cups13.png";
            break;
        case 35:
            urlCarta = "Cups14.png";
            break;
        case 36:
            urlCarta = "Pentacles01.png";
            break;
        case 37:
            urlCarta = "Pentacles02.png";
            break;
        case 38:
            urlCarta = "Pentacles03.png";
            break;
        case 39:
            urlCarta = "Pentacles04.png";
            break;
        case 40:
            urlCarta = "Pentacles05.png";
            break;
        case 41:
            urlCarta = "Pentacles06.png";
            break;
        case 42:
            urlCarta = "Pentacles07.png";
            break;
        case 43:
            urlCarta = "Pentacles08.png";
            break;
        case 44:
            urlCarta = "Pentacles09.png";
            break;
        case 45:
            urlCarta = "Pentacles10.png";
            break;
        case 46:
            urlCarta = "Pentacles11.png";
            break;
        case 47:
            urlCarta = "Pentacles12.png";
            break;
        case 48:
            urlCarta = "Pentacles13.png";
            break;
        case 49:
            urlCarta = "Pentacles14.png";
            break;
        case 50:
            urlCarta = "Swords01.png";
            break;
        case 51:
            urlCarta = "Swords02.png";
            break;
        case 52:
            urlCarta = "Swords03.png";
            break;
        case 53:
            urlCarta = "Swords04.png";
            break;
        case 54:
            urlCarta = "Swords05.png";
            break;
        case 55:
            urlCarta = "Swords06.png";
            break;
        case 56:
            urlCarta = "Swords07.png";
            break;
        case 57:
            urlCarta = "Swords08.png";
            break;
        case 58:
            urlCarta = "Swords09.png";
            break;
        case 59:
            urlCarta = "Swords10.png";
            break;
        case 60:
            urlCarta = "Swords11.png";
            break;
        case 61:
            urlCarta = "Swords12.png";
            break;
        case 62:
            urlCarta = "Swords13.png";
            break;
        case 63:
            urlCarta = "Swords14.png";
            break;
        case 64:
            urlCarta = "Wands01.png";
            break;
        case 65:
            urlCarta = "Wands02.png";
            break;
        case 66:
            urlCarta = "Wands03.png";
            break;
        case 67:
            urlCarta = "Wands04.png";
            break;
        case 68:
            urlCarta = "Wands05.png";
            break;
        case 69:
            urlCarta = "Wands06.png";
            break;
        case 70:
            urlCarta = "Wands07.png";
            break;
        case 71:
            urlCarta = "Wands08.png";
            break;
        case 72:
            urlCarta = "Wands09.png";
            break;
        case 73:
            urlCarta = "Wands10.png";
            break;
        case 74:
            urlCarta = "Wands11.png";
            break;
        case 75:
            urlCarta = "Wands12.png";
            break;
        case 76:
            urlCarta = "Wands13.png";
            break;
        case 77:
            urlCarta = "Wands14.png";
            break;
    }
    return urlCarta;
}

function display_image(src) {
    let a = document.getElementById("Div1");
    let b = document.createElement("img");
    b.setAttribute("id","Carta1");
    b.src = src;
    a.insertAdjacentElement("beforeend", b);
}

function display_image3(src1,src2,src3) {
    let a = document.getElementById("Div1");
    let b = document.createElement("img");
    b.setAttribute("id","Carta1");
    b.src = src1;
    a.insertAdjacentElement("beforeend", b);
    let c = document.createElement("img");
    c.setAttribute("id","Carta2");
    c.src = src2;
    a.insertAdjacentElement("beforeend", c);
    let d = document.createElement("img");
    d.setAttribute("id","Carta3");
    d.src = src3;
    a.insertAdjacentElement("beforeend", d);
}

function drawACard() { 
    if (jaCliquei) {
        let a = document.getElementById("Carta1")
        a.remove()
        jaCliquei = false;
    }
    if (jaCliquei3) {
        let b = document.getElementById("Carta1")
        b.remove()
        let c = document.getElementById("Carta2")
        c.remove()
        let d = document.getElementById("Carta3")
        d.remove()
        jaCliquei3 = false;
    }
    const num = Math.floor(Math.random() * 78);
    let imgsrc = sorteador(num);
    display_image(imgsrc);
    jaCliquei = true;
}

function draw3Cards() {
    if (jaCliquei) {
        let a = document.getElementById("Carta1")
        a.remove()
        jaCliquei = false;
    }
    if (jaCliquei3) {
        let b = document.getElementById("Carta1")
        b.remove()
        let c = document.getElementById("Carta2")
        c.remove()
        let d = document.getElementById("Carta3")
        d.remove()
        jaCliquei3 = false;
    }   
    const num1 = Math.floor(Math.random() * 78);
    const num2 = Math.floor(Math.random() * 78);
    const num3 = Math.floor(Math.random() * 78);
    while (num1 === num2) {
        num2 = Math.floor(Math.random() * 78);
    }
    while (num2 === num3) {
        num3 = Math.floor(Math.random() * 78);
    }
    while (num1 === num3) {
        num3 = Math.floor(Math.random() * 78);
    }
    let imgsrc1 = sorteador(num1);
    let imgsrc2 = sorteador(num2);
    let imgsrc3 = sorteador(num3);
    display_image3(imgsrc1, imgsrc2, imgsrc3);
    jaCliquei3 = true;
}
    
