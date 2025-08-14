document.addEventListener("DOMContentLoaded", function() {
    const knopka_potverdit_vxod = document.getElementById("knopka_potverdit_vxod");
    const okno_vxoda_osnova = document.getElementById("okno_vxoda_osnova");
    const okno_vxod_osnova_2 = document.getElementById("okno_vxod_osnova_2");
    const nadpis_yspex2 = document.getElementById("nadpis_yspex");

    knopka_potverdit_vxod.addEventListener("click", function() {
        okno_vxoda_osnova.classList.toggle("okno_vxoda_osnova_itog");
        okno_vxod_osnova_2.classList.toggle("okno_vxod_osnova_1")
        nadpis_yspex2.classList.toggle("nadpis_yspex2")
    });
});