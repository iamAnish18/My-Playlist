console.log('Hello World');

async function mysong() {
    let my = await fetch("http://127.0.0.1:3000/playsong/");
    let respons = await my.text();
    console.log(respons);
    let div = document.createElement("div");
    div.innerHTML = respons;
    let links = div.getElementsByTagName("a");
    let song = [];
    for(let i = 0; i< links.length ; i++){
        const element = links[i];
        if(element.href.endsWith(".mp3")){
            song.push(element.href);
        }
    }
    return song;
}

async function mainlist() {
    try {
        let song = await mysong(); // Ensure mysong() returns the correct data
        console.log(song);

        // Check if `song` is an array and has at least one element
        if (Array.isArray(song) && song.length > 0) {
            // Play the first song in the array
            var audio = new Audio(song[]);
            audio.play();
        } else {
            console.error("The song list is empty or not an array.");
        }
    } catch (error) {
        console.error("An error occurred while fetching or playing the song:", error);
    }
}

// Call the mainlist function
mainlist();

