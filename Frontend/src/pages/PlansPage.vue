<template>
    <feature-page>
        <template #feature>
            <pricing-3-col
                :title="pageContent.title"
                :teaser="pageContent.teaser"
            />
        </template>
        <template #content>
            <div
                class="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500 text-center"
            >
                <a
                    href="#/signup"
                    class="inline-flex items-center no-underline rounded-md border border-transparent bg-primary px-6 py-3 text-xl font-medium text-white shadow-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Sign up for more information about our offerings
                </a>
            </div>
        </template>
    </feature-page>
</template>
<script setup>
import FeaturePage from "../components/Layouts/PageWithFeature.vue";
import Pricing3Col from "@jslone/pricing3col/Pricing3Col";
const pageContent = {
    title: "Pricing Plans",
    teaser: "We offer three distinct pricing options for your energy needs!",
};
</script>
