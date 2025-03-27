<template>
  <div class="welcome-container">
    <div class="header blue-gradient">
      <div class="close-button">×</div>
      <div class="logo-section">
        <div class="logo-wrapper">
          <img src="@/assets/images/music-icon.svg" alt="Macsome Music One Logo" class="logo">
        </div>
        <div class="title-section">
          <h1 class="title">Macsome Music One</h1>
          <p class="subtitle">One of the best music conversion software.</p>
        </div>
      </div>
    </div>
    
    <div class="content">
      <button class="xpress-install-btn" @click="startInstallation" :disabled="!termsAgreed">
        Xpress Install
      </button>
      
      <div class="terms-agreement">
        <label class="checkbox-container">
          <input type="checkbox" v-model="termsAgreed">
          <span class="checkmark"></span>
          <span>I have read and agreed</span>
          <span class="license-link">User license agreement</span>
        </label>
      </div>
      
      <div class="custom-installation">
        <span>Custom installation</span>
        <span class="arrow-icon">⟩</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomeScreen',
  data() {
    return {
      termsAgreed: false
    }
  },
  methods: {
    startInstallation() {
      if (this.termsAgreed) {
        this.$store.commit('setTermsAgreed', this.termsAgreed)
        this.$store.dispatch('startInstallation')
      }
    }
  }
}
</script>

<style scoped>
.welcome-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 436px;
}

.header {
  height: 250px;
  padding: 30px 20px;
  color: white;
  position: relative;
  display: flex;
  align-items: center;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
}

.logo-section {
  display: flex;
  align-items: center;
  width: 100%;
}

.logo-wrapper {
  margin-left: 54px;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 100%;
  height: 100%;
}

.title-section {
  margin-left: 20px;
}

.title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #004CB0;
}

.subtitle {
  font-size: 14px;
  opacity: 0.9;
  color: #004CB0;
}

.content {
  height: 186px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.xpress-install-btn {
  background-color: #007bff;
  color: white;
  border: none;
  width: 100%;
  max-width: 300px;
  padding: 12px 0;
  font-size: 16px;
  border-radius: 4px;
  margin-bottom: 20px;
}

.xpress-install-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.terms-agreement {
  width: auto;
  max-width: auto;
  text-align: left;
  margin: 0 auto;
  margin-bottom: 20px;
}

.checkbox-container {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  font-size: 14px;
  color: #666;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  left: 0;
  height: 18px;
  width: 18px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.checkbox-container input:checked ~ .checkmark {
  background-color: #007bff;
  border-color: #007bff;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-container input:checked ~ .checkmark:after {
  display: block;
  left: 6px;
  top: 0px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.license-link {
  color: #007bff;
  margin-left: 5px;
  cursor: pointer;
}

.custom-installation {
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  color: #666;
  font-size: 14px;
}

.arrow-icon {
  margin-left: 5px;
  color: #999;
}
</style>

