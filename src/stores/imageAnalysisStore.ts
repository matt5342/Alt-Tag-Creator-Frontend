// In your Pinia store
import { defineStore } from 'pinia';
import type { ImageForm, ImageAnalysisResult } from '../shared/interfaces';
import { ImageAnalysisTypes } from '../shared/interfaces';
import apiService from '../services/ApiService';

export const useImageAnalysisStore = defineStore({
	id: 'imageAnalysis',
	state: () => ({
		imageAnalysisResponseInternal: [] as ImageAnalysisResult[],
		isLoadingAnalysisInternal: false,
		imageFormInternal: {
			inputType: ImageAnalysisTypes.url,
			imageUrl: '',
			inputText: '',
			htmlFile: null,
		} as ImageForm,
	}),
	getters: { 
		imageAnalysisResponse: (state) => {
			return state.imageAnalysisResponseInternal as ImageAnalysisResult[];
		},
		isLoadingAnalysis: (state) => {
			return state.isLoadingAnalysisInternal;
		},
		imageForm: (state) => {
			return state.imageFormInternal;
		},

	},
	actions: {
		submitImageForm(formData: FormData) {
			this.isLoadingAnalysisInternal = true;
			apiService.postFormDataAsync('/api/upload_image_api', formData)
					.then((response) => {
						console.log("response", response);
						const data: ImageAnalysisResult[] = response as ImageAnalysisResult[]; 
						this.imageAnalysisResponseInternal = data;
						this.isLoadingAnalysisInternal = false;
					});
		},
	},
});

