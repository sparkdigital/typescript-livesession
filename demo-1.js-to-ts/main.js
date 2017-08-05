function sortByName(user) {
	var result = user.slice(0);
	result.sort(function (userA, userB) {
		return userA.name.localCompare(userB.name);
	});
	return result;
}
