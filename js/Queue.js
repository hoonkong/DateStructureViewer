var Queue;

(function (Queue) {
	var size = 50;
	var storage = [];
	var startIndex = 0;
	var endIndex = 0;

	var enqueue = function (data) {
		if (endIndex === size - 1) {
			alert("Queue full");
			return;
		}

		storage[endIndex] = data;

		if (endIndex === size - 1) {
			endIndex = 0;
		}
		else {
			endIndex++;	
		}
	}

	var dequeue = function () {
		var data = storage[startIndex];

		if (startIndex === size - 1) {
			startIndex = 0;
		}
		else {
			startIndex++;
		}
		return data;
	}

	Queue.enqueue = enqueue;
	Queue.dequeue = dequeue;
})(Queue || (Queue = {}))