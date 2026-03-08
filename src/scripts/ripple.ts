document.addEventListener("astro:page-load", () => {
	document.querySelectorAll<HTMLElement>(".layer").forEach((layer) => {
		layer.draggable = false;
		layer.addEventListener("pointerdown", (event) => {
			const rect = layer.getBoundingClientRect();
			const ripple = document.createElement("div");
			ripple.className = "ripple";
			Object.assign(ripple.style, {
				left: `${event.clientX - rect.x}px`,
				top: `${event.clientY - rect.y}px`,
			});
			layer.appendChild(ripple);

			ripple.animate([{ width: "500px", height: "500px" }], {
				duration: 1000,
				easing: `linear(0, 0.02 2.3%, 0.08 5.1%, 0.265, 0.452, 0.61, 0.732, 0.82 33.7%, 0.89, 0.93 46.9%, 0.974 58.6%, 0.994, 1)`,
				fill: "forwards",
			});

			window.addEventListener(
				"pointerup",
				async () => {
					const fade = ripple.animate([{ opacity: 0 }], {
						duration: 400,
						fill: "forwards",
					});
					await fade.finished;
					ripple.remove();
				},
				{ once: true },
			);
		});
	});
});
