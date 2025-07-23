const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);

document.querySelector('#results').innerHTML = `<p>Appointment for ${myInfo.get('first')} ${myInfo.get('last')} </p>
<p> Proxy ${myInfo.get('ordinance')} on ${myInfo.get('date')} in the ${myInfo.get('location')} temple </p>
<p> Your Phone is ${myInfo.get('phone')}</p>
<p> Your email is ${myInfo.get('email')}</p>`
