const form = document.querySelector('form');
const submitButton = document.querySelector('#submit');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#Name').value;
  const email = document.querySelector('#Mail').value;
  const id = document.querySelector('#id').value;
  const message = document.querySelector('textarea[name="message"]').value;

  const data = {
    name,
    email,
    id,
    message
  };

  submitButton.disabled = true;
  submitButton.innerText = 'Sending...';

  fetch('submit.php', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message);
    submitButton.disabled = false;
    submitButton.innerText = 'Submit';
    form.reset();
  })
  .catch(error => {
    alert('An error occurred. Please try again later.');
    submitButton.disabled = false;
    submitButton.innerText = 'Submit';
  });
});
