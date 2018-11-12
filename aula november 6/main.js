$(document).ready(function () {
    console.log("ready!");
    $("#tabela").hide();
});

var numero_aluno = 1
var total_alunos;
lista_notas = [];

$("#btn2").click(function () {
    total_alunos = $("#number1").val();
    lista_notas.push($("#number2").val());
    if (numero_aluno < total_alunos) {
        numero_aluno++;
        render_newGrade();
    }
    else {
        getTable();
    }
    console.log(lista_notas);
});

function newGrade() {

    return `<label for="number2"> Indique a nota do ` + numero_aluno + ` aluno: </label>
    <input type=number id="number2">
</div>
<button id="btn2" onclick="save_Grade()">Submit</button>
</button>`
};

function render_newGrade() {
    $("#body").html(newGrade());
}
function save_Grade() {
    lista_notas.push($("#number2").val());
    if (numero_aluno < total_alunos) {
        numero_aluno++;
        render_newGrade();
    }
    else {
        getTable();
    }
    //console.log(lista_notas);
}




function getTable() {
    $("#tabela").show();

    for (let i = 0; i < lista_notas.length; i++) {
        console.log(lista_notas[i]);
        $("p").html(`<tr>${lista_notas[i]}</tr>`);
        $("#tbody").append(`<tr>
        <td>${i}</td>
        <td>${lista_notas[i]}</td>
        </tr>`);
    }
}
