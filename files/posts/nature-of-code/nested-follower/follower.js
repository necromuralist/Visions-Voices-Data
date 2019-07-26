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

    /**
     * Updates the walker's position
     */
    this.walk = function() {
        // calling sub on the vectors does an in-place update
        // using p5.Vector.sub creates a new vector
        // This is a static method so we use the module (p5) not the instance (p)
        acceleration = mouse.sub(this.position);
       
        // setMag always produces the same magnitude (but the orientation stays the same)
        acceleration.setMag(this.magnitude);
        console.log(acceleration);
        this.velocity = this.velocity.add(acceleration);
        this.position = this.position.add(this.velocity);

        // keep it within the window
        if (this.position.x < 0)
            this.position.x = p.width;
        else if (this.position.x > p.width)
            this.position.x = 0;
        if (this.position.y < 0)
            this.position.y = p.height
        else if (this.position.y > p.height)
            this.position.y = 0
  }
  
    this.display = function() {
        p.strokeWeight(this.weight);
      p.stroke(0);
      p.noFill();
      p.background(255, 255, 255, 10);
      p.circle(this.position.x, this.position.y, 48);
  }

    this.update = function() {
        this.walk();
        this.display()
    }
}

function Follower(p, parent) {
    this.parent = parent;
    this.position = p.createVector(p.random(p.width), p.random(p.height));
    this.velocity = p.createVector(0, 0);
    this.magnitude = p.random(0.05, 0.09);

    this.red = [63, 123, 191, 191, 191];
    this.green = [63, 63, 63, 63, 63];
    this.blue = [191, 191, 191, 127, 63];
    this.colors = this.red.length;
    this.color = p.round(p.random(this.colors));

    this.walk = function() {
        acceleration = this.parent.position.sub(this.position);
       
        // setMag always produces the same magnitude (but the orientation stays the same)
        acceleration.setMag(this.magnitude);
        this.velocity = this.velocity.add(acceleration);
        this.position = this.position.add(this.velocity)
    }
  
    this.display = function() {
        p.strokeWeight(p.random(5, 10));
        p.stroke(this.red[this.color], this.green[0], this.blue[0]);
        this.color = (this.color + 1) % this.colors;
        p.noFill();
        p.ellipse(this.position.x, this.position.y, p.random(10, 45), p.random(10, 45));
    }

    this.update = function() {
        this.walk();
        this.display();
    }
}

new p5(nested_follower_sketch, nested_parent_div_id);
