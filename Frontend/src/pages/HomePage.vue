<script setup>
import HeroFeature from "@jslone/herofeature/HeroFeature";
import ArticleList from "@jslone/articlelist/ArticleList";
import PageCall from "../components/Methods/PageCall.vue";
</script>
<script>
PageCall.data("test_page");
PageCall.data("data_page");
</script>
<template>
    <hero-feature
        teaser=""
        primaryLink="#"
        primaryCTA="Learn More"
        secondaryLink="#"
        featuredImg="https://www.nait.ca/getmedia/bde9a149-b836-4e88-aa2a-9d7af5ea3093/images.jpg.aspx"
        featuredImgAlt="alt text"
    />
    <section class="bg-gray-100 py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <article-list :num-items="8" />
        </div>
    </section>
</template>
