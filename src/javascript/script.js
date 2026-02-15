function calcularMedia() {
const nota1 = parseFloat(document.getElementById("nota1").value);
const nota2 = parseFloat(document.getElementById("nota2").value);
const media = (nota1 + nota2) / 2;
if (isNaN(nota1) || isNaN(nota2)) {
    document.getElementById("resultado").innerHTML = "<strong>Preencha todas as notas.</strong>";
    return;
}
let situação = "";
if (media >= 7) {
    situação = "✅Aprovado";
}
else if (media >= 5 && media < 7) {
    situação = "⚠️Recuperação";
}
else {
    situação = "❌Reprovado";
}
    document.getElementById("resultado").innerHTML = "<strong>"+"Média: " + media.toFixed(2) + "</strong>"+ "<br>"   + situação ;
}
document.getElementById("listaTarefas").innerHTML += "<strong>" + tarefaInput + "</strong><br>";
    document.getElementById("listaTarefas").style.background = "#4338ca";