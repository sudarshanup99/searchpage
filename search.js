document.addEventListener('DOMContentLoaded', function () {
    const formInputs = document.querySelectorAll("input[type='text']");
    const submitButton = document.querySelector("input[type='submit']");

    // Add event listeners to input fields
    formInputs.forEach(function (input) {
        input.addEventListener("focus", function () {
            input.style.backgroundColor = "yellow";
        });

        input.addEventListener("blur", function () {
            input.style.backgroundColor = "white";
        });
    });

    // Add event listener to submit button
    submitButton.addEventListener("mouseover", function () {
        submitButton.style.backgroundColor = "lightblue";
    });

    submitButton.addEventListener("mouseout", function () {
        submitButton.style.backgroundColor = "lightblue";
    });

    // Add submit event listener to the form
    document.getElementById('carSearchForm').addEventListener('submit', function (e) {
        e.preventDefault();

        // Retrieve the values of the input fields when the form is submitted
        const carModel = document.getElementById('carModel').value.trim().toLowerCase();
        const location = document.getElementById('location').value.trim().toLowerCase();

        // Filter search results based on input values
        const filteredResults = searchResults.filter(result => {
            const resultModel = result.make.toLowerCase() + ' ' + result.model.toLowerCase();
            return resultModel.includes(carModel) && result.location.toLowerCase() === location;
        });

        // Clear previous search results
        document.getElementById('searchResults').innerHTML = '';

        // Display filtered search results
        if (filteredResults.length > 0) {
            filteredResults.forEach(result => {
                const resultElement = document.createElement('div');
                resultElement.classList.add('result');
                        // Create an image element
                const imgElement = document.createElement('img');
                imgElement.src = result.image;
                imgElement.alt = `${result.make} ${result.model}`;
                
                // Set the desired width and height for the image (e.g., 100x100 pixels)
                imgElement.style.width = '200px';
                imgElement.style.height = '200px';
            
              resultElement.appendChild(imgElement);
    
                resultElement.innerHTML  += `
                    <h2>${result.make} ${result.model}</h2>
                    <p>Location: ${result.location}</p>
                   
                `;
                document.getElementById('searchResults').appendChild(resultElement);
            });
        } else {
            // Display a message when no results match
            const noResultsElement = document.createElement('p');
            noResultsElement.textContent = 'No matching results found.';
            document.getElementById('searchResults').appendChild(noResultsElement);
        }
    });

    // Simulated search results data
    const searchResults = [
        { make: 'Toyota', model: 'Camry', location: 'New York' ,image:"toyota-camry-overview.jpg" },
        { make: 'Honda', model: 'Civic', location: 'Los Angeles',image:"Honda_Civic.jpg" },
        { make: 'Ford', model: 'F-150', location: 'Chicago' ,image:"ford.jpeg"},
    ];
});


