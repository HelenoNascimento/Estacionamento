export class ClientDTO {
    name: string;
    cpf: number ; // inicializando com valor vazio
    email: string;
    telefone: string;
    endereco: string;
    plate: string;
  
    constructor(name: string, cpf: number, email: string, telefone: string, endereco: string, plate: string) {
      this.name = name;
      this.cpf = cpf;
      this.email = email;
      this.telefone = telefone;
      this.endereco = endereco;
      this.plate = plate;
    }
  }