import { create } from 'zustand'

export const useTranslation = create((set) => ({
    transcription: '',
    translated_text: '',
    output_video:'',
    setResponse: (data) => set({transcription: data.transcription, translated_text: data.translated_text, output_video: data.output_video}),
}))