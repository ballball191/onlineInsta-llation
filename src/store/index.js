import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentStep: 1,
    totalSteps: 4,
    installationPath: "C:\\Users\\Desktop",
    termsAgreed: false,
    desktopShortcut: true,
    taskbarShortcut: false,
    poweredUp: false,
    installationProgress: 0,
    featureIndex: 0,
    features: [
      {
        title: "Effortlessly download songs from Spotify, Apple Music, Amazon Music, YouTube Music, and more",
        image: "download-feature.png",
      },
      {
        title: "Export songs to MP3, AAC, WAV, FLAC, M4A and AAC",
        image: "export-feature.png",
      },
      {
        title: "Maintain 100% original music quality and ID3 tags intact",
        image: "quality-feature.png",
      },
      {
        title: "Batch download songs at 10X faster speed",
        image: "speed-feature.png",
      },
    ],
  },
  mutations: {
    setCurrentStep(state, step) {
      state.currentStep = step
    },
    setInstallationPath(state, path) {
      state.installationPath = path
    },
    setTermsAgreed(state, agreed) {
      state.termsAgreed = agreed
    },
    setDesktopShortcut(state, value) {
      state.desktopShortcut = value
    },
    setTaskbarShortcut(state, value) {
      state.taskbarShortcut = value
    },
    setPoweredUp(state, value) {
      state.poweredUp = value
    },
    setInstallationProgress(state, value) {
      state.installationProgress = value
    },
    setFeatureIndex(state, index) {
      state.featureIndex = index
    },
    incrementFeatureIndex(state) {
      if (state.featureIndex < state.features.length - 1) {
        state.featureIndex++
      }
    },
  },
  actions: {
    nextStep({ commit, state }) {
      commit("setCurrentStep", state.currentStep + 1)
    },
    startInstallation({ commit, dispatch, state }) {
      commit("setCurrentStep", 2)

      // Reset progress
      commit("setInstallationProgress", 0)
      commit("setFeatureIndex", 0)

      // Simulate installation process
      const totalDuration = 8000 // 8 seconds total
      const featureCount = state.features.length
      const featureDuration = totalDuration / featureCount

      // Update progress continuously
      const progressInterval = setInterval(() => {
        const currentProgress = state.installationProgress
        if (currentProgress < 100) {
          commit("setInstallationProgress", currentProgress + 1)
        } else {
          clearInterval(progressInterval)
          dispatch("nextStep") // Move to completion step
        }
      }, totalDuration / 100)

      // Change features at intervals
      for (let i = 0; i < featureCount; i++) {
        setTimeout(() => {
          commit("setFeatureIndex", i)
        }, i * featureDuration)
      }
    },
  },
})

