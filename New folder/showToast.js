export function showToast(operation, id) {
    const toast = document.createElement("div");
    toast.classList.add("toast");
  
    // Set the text content of the toast based on the operation
    if (operation === "add") {
      toast.textContent = `Product with ID ${id} has been added.`;
    } else {
      toast.textContent = `Product with ID ${id} has been deleted.`;
    }
  
    document.body.appendChild(toast);
  
    // Automatically remove the toast after a few seconds
    setTimeout(() => {
      toast.remove();
    }, 2000);
  }


//   import { defineConfig } from "vite";

// import { resolve } from "vite";

// export default defineConfig({


//     build: {
//         rollupOptions: {
//             input: {
//                 main: resolve(__dirname, "index.html"),
//                 about: resolve(__dirname, "about.html"),
//                 contact: resolve(__dirname, "contact.html"),
//                 product: resolve(__dirname, "product.html"),
//                 addToCart: resolve(__dirname, "add-to-card.html"),
//             },
//         }
//     }
// })