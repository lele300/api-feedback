$(function() {
    $('#feedbacks').DataTable({
        language : {
            url : "http://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese.json"
        },
        order : [
            [0, "desc"]
        ],
        columnDefs : [
            {
                visible : false,
                targets : 0
            },
        ]
    });
});

const idioma = {
    emptyTable : "Nenhum dados disponível na tabela.",
    info : "Exibindo registros de 1 até 10",
    infoEmpty : "Exibindo 0 registros de 0",
    infoFiltered : "Filtrado de 100 registros",
    lengthMenu : "Exibindo 10 registros",
    loadingRecords : "Carregando...",
    processing : "Processando",
    search : "Pesquisar",
    zeroRecords : "Não foram encontrados registros",
    paginate : {
        first : "Primeira",
        last : "Última",
        next : "Próxima",
        previous : "Anterior"
    },
    aria : {
        sortAscending : "Ativado a ordenação crescente",
        sortDescending : "Ativado a ordenação descrescente"
    }
};