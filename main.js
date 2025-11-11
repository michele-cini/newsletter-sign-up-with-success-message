const form = document.getElementById('form');

function handleSubmit(e)
{
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    if(!validateEmail(data['email']))
    {
        const emailField = form.querySelector('#email-field');
        const errorMessage = form.querySelector('#email-error');
        errorMessage.textContent = 'Valid email required';
        emailField.classList.add('error');
        return;
    }

    document.getElementById('main-content').classList.add('hide');
    const success = document.getElementById('success-content');
    success.classList.remove('hide');
    success.querySelector('#insert-email').textContent = data['email'];

}

function validateEmail(email)
{
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

form.addEventListener('submit', handleSubmit);