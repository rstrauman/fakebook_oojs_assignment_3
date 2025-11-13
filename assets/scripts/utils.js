'use strict';

// Utility functions 
// Get HTML By ID
export function getElement(selector, scope = document){
    return scope.getElementById(selector);
}

// Select HTML Element via Query Selector
export function select(selector, scope = document){
    return scope.querySelector(selector);
}

// Select a List of HTML elements as an array
export function selectAll(selector, scope = document){
    return [...scope.querySelectorAll(selector)];
}

// Adding Event Listener
export function listen(event, selector, callback){
    return selector.addEventListener(event, callback);
}