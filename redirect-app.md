---
redirect: true
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
window.location.replace(new URL('../', window.location.href));
});
</script>

<p>Redirecting...</p>
