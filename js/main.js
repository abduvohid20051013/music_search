function $(element) {
	return document.querySelector(element);
};


let divElement = $('.music');
let boxElement = $('.form');
let inputElement = $('.search');
let ulElement = $('.music-list');


async function getData (value) {

	let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + value, {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "d6c5ee3574msh0748f1500bdfc4bp19a829jsne7d7144d1fdb",
			"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
		}
	})
	let data= await response.json()
	let realData=data.data
	realData.map((element)=>{
		let musicName=element.title
		let songLink = element.link
		let songSingerImage = element.artist.picture_big
		let songCoverPhoto = element.album.cover_big
		let song = element.preview
		let li = document.createElement('li')
		li.className="item"
		let h3 = document.createElement('h3')
		let a = document.createElement('a')
		let div = document.createElement('div')
		let img = document.createElement('img')
		let audio = document.createElement('audio')
		let source = document.createElement('source')
		h3.textContent = musicName
		a.textContent = 'Toliq musiqa'
		a.setAttribute('href', songLink)

		img.setAttribute('src', songSingerImage)
		img.setAttribute('alt', 'image')

		audio.controls = true

		source.setAttribute('src', song)
		source.setAttribute('type', 'audio/mp3')



		audio.appendChild(source)
		div.appendChild(img)
		div.appendChild(audio)

		li.style.backgroundImage = `url(${songCoverPhoto})`

		li.appendChild(h3)
		li.appendChild(a)
		li.appendChild(div)

		ulElement.appendChild(li)

	})
}




btn.onclick =  function(){
	ulElement.innerHTML = null
	if(inputElement.value != ""){
		getData(inputElement.value)
	}
}




