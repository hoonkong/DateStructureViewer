var Tree;

(function (Tree) {
	var output = document.getElementById("output");
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	var render = function (dataNode, parentElement) {
		var div = document.createElement("div");
		var p = document.createElement("p");
		var text = document.createTextNode(dataNode.data);
		p.appendChild(text);
		div.appendChild(p);

		if (parentElement) {
			parentElement.appendChild(div);
		}
		else {
			document.body.appendChild(div);
		}

		var childNodes = dataNode.children;
		for (var i = 0; i < childNodes.length; i++) {
			render(childNodes[i], div);
		}		
	};

	var renderInCanvas = function (node) {
		ctx.beginPath();
		ctx.arc(300, 50, 15, 0, Math.PI * 2);
		ctx.stroke();
	}

	var traverseInOrder = function (node) {
		if (node) {
			traverseInOrder(node.children[0]);
			display(node.data);
			traverseInOrder(node.children[1]);
		}
	};

	var traversePreOrder = function (node) {
		if (node) {
			display(node.data);
			traversePreOrder(node.children[0]);		
			traversePreOrder(node.children[1]);
		}
	};

	var traversePostOrder = function (node) {
		if (node) {
			traversePostOrder(node.children[0]);		
			traversePostOrder(node.children[1]);
			display(node.data);
		}
	};

	var traverseBreadthFirst = function (node, queue) {
		if (node) {
			if (!queue) {
				queue = [];
			}

			display(node.data);

			var childNodes = node.children;
			for (var i = 0; i < childNodes.length; i++) {
				queue.push(childNodes[i]);
			}

			traverseBreadthFirst(queue.shift(), queue);
		}
	}

	var traverseDeapthFirst = function (node) {
		if (node) {
			display(node.data);

			var childNodes = node.children;
			for (var i = 0; i < childNodes.length; i++) {
				traverseDeapthFirst(childNodes[i]);
			}
		}
	}

	var display = function (data) {
		var t = document.createTextNode(data);
		var p = document.createElement("p");
		p.appendChild(t)
		output.appendChild(p);
	}

	Tree.render = render;
	Tree.renderInCanvas = renderInCanvas;
	Tree.traverseInOrder = traverseInOrder;
	Tree.traversePreOrder = traversePreOrder;
	Tree.traversePostOrder = traversePostOrder;
	Tree.traverseBreadthFirst = traverseBreadthFirst;
	Tree.traverseDeapthFirst = traverseDeapthFirst;
})(Tree || (Tree = {}));