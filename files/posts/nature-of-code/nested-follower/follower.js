/**
 * Random Walker
 *
 * This is an implementation of the Random Walker based on the example given in
 * "The Nature of Code"
 */

// This is the div where the canvas will be placed
let nested_parent_div_id = "nested-follower";

/**
 * The sketch creator
 * 
 * @param {P5} p
 */
let nested_follower_sketch = function(p) {
    /**
     * Setup the canvas
     *
     * - Attaches the canvas to the div
     * - Creates the walker objects
     */
    p.setup = function() {
        this.canvas = p.createCanvas($("#" + nested_parent_div_id).outerWidth(true), 800);
        p.parent = new NoiseWalker(p);
        p.followers = [new Follower(p, p.parent), new Follower(p, p.parent), new Follower(p, p.parent)];
    };

    /**
     * Refresh the objects by calling their update functions
     *
     * This also clears the background.
     */
    p.draw = function() {
        p.background(255);
        p.parent.update();
        p.followers.forEach(function(follower) {
            follower.update();
        });
    };
};

/**
 * The main walker (with perlin noise)
 *
 * @param {P5} p
 */
function NoiseWalker(p) {
    this.position = p.createVector(p.width/2, p.height/2);
    this.velocity = p.createVector(0, 0);
    this.weight = p.round(p.random(5, 10));
    this.time_x = 0;
    this.time_y = 10000;
    this.time_delta = 0.01;
    this.acceleration = p.createVector(0, 0);
    this.max_acceleration = 0.001;

    /**
     * Updates the walker's position
     */
    this.walk = function() {
        // set the acceleration using perlin noise
        this.acceleration.x = p.map(p.noise(this.time_x), 0, 1, 0, this.max_acceleration);
        this.acceleration.y = p.map(p.noise(this.time_y), 0, 1, 0, this.max_acceleration);
        console.log(this.acceleration)
        // update the time
        this.time_x += this.time_delta;
        this.time_y += this.time_delta;
       
        // setMag always produces the same magnitude (but the orientation stays the same)
        // this.acceleration.setMag(this.magnitude);

        this.velocity = this.velocity.add(this.acceleration);
        this.position = this.position.add(this.velocity);

        // keep it within the window
        if (this.position.x < 0)
            this.position.x = p.width;
        else if (this.position.x > p.width)
            this.position.x = 0;
        if (this.position.y < 0)
            this.position.y = p.height;
        else if (this.position.y > p.height)
            this.position.y = 0;
    };

    /**
     * draws the walker
     */
    this.display = function() {
        p.stroke(0);
        //p.background(255, 255, 255, 10);
        p.point(this.position.x, this.position.y);
    };

    /**
     * Calls the walk and update functions
     */
    this.update = function() {
        this.walk();
        this.display();
    };
}


/**
 * A follower that follows a parent object
 *
 * @param {P5} p
 * @param {NoiseWalker} parent
 */
function Follower(p, parent) {
    this.parent = parent;
    this.variance = p.random(5);
    this.position = p.createVector(
        this.parent.position.x + p.random(-this.variance, this.variance),
        this.parent.position.y + p.random(-this.variance, this.variance));
    this.velocity = p.createVector(0, 0);
    this.magnitude = p.random(0.05, 0.09);

    // some colors to cycle through
    this.red = [63, 123, 191, 191, 191];
    this.green = [63, 63, 63, 63, 63];
    this.blue = [191, 191, 191, 127, 63];
    this.colors = this.red.length;
    this.color = p.round(p.random(this.colors));

    /**
     * Moves the Follower
     *
     * sets the acceleration by pointing to the parent's position
     */
    this.walk = function() {
        let acceleration = p5.Vector.sub(this.parent.position, this.position);
       
        // acceleration.setMag(this.magnitude);
        this.velocity = this.velocity.add(acceleration);
        this.position = this.position.add(this.velocity);
    };

    /**
     * Display the Follower
     *
     * cycles through the colors as we go
     */
    this.display = function() {
        p.strokeWeight(p.random(this.variance, 2 * this.variance));
        p.stroke(this.red[this.color], this.green[this.color], this.blue[this.color]);
        this.color = (this.color + 1) % this.colors;
        p.noFill();
        p.ellipse(this.position.x, this.position.y, p.random(10, 45), p.random(10, 45));
    };

    /**
     * calls the update and walk 
     */
    this.update = function() {
        this.walk();
        this.display();
    };
}

new p5(nested_follower_sketch, nested_parent_div_id);
