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

let modalIsOpen = false;

const subscriber = new Subscriber (
    676767, 'John', 'apple_bottom_jeans_71', 'john_cabbel@gmail.com', 10, 2, true
)

function openModal(){
    console.log('hello');
    modalIsOpen = true;
    modal.classList.remove('hidden');
    modalContent.classList.remove('hidden');
    modalPicture.classList.remove('hidden');
}

function post() {
    if(textInput.value.trim() !== "") {
        let post = document.createElement('div');
        post.classList.add('post-container');
        postsContainer.appendChild(post);
        
        let postText = document.createElement('p');
        postText.value = textInput;
        postText.appendChild(post);
    }

    // return;
}

if(!modalIsOpen) listen('click', profilePic, openModal);
listen('click', postButton, post);