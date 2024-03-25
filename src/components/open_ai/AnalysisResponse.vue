<template>
    <div class="col-md-12">
        <h2 class="text-center">Image Analysis Results</h2>
            <div class="card mt-4">
                <div class="card-body" >
                    <div v-if="imageAnalysisStore.imageForm.inputType === 'url'">
                        <div v-for="(response, i) in imageAnalysisResponse" :key="i">
                            <div v-if="response.error_message" class="alert alert-danger" role="alert">
                                {{ response.error_message }}
                            </div>
                            <div v-else>
                                {{ response }}
                                <a v-tooltip="{ title: `<img src='${response.url}' class='img-thumbnail' />`, html: true }" :href="response.url" target="_blank">
                                    {{ response.alt_text }}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="imageAnalysisStore.imageForm.inputType === 'text'">
                        <template v-for="(piece, index) in textPieces" :key="index">
                            <a v-if="('url' in piece) && piece.url" 
                                v-tooltip="{ title: `<img src='${piece.url}' class='img-thumbnail' />`, html: true }" 
                                :href="piece.url" target="_blank"
                                :style="{ color: piece.error_message ? 'red' : '' }">
                                {{ piece.error_message ? piece.error_message : piece.alt_text }}
                            </a>
                            <span v-else v-html="piece.alt_text"></span>
                        </template>
                        <!-- <div v-html="replaceUrlsWithAlts()"></div>
                        {{ replaceUrlsWithAlts() }} -->
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
    import type { ImageAnalysisResult } from '@/shared/interfaces';
    import DOMPurify from 'dompurify';

    const imageAnalysisStore = useImageAnalysisStore();
    const imageAnalysisResponse = computed(() => imageAnalysisStore.imageAnalysisResponse);
    const imageForm = imageAnalysisStore.imageForm;

    const textPieces = computed(() => {
        const urlToAltText: { [key: string]: ImageAnalysisResult } = {};
        imageAnalysisStore.imageAnalysisResponse.forEach(item => {
            urlToAltText[item.url] = item;
        });

        const sanitizedInputText = DOMPurify.sanitize(imageForm.inputText);
        // Split the input text on spaces, line breaks, tabs, or non-breaking spaces. Preserve them in the output so they appear the same in the html.
        return sanitizedInputText.split(/( |\n|\t|\u00A0)/).map(word => {
            if (urlToAltText[word]) {
                return urlToAltText[word];
            }

            let alt_text;
            switch (word) {
                case '\n':
                    alt_text = '<br />';
                    break;
                case '\t':
                    alt_text = '&emsp;';
                    break;
                default:
                    alt_text = word;
                    break;
            }

            return { alt_text };
        });
    });
</script>