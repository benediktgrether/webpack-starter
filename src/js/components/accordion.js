export function initAccordion() {
	const accordionTrigger = document.querySelectorAll(
		"[data-accordion-trigger]"
	);
	const accordionContent = document.querySelectorAll(
		"[data-accordion-content]"
	);

	if (accordionTrigger.length > 0) {
		accordionTrigger.forEach((trigger) => {
			trigger.addEventListener("click", function () {
				const accordionID = trigger.getAttribute(
					"data-accordion-trigger-id"
				);
				triggerExpandAccordion(
					accordionID,
					accordionTrigger,
					accordionContent
				);
			});
		});
	}
}

function triggerExpandAccordion(id, accordionTrigger, accordionContent) {
	accordionTrigger.forEach((trigger) => {
		const triggerID = trigger.getAttribute("data-accordion-trigger-id");
		const isTarget = triggerID === id;
		const currentAria = trigger.getAttribute("aria-expanded") === "true";

		if (isTarget) {
			trigger.setAttribute(
				"aria-expanded",
				currentAria ? "false" : "true"
			);
		} else {
			trigger.setAttribute("aria-expanded", "false");
		}
	});

	accordionContent.forEach((content) => {
		const contentID = content.getAttribute("data-accordion-content-id");
		const isTarget = contentID === id;

		if (isTarget) {
			if (!content.classList.contains("is-target")) {
				content.classList.add("is-target");
			} else {
				content.classList.remove("is-target");
			}
		} else {
			content.classList.remove("is-target");
		}
	});
}
