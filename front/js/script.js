//Appel de l'API des produits
fetch('http://localhost:3000/api/products')
  .then((response) => response.json())
  .then((data) => getProducts(data))
  .catch((error) => console.error(error));

//création des articles des produits
function getProducts(data) {
  for (let i = 0; i < data.length; i++) {
    let anchor = document.createElement('a');
    document.querySelector('#items').appendChild(anchor);
    anchor.href = `./product.html?id=${data[i]._id}`;

    let article = document.createElement('article');
    anchor.appendChild(article);

    let image = document.createElement('img');
    article.appendChild(image);
    image.src = data[i].imageUrl;
    image.Alt = data[i].altTxt;

    let h3 = document.createElement('h3');
    article.appendChild(h3);
    h3.classList.add('productName');
    h3.textContent = data[i].name;

    let p = document.createElement('p');
    article.appendChild(p);
    p.classList.add('productDescription');
    p.textContent = data[i].description;
  }
}
