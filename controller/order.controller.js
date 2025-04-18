import order from "../model/order.model.js";
import orderItem from "../model/orderItem.model.js";
import product from "../model/product.model.js";
import cartItem from "../model/cartItem.model.js";
import Cart from "../model/card.model.js";

export const placeOrder = async (req, res) => {
  const { userId } = req.body;
  try {
    const cart = await Cart.findOne({
      where: { userId },
      include: {
        model: product,
        through: {
          attributes: ["quantity"],
        }
      }
    })
  }
}


// export const placeOrder = async (req, res) => {
//     const { userId } = req.body;

//     try {
//       // Step 1: Get the user's cart
//       const cart = await Cart.findOne({
//         where: { userId },
//         include: {
//           model: product,
//           through: { attributes: ["quantity"] },
//         },
//       });

//       if (!cart || cart.products.length === 0) {
//         return res.status(400).json({ message: "Cart is empty or not found" });
//       }

//       // Step 2: Calculate total amount
//       let totalAmount = 0;
//       cart.products.forEach((product) => {
//         const qty = product.cartItem.quantity || 1;
//         totalAmount += product.price * qty;
//       });

//       // Step 3: Create the order
//       const newOrder = await order.create({
//         userId,
//         totalAmount,
//       });

//       // Step 4: Create order items
//       const orderItems = cart.products.map((product) => {
//         return {
//           orderId: newOrder.id,
//           productId: product.id,
//           quantity: product.cartItem.quantity || 1,
//           price: product.price,
//         };
//       });

//       await orderItem.bulkCreate(orderItems);

//       // (Optional) Clear the cart
//       await cart.setProducts([]); // removes all items from the cart

//       return res.status(201).json({ message: "Order placed successfully", orderId: newOrder.id });
//     } catch (error) {
//       console.error("Order placement error:", error);
//       return res.status(500).json({ error: "Internal Server Error" });
//     }
//   };


// GET all orders of a user
export const getUserOrders = async (req, res) => {
  const { userId } = req.params;

  try {
    const orders = await order.findAll({
      where: { userId },
      include: {
        model: product,
        through: {
          model: orderItem,
          attributes: ['quantity']
        }
      }
    });

    res.status(200).json({ orders });
  } catch (error) {
    console.error("Fetch orders error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
