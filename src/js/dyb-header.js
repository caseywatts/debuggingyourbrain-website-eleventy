import { LitElement, html, css } from "lit";

class DYBHeader extends LitElement {
	render() {
		return html`
			<style>
				.header-emoji {
					font-size: var(--font-size-6);
				}

				header {
					display: flex;
					align-items: center;
					justify-content: space-between;
					box-shadow: var(--shadow-3);
					background-color: var(--surface-1);
					padding: var(--size-2);
					padding-left: var(--size-4);
					padding-right: var(--size-4);

					h1 {
						font-size: var(--font-size-6);
					}
					nav {
						ul {
							display: flex;
							justify-content: space-between;
							gap: var(--size-2);
							li {
								display: inline-block;
								padding: var(--size-2);
							}
						}
					}
				}

				@media (width > 1024px) {
					header {
						flex-direction: row;
					}
				}
				@media (width <= 1024px) {
					header {
						flex-direction: column;
						nav {
							ul {
								flex-direction: column;
							}
						}
					}
				}
			</style>
			<header>
				<h1>Debugging Your Brain</h1>
				<div class="header-emoji">🔢 😩 → ✨😄</div>
				<nav>
					<ul>
						<li><a href="#topics">topics</a></li>
						<li><a href="#reviews">reviews</a></li>
						<li><a href="#preview">preview</a></li>
						<li><a href="#resources">resources</a></li>
						<li><a href="#formats">where to buy</a></li>
					</ul>
				</nav>
			</header>
		`;
	}
}
customElements.define("dyb-header", DYBHeader);
