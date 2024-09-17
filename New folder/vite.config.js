import { defineConfig } from "vite";

import { resolve } from "vite";

export default defineConfig({


    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                about: resolve(__dirname, "about.html"),
                contact: resolve(__dirname, "contact.html"),
                product: resolve(__dirname, "product.html"),
                addToCart: resolve(__dirname, "add-to-card.html"),
            },
        }
    }
})