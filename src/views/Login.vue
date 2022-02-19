<template>
  <div class="surface-0 flex align-items-center justify-content-center min-h-screen min-w-creen overflow-hidden">
    <div class="grid justify-content-center p-2 lg:p-0 min-width-80">
      <div class="col-12 mt-5 xl:mt-0 text-center">
        <img src="Ron.jpeg" alt="Ron" class="mb-5 logo"/>
      </div>

      <div class="col-12 xl:col-6 gradient-border-top">
        <div class="h-full w-full m-0 py-7 px-4 gradient-border-bot">
          <div class="text-center mb-5">
            <img src="Ron.jpeg" alt="İmage" height="50" class="mb-3" />

            <div class="text-900 text-3xl font-medium mb-3">
              Welcome, Anne
            </div>

            <span class="text-600 font-medium">
              Sign in to continue
            </span>
          </div>

          <form @submit.prevent="handleSubmit(!v$.$invalid)">
            <div class="w-full md:w-10 mx-auto">
              <label
                for="mail"
                :class="{
                  'block text-900 text-xl font-medium mb-2': true,
                  'p-error': v$.email.$invalid && submitted,
                }"
              >
                *Email:
              </label>

              <p-input-text
                id="mail"
                v-model="v$.email.$model"
                type="text"
                :class="{
                  'p-invalid': v$.email.$invalid && submitted,
                  'w-full mb-3 p-3': true,
                }"
                placeholder="Email"
              />

              <span v-if="v$.email.$error & submitted">
                <span id="email-error" v-for="(error, index) of v$.email.$errors" :key="index">
                  <small class="p-error">{{error.$message}}</small>
                </span>
              </span>
              <small v-else-if="(v$.email.$invalid && submitted) || v$.email.$pending.$response" class="p-error"> {{v$.email.required.replace('Value', 'Email')}}</small>

              <label
                for="password1"
                :class="{
                  'block text-900 text-xl font-medium mb-2': true,
                  'p-error': v$.password.$invalid && submitted,
                }"
              >
                Password
              </label>

              <p-password
                id="password1"
                v-model="v$.password.$model"
                placeholder="Password"
                :toggleMask="true"
                :class="{
                  'w-full mb-3': true,
                  'p-invalid': v$.password.$invalid && submitted,
                }"
                inputClass="w-full p-3"
              >
                <template #header>
                  <div class="text-lg font-bold mb-3">Pick a password</div>
                </template>

                <template #footer="sp">
                  {{sp.level}}
                  <p-divider />
                  <ul class="pl-2 ml-2 mt-0 line-height-3">
                    <li>At least one lowercase</li>
                    <li>At least one uppercase</li>
                    <li>At leaset one numeric</li>
                    <li>Minimum 8 characters</li>
                  </ul>
                </template>
              </p-password>

              <small v-if="(v$.password.$invalid && submitted) || v$.password.$pending.$response" class="p-error">{{v$.password.required.$message.replace('Value', 'Password')}}</small>

              <div class="flex align-items-center justify-content-between mb-5">
                <div class="flex align-items-center">
                  <p-checkbox
                    id="rememberme1"
                    name="accept"
                    value="Accept"
                    v-model="v$.checked.$model"
                    :binary="true"
                    class="mr-2"
                  />

                  <label class="text-white" for="rememberme1">
                    Remember me
                  </label>
                </div>

                <a class="font-medium no-underline ml-2 text-right cursor-pointer text-primary">
                  Forgot password?
                </a>
              </div>

              <p-button type="submit" label="Sign In" class="w-full p-3 text-xl p-button-success"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { email, required } from '@vuelidate/validators';
import useValidate from '@vuelidate/core';

export default {
  setup: () => ({ v$: useValidate() }),

  data: () => ({
    email: '',
    password: '',
    checked: false,
    submitted: false,
    showMessage: false,
  }),

  validations: () => ({
    email: {
      email,
      required,
    },

    password: {
      required,
    },

    checked: {
    },
  }),

  methods: {
    resetForm() {
      this.password = '';
      this.submitted = false;
    },

    toggleDialog() {
      this.showMessage = !this.showMessage;

      if (!this.showMessage) {
        this.resetForm();
      }
    },

    handleSubmit(isFormValid) {
      console.log(isFormValid);
      this.submitted = true;

      if (!isFormValid) {
        return;
      }

      this.toggleDialog();
    },
  },
};
</script>

<style lang="scss">
  .min-width-80 {
    min-width: 80%;
  }

  .logo {
    width: 81px;
    height:81px;
  }

  .gradient-border-top {
    border-radius:56px;
    padding:0.3rem;
    background: linear-gradient(180deg, var(--primary-color), rgba(33, 150, 243, 0) 30%);
  }

  .gradient-border-bot {
    border-radius: 53px;
    background: linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0));
  }
</style>
