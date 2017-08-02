type Shape =
	| { kind: "circle"; radius: number }
	| { kind: "rectangle"; width: number; height: number }
	| { kind: "square"; size: number };

function getArea(shape: Shape) {
	switch (shape.kind) {
		case "circle":
			return Math.PI * shape.radius ** 2;
		case "rectangle":
			return shape.width * shape.height;
		case "square":
			return shape.size ** 2;
	}
	throw new Error("Invalid Shape");
}
