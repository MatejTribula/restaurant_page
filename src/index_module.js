export default addContent

function addContent() {
    const content = document.getElementById('content')

    content.innerHTML = `
<div class="text">
            <h1>new culture. new cousine. new experiences.</h1>
            <p>We are trying to create a restaurant which serves unsual food to everyone</p>
        </div>

        <img src="https://www.cookhomey.com/wp-content/uploads/Bryndzove%CC%81-halus%CC%8Cky-recept.jpg" alt="halušky">

`

}