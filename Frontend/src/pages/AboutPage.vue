<template>
  <simple-page 
    :title="pageContent.title" 
    :teaser="pageContent.teaser"
  >
    <div class="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
      <h2>Our mission and vision</h2>
      <p>Our mission is to provide clean water and safe, reliable energy.</p>

      <p>Our vision is to be a premier essential services company that attracts and retains the best employees, is trusted by our customers, and is valued by our stakeholders.</p>

      <h2>Our values</h2>
      <ul>
        <li>We put safety first in everything we do.</li>
        <li>We act with integrity.</li>
        <li>We work as a team.</li>
        <li>We are trusted by our customers.</li>
        <li>We create shareholder value.</li>
        <li>We are environmental leaders.</li>
      </ul>
      <h2>Our priorities</h2>
      <p>We implement our vision and mission through a long-term plan that focuses on four strategic priorities:</p>
      <p><strong>People:</strong> attracting and retaining high-quality employees, supporting our workforce in growing and becoming future leaders, and nurturing a strong culture of engagement.</p>
      <p>
        <strong>Growth:</strong> sustaining capital and organic growth in our existing service areas, and business development and acquisitions. 
        Operational excellence: continually improving health, safety and environment performance, and seeking efficiencies through scale, business unit synergies and technology.
      </p>
      <p><strong>Communities:</strong> being trusted by our customers and stakeholders, engaging in collaborative and transparent planning, and meeting our commitments to the community.</p>
      <h2>Our purpose</h2>
      <p>Our mission and vision guide our operations. In 2020, we also launched a purpose statement: “Communities count on us. We count on each other.” EPCOR employees developed the purpose statement to express what motivates them, every day, to serve customers, communities and one another.</p>
    </div>
  </simple-page>
</template>
<script setup>
import SimplePage from "../components/Layouts/SimplePage.vue";
const pageContent = {
  title: "About us",
  teaser: "Learn about our energy offerings! From solar, to wind, to hydro - our energy will get you there.",
}

</script>