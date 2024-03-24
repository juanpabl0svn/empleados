import { Sequelize } from "sequelize";

const sequelize = new Sequelize("a", "juan", "1234", {
  dialect: "mssql",
  server: "127.0.0.1",
  port: "53972",
  dialectModule: require("tedious"),
  dialectOptions: {
    options: {
      encrypt: false,
    },
  },
});

export const Empleado = sequelize.define(
  "dbo.empleado",
  {
    cedula: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cargo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    movil: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    area: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    estado: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    imagen: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    schema: "dbo",
    tableName: "empleado",
    timestamps: false,
  }
);

const Permisos = sequelize.define(
  "dbo.empleado_permiso",
  {
    id_permiso: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    cedula: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    permiso: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    detalle: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    fechai: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    fechaf: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    fechar: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  {
    schema: "dbo",
    tableName: "empleado_permiso",
    timestamps: false,
  }
);
