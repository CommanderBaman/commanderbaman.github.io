<template>
  <div>
    <BackgroundTwinklingCircles class="custom-background" />
    <div class="nuxt-main-container">
      <Nuxt />
    </div>
    <NavigationDotBar />
    <NameWatermark />
  </div>
</template>

<style scoped>
@import '~/assets/styles/transitions.css';
@import '~/assets/styles/layouts/default.css';
</style>
