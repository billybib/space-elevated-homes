import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  Check,
  ClipboardCheck,
  HardHat,
  House,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Upload,
  UserRoundCheck,
  Wrench,
  Zap,
} from "lucide-react";
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
    { name: "description", content: "Loft conversions across London, managed by one dedicated contact and guaranteed for 10 years. Request your free estimate." },
    { property: "og:title", content: "London Loft Conversions | Supreme Lofts" },
    { property: "og:description", content: "Transform your London home with an experienced, fully insured loft conversion team." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const trustPoints = [
  [Award, "20+ years' experience"], [ShieldCheck, "10-year guarantee"],
  [BadgeCheck, "£2m public liability insurance"], [HardHat, "Qualified & insured trades"],
  [UserRoundCheck, "One point of contact throughout"], [ClipboardCheck, "Planning & building-regs experience"],
  [MapPin, "Broad London coverage"],
] as const;

const reviews = [
  { quote: "Both jobs were done well. He is prompt and fair. HIGHLY recommended!", name: "Eva & Patrick", job: "Plumbing and window repairs" },
] as const;

const projects = [
  { type: "Dormer", place: "Walthamstow", image: dormerImage, alt: "Before and after dormer loft conversion in Walthamstow", detail: "A dark unused roof space transformed into a calm, light-filled bedroom with fitted storage." },
  { type: "Hip-to-gable", place: "Ealing", image: hipGableImage, alt: "Before and after hip-to-gable loft conversion in Ealing", detail: "A full-width suite created by extending the sloping roof and opening the room to daylight." },
  { type: "Mansard", place: "Hackney", image: mansardImage, alt: "Before and after mansard loft conversion in Hackney", detail: "A carefully detailed new floor with generous glazing, warm joinery and flexible living space." },
] as const;

const services = [
  [House, "Dormer conversions", "More headroom and practical floor space."],
  [Building2, "Hip-to-gable conversions", "Extend a sloping roof into a full-width room."],
  [Wrench, "Mansard conversions", "Create substantial space in period homes."],
  [ClipboardCheck, "Planning & design", "Drawings, approvals and building regulations managed."],
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
    setMessage("Thanks — your details are ready for the Supreme Lofts team.");
  };

  return <div className="min-h-screen bg-background pb-20 text-foreground md:pb-0">
    <header className="absolute inset-x-0 top-0 z-30 border-b border-primary-foreground/20">
      <div className="section-shell flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-base font-bold text-primary-foreground">SUPREME <span className="text-accent">LOFTS</span></a>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 text-sm font-semibold text-primary-foreground/85 md:flex">
          <a href="#projects" className="transition-colors hover:text-accent">Our work</a>
          <a href="#services" className="transition-colors hover:text-accent">Conversion types</a>
          <a href="#faq" className="transition-colors hover:text-accent">FAQs</a>
        </nav>
        <a href="#quote" className="flex items-center gap-2 text-sm font-bold text-primary-foreground"><Phone className="size-4 text-accent"/>Start My Quote</a>
      </div>
    </header>

    <main id="top">
      <section className="relative flex min-h-[680px] items-end overflow-hidden md:min-h-[760px]">
        <img src={heroImage} width={1920} height={1104} fetchPriority="high" alt="Bright completed London loft conversion with rooflights and fitted joinery" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-primary/55" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-primary via-primary/70 to-transparent" />
        <div className="section-shell relative z-10 pb-12 pt-28 md:pb-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-accent">London loft conversion specialists</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] text-primary-foreground md:text-6xl">Loft Conversions Built Around Your Home</h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-primary-foreground/80 md:text-lg">More space, carefully planned and fully managed by one experienced team — from your first survey to final handover.</p>
          <Button asChild variant="quote" size="quote" className="mt-7"><a href="#quote">Get My Free Quote <ArrowRight /></a></Button>
        </div>
      </section>

      <section aria-label="Why choose Supreme Lofts" className="bg-primary text-primary-foreground">
        <div className="section-shell grid grid-cols-2 gap-px border-x border-primary-foreground/10 sm:grid-cols-3 lg:grid-cols-7">
          {trustPoints.map(([Icon, label]) => <div key={label} className="flex min-h-28 flex-col justify-center border-b border-r border-primary-foreground/10 px-4 py-5 lg:border-b-0">
            <Icon className="mb-3 size-5 text-accent" strokeWidth={1.8}/><span className="text-xs font-semibold leading-5 text-primary-foreground/85">{label}</span>
          </div>)}
        </div>
      </section>

      <section className="section-shell py-16 md:py-24">
        <div className="mb-9 max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Homeowner reviews</p><h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">Reassurance from people who have done it</h2></div>
        <div className="grid gap-4 md:grid-cols-3">{reviews.map((review) => <figure key={review.name} className="border border-border bg-card p-6">
          <div className="mb-5 flex gap-1 text-accent" aria-label="Five stars">{Array.from({length:5}).map((_, i) => <Star key={i} className="size-4 fill-current"/>)}</div>
          <blockquote className="text-sm leading-7 text-card-foreground/80">“{review.quote}”</blockquote>
          <figcaption className="mt-6 border-t border-border pt-4"><strong className="text-sm">{review.name}</strong><span className="mt-1 block text-xs leading-5 text-muted-foreground">{review.job}</span></figcaption>
        </figure>)}
          <div className="border border-border bg-card p-6"><p className="font-display text-3xl font-semibold text-primary">9.96<span className="text-lg text-accent">/10</span></p><p className="mt-3 text-sm font-bold">71 Checkatrade reviews</p><p className="mt-2 text-xs leading-5 text-muted-foreground">Independent customer feedback for Supreme Lofts Ltd.</p></div>
          <div className="border border-border bg-card p-6"><p className="font-display text-3xl font-semibold text-primary">Vetted <span className="text-accent">& approved</span></p><p className="mt-3 text-sm font-bold">TrustATrader member</p><p className="mt-2 text-xs leading-5 text-muted-foreground">Serving Waltham Forest and surrounding London areas.</p></div>
        </div>
        <Button asChild variant="quoteOutline" size="quote" className="mt-8"><a href="https://supremelofts.co.uk/reviews/" target="_blank" rel="noreferrer">Read More Reviews <ArrowRight /></a></Button>
      </section>

      <section id="projects" className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="section-shell"><div className="mb-9 max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Before & after</p><h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">See what your roof space could become</h2></div>
          <div className="space-y-6">{projects.map((project) => <article key={project.type} className="border border-primary-foreground/15 bg-primary-foreground/5">
            <img src={project.image} width={1600} height={912} loading="lazy" alt={project.alt} className="aspect-[16/9] w-full object-cover" />
            <div className="p-5 md:flex md:items-center md:justify-between md:p-7"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">{project.type}</p><h3 className="mt-2 text-xl font-semibold">{project.place}</h3></div>
              <details className="group mt-4 md:mt-0 md:max-w-md"><summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-bold text-accent">See This Project <ArrowRight className="size-4 transition-transform group-open:rotate-90"/></summary><p className="mt-3 text-sm leading-6 text-primary-foreground/70">{project.detail}</p></details>
            </div>
          </article>)}</div>
        </div>
      </section>

      <section className="section-shell grid gap-10 py-16 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-24">
        <div className="relative aspect-[4/3] overflow-hidden"><img src={heroImage} width={1920} height={1104} loading="lazy" alt="Finished loft interior managed by one dedicated project contact" className="size-full object-cover"/><div className="absolute bottom-0 left-0 bg-accent px-5 py-4 text-sm font-bold text-accent-foreground">One team. One accountable contact.</div></div>
        <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">One point of contact</p><h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">Every trade managed. Every question answered.</h2><p className="mt-5 text-base leading-8 text-muted-foreground">Your dedicated project manager coordinates carpentry, electrical, plumbing, plastering and tiling from start to finish. You always know who to call, what happens next and who is responsible.</p><Button asChild variant="quote" size="quote" className="mt-7"><a href="#quote">Talk to My Project Manager <ArrowRight/></a></Button></div>
      </section>

      <section id="services" className="border-y border-border bg-card py-16 md:py-24"><div className="section-shell"><div className="mb-9 max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Conversion types</p><h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">The right conversion for your roofline</h2></div>
        <div className="grid gap-px bg-border md:grid-cols-2">{services.map(([Icon, title, description]) => <article key={title} className="bg-card p-6"><Icon className="size-6 text-accent"/><h3 className="mt-5 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm text-muted-foreground">{description}</p><a href="#quote" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">Check If This Fits My Home <ArrowRight className="size-4 text-accent"/></a></article>)}</div>
      </div></section>

      <section id="faq" className="section-shell grid gap-10 py-16 md:grid-cols-[0.7fr_1.3fr] md:py-24"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Helpful answers</p><h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">Questions before you start</h2></div><Accordion type="single" collapsible defaultValue="item-0" className="border-t border-border">{faqs.map(([question, answer], index) => <AccordionItem value={`item-${index}`} key={question}><AccordionTrigger className="py-5 text-base hover:no-underline">{question}</AccordionTrigger><AccordionContent className="max-w-2xl pb-5 leading-7 text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></section>

      <section id="quote" className="bg-primary py-16 text-primary-foreground md:py-24"><div className="section-shell grid gap-10 md:grid-cols-[0.85fr_1.15fr]"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Free initial estimate</p><h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">Show us the space you want to transform</h2><p className="mt-5 max-w-md text-base leading-8 text-primary-foreground/70">Share a few details and add a photo or plan. It helps us understand your home and prepare a faster, more useful first estimate.</p><div className="mt-7 flex items-start gap-3 text-sm text-primary-foreground/80"><Check className="mt-0.5 size-5 shrink-0 text-accent"/>No obligation and no sales pressure.</div></div>
        <form onSubmit={handleSubmit} noValidate className="grid gap-4 bg-primary-foreground/5 p-5 ring-1 ring-primary-foreground/15 sm:grid-cols-2 md:p-8">
          <label className="text-sm font-semibold">Name<Input name="name" maxLength={100} placeholder="Your name" className="mt-2 h-12 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/45"/></label>
          <label className="text-sm font-semibold">Phone or email<Input name="contact" maxLength={255} placeholder="How should we reach you?" className="mt-2 h-12 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/45"/></label>
          <label className="text-sm font-semibold sm:col-span-2">Property postcode<Input name="postcode" maxLength={10} placeholder="e.g. SW12 8AA" className="mt-2 h-12 border-primary-foreground/20 bg-primary-foreground/10 uppercase text-primary-foreground placeholder:text-primary-foreground/45"/></label>
          <label className="text-sm font-semibold sm:col-span-2">Brief description<Textarea name="description" maxLength={1000} rows={4} placeholder="Tell us about your property and the extra space you need" className="mt-2 min-h-28 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/45"/></label>
          <label className="sm:col-span-2"><span className="mb-2 block text-sm font-semibold">Photo or plan <span className="font-normal text-primary-foreground/55">(optional)</span></span><span className="flex min-h-24 cursor-pointer items-center justify-center gap-3 border border-dashed border-primary-foreground/30 bg-primary-foreground/5 px-4 text-sm text-primary-foreground/70"><Upload className="size-5 text-accent"/>Choose a photo or plan</span><input type="file" accept="image/*,.pdf" className="sr-only"/></label>
          {message && <p role="status" className="sm:col-span-2 text-sm text-accent">{message}</p>}
          <Button type="submit" variant="quote" size="quote" className="sm:col-span-2">Get My Instant Estimate <ArrowRight/></Button>
        </form>
      </div></section>
    </main>
    <footer className="bg-primary py-8 text-primary-foreground"><div className="section-shell flex flex-col gap-3 border-t border-primary-foreground/15 pt-7 text-xs text-primary-foreground/55 sm:flex-row sm:items-center sm:justify-between"><span className="font-display font-bold text-primary-foreground">SUPREME <span className="text-accent">LOFTS</span></span><span>London loft conversions, designed and built around your home.</span></div></footer>
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden"><Button asChild variant="quote" size="quote" className="w-full"><a href="#quote">Get My Free Quote <ArrowRight/></a></Button></div>
  </div>;
}
