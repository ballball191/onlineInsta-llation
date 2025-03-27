<template>
  <div class="complete-container">
    <div class="header blue-gradient">
      <div class="success-icon">
        <img src="@/assets/images/component-27.svg" alt="Success Icon" class="check-icon">
      </div>
      <h1 class="success-title">Successful Installation</h1>
    </div>
    
    <div class="content">
      <div class="options">
        <label class="checkbox-container">
          <input type="checkbox" v-model="poweredUp">
          <span class="checkmark"></span>
          <span>Powered up</span>
        </label>
        
        <label class="checkbox-container">
          <input type="checkbox" v-model="taskbarShortcut">
          <span class="checkmark"></span>
          <span>Lock to the taskbar</span>
        </label>
      </div>
      
      <button class="experience-btn" @click="finishInstallation">
        Now experience
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InstallationComplete',
  data() {
    return {
      poweredUp: this.$store.state.poweredUp,
      taskbarShortcut: this.$store.state.taskbarShortcut
    }
  },
  methods: {
    finishInstallation() {
      this.$store.commit('setPoweredUp', this.poweredUp)
      this.$store.commit('setTaskbarShortcut', this.taskbarShortcut)
      // In a real app, this would launch the application
      alert('Application launched successfully!')
    }
  }
}
</script>

<style scoped>
.complete-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 436px;
}

.header {
  height: 250px;
  padding: 30px 20px;
  color: white;
  display: flex;
  align-items: center;
}

.success-icon {
  margin-right: 15px;
}

.check-icon {
  width: 40px;
  height: 40px;
}

.success-title {
  font-size: 24px;
  font-weight: bold;
}

.content {
  height: 186px;
  padding: 20px;
  position: relative;
}

.options {
  margin-bottom: 30px;
}

.checkbox-container {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 30px;
  margin-bottom: 10px;
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

.experience-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 0;
  width: 150px;
  border-radius: 4px;
  font-size: 14px;
  position: absolute;
  right: 20px;
  bottom: 20px;
}
</style>

