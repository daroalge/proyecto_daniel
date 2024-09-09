window.onload = (event) => {

//LOGIN
    const mainAuth__login = document.getElementById('mainAuth__login');
    const loginMessage = document.getElementById('loginMessage');

    mainAuth__login.addEventListener('submit', async function(event) {

        event.preventDefault();
        
        const username = document.getElementById('userName__login').value;
        const password = document.getElementById('password__login').value;

        try {
            const response = await fetch ('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password}),
            });

            const data = await response.json();
            console.log(data);
            const encodeData = btoa(JSON.stringify(data));

            if (response.ok) {
                loginMessage.textContent = 'login Exitoso';
                loginMessage.style.color = 'green'
                window.location.href = `../html/shop.html#${encodeData}`;
            } else {
                loginMessage.textContent = 'Error en login';
                loginMessage.style.color = 'red'
            }
        } catch (error) {
            console.log (error)
            loginMessage.textContent = 'hubo un error en el login';
            loginMessage.style.color = 'red'
        }

    });

// REGISTER
    const mainAuth__register=document.getElementById('mainAuth__register');
const registerMessage=document.getElementById('registerMessage');

mainAuth__register.addEventListener('submit', async function(event){
    event.preventDefault();

    const newFirstName = document.getElementById ('firstName').value;
    const newLastName = document.getElementById ('lastName').value;
    const newUserName = document.getElementById ('userName').value;
    const newEmail = document.getElementById ('email').value;
    const newPhone = document.getElementById ('phone').value;
    const newPassword = document.getElementById ('password').value;

    try {
        const response = await fetch ('http://localhost:3000/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({firstName:newFirstName, lastName: newLastName, userName: newUserName, email:newEmail, phone: newPhone, password: newPassword})
        });

        const data = await response.json();
        console.log(data);

        if (response.ok) {
            registerMessage.textContent = 'Registro Exitoso';
            registerMessage.style.color = 'green'
        } else {
            registerMessage.textContent = 'Error en Regristro';
            registerMessage.style.color = 'red'
        }
    } catch (error) {
        console.log (error)
        registerMessage.textContent = 'Hubo un Error en el Registro';
            registerMessage.style.color = 'red'
    }

});
}