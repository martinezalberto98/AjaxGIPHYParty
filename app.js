// Your application should do the following:

// Allow the user to search for a GIF and when the form is submitted, make an AJAX request to the Giphy API and return a single GIF
// Once the Giphy API has responded with data, append the GIF to the page
// Allow the user to search for as many GIFs as they would like and keep appending them to the page
// Allow the user to remove all of the GIFs by clicking a button
// Here is an example of what the application might look like:


// Part 1: Building the Form
// Start by building a simple form with an input for a search term and a submit button. 
// When the user submits the form, use axios to make a request to GIPHY for information based on that term. 
// After receiving the response, console.log the response data to make sure you’re getting back what you expect.

// For example, here is what the AJAX request URL would look like for search term of “hilarious”: http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym. 
// You can click on this URL and see the JSON you will get back. 
// To view this in a nicer format, we highly recommend using the JSON Viewer chrome extension. This is also the data you should console.log when the form is submitted.

// Part 2: Appending GIFs
// Now that you’re communicating properly with the API, you should do something more interesting with the response data. 
// Instead of logging it, grab a GIF from the response data and append the GIF to the page. 
// Ensure that if you submit the form multiple times, you’ll get multiple GIFs showing up.

// Part 3: Removing GIFs
// Add a button next to the form which, when clicked, will remove all GIFs from the page.

const $gifContainer = $('#results');
const $searchInput = $('#search'); 

//handle form submission: make ajax call to GIPHY API and clear search form
$('#searchForm').on("submit", async function(event){
    event.preventDefault();

    let searchValue = $searchInput.val();
    $searchInput.val('');

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            api_key: 'nY68SRW6mKA2OArEEht0SHvHtDvFicyc',
            q: searchValue
        }
    });

    let numberOfResults = response.data.data.length;
    
    if(numberOfResults > 0){
        let randomIndex = Math.floor(Math.random() * numberOfResults);
        let $newDiv = $("<div>");
        let $newGif = $("<img>", {
            src: response.data.data[randomIndex].images.original.url
        });
        $newDiv.append($newGif);
        console.log($newDiv);
        $gifContainer.append($newDiv);
    }
});

//remove gif//
$('#delete').on("click", function(){
    $gifContainer.empty();
});