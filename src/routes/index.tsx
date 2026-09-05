import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { ArrowRight, ArrowUpRight, Phone, Star, Upload } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroImage from "@/assets/supreme-lofts-hero.jpg";
import dormerImage from "@/assets/project-dormer.jpg";
import hipGableImage from "@/assets/project-hip-gable.jpg";
import mansardImage from "@/assets/project-mansard.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "London Loft Conversions | Supreme Lofts" },
    { name: "description", content: "Loft conversions across London, managed by one dedicated contact and guaranteed for 10 years. Request your free quote." },
    { property: "og:title", content: "London Loft Conversions | Supreme Lofts" },
    { property: "og:description", content: "Transform your London home with an experienced, fully insured loft conversion team." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const PHONE = "020 8524 5214";

const stats = [
  ["20+ Years", "Experience"],
  ["10 Years", "Guarantee"],
  ["£2m", "Public liability insurance"],
  ["9.96 / 10", "71 customer reviews"],
] as const;

const assurances = [
  "Qualified & insured trades",
  "One point of contact throughout",
  "Planning & building-regs experience",
  "Broad London coverage",
] as const;

const projects = [
  { type: "Dormer", place: "Walthamstow", image: dormerImage, alt: "Before and after dormer loft conversion in Walthamstow", detail: "A dark unused roof space transformed into a calm, light-filled bedroom with fitted storage." },
  { type: "Hip-to-gable", place: "Ealing", image: hipGableImage, alt: "Before and after hip-to-gable loft conversion in Ealing", detail: "A full-width suite created by extending the sloping roof and opening the room to daylight." },
  { type: "Mansard", place: "Hackney", image: mansardImage, alt: "Before and after mansard loft conversion in Hackney", detail: "A carefully detailed new floor with generous glazing, warm joinery and flexible living space." },
] as const;

const services = [
  ["Dormer conversions", "More headroom and practical floor space."],
  ["Hip-to-gable conversions", "Extend a sloping roof into a full-width room."],
  ["Mansard conversions", "Create substantial space in period homes."],
  ["Planning & design", "Drawings, approvals and building regulations managed."],
] as const;

const faqs = [
  ["How much does a loft conversion cost?", "Every property is different. The cost depends on the type of conversion, size, structural requirements, specification and finishing choices. Contact us to discuss your property and requirements."],
  ["Do I need planning permission?", "Not necessarily. Some loft conversions may fall under permitted development, while others require planning permission. Requirements depend on the property and proposed works."],
  ["How long does a loft conversion take?", "The timescale depends on the complexity and specification of the project. We'll discuss the expected programme with you before work begins."],
  ["Do you manage all the trades?", "Yes. One of the advantages of working with Supreme Lofts is that we can provide the skilled trades required for the project, including carpentry, electrical, plumbing, plastering, tiling and more."],
  ["Is your work guaranteed?", "Yes. Every project is guaranteed for a minimum of 10 years."],
] as const;

const quoteSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  contact: z.string().trim().min(5, "Please enter a phone number or email.").max(255),
  postcode: z.string().trim().min(5, "Please enter your property postcode.").max(10),
  description: z.string().trim().min(10, "Please tell us a little about your property.").max(1000),
});

const fieldClass = "mt-2 h-12 rounded-none border-primary-foreground/25 bg-transparent text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/40";

function Index() {
  const [message, setMessage] = useState("");
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const parsed = quoteSchema.safeParse(Object.fromEntries(form.entries()));
    if (!parsed.success) {
      setMessage(parsed.error.issues[0]?.message ?? "Please check your details.");
      return;
    }
    setMessage("Thank you — your details are ready for the Supreme Lofts team.");
  };

  return <div className="min-h-screen bg-background pb-20 text-foreground md:pb-0">
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="section-shell flex h-18 items-center justify-between gap-6">
        <a href="#top" className="font-serif-display text-lg tracking-[0.06em] text-foreground">SUPREME LOFTS</a>
        <nav aria-label="Main navigation" className="hidden items-center gap-9 text-[0.8rem] font-medium tracking-wide text-muted-foreground lg:flex">
          <a href="#projects" className="transition-colors hover:text-sage">Our work</a>
          <a href="#services" className="transition-colors hover:text-sage">Conversion types</a>
          <a href="#reviews" className="transition-colors hover:text-sage">Reviews</a>
          <a href="#faq" className="transition-colors hover:text-sage">FAQs</a>
        </nav>
        <div className="flex items-center gap-5">
          <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-sage">
            <Phone className="size-4 text-sage" strokeWidth={1.6} /><span className="text-[0.8rem] sm:text-sm">{PHONE}</span>
          </a>
          <Button asChild variant="quote" size="quote" className="hidden h-11 px-6 md:inline-flex"><a href="#quote">Get a Free Quote</a></Button>
        </div>
      </div>
    </header>

    <main id="top">
      <section className="relative flex min-h-[86vh] items-end overflow-hidden">
        <img src={heroImage} width={1920} height={1104} fetchPriority="high" alt="Bright completed London loft conversion with rooflights and fitted joinery" className="absolute inset-0 size-full object-cover object-center" />
        <div className="absolute inset-0 bg-[oklch(0.252_0.006_157/0.22)]" />
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[oklch(0.252_0.006_157/0.92)] via-[oklch(0.252_0.006_157/0.6)] to-transparent" />
        <div className="section-shell relative z-10 pb-16 pt-40 md:pb-24">
          <div className="reveal max-w-3xl">
            <p className="eyebrow text-primary-foreground/75">London Loft Conversion Specialists</p>
            <h1 className="mt-6 font-serif-display text-[2.6rem] leading-[1.06] text-primary-foreground sm:text-6xl md:text-7xl">More Space.<br />Beautifully Built</h1>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild variant="quote" size="quote"><a href="#quote">Get My Free Quote</a></Button>
              <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="text-sm font-medium text-primary-foreground/85 underline decoration-primary-foreground/30 underline-offset-8 transition-colors hover:text-primary-foreground">{PHONE}</a>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Why choose Supreme Lofts" className="border-b border-border bg-background">
        <div className="section-shell grid grid-cols-2 gap-y-10 py-12 md:grid-cols-4 md:py-14">
          {stats.map(([value, label], i) => <div key={label} className={`px-2 md:px-8 ${i > 0 ? "md:border-l md:border-border" : ""} ${i % 2 === 1 ? "border-l border-border md:border-l" : ""}`}>
            <p className="font-serif-display text-3xl leading-none text-foreground md:text-4xl">{i === 3 ? <span className="inline-flex items-baseline gap-2"><Star className="size-4 translate-y-[-2px] fill-brass text-brass" />{value}</span> : value}</p>
            <p className="mt-3 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
          </div>)}
        </div>
        <div className="section-shell flex flex-wrap gap-x-8 gap-y-2 border-t border-border py-5 text-xs text-muted-foreground">
          {assurances.map((item) => <span key={item} className="flex items-center gap-2"><span className="size-1 rounded-full bg-sage" />{item}</span>)}
        </div>
      </section>

      <section id="projects" className="py-24 md:py-32">
        <div className="section-shell">
          <div className="max-w-2xl"><p className="eyebrow">Selected Work</p><h2 className="mt-5 font-serif-display text-4xl leading-[1.1] md:text-5xl">See what your roof space could become</h2></div>
          <div className="mt-16 space-y-20 md:space-y-28">{projects.map((project, i) => <article key={project.type} className="grid gap-8 md:grid-cols-12 md:items-end md:gap-12">
            <div className={`md:col-span-8 ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="overflow-hidden bg-secondary">
                <img src={project.image} width={1600} height={912} loading="lazy" alt={project.alt} className="aspect-[16/10] w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03]" />
              </div>
            </div>
            <div className="md:col-span-4">
              <p className="eyebrow">{project.place}</p>
              <h3 className="mt-4 font-serif-display text-3xl font-normal tracking-normal">{project.type} conversion</h3>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">{project.detail}</p>
              <a href="#quote" className="mt-7 inline-flex items-center gap-2 border-b border-foreground/25 pb-1 text-[0.72rem] uppercase tracking-[0.18em] transition-colors hover:border-sage hover:text-sage">View Project <ArrowRight className="size-3.5" /></a>
            </div>
          </article>)}</div>
        </div>
      </section>

      <section className="bg-secondary py-24 md:py-32">
        <div className="section-shell grid gap-14 md:grid-cols-2 md:items-center md:gap-20">
          <div className="relative">
            <img src={heroImage} width={1920} height={1104} loading="lazy" alt="Finished loft interior managed by one dedicated project contact" className="aspect-[4/5] w-full object-cover" />
          </div>
          <div>
            <p className="eyebrow">One Point of Contact</p>
            <h2 className="mt-5 font-serif-display text-4xl leading-[1.1] md:text-5xl">One team.<br />One accountable contact.</h2>
            <p className="mt-8 max-w-md text-base leading-8 text-muted-foreground">Your dedicated project manager coordinates carpentry, electrical, plumbing, plastering and tiling from start to finish. You always know who to call, what happens next and who is responsible.</p>
            <Button asChild variant="quoteOutline" size="quote" className="mt-10 text-foreground"><a href="#quote">Talk to My Project Manager</a></Button>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 md:py-32">
        <div className="section-shell grid gap-14 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="eyebrow">Homeowner Reviews</p>
            <p className="mt-6 flex items-baseline gap-2 font-serif-display text-6xl leading-none">9.96<span className="text-2xl text-muted-foreground">/10</span></p>
            <div className="mt-4 flex gap-1 text-brass" aria-label="Rated 9.96 out of 10">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}</div>
            <p className="mt-4 text-sm text-muted-foreground">71 Checkatrade reviews for Supreme Lofts Ltd. Vetted and approved TrustATrader member, serving Waltham Forest and surrounding London areas.</p>
            <Button asChild variant="quoteOutline" size="quote" className="mt-8 text-foreground"><a href="https://supremelofts.co.uk/reviews/" target="_blank" rel="noreferrer">Read More Reviews</a></Button>
          </div>
          <figure className="border-t border-border pt-10 md:col-span-8 md:border-l md:border-t-0 md:pl-16 md:pt-0">
            <blockquote className="font-serif-display text-2xl leading-[1.5] md:text-[2rem]">“Both jobs were done well. He is prompt and fair. HIGHLY recommended!”</blockquote>
            <figcaption className="mt-8 text-sm text-muted-foreground"><span className="text-foreground">Eva &amp; Patrick</span> — Plumbing and window repairs</figcaption>
          </figure>
        </div>
      </section>

      <section id="services" className="border-y border-border bg-secondary/60 py-24 md:py-32">
        <div className="section-shell">
          <div className="max-w-2xl"><p className="eyebrow">Conversion Types</p><h2 className="mt-5 font-serif-display text-4xl leading-[1.1] md:text-5xl">The right conversion for your roofline</h2></div>
          <div className="mt-14 grid gap-x-16 gap-y-12 border-t border-border pt-12 md:grid-cols-2">{services.map(([title, description]) => <article key={title}>
            <h3 className="text-lg">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
            <a href="#quote" className="mt-5 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.18em] text-sage transition-colors hover:text-foreground">Check If This Fits My Home <ArrowUpRight className="size-3.5" /></a>
          </article>)}</div>
        </div>
      </section>

      <section id="faq" className="section-shell grid gap-12 py-24 md:grid-cols-[0.8fr_1.2fr] md:gap-20 md:py-32">
        <div><p className="eyebrow">Helpful Answers</p><h2 className="mt-5 font-serif-display text-4xl leading-[1.1] md:text-5xl">Questions before you start</h2></div>
        <Accordion type="single" collapsible defaultValue="item-0" className="border-t border-border">{faqs.map(([question, answer], index) => <AccordionItem value={`item-${index}`} key={question}><AccordionTrigger className="py-6 text-left text-base hover:no-underline">{question}</AccordionTrigger><AccordionContent className="max-w-2xl pb-6 text-sm leading-7 text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion>
      </section>

      <section id="quote" className="bg-primary py-24 text-primary-foreground md:py-32">
        <div className="section-shell grid gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <p className="eyebrow text-brass">Free Initial Estimate</p>
            <h2 className="mt-5 font-serif-display text-4xl leading-[1.1] text-primary-foreground md:text-5xl">Show us the space you want to transform</h2>
            <p className="mt-8 max-w-md text-base leading-8 text-primary-foreground/70">Share a few details and add a photo or plan. It helps us understand your home and prepare a faster, more useful first estimate.</p>
            <p className="mt-8 text-sm text-primary-foreground/60">No obligation and no sales pressure. Prefer to talk? Call <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="text-primary-foreground underline underline-offset-4">{PHONE}</a>.</p>
          </div>
          <form onSubmit={handleSubmit} noValidate className="grid gap-5 border-t border-primary-foreground/20 pt-10 sm:grid-cols-2 md:border-l md:border-t-0 md:pl-16 md:pt-0">
            <label className="text-xs uppercase tracking-[0.16em] text-primary-foreground/70">Name<Input name="name" maxLength={100} placeholder="Your name" className={fieldClass} /></label>
            <label className="text-xs uppercase tracking-[0.16em] text-primary-foreground/70">Phone or email<Input name="contact" maxLength={255} placeholder="How should we reach you?" className={fieldClass} /></label>
            <label className="text-xs uppercase tracking-[0.16em] text-primary-foreground/70 sm:col-span-2">Property postcode<Input name="postcode" maxLength={10} placeholder="e.g. E4 9BP" className={`${fieldClass} uppercase`} /></label>
            <label className="text-xs uppercase tracking-[0.16em] text-primary-foreground/70 sm:col-span-2">Brief description<Textarea name="description" maxLength={1000} rows={4} placeholder="Tell us about your property and the extra space you need" className={`${fieldClass} min-h-28 py-3`} /></label>
            <label className="sm:col-span-2"><span className="mb-2 block text-xs uppercase tracking-[0.16em] text-primary-foreground/70">Photo or plan (optional)</span><span className="flex min-h-24 cursor-pointer items-center justify-center gap-3 border border-dashed border-primary-foreground/25 px-4 text-sm text-primary-foreground/60 transition-colors hover:border-primary-foreground/50"><Upload className="size-4" strokeWidth={1.6} />Choose a photo or plan</span><input type="file" accept="image/*,.pdf" className="sr-only" /></label>
            {message && <p role="status" className="text-sm text-brass sm:col-span-2">{message}</p>}
            <Button type="submit" variant="quote" size="quote" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 sm:col-span-2">Request My Free Quote</Button>
          </form>
        </div>
      </section>
    </main>

    <footer className="bg-primary pb-12 text-primary-foreground">
      <div className="section-shell flex flex-col gap-4 border-t border-primary-foreground/15 pt-10 text-xs text-primary-foreground/55 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-serif-display text-base text-primary-foreground">SUPREME LOFTS</span>
        <span>London loft conversions, designed and built around your home.</span>
        <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="text-primary-foreground">{PHONE}</a>
      </div>
    </footer>

    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <Button asChild variant="quoteOutline" size="quote" className="h-12 px-3 text-foreground"><a href={`tel:${PHONE.replace(/\s/g, "")}`}>Call Us</a></Button>
      <Button asChild variant="quote" size="quote" className="h-12 px-3"><a href="#quote">Free Quote</a></Button>
    </div>
  </div>;
}
