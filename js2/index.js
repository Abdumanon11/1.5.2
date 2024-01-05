





function bubbleSort(arr) {

	let i, j;
	let len = arr.length;

	let isSwapped = false;

	for (i = 0; i < len; i++) {

		isSwapped = false;

		for (j = 0; j < (len - i - 1); j++) {
			if (arr[j] > arr[j + 1]) {
				let  temp = arr[j]
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				isSwapped = true;
			}
		}

		
		if (!isSwapped) {
			break;
		}
	}

	// Print the array
	console.log(arr)
}

let arr = [243, 45, 23, 356, 3, 5346, 35, 5];

// calling the bubbleSort Function
bubbleSort(arr)





function Random(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(Random(3));
  // Expected output: 0, 1 or 2
  
  console.log(getRandomInt(1));
  // Expected output: 0
  
  console.log(Math.random());
  // Expected output: a number from 0 to <1














































