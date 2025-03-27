<template>
  <div class="progress-container">
    <div class="feature-section blue-gradient">
      <div class="feature-content" v-for="(feature, index) in features" :key="index" v-show="featureIndex === index">
        <div class="feature-image" :class="'feature-image-' + index">
          <img :src="getFeatureImage(index)" alt="Feature Icon" class="feature-icon">
        </div>
        <div class="feature-text">{{ feature.title }}</div>
      </div>
    </div>
    
    <div class="progress-section">
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: progress + '%' }"></div>
      </div>
      <div class="progress-text">Installing software, please wait...</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InstallationProgress',
  computed: {
    progress() {
      return this.$store.state.installationProgress
    },
    featureIndex() {
      return this.$store.state.featureIndex
    },
    features() {
      return this.$store.state.features
    }
  },
  methods: {
    getFeatureImage(index) {
      // Map feature index to the correct image
      const images = [
        require('@/assets/images/component-22.svg'),
        require('@/assets/images/component-23.svg'),
        require('@/assets/images/component-24.svg'),
        require('@/assets/images/component-25.svg')
      ]
      return images[index]
    }
  }
}
</script>

<style scoped>
.progress-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 436px;
}

.feature-section {
  height: 250px;
  padding: 30px 20px;
  color: white;
  display: flex;
  align-items: center;
}

.feature-content {
  display: flex;
  align-items: center;
  width: 100%;
}

.feature-image {
  margin-right: 20px;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.feature-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.feature-text {
  font-size: 18px;
  font-weight: 500;
  flex: 1;
  text-align: left;
}

.progress-section {
  height: 186px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.progress-bar {
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 15px;
}

.progress-fill {
  height: 100%;
  background-color: #007bff;
  transition: width 0.3s ease;
}

.progress-text {
  text-align: center;
  color: #666;
  font-size: 14px;
}
</style>

