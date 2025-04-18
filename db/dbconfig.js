import {Sequelize} from 'sequelize';

const sequelize = new Sequelize("squelizeDB","root","MANSI0609",{
    host:"localhost",
    dialect :"mysql"
});

sequelize.authenticate()
.then(()=>{
    console.log("databade connected...");
})
.catch(err=>{
    console.log("connection failed.."+err);
});

export default sequelize;