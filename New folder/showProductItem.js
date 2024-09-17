import { addToCart } from "./addToCart";
import { getCartProductFromLS } from "./getCartProducts";
import { homeQuantityToggle } from "./homeQuantityToggle";

const Allproduct_Sample = document.querySelector("#Allproduct-Sample");
const Allproduct_Sample_Template = document.querySelector("#Allproduct-Sample--Template");

getCartProductFromLS();

export const showProductItem = (productItem) => {
  if (!productItem) {
    return false;
  }

  productItem.forEach((curProd) => {
    const { brand, category, description, id, image, name, price, stock } =
      curProd;

    const productClone = document.importNode(Allproduct_Sample_Template.content, true);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector(".productDescription").textContent = description;
    productClone.querySelector(".productPrice").textContent = `₹${price}`;
    productClone.querySelector(".productActualPrice").textContent = `₹${price * 2}`;

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        homeQuantityToggle(event, id, stock);
      });

    productClone
      .querySelector(".add-to-cart-button")
      .addEventListener("click", (event) => {
        addToCart(event, id, stock);
      });

      Allproduct_Sample.append(productClone);
  });
};