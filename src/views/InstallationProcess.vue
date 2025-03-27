<template>
  <div class="installation-container">
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import WelcomeScreen from '@/components/WelcomeScreen.vue'
import InstallationDirectory from '@/components/InstallationDirectory.vue'
import InstallationProgress from '@/components/InstallationProgress.vue'
import InstallationComplete from '@/components/InstallationComplete.vue'

export default {
  name: 'InstallationProcess',
  components: {
    WelcomeScreen,
    InstallationDirectory,
    InstallationProgress,
    InstallationComplete
  },
  computed: {
    currentComponent() {
      const step = this.$store.state.currentStep
      switch (step) {
        case 1: return 'WelcomeScreen'
        case 2: return 'InstallationDirectory'
        case 3: return 'InstallationProgress'
        case 4: return 'InstallationComplete'
        default: return 'WelcomeScreen'
      }
    }
  }
}
</script>

<style scoped>
.installation-container {
  width: 100%;
  height: 100%;
}
</style>

