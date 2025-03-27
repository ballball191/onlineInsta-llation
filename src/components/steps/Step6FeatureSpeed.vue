<template>
  <div class="step-container">
    <div class="content">
      <div class="feature-icon">
        <img src="@/assets/images/component-25.svg" alt="Speed Icon" class="feature-image">
      </div>
      
      <h3 class="feature-title">Batch download songs at 10X faster</h3>
      <p class="feature-description">speed</p>
      
      <div class="installation-progress">
        <div class="progress-bar" :style="{ width: progressWidth + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step6FeatureSpeed',
  computed: {
    progressWidth() {
      return this.$store.state.installationProgress
    }
  },
  mounted() {
    // Ensure progress is complete before moving to final step
    const checkProgress = setInterval(() => {
      if (this.$store.state.installationProgress >= 100) {
        clearInterval(checkProgress)
        this.$store.dispatch('nextStep')
      }
    }, 500)
  }
}
</script>

<style scoped>
.step-container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 300px;
  background: linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%);
}

.content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
}

.feature-icon {
  margin-bottom: 30px;
}

.feature-image {
  width: 120px;
  height: 120px;
}

.feature-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.feature-description {
  font-size: 14px;
  color: #666;
  margin-bottom: 30px;
  text-align: center;
}

.installation-progress {
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background-color: #007bff;
  transition: width 0.3s ease;
}
</style>

