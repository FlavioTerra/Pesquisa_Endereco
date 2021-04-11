
function recuperaDadosEndereco(cep) {
    
    let url = `https://viacep.com.br/ws/${cep}/json/unicode/`;

    let xmlHttp = new XMLHttpRequest();

    xmlHttp.open('GET', url);

    xmlHttp.onreadystatechange = () => {
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            
            let JSONcep = xmlHttp.responseText;

            let objJSONcep = JSON.parse(JSONcep);

            document.getElementById('endereco').value = objJSONcep.logradouro;
            document.getElementById('bairro').value = objJSONcep.bairro;
            document.getElementById('cidade').value = objJSONcep.localidade;
            document.getElementById('uf').value = objJSONcep.uf;
        } 
    }

    xmlHttp.send();
}