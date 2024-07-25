document.addEventListener("DOMContentLoaded", function() {
    function getParameterByName(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    const noticiaId = getParameterByName('noticia');
    const divulgacaoId = getParameterByName('divulgacao');

    if (noticiaId !== null) {
        fetch(`http://localhost:5000/api/noticias/${noticiaId}`)
            .then(response => response.json())
            .then(noticia => {
                document.getElementById('titulo').textContent = noticia.titulo;
                document.getElementById('imagem').src = noticia.imagem;
                document.getElementById('imagem').alt = noticia.titulo;
                document.getElementById('descricao').textContent = noticia.descricao;
                document.getElementById('data').textContent = noticia.data;
            })
            .catch(error => console.error('Erro ao carregar os detalhes da notícia:', error));
    } else if (divulgacaoId !== null) {
        fetch(`http://localhost:5000/api/divulgacoes/${divulgacaoId}`)
            .then(response => response.json())
            .then(divulgacao => {
                document.getElementById('titulo').textContent = divulgacao.titulo;
                document.getElementById('imagem').src = divulgacao.imagem;
                document.getElementById('imagem').alt = divulgacao.titulo;
                document.getElementById('descricao').textContent = divulgacao.descricao;
                document.getElementById('data').textContent = divulgacao.data;
            })
            .catch(error => console.error('Erro ao carregar os detalhes da divulgação:', error));
    } else {
        console.error('ID da notícia ou da divulgação não fornecido.');
    }
});
