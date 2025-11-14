'use strict';

import { getElement, select, selectAll, listen } from './utils.js';
import { Subscriber } from './Subscriber.js';

let textInput = select('#new-post');
let photoUpload = select('#photo-upload');
let postButton = select('#post-btn');
let modal = select('#modal');
let profilePic = select('#profile-pic');

let modalIsOpen = false;

const subscriber = new Subscriber (
    676767, 'John', 'apple_bottom_jeans_71', 'john_cabbel@gmail.com', 10, 2, true
)

function openModal(){
    modalIsOpen = true;
}

if(!modalIsOpen) listen('click', profilePic, openModal);