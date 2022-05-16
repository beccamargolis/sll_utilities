class Node {
    constructor(val) {
        this.value = val;
        this.next = null;              
    }
}

class SLL {
    constructor() {
        this.head = null; // "this" refers to the instance of the SLL class, creating an empty list so the head is null
    }

    // Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

    addFront(val) {
        var new_node= new Node(val);
    if(!this.head){
        this.head=new_node; // makes the new node the head of the list
        return this;
    }
    new_node.next=this.head;
    this.head=new_node;
    return this;
    }

    // Write a method to remove the head node and return the new list head node. If the list is empty, return null.

    removeFront() {
        if (this.head == null) { // checks if the list is empty and there is nothing to remove
            return this.head;
        }
        var removedNode = this.head; // creating a variable to hold the node we want to remove
        this.head = removedNode.next; // make the second node into the head node
        removedNode.next = null; // removing the connection of the node to the rest of the list
        return this.head;
    }

// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

    front() {
        if (this.head == null) {
            return null;
        }
        else {
            return this.head.value;
        }
    }

    // Write a method that returns the sum of all the nodes.

    findSum() {
        var runner = this.head;
        var sum = 0;
        if (this.head == null) {
            return null;
        }
        while(runner !==null) {
            sum+=runner.value;
            runner=runner.next;
        }
        return sum;
    }

    // Add a method to your SLL class which is given a value as a parameter.
    // Return a boolean (true/false); true, if the list possesses a node that contains the provided value.

    contains(value) {
        var runner = this.head;
        while(runner !==null) {
            if (runner.value === value) {
                return true;
            }
            runner=runner.next
        }
        return false;
    }


    // Create a new SLL method length() that returns number of nodes in that list.

    length() {
        var counter = 0;
        var runner = this.head;
        while(runner !== null) {
            counter++;
            runner=runner.next;
        }
        return counter;
    }

    // Create display() that returns a string containing all list values.

    display() {
        var listValues = [];
        var runner = this.head;
        while(runner !== null) {
            listValues.push(runner.value);
            runner=runner.next;
        }
        return listValues;
    }

    // Create a standalone function that locates the minimum value in a linked list, and moves that node to the front of the list.
    // Return the new list, with all nodes still present, and all (except for the new head node) in their original order.

    minToFront(list) {

    }

    // Create a standalone function that locates the maximum value in a linked list, and moves that node to the back of the list.
    // Return the new list, with all nodes still present, and all in their original order except for the node you moved to the end of the singly linked list.

    maxToBack(list) {

    }
}

var mySLL = new SLL(); // creating an empty list to start.
mySLL.addFront(100);
mySLL.addFront(50);
mySLL.addFront(20);
mySLL.addFront(45);
console.log(mySLL.length());
console.log(mySLL.contains(100));

var textSLL = new SLL();
textSLL.addFront("hello");
textSLL.addFront("hi");
console.log(textSLL.display());