---
redirect: true
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Find "/docs/" position and take everything before it
  const path = window.location.pathname.substring(0, window.location.pathname.indexOf('docs/'));
  const targetUrl = window.location.origin + path;
  window.history.replaceState(null, '', targetUrl); // Keeps previous page in history
  window.location.href = targetUrl;
});
</script>

<p>Redirecting...</p>
