window.onload = (event) => {
    const mainAuth__register = document.getElementsByClassName('mainAuth__register');

    mainAuth__register.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const username = document.getElementById('userName').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch ('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password})
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                console.log('nice')
            }
        } catch (error) {
            
        }

    })
}