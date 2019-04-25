# Sistema de senha numérica

### interface :
- o programa deve ter uma interface com 10 de 0 a 9
- deve conter um botão de mode e um botão se confirmação (ok)
- em cima dos botões deve ter um retângulo branco simulando um display. Esse display deve ter duas linhas (tag p) 

###  Modos
- O programa terá dois modos, um de cadastrar senha e outro para entrar com a senha
- Os modos serão alternados ao pressionar o botão mode
- Para selecionar um modo pressione ok
- Crie uma variável global chamado estado que recebe um objeto com dois parâmetros: senhaSalva e modo, ambos iniciados com uma string vazia
- Crie duas funções: setSenha e setMode, que recebe uma parâmetro cada: uma senha e um modo respectivamente
- Ao selecionar o modo, chame a função setMode para trocar o modo, NÃO EDITE DIRETAMENTE A VARIÁVEL EM QUALQUER OUTRA PARTE DO CÓDIGO, ELA DEVE SER ALTERADA SOMENTE NA FUNÇÃO setModo. 
- Ao selecionar o modo entrar com a senha, o display deve mostrar senha inválida, caso não exista senha cadastrada. Caso contrário peça pra o usuário digitar a senha.
- Ao selecionar o modo cadastrar deve se pedir para o usuário digitar uma senha caso não exista senha cadastrada, caso contrário o usuário deverá digitar a senha antiga antes de digitar a nova.

## Cadastro de senha
- ao selecionar o modo cadastrar senha, o usuário deverá digitar 4 números caso a condição de Cadastrar senha seja atendida
- Ao digitar ok a senha deve ser salva na variável estado.senhaSalva, mencionada anteriormente.
- A nova senha não deve ser igual a senha anterior caso exista
- Utilize a função setSenha para salvar a nova senha, NÃO EDITE DIRETAMENTE A VARIÁVEL EM QUALQUER OUTRA PARTE DO CÓDIGO, ELA DEVE SER ALTERADA SOMENTE NA FUNÇÃO setSenha.
- Caso a senha tenha sido alterada informe uma mensagem Senha cadastrada com sucesso
- Caso a senha seja igual a anterior mostre uma mensagem de senha igual a anterior.
- Não deixe o usuário digitar mais que 4 dígitos 


## Entrar com a senha
- Ao selecionar o modo entrar com a senha exibe uma mensagem entre com a senha
- Esse modo também pode ser acessado ao Cadastrar uma nova senha
- A senha só pode ter um tamanho máximo de 4 dígitos
- Caso a senha seja incorreta, exiba uma mensagem de acesso negado
- Caso a senha seja igual a senha salva, imprima uma mensagem de acesso permitido caso esteja no modo entrar com a senha, caso esteja no modo cadastrar senha vá para o passo de cadastrar uma nova senha.