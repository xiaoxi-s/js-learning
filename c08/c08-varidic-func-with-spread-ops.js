obj = { x: 1, y: 2 };

arr = [8, 9, 0];

function func(...args) {
  console.log(args);
}

func(obj);
// func(...obj);  => throws TypeError: Found non-callable @@iterator
func(arr);
func(...arr);
