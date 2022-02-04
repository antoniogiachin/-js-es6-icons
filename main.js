// Array di oggetti icone
const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// Mi riferisco al container delle icone

const container = document.getElementById('icons-container');

// Inietto contenuto ciclando elementi array con forEach
// icons.forEach((element) =>{

//     console.log(element.name)

//     container.innerHTML += `
    
//         <div class="icon">
//             <i style = "color: ${element.color}" class="${element.family} ${element.prefix}${element.name}"></i>
//             <span>${element.name}</span>
//         </div>
    
//     `;


// });

// Trasformo la creazione elementi DOM e inserimento html in funzione
function createIcons(container, array){

    let content ='';

	

    array.forEach((oggetto =>{

		// Ogni volta genera un colore casuale
		let random = randomColor();

        content += `
        
        <div class="icon">
            <i style = "color:${random}" class="${oggetto.family} ${oggetto.prefix}${oggetto.name}"></i>
            <div class="icon-text">${oggetto.name}</div>
        </div>    
        
        `;
    
    }));
    console.log(content);
    container.innerHTML = content;

}


// Invoco la funzione
createIcons(container, icons);

// Intercetto il cambio di valore

const valueChange = document.getElementById('icon-type');

// Ascoltatore di eventi per cambio valore
valueChange.addEventListener('change',

	function(){

		value = this.value;

		if(value == ''){
			createIcons(container, icons);
		} else{

			// Uso filter per filtrare elementi array icons
			const filtered = icons.filter((element) =>{

				if(element.type == value){

					return true;
					// Quando torna true, crea array oggetti con type corrispondente a value

				}

				return false;

			});

			// Allora invoco la funzione di creazione per le icone selezionate
			createIcons(container, filtered);

		}


	}

);

// Funzione per colore random
function randomColor(){

	// array con valori possibili di un colore HEX
	let hex = [1,2,3,4,5,6,7,8,9,'A', 'B', 'C', 'D', 'E', 'F'];
    
	// variabile vuota che sarà codice colore
	let color ='';

    for(let i = 0; i < 6; i++){

        color += hex[Math.floor(Math.random() * 15)]


    }

    // console.log(color);
	// Nel return aggiungo asterisco
    return  '#' + color;
}