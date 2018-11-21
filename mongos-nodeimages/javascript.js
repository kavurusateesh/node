<script>
var parent = {
    name: "parent",
    print: function(){
       console.log("Hello, "+this.name);
    }
};
var child = {
    name: "child",
    print: function(){
       console.log("Hi, "+this.name);
    }
};

parent.print()
child.print()

temp = parent;
parent= child;
child =temp;

parent.print();
child.print();

</script>

<script>

(function() {
    var parent = {
        name: "parent",
        print: function(){
           console.log("Hello, "+this.name);
        }
    };

    var child = {
        name: "child",
        print: function(){
           console.log("Hi, "+this.name);
        }
    };

    parent.print()
    // This will print: Hello, parent
    child.print()
    // This will print: Hi, child
})
();
</script>

<script>

var myGlobals = {};

(function( global ) {
    global.parent = {
        name: "parent",
        print: function(){
           console.log("Hello, "+this.name);
        }
    };

    global.child = {
        name: "child",
        print: function(){
           console.log("Hi, "+this.name);
        }
    };

    global.parent.print()
    // This will print: Hello, parent
    global.child.print()
    // This will print: Hi, child
})

(myGlobals);

</script>


