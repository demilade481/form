
// to fetch products from the database

async function getproduct() {
    try{

        const response = await fetch('https://simple-books-api.glitch.me/books')

        console.log('initial response:',response);

        //convert the returned promise to a javascript object
        const productData = await response.json();
        console.log('productData:',productData);

        //grab an empty container from the DOM
        const productcard = document.getElementById(`product.card`);
        
        //create a variable and intialize it with an empty string
        let myCards = "";

        //Map through the array of products fetched
        productData.map({product} =>  {
            myCards+= `

        <div class="card">
            <img src = ${Product.image} alt="photo/">
            <h3>$(cards.title)</h3>
            <div class="amount">
                <h5>price:</h5>
                <p>$(product.price)</p>
            </div>

            <div class="category">
             <h5>category</h5>
                <p>$(cards.category)</p>
            </div>
            <p>$(product.category)</p>
           
        </div>
        <p>${product.description}</p>
    </div>
            `
         });

        productCard.innerHtml = myCards
    }
    catch(error){
        alert("not today");
    }
    
};
getproduct()