
let form = document.getElementById('form')

export let paramsMios

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let fname = document.getElementById('fname').value
  let lname = document.getElementById('lname').value
  let email = document.getElementById('email').value
  let position = document.getElementById('position').value
  let phone = document.getElementById('number').value
  // let code = document.getElementById('contCode').value

  let uuid = crypto.randomUUID();
console.log( typeof( uuid));

  paramsMios = {
    Item: {
      id: uuid ,
      fname: fname ,
      lname: lname,
      email: email ,
      phone: phone,
      position: position
    },
  };
  console.log(JSON.stringify(paramsMios))
  enviarDatos(paramsMios)
  
  redirectWebsite()


})


async function enviarDatos(paramsMios) {
  let dataToSend = JSON.stringify(paramsMios)
  const response = await fetch("https://6i2j0735e3.execute-api.us-east-1.amazonaws.com", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: dataToSend,
  });

  response.json().then(data => {
    console.log(data);
  });
}

function redirectWebsite(){
    window.location = "https://in2financial.zendesk.com/hc/es/articles/13518845070235--Interactuemos-con-Zendesk-";
}

function changeForm(){
  let locator = document.getElementById('afterForm')
  locator.innerHTML = (`
  <div class=" container">
        <div class="row">
            <div class="col-8">
                <h3>Bienvenido a la demo de In2clouds para el sector de Retail</h3>
                <ul>
                    <li>
                        Para poder hacer uso de la demo por favor comunicate al siguiente numero de telefono xxx-xxx-xxx
                    </li>

                    <li>
                        Los posibles escenarios son:
                    </li>

                    <ol>
                        <li>
                            Usted es un cliente que quiere saber el estado de su orden, el numero de orden que aparece
                            en su factura es: 1002
                        </li>
                        <li>
                            Usted es un cliente que desea saber el tracking de su pedido, el numero de orden que aparece
                            en su factura es: 1005
                        </li>
                        <li>
                            Usted es un cliente al cual se le ha perdido su envio, desea comunicarse con un asesor de
                            servicio al cliente.
                        </li>
                    </ol>
                </ul>
            </div>
        </div>

    </div>
  `)
}


