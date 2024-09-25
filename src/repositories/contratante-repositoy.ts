import { Contratante, ContratanteCreationAttributes } from "../models/contratante-model";

export class ContratanteRepository {
    //criar um novo contratante
    public async create(data: ContratanteCreationAttributes): Promise<Contratante> {
        try {
            const contratante = await Contratante.create(data);
            return contratante;
        } catch (error) {
                throw new Error(`Impossível criar contratante: ${(error as Error).message}`);
        }
    }

    public async findAll(): Promise <Contratante[]> {
        try {
            return await Contratante.findAll();
        } catch (error) {
            throw new Error(`Impossível encontrar contratantes: ${(error as Error).message}`);
        }
    }

    public async findById(id: number): Promise<Contratante | null> {
        try {
            return await Contratante.findById(id);
        } catch(error) {
            throw new Error(`Impossivel encontrar contratante pelo ID ${id}: ${(error as Error).message}`);
        }
    }
}