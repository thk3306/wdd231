const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);

document.querySelector('#thankyou').innerHTML = `
<h2>Your Submitted Information is:</h2>
<p> Name: ${myInfo.get('fname')} ${myInfo.get('lname')}</p>
<p> Company: ${myInfo.get('company')}</p>
<p> Organizational Role: ${myInfo.get('title')}</p>
<p> Email: ${myInfo.get('email')}</p>
<p> Phone: ${myInfo.get('phone')}</p>
<p> Chosen Membership Level: ${myInfo.get('level')}</p>
<p> Company Description: ${myInfo.get('description')}</p>
<p> Time of Submission: ${myInfo.get('timestamp')}</p>
`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

