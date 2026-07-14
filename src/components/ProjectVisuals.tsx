"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

function VisualHeader({ label, note }: { label: string; note: string }) {
  return (
    <div className="visual-header">
      <span>{label}</span>
      <small>{note}</small>
    </div>
  );
}

export function NpsEvidenceVisual() {
  const [lens, setLens] = useState<"respondents" | "population">("respondents");
  const points = useMemo(
    () => Array.from({ length: 112 }, (_, index) => ({
      x: 26 + ((index * 47) % 248),
      y: 36 + ((index * 83) % 216),
      group: index % 9 < 5 ? "cyan" : index % 9 < 8 ? "neutral" : "amber",
      responds: index % 11 === 0 || (index % 17 === 0 && index % 9 === 8)
    })),
    []
  );

  return (
    <div className="evidence-visual nps-visual">
      <VisualHeader label="Synthetic illustration" note="No Barclays data" />
      <div className="visual-switch" role="group" aria-label="Survey evidence view">
        <button type="button" className="focus-ring" aria-pressed={lens === "respondents"} onClick={() => setLens("respondents")}>What answered</button>
        <button type="button" className="focus-ring" aria-pressed={lens === "population"} onClick={() => setLens("population")}>Population lens</button>
      </div>
      <svg viewBox="0 0 920 430" role="img" aria-label="Synthetic population, sparse respondents, representation check and an uncertainty band">
        <g className="visual-rule-grid">
          <path d="M310 38V392M520 38V392M40 330H882" />
        </g>
        <text x="42" y="25">Population served</text>
        <text x="338" y="25">Sparse respondents</text>
        <text x="548" y="25">Representation check</text>
        <text x="735" y="25">Signal + uncertainty</text>

        <g className="population-field" data-lens={lens}>
          {points.map((point, index) => (
            <circle key={index} cx={point.x} cy={point.y} r={lens === "respondents" && !point.responds ? 2.1 : 3.1} data-group={point.group} data-responds={point.responds} />
          ))}
        </g>

        <g className="respondent-field">
          {points.filter((point) => point.responds).map((point, index) => (
            <circle key={index} cx={357 + (point.x % 124)} cy={63 + (point.y % 206)} r="5.2" data-group={point.group} />
          ))}
          <path d="M324 304H497" />
          <text x="324" y="326">Respondents are not the population</text>
        </g>

        <g className="representation-bars" data-lens={lens}>
          <text x="548" y="77">Group A</text><rect x="548" y="90" width="126" height="14" />
          <text x="548" y="143">Group B</text><rect x="548" y="156" width="82" height="14" />
          <text x="548" y="209">Group C</text><rect x="548" y="222" width="154" height="14" />
          <path d="M619 71V257" />
          <text x="548" y="282">under</text><text x="651" y="282">over</text>
        </g>

        <g className="uncertainty-signal" data-lens={lens}>
          <path d="M733 125C771 102 813 116 866 92L866 214C814 231 776 209 733 232Z" className="uncertainty-area" />
          <path d={lens === "respondents" ? "M733 188C777 155 817 177 866 146" : "M733 176C775 166 817 171 866 151"} className="uncertainty-line" />
          <circle cx={lens === "respondents" ? 798 : 818} cy={lens === "respondents" ? 170 : 161} r="5" />
          <text x="733" y="278">{lens === "respondents" ? "Raw survey signal" : "Population-aware signal"}</text>
          <text x="733" y="302">Uncertainty stays visible</text>
        </g>

        <g className="visual-legend">
          <circle cx="48" cy="367" r="4" data-group="cyan" /><text x="60" y="371">well represented</text>
          <circle cx="177" cy="367" r="4" data-group="amber" /><text x="189" y="371">easy to miss</text>
          <circle cx="330" cy="367" r="5" className="respondent-dot" /><text x="342" y="371">respondent</text>
        </g>
      </svg>
    </div>
  );
}

export function ToneEvidenceVisual() {
  const [activeTone, setActiveTone] = useState(0);
  const tones = [
    { symbol: "H", label: "High", y: 70 },
    { symbol: "L", label: "Low", y: 155 },
    { symbol: "F", label: "Fall", y: 112 }
  ];

  return (
    <div className="evidence-visual tone-visual">
      <VisualHeader label="Conditioning architecture" note="Research direction · not a validated result" />
      <div className="tone-pipeline">
        <div className="pipeline-block tone-text">
          <small>Twi text tokens</small>
          <div><span>me</span><span>pa</span><span>wo</span><span>akyɛ</span></div>
        </div>
        <span className="pipeline-connector" aria-hidden="true" />
        <div className="pipeline-block tone-sequence">
          <small>Tone sequence</small>
          <div>
            {tones.map((tone, index) => (
              <button key={tone.symbol} type="button" className="focus-ring" aria-pressed={activeTone === index} onClick={() => setActiveTone(index)}>
                <strong>{tone.symbol}</strong><span>{tone.label}</span>
              </button>
            ))}
          </div>
        </div>
        <span className="pipeline-connector" aria-hidden="true" />
        <div className="pipeline-block tone-conditioning">
          <small>Explicit route</small>
          <strong>Tone conditioning</strong>
          <span>Representation still under test</span>
        </div>
        <span className="pipeline-connector" aria-hidden="true" />
        <div className="pipeline-block vits-path">
          <small>VITS path</small>
          <span>prior / latent</span><i /><span>decoder</span>
        </div>
      </div>
      <svg viewBox="0 0 920 230" role="img" aria-label="A meaning-bearing tone contour connected to an explicit tone-conditioning path">
        <g className="tone-grid"><path d="M30 46H890M30 112H890M30 178H890" /></g>
        <motion.path
          d="M35 151C105 122 139 67 204 81C270 96 311 176 378 150C454 120 486 51 558 72C633 94 675 172 743 136C804 104 844 87 887 103"
          className="tone-contour"
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 1.2 }}
        />
        {tones.map((tone, index) => (
          <g key={tone.symbol} data-active={activeTone === index}>
            <circle cx={175 + index * 252} cy={tone.y} r="7" />
            <text x={166 + index * 252} y={tone.y - 16}>{tone.symbol}</text>
          </g>
        ))}
        <text x="35" y="215">Meaning-bearing pitch stays explicit through the modelling decision.</text>
      </svg>
    </div>
  );
}

export function SamplingEvidenceVisual() {
  const [iteration, setIteration] = useState(1);
  const reduceMotion = useReducedMotion();
  const scale = [1, 0.78, 0.57, 0.39][iteration];
  const points = useMemo(() => Array.from({ length: 20 }, (_, index) => ({
    x: 276 + Math.cos(index * 2.23) * (34 + (index % 5) * 28),
    y: 180 + Math.sin(index * 2.23) * (24 + (index % 5) * 19)
  })), []);

  return (
    <div className="evidence-visual sampling-visual">
      <VisualHeader label="Nested contraction" note="Conceptual view of the dissertation method" />
      <div className="sampling-control">
        <label htmlFor="sampling-iteration">Iteration <strong>{iteration + 1}</strong></label>
        <input id="sampling-iteration" type="range" min="0" max="3" step="1" value={iteration} onChange={(event) => setIteration(Number(event.target.value))} />
        <span>Scrub the contraction</span>
      </div>
      <svg viewBox="0 0 920 430" role="img" aria-label="An irregular likelihood landscape, contracting live points, evidence rail and a bootstrap distribution">
        <g className="likelihood-landscape">
          <path d="M45 253C79 172 134 224 171 129C205 45 257 149 301 92C350 27 415 95 431 176C443 242 382 285 302 308C204 337 87 341 45 253Z" />
          <path d="M94 253C122 194 158 233 188 166C219 101 259 177 294 130C330 81 375 121 384 184C393 235 344 266 286 281C215 301 124 310 94 253Z" />
          <path d="M146 245C166 211 192 229 210 194C230 155 258 199 281 170C305 141 337 160 340 199C343 232 311 247 276 255C229 267 168 277 146 245Z" />
        </g>
        <motion.g className="live-points" animate={reduceMotion ? undefined : { scale }} style={{ transformOrigin: "276px 188px" }}>
          {points.map((point, index) => <circle key={index} cx={point.x} cy={point.y} r={index % 6 === 0 ? 5.5 : 3.4} data-phantom={index % 7 === 0} />)}
        </motion.g>
        <g className="sampling-arrow"><path d="M452 190H525" /><path d="M513 178l13 12-13 12" /></g>
        <g className="evidence-rail">
          <text x="548" y="71">Evidence accumulation</text>
          {[0, 1, 2, 3, 4, 5].map((item) => <circle key={item} cx="572" cy={111 + item * 42} r={item <= iteration + 1 ? 7 : 4} data-active={item <= iteration + 1} />)}
          <path d="M572 111V321" />
        </g>
        <g className="bootstrap-distribution">
          <text x="675" y="71">Single-run bootstrap</text>
          <path d="M675 319C704 317 716 298 730 260C748 211 768 147 790 142C815 136 833 210 847 257C858 293 871 314 893 319" />
          {Array.from({ length: 15 }, (_, index) => <path key={index} d={"M" + (686 + index * 13) + " 319V" + (311 - Math.round(Math.sin((index + 1) / 16 * Math.PI) * (45 + index * 4)))} />)}
          <text x="675" y="351">Distribution of log-evidence</text>
        </g>
        <g className="sampling-legend"><circle cx="53" cy="381" r="4" /><text x="65" y="385">live point</text><circle cx="151" cy="381" r="4" data-phantom="true" /><text x="163" y="385">phantom point</text></g>
      </svg>
    </div>
  );
}

const agentRoles = [
  { name: "Planner", note: "Turns the brief into bounded work." },
  { name: "Researcher", note: "Finds and records source-backed context." },
  { name: "Analyst", note: "Tests the statistical reasoning." },
  { name: "Builder", note: "Creates the code or durable artefact." },
  { name: "Critic", note: "Challenges assumptions before release." }
];

export function AgentEvidenceVisual() {
  const [selected, setSelected] = useState(2);
  const reduceMotion = useReducedMotion();

  return (
    <div className="evidence-visual agent-visual">
      <VisualHeader label="Explicit orchestration" note="One reusable workflow pattern" />
      <div className="agent-flow" data-selected={selected}>
        <div className="agent-role-column">
          <small>Specialised roles</small>
          {agentRoles.map((role, index) => (
            <button key={role.name} type="button" className="focus-ring" aria-pressed={selected === index} onClick={() => setSelected(index)}>{role.name}</button>
          ))}
        </div>
        <motion.span className="flow-line" aria-hidden="true" animate={reduceMotion ? undefined : { backgroundPositionX: ["0px", "32px"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
        <div className="agent-context">
          <small>Bounded context</small><strong>{agentRoles[selected].name}</strong><p>{agentRoles[selected].note}</p><span>inputs · constraints · tools</span>
        </div>
        <motion.span className="flow-line" aria-hidden="true" animate={reduceMotion ? undefined : { backgroundPositionX: ["0px", "32px"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
        <div className="review-gate"><small>Human review</small><strong>Check the handoff</strong><span>assumptions · sources · scope</span></div>
        <motion.span className="flow-line" aria-hidden="true" animate={reduceMotion ? undefined : { backgroundPositionX: ["0px", "32px"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
        <div className="agent-artefacts"><small>Durable artefacts</small><span>brief</span><span>analysis</span><span>code</span><span>checks</span></div>
      </div>
      <div className="verification-loop" aria-label="Verification loop"><span>Compare</span><i /><span>Refine</span><i /><span>Verify</span><b>Loop back before release</b></div>
    </div>
  );
}
