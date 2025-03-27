<template>
  <div class="step-container">
    <div class="content">
      <div class="success-icon">
        <img src="@/assets/images/component-27.svg" alt="Success Icon" class="check-icon">
      </div>
      
      <h2 class="success-title">Successful Installation</h2>
      <p class="success-description">Macsome Music One has been successfully installed on your computer</p>
      
      <div class="options">
        <label class="checkbox-container">
          <input type="checkbox" v-model="runApp">
          <span class="checkmark"></span>
          Run app now
        </label>
        
        <label class="checkbox-container">
          <input type="checkbox" v-model="startOnBoot">
          <span class="checkmark"></span>
          Launch on startup
        </label>
      </div>
    </div>
    
    <div class="action-buttons">
      <button class="finish-button" @click="finishInstallation">Run Application</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step7Complete',
  data() {
    return {
      runApp: true,
      startOnBoot: false
    }
  },
  methods: {
    finishInstallation() {
      // In a real app, this would launch the application
      alert('Application launched successfully!')
    }
  }
}
</script>

<style scoped>
.step-container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 400px;
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
  padding: 30px;
  margin-bottom: 20px;
}

.success-icon {
  margin-bottom: 30px;
}

.check-icon {
  width: 60px;
  height: 60px;
}

.success-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #007bff;
}

.success-description {
  font-size: 14px;
  color: #666;
  margin-bottom: 30px;
  text-align: center;
}

.options {
  width: 100%;
  margin-bottom: 20px;
}

.checkbox-container {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 35px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 14px;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  left: 0;
  height: 20px;
  width: 20px;
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

.action-buttons {
  display: flex;
  justify-content: center;
}

.finish-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 30px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  min-width: 150px;
}
</style>

