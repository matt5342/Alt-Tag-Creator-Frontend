// interfaces.ts
export interface ImageForm {
    inputType: ImageAnalysisTypes;
    imageUrl: string;
    inputText: string;
    htmlFile: File | null;
}

export interface ImageAnalysisResult {
  alt_text: string;
  url: string;
  error_message?: string;
}

export interface ImageAnalysisResponse {
  response: ImageAnalysisResult[];
}

interface Message {
  role: string;
  content: string;
}

interface Choice {
  message: Message;
  finish_reason: string;
  index: number;
}

interface Usage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}

export interface RawImageAnalysisResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  usage: Usage;
  choices: Choice[];
}

// add an enum for the different types of image analysis
export enum ImageAnalysisTypes {
  url = "url",
  text = "text",
  file = "file",
}
