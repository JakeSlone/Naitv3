<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
        <div
            v-for="item in items.slice(0, numItems)"
            :key="item.id"
            class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
        >
            <img
                class="object-cover w-full h-48"
                :src="item.featuredImg"
                :alt="item.title"
            />
            <div class="absolute top-0 left-0 px-6 py-4">
                <h4
                    class="mb-3 text-xl font-semibold tracking-tight text-white"
                >
                    {{ item.title }}
                </h4>
                <p class="leading-normal text-gray-100">
                    {{ item.teaser }}
                    <p v-if="student">Student</p>
                    <p v-if="staff">Staff</p>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    numItems: {
        type: Number,
        required: true,
        default: 4,
    },
    student: Boolean,
    staff: Boolean,
});

const items = [
    {
        id: 1,
        title: "Article Title",
        teaser: "Article Teaser",
        featuredImg:
            "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1324&q=80",
        linkURL: "#",
    },
    {
        id: 2,
        title: "Article Title",
        teaser: "Article Teaser",
        featuredImg:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
        linkURL: "#",
    },
    {
        id: 3,
        title: "Article Title",
        teaser: "Article Teaser",
        featuredImg:
            "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
        linkURL: "#",
    },
    {
        id: 4,
        title: "Article Title",
        teaser: "Article Teaser",
        featuredImg:
            "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        linkURL: "#",
    },
    {
        id: 5,
        title: "Article Title",
        teaser: "Article Teaser",
        featuredImg:
            "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1324&q=80",
        linkURL: "#",
    },
    {
        id: 6,
        title: "Article Title",
        teaser: "Article Teaser",
        featuredImg:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
        linkURL: "#",
    },
    {
        id: 7,
        title: "Article Title",
        teaser: "Article Teaser",
        featuredImg:
            "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
        linkURL: "#",
    },
    {
        id: 8,
        title: "Article Title",
        teaser: "Article Teaser",
        featuredImg:
            "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        linkURL: "#",
    },
    // More items...
];
</script>
