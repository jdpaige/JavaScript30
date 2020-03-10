const search = document.querySelector("input");
const output = document.getElementById("output-list");

// get data from API
async function displayData(e) {
    const res = await fetch(
        "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"
    );
    const data = await res.text();
    const dataObj = JSON.parse(data);

    const searchTerm = e.target.value.toLowerCase();
    output.innerHTML = "";
    if (searchTerm.toLowerCase() === "") {
        output.innerHTML = "";
    } else {
        dataObj.forEach(city => {
            if (
                city.city.toLowerCase().includes(searchTerm) ||
                city.state.toLowerCase().includes(searchTerm)
            ) {
                const cityEl = document.createElement("li");
                cityEl.setAttribute("class", "search__output-item");
                const location = `${city.city}, ${city.state}`;
                const highlightStart = location
                    .toLowerCase()
                    .indexOf(searchTerm);
                const highlightEnd = highlightStart + searchTerm.length;
                cityEl.innerHTML = `
                <div class="output-item-text">
                    <span class="location">
                        ${location.slice(
                            0,
                            highlightStart
                        )}<span class="highlighted">${location.slice(
                    highlightStart,
                    highlightEnd
                )}</span>${location.slice(highlightEnd, location.length)}
                    </span>
                    </span> <span class="population">${city.population}</span>
                </div>
            `;

                output.appendChild(cityEl);
            }
        });
    }
}

// EVENT LISTENERS
search.addEventListener("input", displayData);
