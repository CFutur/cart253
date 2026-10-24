let img;

async function setup() {
    // Load the image.
    img = await loadImage('/topics/images/ice-cream-mint.png');

    createCanvas(100, 100);

    background(50);

    // Draw the image.
    image(img, 0, 0);

    describe('An image of the underside of a white umbrella with a gridded ceiling above.');
}