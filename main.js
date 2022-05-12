async function getData () {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/');

  if (response.status !== 200) {
    console.log('Something Went Wrong');
    return;
  }
  
  const data = await response.json();
  return data;

}

async function displayData () {
  const data = await getData();

  const card = document.querySelector('.card-body');
  const p = document.createElement('p');
  const text = document.createTextNode(JSON.stringify(data));
  p.appendChild(text);
  card.appendChild(p);
}

displayData();