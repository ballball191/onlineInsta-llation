<template>
  <div class="step-container">
    <div class="content">
      <div class="software-logo">
        <img src="@/assets/images/component-21.svg" alt="Macsome Music One Logo" class="logo-image">
      </div>
      
      <h2 class="software-name">Macsome Music One</h2>
      <p class="software-description">One of the best music conversion software</p>
      
      <div class="installation-directory">
        <p>Installation directory:</p>
        <div class="directory-input">
          <input type="text" v-model="installPath" readonly>
          <button class="change-button" @click="changeDirectory">Change</button>
        </div>
        
        <div class="shortcuts">
          <label class="checkbox-container">
            <input type="checkbox" v-model="desktopShortcut">
            <span class="checkmark"></span>
            Add shortcut to the desktop
          </label>
          
          <label class="checkbox-container">
            <input type="checkbox" v-model="startMenuShortcut">
            <span class="checkmark"></span>
            Link to the taskbar
          </label>
        </div>
      </div>
    </div>
    
    <div class="action-buttons">
      <button class="install-button" @click="startInstallation">Install Now</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step2SoftwareInfo',
  data() {
    return {
      installPath: this.$store.state.installationPath,
      desktopShortcut: this.$store.state.desktopShortcut,
      startMenuShortcut: this.$store.state.startMenuShortcut
    }
  },
  methods: {
    changeDirectory() {
      // In a real app, this would open a directory picker
      this.installPath = 'C:/Program Files/Macsome Music One'
      this.$store.commit('setInstallationPath', this.installPath)
    },
    startInstallation() {
      this.$store.commit('setDesktopShortcut', this.desktopShortcut)
      this.$store.commit('setStartMenuShortcut', this.startMenuShortcut)
      this.$store.dispatch('startInstallation')
      this.$store.dispatch('nextStep')
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
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.software-logo {
  margin-bottom: 15px;
}

.logo-image {
  width: 80px;
  height: 80px;
}

.software-name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #007bff;
}

.software-description {
  font-size: 14px;
  color: #666;
  margin-bottom: 30px;
}

.installation-directory {
  width: 100%;
  text-align: left;
}

.directory-input {
  display: flex;
  margin-bottom: 15px;
}

.directory-input input {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
}

.change-button {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-left: none;
  padding: 8px 15px;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.shortcuts {
  margin-top: 15px;
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

.install-button {
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

