const input_wrapper = document.querySelector('.input_wrapper'),
input_text = document.querySelector('.input_wrapper input');

input_text.onfocus = function(){
    input_wrapper.classList.toggle('active');
}
input_text.onblur = function(){
    input_wrapper.classList.remove('active');
}
