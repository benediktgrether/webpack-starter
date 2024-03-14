export function customPostFilterInit() {
	const customPostFilterButton = document.querySelectorAll("[data-filter]");
	const postType = document.querySelector("[data-post-type]");
	if (customPostFilterButton) {
		setActive(customPostFilterButton, postType);
	}
}

function setActive(customPostFilterButton, postType) {
	customPostFilterButton.forEach((button) => {
		button.addEventListener("click", function () {
			customPostFilterButton.forEach((button) => {
				button.classList.remove("btn-primary");
				button.classList.add("btn-secondary");
			});
			this.classList.add("btn-primary");
			this.classList.remove("btn-secondary");
			const filterId = this.dataset.filterId;
			sendRequest(filterId, postType);
		});
	});
}

function sendRequest(filterId, postType) {
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/wp-admin/admin-ajax.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			var response = xhr.responseText;

			// Clear existing content before appending new content
			var container = document.querySelector(".post-list__wrapper");
			container.innerHTML = response;
		}
	};

	xhr.send(`action=custom_post_ajax_handling&filter=${filterId}&post_type=${postType.dataset.postType}`);
}
