"use client";

import Image from "next/image";
import { useState } from "react";

type PhotoReadyProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  role: "portrait" | "work" | "life";
};

export function PhotoReady({ src, alt, className = "", priority = false, role }: PhotoReadyProps) {
  const [available, setAvailable] = useState(true);

  return (
    <figure className={("photo-ready " + className).trim()} data-loaded={available} data-role={role}>
      <div className="photo-fallback" aria-hidden="true">
        <svg viewBox="0 0 620 760" preserveAspectRatio="xMidYMid slice">
          <path d="M310 760C298 635 318 534 307 421C299 340 316 261 309 116" className="photo-fallback-trunk" />
          <path d="M309 421C226 366 157 310 80 219M310 360C394 299 462 230 552 132M307 507C229 484 157 446 73 401M311 476C405 454 478 411 578 337" />
          <path d="M310 760C222 735 154 741 55 757M310 760C398 727 484 733 590 759M310 760C259 692 204 669 129 672M310 760C365 687 430 665 509 679" className="photo-fallback-roots" />
          <path d="M80 219C58 185 48 145 42 98M80 219C123 179 151 139 165 91M552 132C532 91 526 62 533 24M552 132C587 102 603 78 615 46M73 401C43 372 25 345 12 305M578 337C600 308 609 281 618 249" className="photo-fallback-twigs" />
        </svg>
      </div>
      {available ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={role === "portrait" ? "(max-width: 760px) 100vw, 52vw" : "(max-width: 760px) 100vw, 42vw"}
          onError={() => setAvailable(false)}
        />
      ) : null}
    </figure>
  );
}
