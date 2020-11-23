// dynamic attribution or copyright
const d = new Date();
const year = d.getFullYear();
const string = `\u00A9 Axelrad ${year}. All rights reserved.`;
const para = document.createElement('p');
const footer = document.querySelector('footer');
footer.appendChild(para)
document.querySelector('#attribute').textContent = string;

// export 
export {
    year,
    string,
    para,
    footer
}