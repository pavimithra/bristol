<script setup lang="ts">
useSeoMeta({ title: 'Services | Bristol Technical Contracting', description: 'Explore HVAC, mechanical, electrical, plumbing and interior fit-out solutions.' })
</script>

<template>
<div>
<!-- SERVICES HERO -->
    <section class="relative isolate overflow-hidden bg-[#001e40] text-white">
        <img src="/images/Services/Hero.png"
             alt="Engineering professionals evaluating building services installations"
             fetchpriority="high"
             class="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_center]" />
        <div class="absolute inset-0 -z-10 bg-gradient-to-r from-[#001e40]/95 via-[#002f65]/90 to-[#002f65]/30"></div>
        <div class="mx-auto flex sm:min-h-[450px] lg:min-h-[490px] max-w-7xl items-center px-6 py-10  lg:px-8">
            <div class="max-w-3xl">
                <nav aria-label="Breadcrumb" class="mb-9 flex items-center gap-3 font-nunito text-sm text-white/75">
                    <a href="/" class="transition hover:text-white focus-visible:underline">Home</a>
                    <span aria-hidden="true" class="text-white/40">/</span>
                    <span class="font-semibold text-white" aria-current="page">Services</span>
                </nav>
                <p class="mb-5 flex items-center gap-3 font-lexend text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
                    <span class="h-[3px] w-10 bg-[#c03400]"></span>
                    Our Expertise
                </p>
                <h1 class="max-w-2xl font-lexend text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-[62px]">
                    Building Systems.<br>
                    <span class="text-white">Seamlessly Delivered.</span>
                </h1>
                <p class="mt-7 max-w-xl font-nunito text-base leading-8 text-slate-100 sm:text-lg">
                    Complete Mechanical, Electrical, Plumbing and Interior Fit-out services,
                    backed by quality workmanship, technical understanding and dependable project coordination.
                </p>
                <div class="mt-9 flex flex-wrap gap-3">
                    <a href="#our-services"
                       class="inline-flex items-center justify-center gap-3 rounded-md bg-[#c03400] px-6 py-3.5 font-lexend text-sm font-semibold text-white transition-all hover:bg-[#a92d00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                        Explore Our Services <span aria-hidden="true">&rarr;</span>
                    </a>
                    <a href="/contact-us"
                       class="inline-flex items-center justify-center rounded-md border border-white/65 px-6 py-3.5 font-lexend text-sm font-semibold text-white transition-all hover:bg-white hover:text-[#002f65] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                        Discuss a Project
                    </a>
                </div>
            </div>
        </div>
        <div class="absolute bottom-0 left-0 h-1 w-36 bg-[#c03400]"></div>
    </section>

    <!-- SERVICE NAVIGATION -->
    <section id="our-services" class="relative z-10 scroll-mt-28 bg-white" aria-label="Browse services">
        <div class="mx-auto max-w-7xl px-6 py-8 lg:px-8">
            <div class="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                <a href="#mechanical" class="group flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-5 py-5 transition-all hover:-translate-y-0.5 hover:border-[#c03400]/50 hover:shadow-[0_12px_25px_rgba(0,47,101,0.07)] focus-visible:outline-2 focus-visible:outline-[#c03400]">
                    <span class="flex items-center gap-4">
                        <span class="font-lexend text-sm font-semibold text-[#c03400]">01</span>
                        <span class="font-lexend text-sm font-semibold text-[#002f65]">Mechanical Works</span>
                    </span>
                    <span aria-hidden="true" class="text-[#c03400] transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>
                <a href="#electrical" class="group flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-5 py-5 transition-all hover:-translate-y-0.5 hover:border-[#c03400]/50 hover:shadow-[0_12px_25px_rgba(0,47,101,0.07)] focus-visible:outline-2 focus-visible:outline-[#c03400]">
                    <span class="flex items-center gap-4">
                        <span class="font-lexend text-sm font-semibold text-[#c03400]">02</span>
                        <span class="font-lexend text-sm font-semibold text-[#002f65]">Electrical Works</span>
                    </span>
                    <span aria-hidden="true" class="text-[#c03400] transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>
                <a href="#plumbing" class="group flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-5 py-5 transition-all hover:-translate-y-0.5 hover:border-[#c03400]/50 hover:shadow-[0_12px_25px_rgba(0,47,101,0.07)] focus-visible:outline-2 focus-visible:outline-[#c03400]">
                    <span class="flex items-center gap-4">
                        <span class="font-lexend text-sm font-semibold text-[#c03400]">03</span>
                        <span class="font-lexend text-sm font-semibold text-[#002f65]">Plumbing Works</span>
                    </span>
                    <span aria-hidden="true" class="text-[#c03400] transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>
                <a href="#fitout" class="group flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-5 py-5 transition-all hover:-translate-y-0.5 hover:border-[#c03400]/50 hover:shadow-[0_12px_25px_rgba(0,47,101,0.07)] focus-visible:outline-2 focus-visible:outline-[#c03400]">
                    <span class="flex items-center gap-4">
                        <span class="font-lexend text-sm font-semibold text-[#c03400]">04</span>
                        <span class="font-lexend text-sm font-semibold text-[#002f65]">Fit-out &amp; Interiors</span>
                    </span>
                    <span aria-hidden="true" class="text-[#c03400] transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>
            </div>
        </div>
    </section>

    <!-- INTRODUCTION -->
    <section class="bg-white pb-4 lg:pb-8 ">
        <div class="mx-auto grid max-w-7xl gap-7 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-20 lg:px-8">
            <div>
                <p class="font-lexend text-xs font-semibold uppercase tracking-[0.18em] text-[#c03400]">What We Deliver</p>
                <h2 class="mt-4 font-lexend text-3xl font-bold leading-tight tracking-tight text-[#002f65] sm:text-4xl lg:text-[42px]">
                    Complete MEP expertise.<br>One connected approach.
                </h2>
            </div>
            <p class="max-w-xl font-nunito text-base leading-8 text-slate-600">
                From essential building services to finished interior spaces, Bristol Contracting
                brings together coordinated technical solutions tailored to each project's needs.
                Explore our four core service areas below.
            </p>
        </div>
    </section>

    <!-- 01 MECHANICAL -->
    <section id="mechanical" class="scroll-mt-24 bg-[#f4f6f8] py-8 lg:py-12" aria-labelledby="mechanical-heading">
        <div class="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <div class="relative">
                <div class="overflow-hidden rounded-2xl bg-slate-200 shadow-[0_20px_50px_rgba(0,47,101,0.10)]">
                    <img src="/images/Services/Mechanical.png"
                         alt="Technician checking HVAC units, mechanical piping and ductwork"
                         loading="lazy" class="h-[350px] w-full object-cover sm:h-[470px] lg:h-[560px]" />
                </div>
                <div class="absolute -bottom-4 left-7 h-1.5 w-24 rounded-full bg-[#c03400]"></div>
            </div>
            <div>
                <p class="font-lexend text-xs font-semibold uppercase tracking-[0.18em] text-[#c03400]">01 / Mechanical Services</p>
                <h2 id="mechanical-heading" class="mt-4 font-lexend text-3xl font-bold leading-tight tracking-tight text-[#002f65] sm:text-4xl">
                    HVAC &amp; Mechanical<br class="hidden sm:block"> Piping Solutions
                </h2>
                <p class="mt-5 font-nunito text-[16px] leading-8 text-slate-600">
                    Comprehensive mechanical works for efficient climate control, ventilation and
                    reliable building operation, covering a wide range of HVAC equipment and air distribution systems.
                </p>
                <div class="mt-8 grid gap-5 sm:grid-cols-2">
                    <div class="border-l-[3px] border-[#c03400] pl-4">
                        <h3 class="font-lexend text-sm font-semibold text-[#002f65]">HVAC Equipment</h3>
                        <p class="mt-1 font-nunito text-sm leading-7 text-slate-600">AC units, chillers, AHUs and FCUs.</p>
                    </div>
                    <div class="border-l-[3px] border-[#c03400] pl-4">
                        <h3 class="font-lexend text-sm font-semibold text-[#002f65]">Ductwork</h3>
                        <p class="mt-1 font-nunito text-sm leading-7 text-slate-600">GI, PI and flexible duct fabrication and installation.</p>
                    </div>
                    <div class="border-l-[3px] border-[#c03400] pl-4">
                        <h3 class="font-lexend text-sm font-semibold text-[#002f65]">Airflow Components</h3>
                        <p class="mt-1 font-nunito text-sm leading-7 text-slate-600">Dampers and related air control systems.</p>
                    </div>
                    <div class="border-l-[3px] border-[#c03400] pl-4">
                        <h3 class="font-lexend text-sm font-semibold text-[#002f65]">Ventilation</h3>
                        <p class="mt-1 font-nunito text-sm leading-7 text-slate-600">Ventilation fans and exhaust systems.</p>
                    </div>
                    <div class="border-l-[3px] border-[#c03400] pl-4 sm:col-span-2">
                        <h3 class="font-lexend text-sm font-semibold text-[#002f65]">Mechanical Piping</h3>
                        <p class="mt-1 font-nunito text-sm leading-7 text-slate-600">Associated pipework and mechanical service installations.</p>
                    </div>
                </div>
                <a href="/contact-us" class="mt-9 inline-flex items-center gap-3 rounded-md bg-[#002f65] px-6 py-3.5 font-lexend text-sm font-semibold text-white transition-all hover:bg-[#c03400] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#002f65]">
                    Enquire About Mechanical Works <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
        </div>
    </section>

    <!-- 02 ELECTRICAL -->
    <section id="electrical" class="scroll-mt-24 bg-white py-8 lg:py-12" aria-labelledby="electrical-heading">
        <div class="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <div class="order-2 lg:order-1">
                <p class="font-lexend text-xs font-semibold uppercase tracking-[0.18em] text-[#c03400]">02 / Electrical Services</p>
                <h2 id="electrical-heading" class="mt-4 font-lexend text-3xl font-bold leading-tight tracking-tight text-[#002f65] sm:text-4xl">
                    Reliable Electrical<br class="hidden sm:block"> Installations
                </h2>
                <p class="mt-5 max-w-xl font-nunito text-base leading-8 text-slate-600">
                    Electrical systems are central to every functional building. Our electrical works
                    focus on practical installation solutions and careful coordination with mechanical
                    and interior requirements.
                </p>
                <ul class="mt-8 grid gap-x-5 gap-y-4 sm:grid-cols-2">
                    <li class="flex gap-3 font-nunito text-sm leading-7 text-slate-700"><span class="mt-0.5 font-bold text-[#c03400]" aria-hidden="true">✓</span>Electrical wiring and cabling</li>
                    <li class="flex gap-3 font-nunito text-sm leading-7 text-slate-700"><span class="mt-0.5 font-bold text-[#c03400]" aria-hidden="true">✓</span>Power distribution works</li>
                    <li class="flex gap-3 font-nunito text-sm leading-7 text-slate-700"><span class="mt-0.5 font-bold text-[#c03400]" aria-hidden="true">✓</span>Lighting installations</li>
                    <li class="flex gap-3 font-nunito text-sm leading-7 text-slate-700"><span class="mt-0.5 font-bold text-[#c03400]" aria-hidden="true">✓</span>Electrical containment and coordination</li>
                </ul>
                <a href="/contact-us" class="mt-9 inline-flex items-center gap-3 rounded-md bg-[#002f65] px-6 py-3.5 font-lexend text-sm font-semibold text-white transition-all hover:bg-[#c03400] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#002f65]">
                    Enquire About Electrical Works <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
            <div class="relative order-1 lg:order-2">
                <div class="overflow-hidden rounded-2xl bg-slate-200 shadow-[0_20px_50px_rgba(0,47,101,0.10)]">
                    <img src="/images/Services/Electrical.png"
                         alt="Electrician installing wiring in a commercial electrical distribution panel"
                         loading="lazy" class="h-[350px] w-full object-cover sm:h-[470px] lg:h-[520px]" />
                </div>
                <div class="absolute -bottom-4 right-7 h-1.5 w-24 rounded-full bg-[#c03400]"></div>
            </div>
        </div>
    </section>

    <!-- 03 PLUMBING -->
    <section id="plumbing" class="scroll-mt-24 bg-[#f4f6f8] py-8 lg:py-12" aria-labelledby="plumbing-heading">
        <div class="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <div class="relative">
                <div class="overflow-hidden rounded-2xl bg-slate-200 shadow-[0_20px_50px_rgba(0,47,101,0.10)]">
                    <img src="/images/Services/Plumbing.png"
                         alt="Plumbing technician working on water pipe connections beneath a sink"
                         loading="lazy" class="h-[350px] w-full object-cover sm:h-[470px] lg:h-[520px]" />
                </div>
                <div class="absolute -bottom-4 left-7 h-1.5 w-24 rounded-full bg-[#c03400]"></div>
            </div>
            <div>
                <p class="font-lexend text-xs font-semibold uppercase tracking-[0.18em] text-[#c03400]">03 / Plumbing Services</p>
                <h2 id="plumbing-heading" class="mt-4 font-lexend text-3xl font-bold leading-tight tracking-tight text-[#002f65] sm:text-4xl">
                    Dependable Plumbing<br class="hidden sm:block"> &amp; Water Systems
                </h2>
                <p class="mt-5 max-w-xl font-nunito text-base leading-8 text-slate-600">
                    Practical plumbing works for effective water distribution, drainage and day-to-day
                    building functionality, with careful attention to installation quality and serviceability.
                </p>
                <ul class="mt-8 grid gap-x-5 gap-y-4 sm:grid-cols-2">
                    <li class="flex gap-3 font-nunito text-sm leading-7 text-slate-700"><span class="mt-0.5 font-bold text-[#c03400]" aria-hidden="true">✓</span>Water supply pipework</li>
                    <li class="flex gap-3 font-nunito text-sm leading-7 text-slate-700"><span class="mt-0.5 font-bold text-[#c03400]" aria-hidden="true">✓</span>Drainage and waste systems</li>
                    <li class="flex gap-3 font-nunito text-sm leading-7 text-slate-700"><span class="mt-0.5 font-bold text-[#c03400]" aria-hidden="true">✓</span>Sanitary fixtures and connections</li>
                    <li class="flex gap-3 font-nunito text-sm leading-7 text-slate-700"><span class="mt-0.5 font-bold text-[#c03400]" aria-hidden="true">✓</span>Plumbing installation coordination</li>
                </ul>
                <a href="/contact-us" class="mt-9 inline-flex items-center gap-3 rounded-md bg-[#002f65] px-6 py-3.5 font-lexend text-sm font-semibold text-white transition-all hover:bg-[#c03400] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#002f65]">
                    Enquire About Plumbing Works <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
        </div>
    </section>

    <!-- 04 FITOUT -->
    <section id="fitout" class="scroll-mt-24 bg-white py-8 lg:py-12" aria-labelledby="fitout-heading">
        <div class="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <div class="order-2 lg:order-1">
                <p class="font-lexend text-xs font-semibold uppercase tracking-[0.18em] text-[#c03400]">04 / Interior Services</p>
                <h2 id="fitout-heading" class="mt-4 font-lexend text-3xl font-bold leading-tight tracking-tight text-[#002f65] sm:text-4xl">
                    Fit-out &amp; Interiors<br class="hidden sm:block"> That Work Beautifully
                </h2>
                <p class="mt-5 max-w-xl font-nunito text-base leading-8 text-slate-600">
                    We support interior spaces that balance appearance with everyday functionality,
                    integrating fit-out requirements with essential MEP systems for a cohesive outcome.
                </p>
                <ul class="mt-8 grid gap-x-5 gap-y-4 sm:grid-cols-2">
                    <li class="flex gap-3 font-nunito text-sm leading-7 text-slate-700"><span class="mt-0.5 font-bold text-[#c03400]" aria-hidden="true">✓</span>Interior fit-out execution</li>
                    <li class="flex gap-3 font-nunito text-sm leading-7 text-slate-700"><span class="mt-0.5 font-bold text-[#c03400]" aria-hidden="true">✓</span>Functional space improvements</li>
                    <li class="flex gap-3 font-nunito text-sm leading-7 text-slate-700"><span class="mt-0.5 font-bold text-[#c03400]" aria-hidden="true">✓</span>Finishing works coordination</li>
                    <li class="flex gap-3 font-nunito text-sm leading-7 text-slate-700"><span class="mt-0.5 font-bold text-[#c03400]" aria-hidden="true">✓</span>MEP integration with interiors</li>
                </ul>
                <a href="/contact-us" class="mt-9 inline-flex items-center gap-3 rounded-md bg-[#002f65] px-6 py-3.5 font-lexend text-sm font-semibold text-white transition-all hover:bg-[#c03400] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#002f65]">
                    Enquire About Fit-out Works <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
            <div class="relative order-1 lg:order-2">
                <div class="overflow-hidden rounded-2xl bg-slate-200 shadow-[0_20px_50px_rgba(0,47,101,0.10)]">
                    <img src="/images/Services/Fitout.png"
                         alt="Engineers reviewing a completed modern corporate interior"
                         loading="lazy" class="h-[350px] w-full object-cover sm:h-[470px] lg:h-[520px]" />
                </div>
                <div class="absolute -bottom-4 right-7 h-1.5 w-24 rounded-full bg-[#c03400]"></div>
            </div>
        </div>
    </section>

    <!-- INTEGRATED APPROACH -->
    <section class="bg-[#f4f6f8] py-8 lg:py-12">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="rounded-2xl border border-slate-200 bg-white px-7 py-9 sm:px-10 lg:px-12 lg:py-12">
                <div class="grid items-center gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
                    <div>
                        <p class="font-lexend text-xs font-semibold uppercase tracking-[0.18em] text-[#c03400]">One Connected Approach</p>
                        <h2 class="mt-3 font-lexend text-2xl font-bold leading-tight text-[#002f65] sm:text-3xl">Coordinated from start to finish.</h2>
                        <p class="mt-4 font-nunito text-sm leading-7 text-slate-600">Good project outcomes depend on communication between trades, practical planning, and careful execution.</p>
                    </div>
                    <div class="grid gap-4 sm:grid-cols-3">
                        <div class="rounded-lg bg-[#f4f6f8] px-5 py-5">
                            <span class="font-lexend text-xs font-bold text-[#c03400]">01</span>
                            <h3 class="mt-2 font-lexend text-sm font-semibold text-[#002f65]">Plan</h3>
                            <p class="mt-2 font-nunito text-xs leading-6 text-slate-600">Understand scope and coordinate systems.</p>
                        </div>
                        <div class="rounded-lg bg-[#f4f6f8] px-5 py-5">
                            <span class="font-lexend text-xs font-bold text-[#c03400]">02</span>
                            <h3 class="mt-2 font-lexend text-sm font-semibold text-[#002f65]">Execute</h3>
                            <p class="mt-2 font-nunito text-xs leading-6 text-slate-600">Deliver quality-focused installation works.</p>
                        </div>
                        <div class="rounded-lg bg-[#f4f6f8] px-5 py-5">
                            <span class="font-lexend text-xs font-bold text-[#c03400]">03</span>
                            <h3 class="mt-2 font-lexend text-sm font-semibold text-[#002f65]">Support</h3>
                            <p class="mt-2 font-nunito text-xs leading-6 text-slate-600">Coordinate completion and project handover.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CALL TO ACTION -->
    <section class="relative isolate overflow-hidden bg-[#002f65] py-8 text-white lg:py-12">
        <div class="pointer-events-none absolute -right-14 -top-36 -z-10 h-80 w-80 rounded-full border border-white/10"></div>
        <div class="pointer-events-none absolute -bottom-32 right-36 -z-10 h-72 w-72 rounded-full border border-white/10"></div>
        <div class="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-8">
            <div class="max-w-2xl">
                <p class="font-lexend text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">Let's Work Together</p>
                <h2 class="mt-4 font-lexend text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Need an MEP partner for your next project?</h2>
                <p class="mt-4 max-w-xl font-nunito text-base leading-8 text-blue-100">Talk to Bristol Technical Contracting about your mechanical, electrical, plumbing or interior fit-out requirements.</p>
            </div>
            <a href="/contact-us" class="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-md bg-[#c03400] px-8 py-4 font-lexend text-sm font-semibold text-white transition-all hover:bg-white hover:text-[#002f65] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:self-auto">
                Request a Quote <span aria-hidden="true">&rarr;</span>
            </a>
        </div>
    </section>
</div>
</template>
