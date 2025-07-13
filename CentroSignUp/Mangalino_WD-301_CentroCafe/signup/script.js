const form = document.getElementById('signup-form');
const display = document.getElementById('display-area');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  let output = '<h2>Submitted Info</h2>';
  output += `<p><strong>First Name:</strong> ${formData.get('fname')}</p>`;
  output += `<p><strong>Last Name:</strong> ${formData.get('lname')}</p>`;
  output += `<p><strong>Gender:</strong> ${formData.get('gender')}</p>`;
  output += `<p><strong>Address:</strong> ${formData.get('address')}</p>`;
  output += `<p><strong>Contact Number:</strong> ${formData.get('contact')}</p>`;
  output += `<p><strong>Email:</strong> ${formData.get('email')}</p>`;
  output += `<p><strong>Date of Birth:</strong> ${formData.get('dob')}</p>`;
  output += `<p><strong>Username:</strong> ${formData.get('username')}</p>`;
  output += `<p><strong>Password:</strong> (hidden)</p>`;

  display.innerHTML = output;

  form.reset();
});

form.addEventListener('reset', () => {
  display.innerHTML = '<h2>Submitted Info</h2><p>No data submitted yet.</p>';
});
