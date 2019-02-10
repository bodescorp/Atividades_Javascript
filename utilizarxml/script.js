function carregaXMLRemoto() {

  urlxml = "https://raw.githubusercontent.com/ryganon/linguagens-script/master/projetos/dashboard-lite/tecnologia_uol.xml";

  $.get(urlxml, function (dados) {
    parserXML(dados);
    //console.log(dados);
  });
}

/**
 * Função que processa os dados de um XML
 * @param {*} xml 
 */
function parserXML(xml) {

  dadosLista = "";

  xmlDoc = $.parseXML(xml);
  $xml = $(xmlDoc);

  $filmes = $xml.find("item");

  $filmes.each(function () {
    titulo = $(this).find('title').text();
    genero = $(this).find('description').text();
    date = $(this).find('pubDate').text();
    dadosLista += criaElementoLista([titulo, genero, date]);
  });
  document.getElementById("projeto_lista").innerHTML = dadosLista;
}

function criaElementoLista(dados) {

  var item_lista = '<div>' 
  item_lista +='<li>'; 
  item_lista += '<h2>' + dados[0] + '</h2><br>';
  item_lista += '<h4>' + dados[1] + '</h4><br>';
  item_lista += '<span>';
  item_lista += 'publicado em: ' + dados[2]; 
  item_lista +=  '</span><br>';
  item_lista += '</li><br>';
  item_lista += '</div';

  return item_lista;
}