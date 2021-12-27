console.log("work");
import { jobList } from "./jobList.js";

const main = document.getElementById("main");
//div_cajas
const jobListing = document.getElementById("jobListing");

jobList.forEach(job => {
	console.log("entro");
	//div-perfil
	const leftContainer = document.createElement("aside");
	leftContainer.classList.add("leftContainer");
	//div_etiquetas
	const rightContainer = document.createElement("aside");
	rightContainer.classList.add("rightContainer");
	//div_texto
	const writtenInfo = document.createElement("div");
	writtenInfo.classList.add("writtenInfo");
	//div_caja
	const jobCard = document.createElement("articule");
	jobCard.classList.add("jobCard");

	jobCard.append(leftContainer, rightContainer);
	jobCard.tags1 = job.tags1;
	jobCard.tags2 = job.tags2;

	jobListing.append(jobCard);

	const logoImg = document.createElement("img");
	logoImg.classList.add("logoImg");
	logoImg.src = job.image;

	leftContainer.append(logoImg);
	leftContainer.append(writtenInfo);

	//empresa h3
	const title = document.createElement("h3");
	title.textContent = job.logoName;
	writtenInfo.append(title);
	console.log(job.logoName);

	//div etiquetas
	const tags1 = tags(job.tags1, 1);
	const tagContainer = document.createElement("div");
	tagContainer.classList.add("tagContainer");
	tags1.forEach(tag => {
		tagContainer.append(tag);
	});
	writtenInfo.append(tagContainer);

	const tags2 = tags(job.tags2, 2);
	const tag2Container = document.createElement("div");
	tag2Container.classList.add("tag2Container");
	tags2.forEach(tag => {
		tag2Container.append(tag);
	});
	rightContainer.append(tag2Container);

	const jobTitle = document.createElement("h1");
	jobTitle.textContent = job.title;
	writtenInfo.append(jobTitle);

	const specifics = document.createElement("span");
	specifics.classList.add("specifics");
	specifics.textContent = job.specifics;
	writtenInfo.append(specifics);
});

function tags(tags, type) {
	if (type == 1) {
		let array = [];
		tags.forEach(tag => {
			let tag1 = document.createElement("span");
			tag1.classList.add("tags1");
			tag1.textContent = tag;
			array.push(tag1);
		});
		return array;
	} else {
		let array = [];
		tags.forEach(tag => {
			let tag2 = document.createElement("button");
			tag2.classList.add("tags2");
			tag2.dataset.tag = tag;
			tag2.textContent = tag;
			tag2.addEventListener("click", clickTag);
			array.push(tag2);
		});
		return array;
	}
}

const tagsArray = [];
function clickTag() {
	let keyWordContainer = document.querySelector("#keyWordContainer");
	this.classList.toggle("selected");
	if (this.classList.contains("selected")) {
		let groupedTags = jobListing.querySelectorAll(`.tags2[data-tag="${this.dataset.tag}"]`);
		//busque todos los que tiene ejemplo Frontend o lo mismo que las otras etiquetas que es this.dataset.tag
		groupedTags.forEach(tag => tag.classList.add("selected"));
		tagsArray.push(this.dataset.tag);
		keyWordContainer.classList.add("active");
	}else{
		let groupedTags = jobListing.querySelectorAll(`.tags2[data-tag="${this.dataset.tag}"]`);
		groupedTags.forEach(tag => tag.classList.remove("selected"));
		tagsArray.splice(tagsArray.findIndex(tag=>tag === this.dataset.tag),1);
	}
	if(tagsArray.length< 1){
		keyWordContainer.classList.remove('active');
	}
	displayTagsArray(tagsArray);
	jobCardFilter();
}



function jobCardFilter() {
	const cards =jobListing.querySelectorAll('.jobCard');
	cards.forEach(card =>{
		if(
			tagsArray.length===0||
			card.tags2.some(tag =>{
				return tagsArray.some(selectedTag=>selectedTag===tag)
			})
			){
				card.classList.remove("hide");
			}else{
				card.classList.add('hide');
			}
	});
}

function displayTagsArray(tagsArray) {
	const filteredWordsContainer =document.getElementById("filteredWords");
	let htmlCreator='';
	tagsArray.forEach((tag,i)=>{
		console.log(tag,i);
		htmlCreator+="<label class='filtered'>"+tag+"</label>";

	});
	console.log(htmlCreator);
	filteredWordsContainer.innerHTML=htmlCreator;
}
displayTagsArray(tagsArray); 
