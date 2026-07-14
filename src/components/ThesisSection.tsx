import { siteContent } from "@/data/content";

const territories = ["Customer signals", "Tonal speech", "AI teams", "Algorithmic uncertainty"];

export function ThesisSection() {
  return (
    <section id="direction" className="thesis-section section-numbered">
      <div className="coordinate-rail" aria-hidden="true"><span>05</span><i /></div>
      <div className="page-shell thesis-layout">
        <header>
          <h2>{siteContent.direction.title}</h2>
          <p>{siteContent.direction.body}</p>
        </header>
        <div className="convergence-visual">
          <ul>{territories.map((territory, index) => <li key={territory} data-warm={index === 3}><i />{territory}</li>)}</ul>
          <svg viewBox="0 0 720 470" role="img" aria-label="Four branches converging into one direction and opening into new growth">
            <g className="convergence-inputs">
              <path d="M24 77C179 77 243 118 350 228" />
              <path d="M24 165C176 165 245 181 350 228" />
              <path d="M24 260C178 260 246 249 350 228" />
              <path d="M24 350C179 350 250 292 350 228" data-warm="true" />
            </g>
            <circle cx="350" cy="228" r="7" />
            <path d="M350 228C430 226 490 229 552 210" className="convergence-trunk" />
            <g className="convergence-growth">
              <path d="M552 210C599 176 628 131 661 73M552 210C615 207 656 180 699 151M552 210C612 234 651 260 690 309M552 210C584 270 611 322 629 393" />
              <path d="M614 139C590 111 576 85 571 49M628 133C665 112 686 97 711 74M630 252C661 247 690 253 714 269M603 318C575 342 560 370 554 412" />
            </g>
            {[[661,73],[699,151],[690,309],[629,393],[571,49],[711,74],[714,269],[554,412]].map(([cx, cy], index) => <circle key={index} cx={cx} cy={cy} r={index % 3 === 0 ? 4 : 2.5} />)}
          </svg>
        </div>
      </div>
    </section>
  );
}
