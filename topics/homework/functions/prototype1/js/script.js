let img;

async function setup() {
    // Load the image.
    img = await loadImage('/prototype1/assets/images/ice-cream-mint.png');

    createCanvas(500, 500);

    // Display the image.
    // background("#f00808aa")
    image(img, 0, 0);

    describe('An image of a brick wall.');
}

//C: \Users\clara\OneDrive\Documents\GitHub\cart253\topics\homework\functions\prototype1\assets\images\clown.png