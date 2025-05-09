const responseArea = document.getElementById('res')
const noArea = document.getElementById('no-area')
const btn = document.querySelectorAll('.no-btn')
const footer = document.getElementById('footer')
const countArea = document.getElementById('no-count')

let noCount = 0

async function no() {
    
   await fetch('https://gotev.github.io/no-as-a-service/request.json')
        .then(res => res.json())
        .then(data => {
            responseArea.innerText += ` ${data.response}!`
            noCount++
            (noCount % 100) === 0 ? responseArea.innerText += " Why are you doing this???" : ''
        })
}

function addToNo() {
    if (((noCount % 100) === 0) && (noCount !== 0)) {
        noArea.innerHTML += `<button type="button" class="no-btn">Stop this...</button>`
    }
    else {
        noArea.innerHTML += `<button type="button" class="no-btn">False?</button>`
    }

}

document.addEventListener("click", (e) => {
    [...e.target.classList].includes("no-btn") ? no() & addToNo() : ''

    e.target.id === 'no-btn' ? footer.classList.remove('hidden') : ''

    countArea.innerHTML = noCount
})