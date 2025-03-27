<template>
  <div class="step-container">
    <div class="content">
      <h3>Access Install</h3>
      
      <div class="terms-agreement">
        <label class="checkbox-container">
          <input type="checkbox" v-model="termsAgreed">
          <span class="checkmark"></span>
          I have read and agreed <span class="link">End-license agreement</span>
        </label>
      </div>
      
      <div class="custom-installation">
        <span>Custom Installation</span>
        <button class="info-button">ⓘ</button>
      </div>
    </div>
    
    <div class="action-buttons">
      <button class="next-button" :disabled="!termsAgreed" @click="nextStep">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step1AccessInstall',
  data() {
    return {
      termsAgreed: false
    }
  },
  methods: {
    nextStep() {
      this.$store.commit('setTermsAgreed', this.termsAgreed)
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
  height: 300px;
  background: linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%);
}

.content {
  flex-grow: 1;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
}

.terms-agreement {
  margin: 30px 0;
  text-align: left;
}

.checkbox-container {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 35px;
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

.link {
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
}

.custom-installation {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
  color: #666;
}

.info-button {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: none;
  border: none;
  color: #007bff;
  margin-left: 5px;
  cursor: pointer;
}

.action-buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.next-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.next-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>

