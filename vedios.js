const Sequelize=require("sequelize");
module.exports=(sequelize)=>{
    class Vedio extends Sequelize.Model{}
    Vedio.init({
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true
        },
        uploaded_file:{
            type:Sequelize.STRING,
        }
    },{sequelize});
    return Vedio;
};