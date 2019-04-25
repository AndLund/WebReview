# projeto 4 - Cadastro de usuários
O projeto tem como objetivo imitar um sistema de cadastro de usuários, mas sem salvar em um banco de dados. O objetivo é criar uma tabela de usuários

# Interface
* A página deverá conter duas div, uma com um formulário de cadastro e outra com a tabela
* O formulário de cadastro deve conter alguns campos:
    * Nome Completo
    * Email
    * Data de nascimento
    * CPF
    * Profissão
        * Estudante
        * Programador Front-end
        * Programador back-end
        * Outros
* Por fim, o furmulário deve ter um botão para gravar
* A div da tabela deve ter uma tabela inicialmente vazia contendo o um cabeçalho com as colunas referente aos dados anteriormente passados. Além disso, adicione mais uma coluna para colocar o botão de deletar.

# Validação (regex)
* Alguns dados deverão ser validados antes:
    * Nome
        * O nome não pode ter celulas com menos de 4 caracteres
        * Não pode ter apenas uma palavra ( O nome deve ser completo)
    * CPF
        * O campo cpf aceita tanto valores do tipo:
            * ddd.ddd.ddd-dd
            * ddddddddddd
        * Qualquer outra combinação deve ser inválida
        * Ao salvar, salve sempre no padrão ddddddddddd

# Exibindo os erros
* Crie uma ul vazia no inicio do documento, quando o usuário tentar cadastrar deverá ser mostrado uma janela de erro ou sucesso caso o cadastro tenha sido validado ou não.
* Essa ul deve ser esvaziada a cada nova tentativa de cadastro

# Tabela
* A cada novo cadastro realizado com sucesso, deverá ser adicionado uma nova linha na tabela.
* Cada dado deverá conter um botão para remover cadastro
* Ao clicar no botão remover, deverá ser removida toda a linha da tabela

# Funções de exportar e importar json
* Crie duas funções extras:
    * extrairObjetoTabela()
        * Essa função deverá pegar a extrutura da tabela e exportar para um objeto javascript
    * criaTabelaComJson( novoJson)
        * Essa função adiciona uma tabela nova contendo todos os dados do json enviado.
        * Faça apenas uma validação para verificar se todos os dados estão presentes.
        * Caso achar necessário, crie funções auxiliares para facilitar o entendimento do código 

