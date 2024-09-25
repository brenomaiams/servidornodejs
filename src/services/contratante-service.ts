import { Contratante } from "../models/contratante-model.js";

export class ContratanteService {
    //criando um novo contratante no banco de dados
    public async createContratante(nomeCompleto: string): Promise<Contratante> {
        try {
            const contratante = await Contratante.create({nomeCompleto});
            return contratante;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Impossível criar contratante: ${error.message}`);
            } else {
                throw new Error("Erro nunca ocorrido.");
            }
        }
    }

    public async getAllContratantes(): Promise<Contratante[]> {
        try {
            return await Contratante.findAll();
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Impossivel encontrar contratantes: ${error.message}`);
            } else {
                throw new Error("Erro nunca ocorrido.");
            }
        }
    }
}