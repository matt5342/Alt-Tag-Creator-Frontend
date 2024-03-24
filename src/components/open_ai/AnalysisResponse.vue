<template>
    <div class="col-md-12">
        <h2 class="text-center">Image Analysis Results</h2>
        <!-- <div v-if="imageAnalysisResponse?.response.error_message" class="alert alert-danger" role="alert">
            {{ imageAnalysisResponse?.response.error_message }}
        </div> -->
        <!-- <div v-else class="card mt-4"> -->
        <div class="card mt-4">
            <div class="card-body" >
                <div v-for="(response, i) in imageAnalysisResponse" :key="i">
                    {{ response }}
                    <a v-tooltip="{ title: `<img src='${response.url}' class='img-thumbnail' />`, html: true }" :href="response.url" target="_blank">
                        {{ response.alt_text }}
                    </a>
                </div>
            </div>
        </div>
    </div>
    <!-- <pre>{{ imageAnalysisResponse }}</pre> -->
  </template>
  
<script setup lang="ts">
    import { computed, defineProps } from 'vue';
    import { useImageAnalysisStore } from '@/stores/imageAnalysisStore';
    import type { ImageAnalysisTypes } from '@/shared/interfaces';

    const props = defineProps({
        inputType: {
            type: String as () => ImageAnalysisTypes,
            required: true,
        },
    });
    const imageAnalysisStore = useImageAnalysisStore();
    const imageAnalysisResponse = computed(() => imageAnalysisStore.imageAnalysisResponse);

    // if the store.imageForm.
</script>