import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../shared/connection'; // Supondo que você tenha configurado o sequelize em outro arquivo

// Definindo os atributos da interface
interface ContratanteAttributes {
  id: number;
  nomeCompleto: string;
}

// Atributos opcionais ao criar uma nova instância (como o ID, que será gerado automaticamente)
interface ContratanteCreationAttributes extends Optional<ContratanteAttributes, 'id'> {}

// Definindo o modelo
export class Contratante extends Model<ContratanteAttributes, ContratanteCreationAttributes> implements ContratanteAttributes {
  public id!: number; // "!" significa que esse campo será definido posteriormente
  public nomeCompleto!: string;
}

// Inicializando o modelo
Contratante.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nomeCompleto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // Passando a instância do Sequelize
    modelName: 'Contratante',
    tableName: 'contratante',
    timestamps: false, // Se não quiser colunas de createdAt/updatedAt
    freezeTableName: true, // Para manter o nome da tabela exatamente como está
  }
);
