let dinos = [
    {
        id: 0,
        name: 'Scipionyx',
        img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
        cena: 221
    },
    {
        id: 1,
        name: 'Becklespinax',
        img: 'http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg',
        cena: 275
    },
    {
        id: 2,
        name: 'Sciurumimus',
        img: 'http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg',
        cena: 341
    },
    {
        id: 3,
        name: 'Hypsilophodon',
        img: 'http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg',
        cena: 189
    },
    {
        id: 4,
        name: 'Dacentrurus',
        img: 'http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg',
        cena: 315
    },
    {
        id: 5,
        name: 'Iguanodon',
        img: 'http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg',
        cena: 374
    },
    {
        id: 6,
        name: 'Asylosaurus',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Asylosaurus_NT.jpg/440px-Asylosaurus_NT.jpg',
        cena: 301
    },
    {
        id: 7,
        name: 'Efraasia',
        img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
        cena: 199
    },
    {
        id: 8,
        name: 'Cryptosaurus',
        img: 'https://images.dinosaurpictures.org/Cryptosaurus/Cryptosaurus_tumblr_inline_on3a5nVchm1rx4yme_1280_94c8.jpg',
        cena: 218
    }
]
const dinosList = document.querySelector('#dino - list')
const btnInsert =  document.querySelector('#btn-add')

const btnOrder = document.querySelector('.order')
btnOrder.addEventListener('click', ()=> {
	console.log(btnOrder)
}
)
let itemContainer = document.querySelector('#item-container')

dinos.forEach(el =>{
	const itemContainer = document.createElement('div')
	itemContainer.innerHTML = ' Izabrani dinosaurus: ${el.izabrani dinosaurus}<br>
	                            Kupac: ${el.kupac}<br>
								Napomena: ${el.napomena}<br>
								Cena: ${el.cena} '
}
   const img = document.createElement('img')
   img.src = '${el.ime}.png'
   itemContainer.append(img)
)
const btnDelete = document.querySelector('button')
btnDelete.className = 'obrisi'
btnDelete.textContent = "Delete"
btnDelete.addEventListener('click', () =>{
	btnDelete.parentElement.remove()
	
})
 const unosKupac = kupac => kupac.kupac !='' && kupac.length >= 4
 
 const ispisi = querySelector('btn-all')
 ispisi.addEventListener('click', () =>{
	 console.log(item-container)
 }
 
 )