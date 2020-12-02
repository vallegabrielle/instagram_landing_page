const html = document.querySelector('html')
const checkbox = document.getElementById('checkbox-button')

checkbox.addEventListener('change', function() {
    html.classList.toggle('darker-mode')
})