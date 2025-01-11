<template>
  <main class="home-root">
    <currency-section />
  </main>
</template>

<script>
import CurrencySection from '@/views/currencies/Section'

export default {
  name: 'Home',
  components: {
    CurrencySection
  }
}
</script>
