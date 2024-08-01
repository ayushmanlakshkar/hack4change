import React from 'react';
import { useTranslation } from '../store/store';

function TranslatePage() {
    const {transcription,translated_text,output_video}=useTranslation()




    return (
        <div className='flex flex-1 bg-opacity-60 bg-[#1A1A1A] pb-3 tenor-sans-regular'>
            <div className='w-full flex flex-col justify-evenly py-8'>
                <div className='flex flex-col gap-2 w-1/2 mx-auto'>
                    <div className='text-[#E1C2C3] font-bold text-4xl'>
                        TrancendAI
                    </div>
                    <div className='text-2xl'>
                        Video NLP CC
                    </div>
                </div>
                <div className='flex flex-1 px-8 my-4'>
                    <div className='w-full h-full grid md:grid-cols-2 grid-cols-0 gird-rows-2 '>
                        <div className='flex flex-1 justify-center items-center px-10 flex-col gap-2'>
                            <iframe
                                src='https://www.youtube.com/embed/aYb-JgrDGFA'
                                className="w-full aspect-video rounded-lg"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            ></iframe>
                            <button class="download-btn pixel-corners">
                                <div class="button-content">
                                    <div class="svg-container">
                                        <svg
                                            class="download-icon"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479 6.908l-4-4h3v-4h2v4h3l-4 4z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div class="text-container">
                                        <div class="text">Download Video</div>
                                    </div>
                                </div>
                            </button>

                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className=' flex items-end justify-between'>
                                <div className='sm:text-2xl text-lg font-bold'>
                                    Transcript :
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <label htmlFor='language-select' className='self-start ml-2 sm:text-2xl text-lg'>Language:</label>
                                    <select
                                        id='language-select'
                                        className='ml-2 p-2 bg-[#6C9DFF] border-y-[1px] border-white w-60 '
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Select a language</option>
                                        <option value="en">English</option>
                                        <option value="es">Spanish</option>
                                        <option value="fr">French</option>
                                        <option value="de">German</option>
                                        <option value="zh">Chinese</option>
                                        {/* Add more languages as needed */}
                                    </select>
                                </div>
                            </div>
                            <div className='px-4  py-3 text-lg bg-blue-600 flex flex-1 overflow-y-auto h-full max-h-96 text-left rounded-lg'>
                            Tú recuerdas a tu socio comercial, ¿verdad? Déjame hacer una suposición salvaje aquí. Eres Brett, ¿verdad? Sí, ya lo sabía. Te acuerdas de tu socio comercial, Marcelus Wallace, ¿verdad, Brett? Sí, lo recuerdo. Bueno, parece que yo y Vicente los tenemos ustedes chicos desayunando. Lo siento por eso. ¿Qué tienes? Hamburguesas. Hamburguesas. La piedra angular de todo desayuno nutritivo.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TranslatePage;
