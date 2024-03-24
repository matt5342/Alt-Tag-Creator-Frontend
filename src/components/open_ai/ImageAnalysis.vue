<template>
    <div class="container">
      <h1 class="text-center mb-4">Generate alt text from image urls</h1>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form @submit.prevent="submitForm" class="border p-4 rounded bg-light">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" id="url" value="url" v-model="imageForm.inputType">
              <label class="form-check-label" for="url">Url</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" id="text" value="text" v-model="imageForm.inputType">
              <label class="form-check-label" for="text">Text Box</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" id="file" value="file" v-model="imageForm.inputType">
              <label class="form-check-label" for="file">Html File</label>
            </div>

            <div class="form-group mt-4" v-if="imageForm.inputType === 'url'">
              <label for="image_url">Image Url</label>
              <input type="text" id="image_url" v-model="imageForm.imageUrl" class="form-control">
            </div>

            <div class="form-group mt-4" v-if="imageForm.inputType === 'text'">
              <label for="input_text">Text with Image Urls</label>
              <textarea id="input_text" rows="5" v-model="imageForm.inputText" class="form-control"></textarea>
            </div>

            <div class="form-group mt-4" v-if="imageForm.inputType === 'file'">
              <label for="html_file">Html File</label>
              <input type="file" id="html_file" @change="onFileChange" class="form-control-file">
            </div>

            <button type="submit" class="btn btn-primary mt-3" :disabled="isLoadingAnalysis">Upload</button>
            <div v-if="isLoadingAnalysis">Loading...</div>
          </form>
        </div>
      </div>
      <div v-if="imageAnalysisResponse" class="row mt-5" id="results">
        <AnalysisReponse :inputType="inputType" />
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { ref, computed, watch } from 'vue';
  import type { ImageForm } from '../../shared/interfaces';
  import { useImageAnalysisStore } from '@/stores/imageAnalysisStore';
  import AnalysisReponse from './AnalysisResponse.vue';
  import { ImageAnalysisTypes } from '@/shared/interfaces';
  
  const imageAnalysisStore = useImageAnalysisStore();
  const inputType = ref<ImageAnalysisTypes>(imageAnalysisStore.imageForm.inputType as ImageAnalysisTypes);
  // Form data
  const imageForm = imageAnalysisStore.imageForm;
  const onFileChange = (event: Event) => {
    imageForm.htmlFile = event.target.files[0];
  };
  
  const isLoadingAnalysis = computed(() => imageAnalysisStore.isLoadingAnalysis);
  const imageAnalysisResponse = computed(() => imageAnalysisStore.imageAnalysisResponse);

  const submitForm = () => {
    const formData = new FormData();
    Object.entries(imageForm).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value);
      }
    });
    // inputType.value = imageForm.inputType as ImageAnalysisTypes;
    imageAnalysisStore.submitImageForm(formData);

  };

</script>