
export interface usuario_pessoal {
    id: string,
    nome: string,
    sobrenome: string,
    idade: number,
    sexo: boolean | null

    email: string,
    senha: string

    data_criacao: string
    data_nascimento: string

    descricao: string
}
