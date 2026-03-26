(function () {
    const body = document.body;
    if (!body) {
        return;
    }

    const noorContainer =
        document.getElementById("noorContainer") ||
        document.querySelector(".noor-container");

    const readNumber = (name, fallback) => {
        const rawValue = body.dataset[name];
        if (rawValue === undefined || rawValue === "") {
            return fallback;
        }

        const parsedValue = Number(rawValue);
        return Number.isFinite(parsedValue) ? parsedValue : fallback;
    };

    const readOptionalNumber = (name) => {
        const rawValue = body.dataset[name];
        if (rawValue === undefined || rawValue === "") {
            return null;
        }

        const parsedValue = Number(rawValue);
        return Number.isFinite(parsedValue) ? parsedValue : null;
    };

    const appendLightRay = (options) => {
        if (!noorContainer) {
            return;
        }

        const ray = document.createElement("div");
        ray.className = "light-ray";
        ray.style.left = `${Math.random() * 100}%`;

        if (typeof options.delayMax === "number" && options.delayMax > 0) {
            ray.style.animationDelay = `${Math.random() * options.delayMax}s`;
        }

        if (typeof options.durationBase === "number") {
            const durationRange = Math.max(options.durationRange || 0, 0);
            const duration = options.durationBase + Math.random() * durationRange;
            ray.style.animationDuration = `${duration}s`;
        }

        noorContainer.appendChild(ray);

        if (typeof options.removeAfter === "number" && options.removeAfter > 0) {
            window.setTimeout(() => {
                ray.remove();
            }, options.removeAfter);
        }
    };

    const noorMode = body.dataset.noorMode;
    if (noorContainer && noorMode === "static") {
        const noorCount = readNumber("noorCount", 15);
        const staticDurationBase = readOptionalNumber("noorDurationBase");

        for (let index = 0; index < noorCount; index += 1) {
            appendLightRay({
                delayMax: readNumber("noorDelayMax", 8),
                durationBase: staticDurationBase,
                durationRange: readNumber("noorDurationRange", 0),
                removeAfter: null
            });
        }
    }

    if (noorContainer && noorMode === "stream") {
        const emitLightRay = () => {
            appendLightRay({
                delayMax: readNumber("noorDelayMax", 5),
                durationBase: readNumber("noorDurationBase", 6),
                durationRange: readNumber("noorDurationRange", 4),
                removeAfter: readNumber("noorRemoveAfter", 10000)
            });
        };

        const initialCount = readNumber("noorInitialCount", 5);
        const initialStep = readNumber("noorInitialStep", 500);

        window.setInterval(emitLightRay, readNumber("noorInterval", 1500));

        for (let index = 0; index < initialCount; index += 1) {
            window.setTimeout(emitLightRay, index * initialStep);
        }
    }

    if (noorContainer && body.dataset.particleMode === "stream") {
        const createParticle = () => {
            const particle = document.createElement("div");
            particle.className = "particle";
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.bottom = "0";
            particle.style.animationDelay = `${Math.random() * 10}s`;
            particle.style.animationDuration = `${Math.random() * 10 + 15}s`;
            noorContainer.appendChild(particle);

            window.setTimeout(() => {
                particle.remove();
            }, 25000);
        };

        window.setInterval(createParticle, 3000);

        for (let index = 0; index < 3; index += 1) {
            window.setTimeout(createParticle, index * 1000);
        }
    }
})();
