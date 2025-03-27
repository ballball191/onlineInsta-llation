<template>
  <div class="directory-container">
    <div class="header blue-gradient">
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
      <div class="directory-section">
        <p class="directory-label">Installation directory</p>
        <div class="directory-input">
          <input type="text" v-model="installPath" readonly>
          <button class="change-btn" @click="changeDirectory">Change</button>
        </div>
        
        <div class="shortcuts">
          <label class="checkbox-container">
            <input type="checkbox" v-model="desktopShortcut">
            <span class="checkmark"></span>
            <span>Add shortcuts to the desktop</span>
          </label>
          
          <label class="checkbox-container">
            <input type="checkbox" v-model="taskbarShortcut">
            <span class="checkmark"></span>
            <span>Lock to the taskbar</span>
          </label>
        </div>
      </div>
      
      <button class="install-btn" @click="startInstallation">
        Install Now
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InstallationDirectory',
  data() {
    return {
      installPath: this.$store.state.installationPath,
      desktopShortcut: this.$store.state.desktopShortcut,
      taskbarShortcut: this.$store.state.taskbarShortcut
    }
  },
  methods: {
    changeDirectory() {
      // In a real app, this would open a directory picker
      this.installPath = 'C:\\Program Files\\Macsome Music One'
      this.$store.commit('setInstallationPath', this.installPath)
    },
    startInstallation() {
      this.$store.commit('setDesktopShortcut', this.desktopShortcut)
      this.$store.commit('setTaskbarShortcut', this.taskbarShortcut)
      this.$store.dispatch('nextStep')
    }
  }
}
</script>

<style scoped>
.directory-container {
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
}

.content {
  height: 186px;
  padding: 20px;
  position: relative;
}

.directory-section {
  margin-bottom: 20px;
}

.directory-label {
  text-align: left;
  margin-bottom: 10px;
  color: #666;
}

.directory-input {
  display: flex;
  margin-bottom: 15px;
}

.directory-input input {
  flex-grow: 1;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  font-size: 14px;
}

.change-btn {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-left: none;
  padding: 0 15px;
  border-radius: 0 4px 4px 0;
}

.shortcuts {
  text-align: left;
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

.install-btn {
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

