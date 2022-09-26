$(document).ready(function () {
  CarregarTela();

  //Ajuste de linguagem da tabela para português
  $("#tabelaLinksFavoritos").DataTable({
    language: {
      emptyTable: "Nenhum registro encontrado",
      info: "Mostrando de _START_ até _END_ de _TOTAL_ registros",
      infoEmpty: "Mostrando 0 até 0 de 0 registros",
      infoFiltered: "(Filtrados de _MAX_ registros)",
      infoThousands: ".",
      loadingRecords: "Carregando...",
      processing: "Processando...",
      zeroRecords: "Nenhum registro encontrado",
      search: "Pesquisar",
      paginate: {
        next: "Próximo",
        previous: "Anterior",
        first: "Primeiro",
        last: "Último",
      },
      aria: {
        sortAscending: ": Ordenar colunas de forma ascendente",
        sortDescending: ": Ordenar colunas de forma descendente",
      },
      lengthMenu: "Exibir _MENU_ resultados por página",
    },
  });
});


// função para exibição das informações da tabela, listando os itens registrados no banco de dados
function CarregarTela() {
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/article/",
    cache: false,
    success: function (data) {
      $("#tabelaLinksFavoritos").dataTable().fnClearTable();
      data.forEach(function (x) {
        let botaoEditar =
          "<a type='button' data-id='" +
          x._id +
          "' onclick='AbrirModalEditarDados(this)' class='btn btn-info m-1'><i class='fa-solid fa-pen'></i></a>";

        let botaoExcluir =
          "<a type='button' data-id='" +
          x._id +
          "' onclick='ExcluirDados(this)' class='btn btn-danger'><i class='fa-solid fa-xmark'></i></a>";

        $("#tabelaLinksFavoritos")
          .dataTable()
          .fnAddData([botaoEditar + botaoExcluir, x._id, x.title, x.url]);

        $("#tabelaLinksFavoritos").DataTable().draw();
      });
    },
    error: function (data) {
      alert("Falha ao carregar a tela com os dados de links favoritos");
    },
  });
}

function AbrirModalEditarDados(componente) {
  let id = componente.dataset.id;
  $("#btnInserirLink").hide();
  $("#btnAtualizarLink").hide();

  $.ajax({
    type: "GET",
    url: "http://localhost:3000/article/" + id,
    cache: false,
    success: function (data) {
      $("#exampleModal").modal("show");
      $("#inputId").val(data._id);
      $("#inputTitulo").val(data.title);
      $("#inputUrl").val(data.url);
      $("#btnAtualizarLink").show();
    },
    error: function (data) {
      alert("Falha ao inserir dados");
    },
  });
}

function AbrirModalInserirDados() {
  $("#btnInserirLink").hide();
  $("#btnAtualizarLink").hide();
  $("#labelId").hide();
  $("#inputId").hide();
  $("#alertSucesso").hide();

  $("#inputId").val("");
  $("#inputTitulo").val("");
  $("#inputUrl").val("");
  $("#btnInserirLink").show();

  $("#exampleModal").modal("show");
}


function InserirDados() {
  let body = {
    title: $("#inputTitulo").val(),
    url: $("#inputUrl").val(),
  };
  $.ajax({
    type: "POST",
    url: "http://localhost:3000/article/",
    contentType: "application/json",
    data: JSON.stringify(body),
    cache: false,
    success: function (data) {
      $("#exampleModal").modal("hide");
      $("#successModal").modal("show");
      $("#labelTextoModalSucesso").html(
        "Dados inseridos <strong>com sucesso!</strong>."
      );
      CarregarTela();
    },
    error: function (data) {
      alert(data.responseText);
    },
  });
}

function AtualizarDados() {
  let id = $("#inputId").val();

  let body = {
    title: $("#inputTitulo").val(),
    url: $("#inputUrl").val(),
  };
  $.ajax({
    type: "PATCH",
    url: "http://localhost:3000/article/" + id,
    contentType: "application/json",
    data: JSON.stringify(body),
    cache: false,
    success: function (data) {
      $("#exampleModal").modal("hide");
      $("#successModal").modal("show");
      $("#labelTextoModalSucesso").html(
        "Dados atualizados <strong>com sucesso!</strong>."
      );
      CarregarTela();
    },
    error: function (data) {
      alert(data.responseText);
    },
  });
}

function ExcluirDados(componente) {
  let id = componente.dataset.id;

  $.ajax({
    type: "DELETE",
    url: "http://localhost:3000/article/" + id,
    cache: false,
    success: function (data) {
      $("#successModal").modal("show");
      $("#labelTextoModalSucesso").html(
        "Dados excluídos <strong>com sucesso!</strong>."
      );
      CarregarTela();
    },
  });
}
