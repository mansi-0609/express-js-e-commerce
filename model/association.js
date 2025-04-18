import product from "./product.model.js";
import Category from "./catagory.model.js";
import Cart from "./card.model.js";
import user from "./use.model.js";
import cartItem from "./cartItem.model.js";
import order from "./order.model.js";
import orderItem from "./orderItem.model.js";

Category.hasMany(product,{
    foreignKey:"productCategory"});

product.belongsTo(Category,{
    foreignKey:"productCategory",targetKey:"slug"
});

user.hasOne(Cart);
Cart.belongsTo(user);

Cart.belongsToMany(product,{through:cartItem});
product.belongsToMany(Cart,{through:cartItem});

user.hasMany(order,{foreignKey:"userId"});
order.belongsTo(user,{foreignKey:"userId"});

order.belongsToMany(product, { through: orderItem });
product.belongsToMany(order, { through: orderItem });


export {Category,product,user,Cart,cartItem,order,orderItem};