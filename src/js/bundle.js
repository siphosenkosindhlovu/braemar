//eslint
import { Dropdown, Accordion, Modal, Collapse } from 'bootstrap';


const layaan = document.querySelector('#layaan');
const lionCollapsible = new Collapse(layaan, {toggle: false});

const lion = document.querySelector('.lion');
let isMouseOver =    false
lion.addEventListener('mouseenter', function(e){
  lionCollapsible.hide()
})
lion.addEventListener('mouseleave', function(e){
  lionCollapsible.show()
})
