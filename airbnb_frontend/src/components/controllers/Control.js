class Controller {

	sendRequest(url, requestType, requestBody, isAuthenticated, authToken, success, failure) {
		console.log("come here")
		let body = {};
		body.headers = { "content-type": "application/json" };
		if (isAuthenticated) {
			body.headers = {
				"X-Access-Token": authToken,
				"content-type": "application/json",
				"Access-Control-Allow-Origin": "*"
			};
		}
		if (
			requestType.toLowerCase() === "post" ||
			requestType.toLowerCase() === "put" ||
			requestType.toLowerCase() === "patch" ||
			requestType.toLowerCase() === "delete"
		) {
			body.body = JSON.stringify(requestBody);
		}
		body.method = requestType;
		fetch(url, body)
			.then(function (response) {
				if (response.ok) {
					if (response.status === 204) {
						success({});
					} else {
						response.json().then(function (data) {
							success(data);
						});
					}
				} else {
					if (response.status !== 415) {
						response.json().then(function (data) {
							failure(data);
						});
					} else {
						failure({});
					}
				}
			})
			.catch(function (error) {
				failure(error);
			});
	}
}

export default new Controller();