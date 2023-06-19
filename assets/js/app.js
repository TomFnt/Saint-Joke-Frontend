const datalist = document.querySelector("#datalist");
const selectedArea =  document.querySelector("#selectedJoke");
const inputid = document.querySelector("#jokeId");
const randomButton = document.querySelector("#randomJoke");

const url = "https://tf-saint-joke-api.onrender.com/api/";

fetch(url+"findAllJokes")
    .then(result=>result.json())
    .then(({data})=>{
        data.forEach(joke => {
            datalist.innerHTML += `<option value="${joke.id}">`
        })

        inputid.addEventListener("change", e=>{
            selectedArea.innerHTML += "<p> Voici la blague n° "+document.querySelector(".jokeId").value+" : </p>"
            console.log(data);
            data.forEach(joke =>{
                if(e.target.value == joke.id){
                    console.log("réponse : "+joke.response)
                    selectedArea.innerHTML += `<div class="jokeQuestion">${joke.id}</div>`;
                    selectedArea.innerHTML += `<div class="jokeResponse">${joke.response}</div>`;
                }
            })
        })
    })
    .catch(error=>console.log(error))

        fetch(url+"RandomJoke")
            .then(result=>result.json())
            .then(({data})=>{
                data.forEach(joke => {
                    randomButton.addEventListener("click", e=>{
                        data.forEach(joke =>{
                            const randomQuestion = joke.question;
                            const randomResponse = joke.response;
                            console.log(randomQuestion);
                        })
                    })
                })
            })
            .catch(error=>console.log(error))









console.log("      .--'''''''''--.\n" +
    "     .'      .---.      '.\n" +
    "    /    .-----------.    \\\n" +
    "   /        .-----.        \\\n" +
    "   |       .-.   .-.       |\n" +
    "   |      /   \\ /   \\      |\n" +
    "    \\    | .-. | .-. |    /\n" +
    "     '-._| | | | | | |_.-'\n" +
    "         | '-' | '-' |\n" +
    "          \\___/ \\___/\n" +
    "       _.-'  /   \\  `-._\n" +
    "     .' _.--|     |--._ '.\n" +
    "     ' _...-|     |-..._ '\n" +
    "            |     |\n" +
    "            '.___.'\n" +
    "              | |\n" +
    "             _| |_\n" +
    "            /\\( )/\\\n" +
    "           /  ` '  \\\n" +
    "          | |     | |\n" +
    "          '-'     '-'\n" +
    "          | |     | |\n" +
    "          | |     | |\n" +
    "          | |-----| |\n" +
    "       .`/  |     | |/`.\n" +
    "       |    |     |    |\n" +
    "       '._.'| .-. |'._.'\n" +
    "             \\ | /\n" +
    "             | | |\n" +
    "             | | |\n" +
    "             | | |\n" +
    "            /| | |\\\n" +
    "          .'_| | |_`.\n" +
    "       `. | | | .'\n" +
    "       .    /  |  \\    .\n" +
    "      /o`.-'  / \\  `-.`o\\\n" +
    "     /o  o\\ .'   `. /o  o\\\n" +
    "     `.___.'       `.___.'\n" +
    "     Carlos watching you ...")

