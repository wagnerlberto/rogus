function textoDeDinheiroParaDecimal(texto) {
  var textoLimpo = texto.replace("R$ ", "").replace(",", ".");
  return parseFloat(textoLimpo);
}

function lerTotal() {
  var total = document.getElementById("total");
  return textoDeDinheiroParaDecimal(total.innerHTML);
}

function decimalParaTextoDeDinheiro(valor) {
  var texto = (valor < 1 ? "0" : "") + Math.floor(valor * 100);
  texto = "R$ " + texto;
  return texto.substr(0, texto.length - 2) + "," + texto.substr(-2);
}

function escreverTotal(valor) {
  var total = document.getElementById("total");
  total.innerHTML = decimalParaTextoDeDinheiro(valor);
}

function calcularTotalDeProdutos(){
  var produtos = document.getElementsByClassName("produto");
  var totalDeProdutos=0;
  for(var pos = 0;pos<produtos.length;pos++){
    var elementosDePreco=produtos[pos].getElementsByClassName("preco");
    var textoDoPreco=elementosDePreco[0].innerHTML;
    var preco=textoDeDinheiroParaDecimal(textoDoPreco);

    var elementosDePreco=produtos[pos].getElementsByClassName("quantidade");
    var textoDaQuantidade=elementosDePreco[0].value;
    var quantidade=textoDeDinheiroParaDecimal(textoDaQuantidade);

    var subtotal = quantidade * preco;
    totalDeProdutos+=subtotal;
  }
  return totalDeProdutos;
}

function atualizarTotal(){
  escreverTotal(calcularTotalDeProdutos());
}

function aoMudarCaixasDeQuantidade(){
  var caixasDeQuantidade=document.getElementsByClassName("quantidade");
  for(var i=0;i<caixasDeQuantidade.length;i++){
    caixasDeQuantidade[i].onchange=atualizarTotal;
  }
}

function aoCarregarDocument(){
  aoMudarCaixasDeQuantidade();
  atualizarTotal();
}

window.onload=aoCarregarDocument;