function test(value: string | string[] | null | undefined) {
	
	// Truthy
	if (value) {
		value;
	} else {
		value;
	}

	// Objects
	if (typeof value === "object") {
		value;
	} else {
		value;
	}

	// "Undefined"
	if (value == undefined) {
		value;
	} else {
		value;
	}

	if (typeof value === "undefined") {
		value;
	} else {
		value;
	}
}