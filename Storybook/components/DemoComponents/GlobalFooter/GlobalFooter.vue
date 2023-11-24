<template>
    <footer class="bg-secondary text-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="sr-only">Footer</h2>
        <div
            class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-16 lg:px-8 lg:pt-24"
        >
            <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                <div class="space-y-4">
                    <p class="text-sm leading-6 text-white">
                        Learn about our energy offerings! From solar, to wind,
                        to hydro - our energy will get you there.
                    </p>
                </div>
                <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3
                                class="text-sm font-semibold leading-6 text-white"
                            >
                                Solutions
                            </h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li
                                    v-for="item in navigation.solutions"
                                    :key="item.name"
                                >
                                    <a
                                        :href="item.href"
                                        class="text-sm leading-6 text-white"
                                        >{{ item.name }}</a
                                    >
                                </li>
                            </ul>
                        </div>
                        <div class="mt-6 md:mt-0">
                            <h3
                                class="text-sm font-semibold leading-6 text-white"
                            >
                                Support
                            </h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li
                                    v-for="item in navigation.support"
                                    :key="item.name"
                                >
                                    <a
                                        :href="item.href"
                                        class="text-sm leading-6 text-white"
                                        >{{ item.name }}</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3
                                class="text-sm font-semibold leading-6 text-white"
                            >
                                Company
                            </h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li
                                    v-for="item in navigation.company"
                                    :key="item.name"
                                >
                                    <a
                                        :href="item.href"
                                        class="text-sm leading-6 text-white"
                                        >{{ item.name }}</a
                                    >
                                </li>
                            </ul>
                        </div>
                        <div class="mt-10 md:mt-0">
                            <h3
                                class="text-sm font-semibold leading-6 text-white"
                            >
                                Legal
                            </h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li
                                    v-for="item in navigation.legal"
                                    :key="item.name"
                                >
                                    <a
                                        :href="item.href"
                                        class="text-sm leading-6 text-white"
                                        >{{ item.name }}</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="mt-16 border-t border-gray-100/10 pt-8 sm:mt-20 lg:mt-24"
            >
                <p class="text-xs leading-5 text-white">
                    &copy; 2023 Gridzy, Inc. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { defineComponent, h } from "vue";
const navigation = {
    solutions: [
        { name: "Marketing", href: "#" },
        { name: "Analytics", href: "#" },
        { name: "Commerce", href: "#" },
        { name: "Insights", href: "#" },
    ],
    support: [
        { name: "Pricing", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Guides", href: "#" },
        { name: "API Status", href: "#" },
    ],
    company: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Jobs", href: "#" },
        { name: "Press", href: "#" },
        { name: "Partners", href: "#" },
    ],
    legal: [
        { name: "Claim", href: "#" },
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
    ],
};
</script>
