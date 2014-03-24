var LinkedList;

(function () {
	var output = document.getElementById("output");

	var render = function (node) {
		if (node)
		{
			var p = document.createElement("p");
			var text = document.createTextNode(node.data);
			p.appendChild(text);
			output.appendChild(p);
			render(node.next);
		}		
	};

	var reverse = function (node) {
		var tempNode = null;
		var previous = null;
		
		while (node)
		{
			tempNode = node.next;
			node.next = previous;
			previous = node;
			node = tempNode;
		}

		return previous;
	}

	LinkedList.render = render;
	LinkedList.reverse = reverse;
})(LinkedList || (LinkedList = {}))