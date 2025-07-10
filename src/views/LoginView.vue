<template>
  <div class="flex min-h-screen bg-[#F1F5F9]">
    <!-- Left side -->
    <div
      class="hidden md:flex w-1/2 flex-col justify-start items-center p-10 mt-10"
    >
      <img
        src="/login1.png"
        alt="Illustration"
        class="mb-6"
        style="width: 1200px; height: 500px"
      />
      <h2 class="text-2xl font-semibold mb-2 text-center">
        Start understanding your emotions better
      </h2>
      <p class="text-gray-600 text-center mb-4 max-w-sm">
        Track the emotional impact of social media with AI-powered insights and
        take control of your digital wellness journey.
      </p>
      <ul class="text-sm text-gray-700 space-y-2">
        <li>🔹 Real-time emotional analysis</li>
        <li>🔹 Personalized wellness insights</li>
        <li>🔹 Privacy-first approach</li>
      </ul>
    </div>

    <!-- Right side -->
    <div class="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
      <div class="w-full max-w-xl bg-[#F1F5F9] rounded-xl shadow-2xl p-10">
        <div class="flex flex-col items-center mb-8">
          <img src="/login2.png" class="w-14 h-14" alt="Logo" />
          <h1 class="text-2xl font-bold mt-3">Insighta</h1>
          <p class="text-gray-500 text-base">
            AI-powered emotional wellness tracking
          </p>
        </div>
        <form @submit.prevent="login" class="space-y-6">
          <div>
            <label class="block text-base font-medium text-gray-700"
              >Email</label
            >
            <input
              v-model="email"
              type="email"
              required
              class="mt-1 block w-full border border-gray-300 rounded px-4 py-3 text-base bg-[#E2E8F0]"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label class="block text-base font-medium text-gray-700"
              >Password</label
            >
            <input
              v-model="password"
              type="password"
              required
              class="mt-1 block w-full border border-gray-300 rounded px-4 py-3 text-base bg-[#E2E8F0]"
              placeholder="Enter your password"
            />
          </div>
          <div class="flex items-center justify-between">
            <label class="flex items-center space-x-2">
              <input
                type="checkbox"
                class="h-4 w-4 border-gray-300 rounded bg-[#E2E8F0]"
              />
              <span class="text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" class="text-sm text-[#007b83] hover:underline"
              >Forgot Password?</a
            >
          </div>
          <button
            type="submit"
            class="w-full bg-[#007b83] text-white py-3 rounded text-base hover:bg-[#006473]"
          >
            Log In
          </button>
          <div class="text-center text-gray-400 text-sm">Or continue with</div>
          <div class="flex space-x-3">
            <button
              type="button"
              class="flex-1 border border-gray-300 py-3 rounded text-base hover:bg-gray-100"
            >
              Google
            </button>
            <button
              type="button"
              class="flex-1 border border-gray-300 py-3 rounded text-base hover:bg-gray-100"
            >
              Facebook
            </button>
          </div>
        </form>
      </div>
      <p class="text-center text-sm text-gray-600 mt-6">
        Don't have an account?
        <a href="#" class="text-[#007b83] hover:underline">Sign up</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

function login() {
  if (email.value && password.value) {
    router.push("/app/dashboard");
  }
}
</script>
