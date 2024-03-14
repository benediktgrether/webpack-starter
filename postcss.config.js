const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");

module.exports = {
	plugins: [
		require("autoprefixer"),
		// eslint-disable-next-line no-undef
		process.env.NODE_ENV === "production"
			? cssnano({ preset: "default" })
			: null,
		// eslint-disable-next-line no-undef
		process.env.NODE_ENV === "production"
			? purgecss({ content: ["./**/*.html"], whitelist: ["body", "html"] })
			: null,
	],
};
