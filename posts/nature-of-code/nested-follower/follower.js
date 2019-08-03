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
        let followers = 10;
        p.followers = [new Follower(p, p.parent)];
        for (let step=0; step < followers; step++) {
            p.followers.push(new Follower(p, p.followers[step]));
        };
    };

    /**
     * Refresh the objects by calling their update functions
     *
     * This also clears the background.
     */
    p.draw = function() {
        p.background(255, 255, 255, 50);
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
    // Our kinematics vectors
    this.position = p.createVector(p.width/2, p.height/2);
    this.velocity = p.createVector(0, 0);
    this.acceleration = p.createVector(0, 0);

    // Time for the perlin noise function
    this.time_x = 0;
    this.time_y = 10000;
    this.time_delta = 0.01;

    // The limit of how much we'll accelerate
    this.max_acceleration = 0.05;

    /**
     * Updates the walker's position
     */
    this.walk = function() {
        // set the acceleration using perlin noise
        this.acceleration.x = p.map(p.noise(this.time_x), 0, 1,
                                    -this.max_acceleration,
                                    this.max_acceleration);
        this.acceleration.y = p.map(p.noise(this.time_y), 0, 1,
                                    -this.max_acceleration,
                                    this.max_acceleration);
        // Move the walker
        this.velocity = this.velocity.add(this.acceleration);
        this.position = this.position.add(this.velocity);

        // keep it within the window
        if (this.position.x < 0)
            this.velocity.x = p.abs(this.velocity.x);
        else if (this.position.x > p.width)
            this.velocity.x = -this.velocity.x;
        if (this.position.y < 0)
            this.velocity.y = p.abs(this.velocity.y);
        else if (this.position.y > p.height)
            this.velocity.y = -this.velocity.y;

        // update the time
        this.time_x += this.time_delta;
        this.time_y += this.time_delta;
    };

    /**
     * draws the walker (for debugging)
     */
    this.display = function() {
        p.stroke(0);
        p.point(this.position.x, this.position.y);
    };

    /**
     * Calls the walk function
     */
    this.update = function() {
        this.walk();
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
    this.variance = p.random(1, 10);
    this.position = p.createVector(
        this.parent.position.x + p.random(-this.variance, this.variance),
        this.parent.position.y + p.random(-this.variance, this.variance));
    this.velocity = p.createVector(0, 0);

    // some colors to cycle through
    this.max_diameter = p.round(p.random(5, 200));
    this.time_x = p.random(100);
    this.time_y = p.random(10000, 11000);
    this.time_delta = 0.005;

    /**
     * Moves the Follower
     *
     * sets the acceleration by pointing to the parent's position
     */
    this.walk = function() {
        let acceleration = p5.Vector.sub(this.parent.position, this.position);       
        this.velocity = this.velocity.add(acceleration);
        this.position = this.position.add(this.velocity);
    };

    /**
     * Display the Follower
     *
     * cycles through the colors as we go
     */
    this.display = function() {
        // set our line width
        p.strokeWeight(p.map(p.noise(this.time_x, this.time_y),
                             0, 1, this.variance, 2 * this.variance));

        // set our color
        p.stroke(63, 63, 191);        

        // don't fill the object
        p.noFill();

        // draw our object with a random diameter
        p.ellipse(this.position.x, this.position.y,
                  p.round(p.random(5, this.max_diameter)),
                  p.round(p.random(5, this.max_diameter)));

        // update the time
        this.time_x += this.time_delta;
        this.time_y += this.time_delta;

    };

    /**
     * calls the update and walk 
     */
    this.update = function() {
        this.walk();
        this.display();
    };
}

// create the p5 object and attach it to the div
new p5(nested_follower_sketch, nested_parent_div_id);
