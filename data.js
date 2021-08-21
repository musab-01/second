const Sequelize=require("sequelize")
module.exports=(sequelize)=>{
    class Data extends Sequelize.Model{}
    Data.init({
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true
        },
        patientName:{
            type:Sequelize.INTEGER
        },
        wardNumber:{
            type:Sequelize.INTEGER
        },
        phone:{
            type:Sequelize.INTEGER
        }
    },{sequelize});
    return Data;
}