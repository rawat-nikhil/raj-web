import Image from "next/image";
import { journal, raj } from "@/lib/raj";

export default function Home() {
  return (
    <div className="paper-grain min-h-screen overflow-x-hidden">
      <article className="mx-auto w-full max-w-5xl min-w-0 px-4 py-6 sm:px-8 sm:py-10">
        <Masthead />
        <Cover />
        <div className="mt-10 grid min-w-0 gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-5">
            <PlayerCard />
          </div>
          <div className="min-w-0 lg:col-span-7">
            <StatsBoard />
          </div>
        </div>
        <Feature />
        <PhotoPlate />
        <Colophon />
      </article>
    </div>
  );
}

function Masthead() {
  return (
    <header className="text-center">
      <div className="flex items-center justify-between gap-3 font-stat text-[10px] uppercase tracking-[0.18em] text-caption sm:text-xs sm:tracking-[0.28em]">
        <span className="min-w-0 truncate">
          {journal.volume} · {journal.issue}
        </span>
        <span className="hidden sm:inline">{journal.date}</span>
        <span>{journal.price}</span>
      </div>
      <h1 className="mt-2 font-display text-[2.35rem] leading-none tracking-[0.06em] text-ink sm:text-8xl sm:tracking-[0.12em]">
        {journal.name}
      </h1>
      <p className="mt-1 font-stat text-[10px] uppercase tracking-[0.18em] text-crimson sm:text-xs sm:tracking-[0.35em]">
        The football journal · Birthday edition · {raj.name}
      </p>
      <div className="double-rule mt-4" />
      <p className="mt-2 font-stat text-[10px] uppercase tracking-[0.22em] text-caption sm:hidden">
        {journal.date}
      </p>
    </header>
  );
}

function Cover() {
  return (
    <section className="relative mt-6 overflow-hidden bg-ink">
      <div className="relative aspect-4/3 min-h-88 sm:aspect-video sm:min-h-112">
        <Image
          src={raj.photos.cover.src}
          alt={raj.photos.cover.alt}
          fill
          priority
          loading="eager"
          sizes="(max-width: 1024px) 100vw, 64rem"
          className="object-cover object-[82%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink from-10% via-ink/70 to-ink/15" />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
          <p className="font-stat text-[11px] uppercase tracking-[0.28em] text-crimson sm:tracking-[0.4em]">
            {journal.kicker}
          </p>
          <h2 className="mt-1 font-display text-[5.5rem] leading-[0.8] text-newsprint sm:text-[11rem]">
            {raj.name}
          </h2>
          <p className="mt-3 max-w-xs text-pretty font-serif text-base text-newsprint sm:max-w-xl sm:text-lg">
            {raj.dek}
          </p>
          <p className="mt-4 font-stat text-[11px] uppercase tracking-[0.16em] text-newsprint/70 sm:tracking-[0.28em]">
            Shirt {raj.shirt} · {raj.position} · {raj.club}
          </p>
        </div>
      </div>
    </section>
  );
}

function PlayerCard() {
  return (
    <section aria-labelledby="player-card-heading">
      <p className="font-stat text-[11px] uppercase tracking-[0.32em] text-crimson">
        Registration
      </p>
      <h3
        id="player-card-heading"
        className="mt-1 font-display text-5xl leading-none tracking-wide"
      >
        Player card
      </h3>
      <div className="mt-4 overflow-hidden border border-ink bg-newsprint">
        <div className="relative aspect-3/4">
          <Image
            src={raj.photos.portrait.src}
            alt={raj.photos.portrait.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 26rem"
            loading="eager"
            className="object-cover object-top"
          />
          <div className="absolute left-0 top-0 bg-crimson px-3 py-1 font-display text-4xl leading-none text-newsprint">
            {raj.shirt}
          </div>
        </div>
        <div className="border-t border-ink px-4 py-3">
          <p className="font-display text-4xl tracking-wide">{raj.name}</p>
          <p className="font-stat text-xs uppercase tracking-[0.16em] text-turf">
            {raj.nickname} · {raj.club}
          </p>
        </div>
        <dl className="divide-y divide-ink/20 border-t border-ink">
          {raj.physicals.map((row) => (
            <div
              key={row.label}
              className="flex items-baseline justify-between gap-3 px-4 py-2 font-stat text-sm"
            >
              <dt className="shrink-0 uppercase tracking-[0.12em] text-caption">
                {row.label}
              </dt>
              <dd className="min-w-0 text-right font-medium">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function StatsBoard() {
  return (
    <section aria-labelledby="stats-heading">
      <p className="font-stat text-[11px] uppercase tracking-[0.32em] text-crimson">
        {raj.seasonLabel}
      </p>
      <h3
        id="stats-heading"
        className="mt-1 font-display text-5xl leading-none tracking-wide"
      >
        Season line
      </h3>
      <div className="mt-4 border border-ink">
        <div className="flex justify-between bg-ink px-4 py-2 font-stat text-[10px] uppercase tracking-[0.16em] text-newsprint sm:text-xs">
          <span>Category</span>
          <span>Figure</span>
        </div>
        <dl>
          {raj.season.map((row) => (
            <div
              key={row.label}
              className="flex items-baseline justify-between gap-3 border-t border-ink/25 px-4 py-3"
            >
              <dt className="min-w-0 font-serif text-sm sm:text-base">
                {row.label}
              </dt>
              <dd className="shrink-0 font-stat text-xl tabular-nums leading-none sm:text-2xl">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="mt-6 border-y-2 border-crimson py-4">
        <p className="font-stat text-[11px] uppercase tracking-[0.28em] text-turf">
          Form guide
        </p>
        <p className="mt-1 font-display text-2xl leading-tight tracking-wide sm:text-4xl">
          {raj.formGuide}
        </p>
      </div>
      <blockquote className="mt-6 border-l-4 border-crimson pl-4">
        <p className="text-pretty font-serif text-xl italic leading-snug sm:text-2xl">
          “{raj.pullQuote}”
        </p>
        <footer className="mt-2 font-stat text-[11px] uppercase tracking-[0.22em] text-caption">
          Editor’s note · {journal.name}
        </footer>
      </blockquote>
    </section>
  );
}

function Feature() {
  return (
    <section className="mt-14 min-w-0" aria-labelledby="feature-heading">
      <div className="double-rule" />
      <div className="mt-6 grid min-w-0 gap-8 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-7">
          <p className="font-stat text-[11px] uppercase tracking-[0.32em] text-crimson">
            Profile feature
          </p>
          <h3
            id="feature-heading"
            className="mt-1 font-display text-5xl leading-none tracking-wide sm:text-6xl"
          >
            Heartbeat of the XI
          </h3>
          <div className="mt-5 space-y-4 text-pretty text-[1.05rem] leading-7 text-ink">
            {raj.bio.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? "drop-cap" : undefined}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <figure className="min-w-0 lg:col-span-5">
          <div className="relative aspect-4/3 border border-ink">
            <Image
              src={raj.photos.action.src}
              alt={raj.photos.action.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 28rem"
              loading="eager"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-2 font-stat text-[11px] uppercase tracking-[0.2em] text-caption">
            {raj.photos.action.caption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function PhotoPlate() {
  const plates = [raj.photos.cover, raj.photos.ball, raj.photos.crowd];

  return (
    <section className="mt-14 min-w-0" aria-labelledby="plates-heading">
      <p className="font-stat text-[11px] uppercase tracking-[0.32em] text-crimson">
        Photographic plates
      </p>
      <h3
        id="plates-heading"
        className="mt-1 font-display text-4xl leading-none tracking-wide sm:text-5xl"
      >
        The issue in stills
      </h3>
      <div className="mt-6 grid min-w-0 gap-6 sm:grid-cols-3">
        {plates.map((plate) => (
          <figure key={plate.caption} className="min-w-0">
            <div className="relative aspect-4/3 border border-ink">
              <Image
                src={plate.src}
                alt={plate.alt}
                fill
                sizes="(max-width: 640px) 100vw, 20rem"
                loading="eager"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 border-t border-ink/30 pt-2 font-stat text-[11px] uppercase tracking-[0.14em] text-caption">
              {plate.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Colophon() {
  return (
    <footer className="mt-16 border-t-4 border-double border-ink pb-8 pt-6">
      <p className="text-pretty font-serif text-lg italic leading-snug">
        {raj.editorNote}
      </p>
      <p className="mt-4 font-stat text-[11px] uppercase tracking-[0.16em] text-caption">
        {journal.name} · {journal.volume} · {journal.issue} · {journal.date}
      </p>
      <p className="mt-2 max-w-2xl font-stat text-xs leading-5 text-caption">
        {raj.colophon}
      </p>
    </footer>
  );
}
