<template>
    <feature-page>
        <template #feature>
            <feature-2-col
                :title="pageContent.title"
                :teaser="pageContent.teaser"
            />
        </template>
        <template #content>
            <article-list num-items="8" />
        </template>
    </feature-page>
</template>
<script setup>
import FeaturePage from "../components/Layouts/PageWithFeature.vue";
import Feature2Col from "@jslone/feature2col/Feature2Col";
import ArticleList from "@jslone/articlelist/ArticleList";
const pageContent = {
    title: "Latest News",
    teaser: "Find the latest stories about our projects and initiatives.",
};
</script>
