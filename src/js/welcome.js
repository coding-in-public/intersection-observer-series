const welcomeMessage = (day) => {
  const header = document.querySelector('header');
  const welcomeMessageH1 = document.createElement('h1');
  welcomeMessageH1.innerText = `Happy ${day}!`;
  header.appendChild(welcomeMessageH1);
}

let dayName = new Date();
switch (dayName.getDay()) {
  case 0:
    welcomeMessage('Sunday')
  break;
  case 1:
    welcomeMessage('Monday')
  break;
  case 2:
    welcomeMessage('Tuesday')
  break;
  case 3:
    welcomeMessage('Wednesday')
  break;
  case 4:
    welcomeMessage('Thursday')
  break;
  case 5:
    welcomeMessage('Friday')
  break;
  case 6:
    welcomeMessage('Saturday')
  break;
  default: 
    console.log('you have created a new day of the week!');
}