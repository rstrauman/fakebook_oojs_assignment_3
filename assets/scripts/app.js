'use strict';

import { getElement, select, selectAll, listen } from './utils.js';
import { Subscriber } from './Subscriber.js';

let textInput = select('#new-post');
let photoUpload = select('#photo-upload');
let postButton = select('#post-btn');
let modal = select('#modal');
let profilePic = select('#profile-pic');
let modalName = select('#modal-name');
let modalContent = select('.modal-content');
let modalPicture = select('.modal-picture');
let postsContainer = select('.post-flex-container');
let photoName = select('.photo-name');
let closeModalBtn = select('#close-modal');
let modalID = getElement("modal-id");
// let modalName = getElement("modal-id");
let modalUserName = getElement("modal-user-name");
let modalEmail = getElement("modal-email");
let modalPages = getElement("modal-pages");
let modalGroups = getElement("modal-groups");
let modalMonetize = getElement("modal-monetize");

let modalIsOpen = false;

const subscriber = new Subscriber (
    676767, 'John Cabbel', 'apple_bottom_jeans_71', 'john_cabbel@gmail.com', 10, 2, true
)

function openModal(){
    console.log('hello');
    modalIsOpen = true;
    modal.classList.remove('hidden');
    modalContent.classList.remove('hidden');
    modalPicture.classList.remove('hidden');

    const userInfo = subscriber.getInfo();

    modalID.textContent = `ID: ${userInfo.id}`;
    modalName.textContent = `Name: ${userInfo.name}`;
    modalUserName.textContent = `Username: ${userInfo.userName}`;
    modalEmail.textContent = `Email: ${userInfo.email}`;
    modalPages.textContent = `Pages: ${userInfo.pages}`;
    modalGroups.textContent = `Groups: ${userInfo.groups}`;
    modalMonetize.textContent = `Can Monetize: ${userInfo.canMonetize}`;
}

function closeModal() {
    modal.classList.add('hidden');
    modalContent.classList.add('hidden');
    modalPicture.classList.add('hidden');
}

function post() {
    let text = textInput.value.trim();
    let imageFile = photoUpload.files[0];

    if(!text && !imageFile) return; 

        let postDiv = document.createElement('div');
        postDiv.classList.add('post-container');
        
        let postProfileInfo = document.createElement('div');
        postProfileInfo.classList.add('post-user-info');
        postProfileInfo.innerHTML = `
            <img src="./assets/media/sunset.jpeg" class="post-pfp">
            <div class="post-user-name">${subscriber.name}</div>
        `;
        postDiv.appendChild(postProfileInfo);

        if(text) {
            let postText = document.createElement('div');
            postText.classList.add('post-text');
            postText.textContent = text;
            postDiv.appendChild(postText);
        }

        if(imageFile) {
            const image = document.createElement('img');
            image.classList.add('post-image');
            image.src = URL.createObjectURL(imageFile);
            postDiv.appendChild(image);
        }

        let postDate = document.createElement('div');
        postDate.classList.add('post-date');
        let now = new Date();
        postDate.textContent = now.toLocaleDateString();
        postDiv.appendChild(postDate);


        postsContainer.prepend(postDiv);
        textInput.value = "";
        photoUpload.value = "";
        photoName.textContent = "";
}

listen('click', profilePic, openModal);
listen('click', closeModalBtn, closeModal);
listen('click', postButton, post);
listen('change', photoUpload, () => {
    if(photoUpload.files.length > 0) {
        photoName.textContent = photoUpload.files[0].name;
    } else {
        photoName.textContent = "";
    }
});