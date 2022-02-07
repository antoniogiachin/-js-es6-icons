// Icone predefinite
const icons =[
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


// Mi riferisco a container icons

const container = document.getElementById('icons-container');

// Invoco funzione per creazione icone
createIcons(container, icons);

// Mi riferisco a select

const select = document.getElementById('select-type');

// Invoco funzione per creazione select
createSelection(select, icons);


//Ascoltatore di eventi per cambio icone
select.addEventListener('change',

    function(){

        value = this.value;

        const selected = icons.filter(value =>{

            if(value.type == this.value){

                return true;
            }

            return false;
        });

        if(value == 'all'){

            createIcons(container, icons)

        } else {
            createIcons(container, selected);
        }


    }

);


/* ------ FUNZIONI ------*/

// Funzione per creare div
function createIcons(container, array){

    let content ='';	

    array.forEach((oggetto =>{

		// Ogni volta genera un colore casuale
		oggetto.color = randomHexColor();

        content += `
        
        <div class="icon">
            <i style = "color:${oggetto.color}" class="${oggetto.family} ${oggetto.prefix}${oggetto.name}"></i>
            <div class="icon-text">${oggetto.name}</div>
        </div>    
        
        `;
    
    }));

    container.innerHTML = content;
}

// Funzione per colore random

function randomHexColor(){

    // array con valori possibili di un colore HEX
	let hex = '0123456789abcdef';
    
	// variabile vuota che sarà codice colore
	let color ='';

    for(let i = 0; i < 6; i++){

        color += hex[Math.floor(Math.random() * hex.length)];


    }

	// Nel return aggiungo asterisco
    return  '#' + color;
    
}




function createSelection (container, array){

    const types =['all'];
    
    array.forEach(value =>{
    
        if(!types.includes(value.type)){
    
            types.push(value.type);
    
        }
    
    });
    
    
    types.forEach(value =>{
    
	    let option = `<option value="${value}">${value}</option>`;
    
        console.log(option);
    
        container.innerHTML += option;
    });

}
