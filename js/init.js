window.onload = function () {
	//Tree.render(tree, document.getElementById("content"));
	//Tree.traverseBreadthFirst(tree);

	//Tree.renderInCanvas(tree);

	LinkedList.render(linkedList);

	var revLinkedList = LinkedList.reverse(linkedList);
	LinkedList.render(revLinkedList);
}