<script setup lang="ts">
useSeoMeta({ title: 'Home | Bristol Technical Contracting', description: 'Bristol Technical Contracting — Mechanical, Electrical, Plumbing and Interior Fit-out solutions in the UAE.' })
</script>

<template>
<div>
<!-- ==========================================
    BRISTOL CONTRACTING MEP SERVICES
    HOME PAGE - LARAVEL + TAILWIND CSS
========================================== -->

    <div class="font-nunito text-slate-700">

        <!-- ======================================
            1. HERO BANNER
        ======================================= -->
        <section class="relative isolate flex items-center overflow-hidden bg-[#002f65] ">

            <!-- Hero Background -->
            <img
                src="/images/Banner/Home.png"
                alt="Bristol Technical Contracting MEP Services"
                fetchpriority="high"
                class="absolute inset-0 -z-20 h-full w-full object-cover object-[65%_center] lg:object-center"
            />

            <!-- Blue Gradient Overlay -->
            <div class="absolute inset-0 -z-10 bg-gradient-to-r from-[#002f65]/95 via-[#002f65]/80 to-[#002f65]/10"></div>

            <div class="mx-auto w-full max-w-7xl px-6 py-12 lg:px-8 sm:min-h-[450px] lg:min-h-[490px]">

                <div class="max-w-2xl">

                    <!-- Small Label -->
                    <div class="mb-7 flex items-center gap-3">
                        <span class="h-[3px] w-10 bg-[#c03400]"></span>

                        <span class="font-lexend text-xs font-semibold uppercase tracking-[0.2em] text-white">
                            Bristol Technical Contracting
                        </span>
                    </div>

                    <!-- Heading -->
                    <h1 class="font-lexend text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">

                        Complete MEP

                        <span class="block">
                            Solutions for
                        </span>

                        <span class="block text-orange-300">
                            Modern Buildings.
                        </span>

                    </h1>

                    <!-- Description -->
                    <p class="mt-7 max-w-xl font-nunito text-base leading-8 text-slate-100 lg:text-lg">
                        Delivering reliable Mechanical, Electrical,
                        Plumbing, and Interior Fit-out solutions
                        with a strong commitment to engineering
                        excellence, quality, and efficiency.
                    </p>

                    <!-- Buttons -->
                    <div class="mt-10 flex flex-wrap items-center gap-4">

                        <a href="/services"
                        class="group inline-flex cursor-pointer items-center gap-3 rounded-md bg-[#c03400] px-7 py-4 font-lexend text-sm font-semibold text-white transition-all duration-300 hover:bg-[#a52d00] hover:shadow-xl">

                            Explore Our Services

                            <svg class="h-4 w-4 transition-transform group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2">
                                <path stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M5 12h14m-6-6 6 6-6 6"/>
                            </svg>

                        </a>

                        <a href="/contact-us"
                        class="inline-flex cursor-pointer items-center rounded-md border border-white/70 px-7 py-4 font-lexend text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#002f65]">
                            Contact Us
                        </a>

                    </div>

                </div>

            </div>

            <div class="absolute bottom-0 left-0 h-1.5 w-40 bg-[#c03400]"></div>

        </section>


        <!-- ======================================
            2. INTRODUCTION
        ======================================= -->
        <section class="bg-white py-8 lg:py-12">

            <div class="mx-auto max-w-7xl px-6 lg:px-8">

                <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

                    <!-- Left Content -->
                    <div>

                        <div class="mb-5">
                            <p class="font-lexend text-xs font-bold uppercase tracking-[0.18em] text-[#c03400]">
                                Welcome to Bristol
                            </p>

                            <div class="mt-3 h-[3px] w-9 bg-[#c03400]"></div>
                        </div>

                        <h2 class="font-lexend text-3xl font-bold leading-tight tracking-tight text-[#002f65] sm:text-4xl lg:text-[42px]">
                            Building Excellence
                            Through Integrated
                            MEP Solutions
                        </h2>

                        <div class="mt-7 space-y-5 font-nunito text-[16px] leading-8 text-slate-600">

                            <p>
                                <strong class="font-semibold text-[#002f65]">
                                    Bristol Technical Contracting
                                </strong>
                                provides comprehensive Mechanical,
                                Electrical, Plumbing, and Interior Fit-out
                                solutions for residential, commercial,
                                and industrial projects.
                            </p>

                            <p>
                                Our capabilities cover HVAC systems,
                                mechanical piping, ductwork, electrical
                                installations, plumbing networks, and
                                interior fit-out works.
                            </p>

                            <p>
                                With a commitment to technical precision,
                                dependable service, and quality workmanship,
                                we deliver practical building solutions
                                tailored to each project's requirements.
                            </p>

                        </div>

                        <a href="/about-us"
                        class="group mt-9 inline-flex cursor-pointer items-center gap-4 border-b-2 border-[#c03400] pb-3 font-lexend text-sm font-semibold text-[#002f65] transition-colors hover:text-[#c03400]">

                            More About Bristol

                            <span class="transition-transform group-hover:translate-x-1">
                                &rarr;
                            </span>

                        </a>

                    </div>

                    <!-- Right Image -->
                    <div class="relative">

                        <img
                            src="/images/Front/MEPTeam.png"
                            alt="MEP engineering team reviewing building installations"
                            loading="lazy"
                            class="h-[380px] w-full rounded-xl object-cover shadow-xl sm:h-[500px]"
                        >

                        <div class="absolute -bottom-5 right-6 rounded-lg bg-[#002f65] px-7 py-6 text-white shadow-xl sm:right-10">

                            <p class="font-lexend text-lg font-bold">
                                Complete MEP
                            </p>

                            <p class="mt-1 font-nunito text-sm text-blue-100">
                                & Interior Fit-out Services
                            </p>

                            <div class="mt-4 h-1 w-12 bg-[#c03400]"></div>

                        </div>

                    </div>

                </div>
            </div>
        </section>


        <!-- ======================================
            3. OUR SERVICES
        ======================================= -->
        <section class="bg-[#f3f5f7] py-8 lg:py-12">

            <div class="mx-auto max-w-7xl px-6 lg:px-8">

                <!-- Header -->
                <div class="mb-8 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

                    <div class="max-w-2xl">

                        <p class="mb-4 font-lexend text-xs font-bold uppercase tracking-[0.18em] text-[#c03400]">
                            Our Services
                        </p>

                        <h2 class="font-lexend text-3xl font-bold leading-tight tracking-tight text-[#002f65] sm:text-4xl">
                            Comprehensive Solutions.
                            <span class="block">
                                One Reliable Partner.
                            </span>
                        </h2>

                        <p class="mt-5 font-nunito text-base leading-8 text-slate-600">
                            We provide integrated building services
                            designed to support functionality,
                            efficiency, and long-term performance.
                        </p>

                    </div>

                    <a href="/services"
                    class="group inline-flex cursor-pointer items-center gap-3 self-start font-lexend text-sm font-semibold text-[#c03400] transition hover:gap-5">

                        View All Services
                        <span>&rarr;</span>

                    </a>

                </div>

                <!-- Cards Grid -->
                <div class="grid gap-7 md:grid-cols-2 xl:grid-cols-4">

                    <!-- Mechanical -->
                    <article class="group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                        <div class="relative h-56 overflow-hidden">

                            <img
                                src="/images/Services/Mechanical.png"
                                alt="Mechanical and HVAC installations"
                                loading="lazy"
                                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            >

                            <div class="absolute bottom-0 left-0 h-1 w-16 bg-[#c03400]"></div>

                        </div>

                        <div class="p-7">

                            <p class="font-lexend text-xs font-semibold text-[#c03400]">
                                01 / MECHANICAL
                            </p>

                            <h3 class="mt-3 font-lexend text-xl font-bold text-[#002f65]">
                                Mechanical Works
                            </h3>

                            <p class="mt-4 min-h-[112px] font-nunito text-sm leading-7 text-slate-600">
                                HVAC systems, chillers, AHUs, FCUs,
                                mechanical piping, ductwork,
                                ventilation, and exhaust systems.
                            </p>

                            <a href="/services"
                            class="mt-6 inline-flex cursor-pointer items-center gap-3 font-lexend text-sm font-semibold text-[#c03400] transition-all hover:gap-5">
                                Learn More <span>&rarr;</span>
                            </a>

                        </div>
                    </article>

                    <!-- Electrical -->
                    <article class="group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                        <div class="relative h-56 overflow-hidden">

                            <img
                                src="/images/Services/Electrical.png"
                                alt="Professional electrical installation works"
                                loading="lazy"
                                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            >

                            <div class="absolute bottom-0 left-0 h-1 w-16 bg-[#c03400]"></div>

                        </div>

                        <div class="p-7">

                            <p class="font-lexend text-xs font-semibold text-[#c03400]">
                                02 / ELECTRICAL
                            </p>

                            <h3 class="mt-3 font-lexend text-xl font-bold text-[#002f65]">
                                Electrical Works
                            </h3>

                            <p class="mt-4 min-h-[112px] font-nunito text-sm leading-7 text-slate-600">
                                Electrical installations, power
                                distribution, wiring, lighting,
                                and associated electrical
                                infrastructure.
                            </p>

                            <a href="/services"
                            class="mt-6 inline-flex cursor-pointer items-center gap-3 font-lexend text-sm font-semibold text-[#c03400] transition-all hover:gap-5">
                                Learn More <span>&rarr;</span>
                            </a>

                        </div>
                    </article>

                    <!-- Plumbing -->
                    <article class="group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                        <div class="relative h-56 overflow-hidden">

                            <img
                                src="/images/Services/Plumbing.png"
                                alt="Professional plumbing installation and maintenance"
                                loading="lazy"
                                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            >

                            <div class="absolute bottom-0 left-0 h-1 w-16 bg-[#c03400]"></div>

                        </div>

                        <div class="p-7">

                            <p class="font-lexend text-xs font-semibold text-[#c03400]">
                                03 / PLUMBING
                            </p>

                            <h3 class="mt-3 font-lexend text-xl font-bold text-[#002f65]">
                                Plumbing Works
                            </h3>

                            <p class="mt-4 min-h-[112px] font-nunito text-sm leading-7 text-slate-600">
                                Water supply and drainage systems,
                                sanitary installations,
                                pipe networks, and associated
                                plumbing services.
                            </p>

                            <a href="/services"
                            class="mt-6 inline-flex cursor-pointer items-center gap-3 font-lexend text-sm font-semibold text-[#c03400] transition-all hover:gap-5">
                                Learn More <span>&rarr;</span>
                            </a>

                        </div>
                    </article>

                    <!-- Fitout -->
                    <article class="group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                        <div class="relative h-56 overflow-hidden">

                            <img
                                src="/images/Services/Fitout.png"
                                alt="Modern commercial interior fit-out works"
                                loading="lazy"
                                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            >

                            <div class="absolute bottom-0 left-0 h-1 w-16 bg-[#c03400]"></div>

                        </div>

                        <div class="p-7">

                            <p class="font-lexend text-xs font-semibold text-[#c03400]">
                                04 / INTERIORS
                            </p>

                            <h3 class="mt-3 font-lexend text-xl font-bold text-[#002f65]">
                                Fit-out & Interiors
                            </h3>

                            <p class="mt-4 min-h-[112px] font-nunito text-sm leading-7 text-slate-600">
                                Functional and modern interior
                                fit-out solutions, finishing works,
                                and coordination with building
                                MEP systems.
                            </p>

                            <a href="/services"
                            class="mt-6 inline-flex cursor-pointer items-center gap-3 font-lexend text-sm font-semibold text-[#c03400] transition-all hover:gap-5">
                                Learn More <span>&rarr;</span>
                            </a>

                        </div>
                    </article>

                </div>

            </div>
        </section>


        <!-- ======================================
            4. MECHANICAL EXPERTISE HIGHLIGHT
        ======================================= -->
        <section class="bg-white py-8 lg:py-12">

            <div class="mx-auto max-w-7xl px-6 lg:px-8">

                <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

                    <!-- Image -->
                    <div class="relative">

                        <img
                            src="/images/Front/HVACEngineers.png"
                            alt="HVAC systems and mechanical piping installation"
                            loading="lazy"
                            class="h-[380px] w-full rounded-xl object-cover shadow-lg sm:h-[520px]"
                        >

                        <div class="absolute -bottom-4 left-8 h-1.5 w-32 bg-[#c03400]"></div>

                    </div>

                    <!-- Content -->
                    <div>

                        <p class="mb-4 font-lexend text-xs font-bold uppercase tracking-[0.18em] text-[#c03400]">
                            Mechanical Expertise
                        </p>

                        <h2 class="font-lexend text-3xl font-bold leading-tight tracking-tight text-[#002f65] sm:text-4xl">
                            Advanced HVAC &
                            Mechanical Piping
                            Solutions
                        </h2>

                        <p class="mt-6 font-nunito text-base leading-8 text-slate-600">
                            We offer comprehensive HVAC and
                            mechanical services supporting efficient
                            temperature control, ventilation,
                            and reliable building operation.
                        </p>

                        <!-- Expertise Items -->
                        <div class="mt-8 grid gap-4 sm:grid-cols-2">

                            <div class="flex items-start gap-3">
                                <span class="mt-1 text-lg font-bold text-[#c03400]">
                                    &#10003;
                                </span>
                                <span class="font-nunito text-sm font-semibold leading-7 text-[#002f65]">
                                    AC Units & Chillers
                                </span>
                            </div>

                            <div class="flex items-start gap-3">
                                <span class="mt-1 text-lg font-bold text-[#c03400]">
                                    &#10003;
                                </span>
                                <span class="font-nunito text-sm font-semibold leading-7 text-[#002f65]">
                                    AHUs & FCUs
                                </span>
                            </div>

                            <div class="flex items-start gap-3">
                                <span class="mt-1 text-lg font-bold text-[#c03400]">
                                    &#10003;
                                </span>
                                <span class="font-nunito text-sm font-semibold leading-7 text-[#002f65]">
                                    GI & PI Ductwork
                                </span>
                            </div>

                            <div class="flex items-start gap-3">
                                <span class="mt-1 text-lg font-bold text-[#c03400]">
                                    &#10003;
                                </span>
                                <span class="font-nunito text-sm font-semibold leading-7 text-[#002f65]">
                                    Flexible Duct Systems
                                </span>
                            </div>

                            <div class="flex items-start gap-3">
                                <span class="mt-1 text-lg font-bold text-[#c03400]">
                                    &#10003;
                                </span>
                                <span class="font-nunito text-sm font-semibold leading-7 text-[#002f65]">
                                    Ventilation & Exhaust
                                </span>
                            </div>

                            <div class="flex items-start gap-3">
                                <span class="mt-1 text-lg font-bold text-[#c03400]">
                                    &#10003;
                                </span>
                                <span class="font-nunito text-sm font-semibold leading-7 text-[#002f65]">
                                    Dampers & Piping
                                </span>
                            </div>

                        </div>

                        <a href="/services"
                        class="mt-10 inline-flex cursor-pointer items-center gap-3 rounded-md bg-[#002f65] px-7 py-4 font-lexend text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#c03400]">

                            Discover Our Expertise
                            <span>&rarr;</span>

                        </a>

                    </div>

                </div>
            </div>
        </section>


        <!-- ======================================
            5. WHY CHOOSE BRISTOL
        ======================================= -->
        <section class="bg-[#f3f5f7] py-8 lg:py-12">

            <div class="mx-auto max-w-7xl px-6 lg:px-8">

                <div class="mx-auto mb-14 max-w-3xl text-center">

                    <p class="mb-4 font-lexend text-xs font-bold uppercase tracking-[0.18em] text-[#c03400]">
                        Why Choose Bristol
                    </p>

                    <h2 class="font-lexend text-3xl font-bold tracking-tight text-[#002f65] sm:text-4xl">
                        Built on Quality.
                        Driven by Commitment.
                    </h2>

                    <p class="mx-auto mt-5 max-w-2xl font-nunito text-base leading-8 text-slate-600">
                        We bring together technical knowledge,
                        coordinated execution, and a commitment
                        to quality across every project.
                    </p>

                </div>

                <!-- Benefits -->
                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                    <!-- Quality -->
                    <div class="group rounded-xl bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                        <div class="mb-7 flex h-14 w-14 items-center justify-center rounded-lg bg-[#002f65]/10 text-[#002f65]">

                            <svg class="h-7 w-7" fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="1.6">
                                <path stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 3 4 7v5c0 5 3 8 8 9 5-1 8-4 8-9V7l-8-4Z"/>
                                <path stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="m9 12 2 2 4-4"/>
                            </svg>

                        </div>

                        <h3 class="font-lexend text-lg font-bold text-[#002f65]">
                            Quality Workmanship
                        </h3>

                        <p class="mt-4 font-nunito text-sm leading-7 text-slate-600">
                            Attention to detail and quality
                            standards throughout every
                            stage of execution.
                        </p>

                    </div>

                    <!-- Expertise -->
                    <div class="group rounded-xl bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                        <div class="mb-7 flex h-14 w-14 items-center justify-center rounded-lg bg-[#002f65]/10 text-[#002f65]">

                            <svg class="h-7 w-7" fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="1.6">
                                <path stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1M18.4 5.6l-2.1 2.1m-8.6 8.6-2.1 2.1"/>
                                <circle cx="12" cy="12" r="4"/>
                            </svg>

                        </div>

                        <h3 class="font-lexend text-lg font-bold text-[#002f65]">
                            Technical Expertise
                        </h3>

                        <p class="mt-4 font-nunito text-sm leading-7 text-slate-600">
                            Practical engineering solutions
                            tailored to different building
                            and project requirements.
                        </p>

                    </div>

                    <!-- Reliability -->
                    <div class="group rounded-xl bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                        <div class="mb-7 flex h-14 w-14 items-center justify-center rounded-lg bg-[#002f65]/10 text-[#002f65]">

                            <svg class="h-7 w-7" fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="1.6">
                                <circle cx="12" cy="12" r="9"/>
                                <path stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 7v5l3 2"/>
                            </svg>

                        </div>

                        <h3 class="font-lexend text-lg font-bold text-[#002f65]">
                            Reliable Execution
                        </h3>

                        <p class="mt-4 font-nunito text-sm leading-7 text-slate-600">
                            Organized planning and efficient
                            coordination focused on
                            dependable project delivery.
                        </p>

                    </div>

                    <!-- Customer -->
                    <div class="group rounded-xl bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                        <div class="mb-7 flex h-14 w-14 items-center justify-center rounded-lg bg-[#002f65]/10 text-[#002f65]">

                            <svg class="h-7 w-7" fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="1.6">
                                <circle cx="9" cy="8" r="3"/>
                                <path stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 5"/>
                            </svg>

                        </div>

                        <h3 class="font-lexend text-lg font-bold text-[#002f65]">
                            Client Focus
                        </h3>

                        <p class="mt-4 font-nunito text-sm leading-7 text-slate-600">
                            Clear communication,
                            responsive coordination,
                            and solutions aligned
                            with client needs.
                        </p>

                    </div>

                </div>

            </div>
        </section>


        <!-- ======================================
            6. OUR APPROACH
        ======================================= -->
        <section class="bg-white py-8 lg:py-12">

            <div class="mx-auto max-w-7xl px-6 lg:px-8">

                <div class="mb-14 text-center">

                    <p class="mb-4 font-lexend text-xs font-bold uppercase tracking-[0.18em] text-[#c03400]">
                        Our Approach
                    </p>

                    <h2 class="font-lexend text-3xl font-bold tracking-tight text-[#002f65] sm:text-4xl">
                        From Concept to Completion
                    </h2>

                    <p class="mx-auto mt-5 max-w-2xl font-nunito text-base leading-8 text-slate-600">
                        A coordinated approach to delivering
                        practical and reliable building solutions.
                    </p>

                </div>

                <div class="grid gap-8 md:grid-cols-3">

                    <!-- Step 1 -->
                    <div class="relative border-t-[3px] border-[#c03400] pt-7">

                        <span class="font-lexend text-5xl font-bold text-[#002f65]/15">
                            01
                        </span>

                        <h3 class="mt-5 font-lexend text-xl font-bold text-[#002f65]">
                            Plan & Coordinate
                        </h3>

                        <p class="mt-4 font-nunito text-sm leading-7 text-slate-600">
                            Understanding project requirements,
                            reviewing technical specifications,
                            and coordinating building services.
                        </p>

                    </div>

                    <!-- Step 2 -->
                    <div class="relative border-t-[3px] border-[#c03400] pt-7">

                        <span class="font-lexend text-5xl font-bold text-[#002f65]/15">
                            02
                        </span>

                        <h3 class="mt-5 font-lexend text-xl font-bold text-[#002f65]">
                            Install & Execute
                        </h3>

                        <p class="mt-4 font-nunito text-sm leading-7 text-slate-600">
                            Delivering coordinated installations
                            with attention to workmanship,
                            safety, and project requirements.
                        </p>

                    </div>

                    <!-- Step 3 -->
                    <div class="relative border-t-[3px] border-[#c03400] pt-7">

                        <span class="font-lexend text-5xl font-bold text-[#002f65]/15">
                            03
                        </span>

                        <h3 class="mt-5 font-lexend text-xl font-bold text-[#002f65]">
                            Test & Deliver
                        </h3>

                        <p class="mt-4 font-nunito text-sm leading-7 text-slate-600">
                            Supporting system testing,
                            commissioning, and handover
                            for reliable operational performance.
                        </p>

                    </div>

                </div>

            </div>
        </section>


        <!-- ======================================
            7. CONTACT CTA
        ======================================= -->
        <section class="relative overflow-hidden bg-[#002f65] py-8 lg:py-12">

            <!-- Background Decoration -->
            <div class="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10"></div>
            <div class="pointer-events-none absolute -bottom-40 right-32 h-80 w-80 rounded-full border border-white/10"></div>

            <div class="relative mx-auto max-w-7xl px-6 lg:px-8">

                <div class="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">

                    <div class="max-w-2xl">

                        <p class="mb-5 font-lexend text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
                            Let's Work Together
                        </p>

                        <h2 class="font-lexend text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                            Have a Project in Mind?

                            <span class="block">
                                Let's Build It Together.
                            </span>
                        </h2>

                        <p class="mt-6 max-w-xl font-nunito text-base leading-8 text-blue-100">
                            From mechanical systems to electrical,
                            plumbing, and interior fit-out works,
                            Bristol Contracting is here to support
                            your project requirements.
                        </p>

                    </div>

                    <div class="shrink-0">

                        <a href="/contact-us"
                        class="group inline-flex cursor-pointer items-center gap-5 rounded-md bg-[#c03400] px-9 py-4 font-lexend text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#002f65]">

                            Request a Consultation

                            <svg class="h-5 w-5 transition-transform group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="1.8">
                                <path stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M5 12h14m-6-6 6 6-6 6"/>
                            </svg>

                        </a>

                    </div>

                </div>
            </div>
        </section>

    </div>
</div>
</template>
