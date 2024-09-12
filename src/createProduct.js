window.onload = (event) => {
    const productsForm = document.getElementById('createProductsForm');

    productsForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const nombreHeladoProduct = document.getElementById('nombreHelado').value;
        const productDescription = document.getElementById('description').value;
        const priceProduct = document.getElementById('price').value;
        const sizeProduct = document.getElementById('size').value;
        const availabilityProduct = document.getElementById('availability').value;
        const imageProduct = document.getElementById('image').value;

        try {
            const response = await fetch ('http://localhost:3000/products/list/createProducts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({nombreHeladoProduct, productDescription, priceProduct, sizeProduct, availabilityProduct, imageProduct }),
            });
            const data = await response.json();
            if (response.ok) {
                window.alert('Producto Creado Exitosamente.'); 
            } else {
                window.alert('Producto No Fue Creada.');
            }
        } catch (error) {
            console.error(error);
            window.alert('Tenemos problemas técnicos.');
        }
    });
};