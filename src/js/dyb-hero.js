import { LitElement, html, css } from "lit";

class DYBHero extends LitElement {
	render() {
		return html`
			<style>
				.dyb-hero {
					background-color: rebeccapurple;
					width: 100%;
					min-height: var(--size-14);
					display: flex;
					justify-content: space-evenly;
					align-items: center;
					div {
						background-color: var(--surface-1);
						padding: var(--size-4);
						max-width: var(--size-14);
					}
				}
				.button-link {
					display: inline-block;
					padding: var(--size-3);
					background-color: var(--surface-4);
					color: var(--text-1);
					text-decoration: none;

					&:hover {
						color: var(--text-2);
						background-color: var(--surface-3);
					}
				}
			</style>
			<div class="dyb-hero">
				<div>
					<h2>Debugging Your Brain</h2>
					<p>
						<strong>psychology</strong> techniques to rewire your brain using
						<strong>software development</strong> metaphors
					</p>
					<a href="#" class="button-link">Buy Book</a>
				</div>
				<div>
					<p>“Someone wrote the documentation I actually needed!"</p>
					<p>— Sean Perkins, Software Developer</p>
				</div>
			</div>
		`;
	}
}
customElements.define("dyb-hero", DYBHero);
