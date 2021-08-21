const Sequelize=require("sequelize");
module.exports=(sequelize)=>{
    class Credential extends Sequelize.Model{}
    Credential.init({
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true
        },
        email:{
            type:Sequelize.STRING,
        },
        password:{
            type:Sequelize.INTEGER
        },
        username:{
            type:Sequelize.STRING,
        }
    },{sequelize});
    return Credential;
};