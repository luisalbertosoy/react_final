# 🛍️ Ecommerce - Proyecto Final - React JS by Coderhouse

Bienvenido a **Mi proyecto final de React JS**, una tienda en línea desarrollada con ⚡ Vite + React ⚡ 

## 🚀 Tecnologías Usadas
- **Vite + React**: Para una experiencia de desarrollo rápida y eficiente.
- **Firebase**: Base de datos en la nube para almacenar productos y órdenes.
- **React Context**: Para gestionar el carrito de compras y visualizar el carrito.

## 🎯 Características Clave
1. **Cart Viewer** 🛒: Visualiza tu carrito en cualquier momento, actualizado en tiempo real.
2. **Lógica de Tallas** 👕: Asegura que siempre selecciones una talla antes de añadir un producto al carrito.
3. **Sistema de Órdenes Simuladas** 📝: Guarda las órdenes generadas en Firebase para un seguimiento fácil.
4. **Integración con Firebase** 🔥: Todos los datos de productos y órdenes se gestionan a través de Firebase, ¡nunca pierdas información!

## 📦 Instalación

Sigue estos pasos para correr el proyecto localmente:

1. Clona este repositorio:
    ```bash
    git clone https://github.com/luisalbertosoy/react_final.git

2. Instala las dependencias:
    cd tu-repositorio
    npm install

3. Crea un archivo `.env` en la raíz del proyecto con las credenciales de Firebase (reemplaza los valores con los de tu proyecto):
    ```bash
    VITE_FIREBASE_API_KEY=TU_API_KEY
    VITE_FIREBASE_AUTH_DOMAIN=TU_AUTH_DOMAIN
    VITE_FIREBASE_PROJECT_ID=TU_PROJECT_ID
    VITE_FIREBASE_STORAGE_BUCKET=TU_STORAGE_BUCKET
    VITE_FIREBASE_MESSAGING_SENDER_ID=TU_MESSAGING_SENDER_ID
    VITE_FIREBASE_APP_ID=TU_APP_ID

4. Corre el proyecto en modo de desarrollo:
    ```bash
    npm run dev

## 🛠️ Uso
🛒 Agregar productos al carrito
1. **Navega por el catálogo y selecciona tu producto favorito.
2. **Asegúrate de seleccionar una talla disponible antes de añadir al carrito.
3. **El carrito se actualizará automáticamente y podrás verlo desde cualquier página.

## ✅ Simulación de compra
1. **Dirígete al carrito y revisa los productos seleccionados.
2. **Haz clic en "Checkout" y genera una orden.
3. **La orden será almacenada en Firebase para futuras consultas.

## 🔥 Firebase Setup
1. **Crea un proyecto en Firebase y habilita Firestore.
2. **Agrega la configuración de Firebase al archivo .env como se mencionó anteriormente.

## 💡 Detalles Extra
1. **ViewCartContext: Maneja un componente global con el que puedes visualizar el carrito al hacer click en el ícono.
2. **SizeSelector: Asegura que el usuario seleccione una talla antes de agregar un producto al carrito.

## 🧑‍💻 Autor
Desarrollado por Luis Alberto.
