let nested_parent_div_id = "nested-follower";

let nested_follower_sketch = function(p) {
    p.setup = function() {
        this.canvas = p.createCanvas($("#" + nested_parent_div_id).outerWidth(true), 800);
        p.parent = new MouseFollower(p);
        p.followers = [new Follower(p, p.parent), new Follower(p, p.parent)];
    }

    p.draw = function() {
        p.background(255);
        p.parent.update();
        p.followers.forEach(function(follower) {
            follower.update();
        })
    }
};

function MouseFollower(p) {
    quarter_width = p.width/4;
    quarter_height = p.height/4;
    this.left_wall = 0;
    this.right_wall = p.width;
    this.top_wall = 0;
    this.bottom_wall = p.height;
    
    this.position = p.createVector(p.width/2, p.height/2);
    this.velocity = p.createVector(0, 0);

    this.walk = function() {
        mouse = p.createVector(p.mouseX,
                               p.mouseY);
        // calling sub on the vectors does an in-place update
        // using p5.Vector.sub creates a new vector
        // This is a static method so we use the module (p5) not the instance (p)
        acceleration = mouse.sub(this.position);
       
        // setMag always produces the same magnitude (but the orientation stays the same)
        acceleration.setMag(0.9);
        this.velocity = this.velocity.add(acceleration);
        this.position = this.position.add(this.velocity);
        // this.position_x = p.constrain(this.position.x, this.left_wall, this.right_wall);
        // this.position_y = p.constrain(this.position.y, this.top_wall, this.bottom_wall);
  }
  
  this.display = function() {
      p.stroke(0);
      p.noFill();
      p.background(255, 255, 255, 25);
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

    this.walk = function() {
        acceleration = this.parent.position.sub(this.position);
       
        // setMag always produces the same magnitude (but the orientation stays the same)
        acceleration.setMag(this.magnitude);
        this.velocity = this.velocity.add(acceleration);
        this.position = this.position.add(this.velocity)
    }
  
    this.display = function() {
        p.stroke(0);
        p.noFill();
        p.background(255, 255, 255, 25);
        p.ellipse(this.position.x, this.position.y, p.random(10, 45), p.random(10, 45));
    }

    this.update = function() {
        this.walk();
        this.display();
    }
}

new p5(nested_follower_sketch, nested_parent_div_id);
