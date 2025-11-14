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

let modalIsOpen = false;

const subscriber = new Subscriber (
    676767, 'John', 'apple_bottom_jeans_71', 'john_cabbel@gmail.com', 10, 2, true
)

function openModal(){
    modalIsOpen = true;
    modal.classList.remove('hidden');
    modalContent.classList.remove('hidden');
    modalPicture.classList.remove('hidden');
}

if(!modalIsOpen) listen('click', profilePic, openModal);