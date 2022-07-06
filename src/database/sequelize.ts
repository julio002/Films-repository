import { Error, Sequelize } from "sequelize";

    export const sequelize = new Sequelize("dvdrental", "postgres", "julio002", {
            host: "localhost",
            dialect: "postgres",
            define: {
                freezeTableName: true,
                timestamps: false
            },
            logging: false
        });
    
export default () => {
    sequelize
        .authenticate()
        .then(() => {
            console.log("Conexão realizada com sucesso!");
        })
        .catch((error: Error) => {
            console.log(`Conexão não realizada: ${error}`);
        });
};
