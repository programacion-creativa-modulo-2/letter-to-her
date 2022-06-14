$(document).ready(function(){
    $("<audio></audio>").attr({
        'id': "audio",
        'src':'audio/november.mp3',
        'volume': 0.1,
        'autoplay':'autoplay',
        'loop': 'true'
    }).appendTo("body");

    estilos = ["'Cutive Mono', monospace", "'Spectral', serif", "'WindSong', cursive", "'Zilla Slab Highlight', cursive"]

    fondos = ["1", "2", "3", "4", "5"]
    const random2 = Math.floor(Math.random() * fondos.length);

    fotos_portada = ["1"]
    const random3 = Math.floor(Math.random() * fotos_portada.length);
    $("#fotoportada").attr("src", "img/portada/p" + fotos_portada[random3] + ".gif")


    $("body").css("background-image", "url(img/fondos/bg" + fondos[random2] + ".jpg)");
    $("body").css("background-size", "cover");

    $("#botonportada").click(function() {
        $("#portada").css("transition-duration", "1s");

        $("#portada").css("opacity", "0");
        $("#portada").css("z-index", "-1");
        var audio = $("#audio")
        audio.play
        // $("#portada").hide(10000);



    })


    //serenidad
    mattina = ["", "", "Where are you going?\n\nIt would be hard to explain,\nbut if you ever get there,\ncome find me.\nNothing would ever pull us apart."]
    bellos_de_los_mares = ["", "", "Well, I was thinking\nwe don't really have any photographs of us.\nAnd I thaught\nthis song could be like a photo\nthat captures us\nin this moment of our life\ntogether."]
    liguera = ["", "", "It's how we spenda third\nof our lives asleep,\nand maybe that's the tima\nwhen we feel the most free."]

    //amargura
    lxvi = ["", "", "Sometimes,\nI think I have felt everything\nI'm ever going to feel.\nAnd from here an out\nI'm not going to feel anything new.\nJust lesser versions\nof what I've already felt."]
    riqueza = ["", "", "I think everyone\nwho falls in love\nis a freak.\nIt's a crazy thing to do.\nIt's like a form of socially acceptable insanity"]

    //ira
    ira_1 = ["", "", "You don't know\nwhat is to loose someone\nwho you care about."]
    ira_2 = ["", "", "I caught myself thinking\nabout it over and over.\nAnd then I realized\nthat I was simply remembering it\nas something that\nwas wrong with me.\nThat was the story\nI was telling myself."]
    ira_3 = ["", "", "The past is\njust a story\nwe tell ourselves."]

    //amor
    shakespeare = ["", "", "When I talk to her,\nI feel like she's with me."]
    amor_2 = ["", "", "You make me feel."]
    annabel = ["", "", "That means a lot to me."]
    annabel1 = ["", "", "You are beautiful"]

    //nostalgia
    palabra = ["", "", "I started to think\nabout all the thingds we are the same.\nWe are all made of matter."]
    nutre = ["", "", "The past is\njust a story\nwe tell ourselves."]
    nostalgia_3 = ["", "", "I want to discover myself."]


    //asombro
    infinito = ["", "", "I want to allow myself,\njoy."]
    atardece = ["", "", "You helped me discover\nmy hability to want."]
    silencio = ["", "", "I've seen you feel joy,\nI've seen you marvel at things.\nI mean maybe you don't see it at this exact time,\nbut that's understandable,\nyou have been through a lot.\nYou lost a part of yourself."]

    serenidad = [mattina, bellos_de_los_mares, liguera]
    amargura = [lxvi, riqueza]
    ira = [ira_1, ira_2, ira_3]
    amor = [shakespeare, amor_2, annabel, annabel1]
    nostalgia = [palabra, nutre, nostalgia_3]
    asombro = [infinito, atardece, silencio]

    sentimientos = [serenidad, amargura, ira, amor, nostalgia, asombro]

    var eleccion = false
    var eleccion_estilo = false

    p = 0

    $("#0").css("font-family", estilos[0])
    $("#1").css("font-family", estilos[1])
    $("#2").css("font-family", estilos[2])
    $("#3").css("font-family", estilos[3])

    $("#serenidad").click(function () {
        const random = Math.floor(Math.random() * serenidad.length);
        // console.log(serenidad[random])
        p = serenidad[random]

        // for (var i = 0; i < p.length; i++) {
        //     var txt1 = "<p>" + p[i] + "</p>"
        //     $("#poesia").append(txt1)
        // }
    })
    $("#amargura").click(function () {
        const random = Math.floor(Math.random() * amargura.length);
        p = amargura[random]


    })

    $("#ira").click(function () {
        const random = Math.floor(Math.random() * ira.length);
        p = ira[random]


    })

    $("#amor").click(function () {
        const random = Math.floor(Math.random() * amor.length);
        p = amor[random]

    })

    $("#nostalgia").click(function () {
        const random = Math.floor(Math.random() * nostalgia.length);
        p = nostalgia[random]


    })
    $("#asombro").click(function () {
        const random = Math.floor(Math.random() * asombro.length);
        p = asombro[random]


    })
    console.log(p)


    // $("button").mouseenter(function() {
    //     $(this).css("transition-duration", "0.5s")
    //     $(this).css("background-color", "#00000080")



    // })

    // $("button").mouseleave(function() {
    //     $(this).css("transition-duration", "0.5s")
    //     $(this).css("background-color", "#000000")

    // })

    $(".button1").click(function () {
        $(".button1").css("transitio-duration", "0.5s")
        $(".button1").css("background-color", "black")
        $(".button1").css("color", "white")

        $(this).css("transition-duration", "1s")
        $(this).css("background-color", "white")
        $(this).css("color", "black")
        eleccion = true
        console.log(eleccion, eleccion_estilo)
        if (eleccion == true && eleccion_estilo == true) {
            console.log("holi")
            // $("#btn-generate").css("transition-duration", "1s")
            $("#btn-generate").css("visibility", "visible")


        }

    })
    e = "0"

    $(".button2").click(function () {
        $(".button2").css("transitio-duration", "0.5s")
        $(".button2").css("background-color", "white")
        $(".button2").css("color", "black")

        $(this).css("transition-duration", "1s")
        $(this).css("background-color", "black")
        $(this).css("color", "white")
        e = $(this).attr("id")
        font = estilos[parseInt(e)]
        eleccion_estilo = true
        console.log(eleccion, eleccion_estilo)
        if (eleccion == true && eleccion_estilo == true) {
            // $("#btn-generate").css("transition-duration", "1s")
            $("#btn-generate").css("visibility", "visible")


        }

    })


    $("#btn-generate").click(function () {
        $(".x").remove();
        papel = ["A", "B", "C", "D"]
        const random1 = Math.floor(Math.random() * papel.length);
        console.log(papel[random1])


        if (eleccion == true && eleccion_estilo == true) {
            $("#divpoesia").css("background-image", "url(img/estilos/estilo" + papel[random1] + ".jpg)");
            poesia = p[2].split("\n")
            // console.log(p)
            // parr = document.createElement("p")
            // parr.textContent = p[2]
            // $("#poesia").append(parr)
            var titulo = document.createElement("p")
            $(titulo).attr("class", "x")
            $(titulo).css("font-family", font)
            titulo.textContent = p[0]
            $("#titulo").append(titulo)


            $("#titulo").css("font-size", "30px")

            for (var i = 0; i < poesia.length; i++) {
                console.log(poesia[i])
                var parr = document.createElement("p")
                $(parr).attr("class", "x")
                parr.textContent = poesia[i]
                $(parr).css("font-family", font)
                $("#poesia").append(parr)

                function sleep(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }
            }
            var autor = document.createElement("p")
            $(autor).attr("class", "x")
            autor.textContent = p[1]
            $(autor).css("font-family", font)
            $("#autor").append(autor)







        }




    })



});
