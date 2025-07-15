import { LitElement, html, css } from "lit";

class DYBHero extends LitElement {
	render() {
		return html`
			<style>
				* {
					box-sizing: border-box;
				}
				.dyb-hero {
					width: 100%;
					background-color: rebeccapurple;
					display: flex;
					justify-content: space-evenly;
					align-content: space-evenly;
					align-items: center;
					min-height: var(--size-14);
					flex-wrap: wrap;
					padding: var(--size-3);
					div {
						background-color: var(--surface-1);
						padding: var(--size-6);
						max-width: var(--size-15);
					}
				}
				.panel {
					margin: var(--size-6);
				}
			</style>
			<div class="dyb-hero">
				<div class="panel">
					<slot name="left"></slot>
				</div>
				<div class="panel">
					<slot name="right"></slot>
				</div>
			</div>
		`;
	}
}
customElements.define("dyb-hero", DYBHero);
