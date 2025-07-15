import { LitElement, html, css } from "lit";

class DYBHeader extends LitElement {
	render() {
		return html`
			<style>
				header {
					display: flex;
					align-items: center;
					justify-content: space-between;
					box-shadow: var(--shadow-3);
					background-color: var(--surface-1);
					padding: var(--size-2);
					padding-left: var(--size-4);
					padding-right: var(--size-4);

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
				<slot name="title"></slot>
				<nav>
					<ul>
						<li><a href="#reviews">reviews</a></li>
						<li><a href="#preview">book preview</a></li>
						<li><a href="#formats">buy</a></li>
					</ul>
				</nav>
			</header>
		`;
	}
}
customElements.define("dyb-header", DYBHeader);
