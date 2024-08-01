import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTranslation } from '../store/store';
import { useNavigate } from 'react-router-dom';


function Main() {
    const navigate = useNavigate();

    const [link, setLink] = useState('');
    const [isValidLink, setIsValidLink] = useState(false);
    const [loading, setLoading] = useState(false);
    const {setResponse}=useTranslation()

    useEffect(() => {
        if (link) {
            // Simple validation for YouTube embedding URLs
            const videoIdMatch = link.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=)?([^"&?\/\s]{11})/);
            const isValid = videoIdMatch !== null;
            setIsValidLink(isValid);
        } else {
            setIsValidLink(false);
        }
    }, [link]);

    const startTranscribing = async() => {
        if (isValidLink) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                navigate('/transcript')
            }, 3000);
            
            // axios.post('/process-video', { link , language:'English' },{ responseType: 'blob' }).then((response) => {
            // const url = URL.createObjectURL(response.data.output_video);
            
            //  setResponse({transcription: response.data.transcription, translated_text: response.data.translated_text, output_video: url})

            // }).catch((error) => {
            // })
        }
    };

    return (
        <div className='flex flex-1 bg-opacity-70 bg-[#1A1A1A] pb-3 tenor-sans-regular'>
            <div className='w-full flex flex-col justify-evenly'>
                <div className='flex flex-col gap-2 w-1/2 mx-auto my-3'>
                    <div className='text-[#E1C2C3] font-bold text-6xl tenor-sans-regular'>
                        TrancendAI
                    </div>
                    <div className='text-4xl tenor-sans-regular'>
                        Video NLP CC
                    </div>
                    <div className='text-xl tenor-sans-regular'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae error quidem cupiditate, expedita enim accusantium excepturi commodi molestias nihil culpa? Dolorem vero incidunt voluptatum, ab esse autem debitis harum expedita dicta necessitatibus nihil perferendis, quaerat dignissimos laboriosam excepturi corporis minima. Ea, incidunt illum quae atque nam sapiente sed dolorum.
                    </div>
                </div>
                <div className='w-full md:w-1/2 md:mx-auto'>
                    <div className='flex w-full'>
                        <div className='gap-3 md:bg-[#E1E4F5] flex flex-col md:flex-row mx-12 w-full rounded-full justify-center'>
                            <input
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                                placeholder='Paste your link here ...'
                                className='bg-[#E1E4F5] min-h-10 flex-1 flex rounded-full focus:outline-none px-4 py-2 text-black font-normal text-xl'
                            />
                            <button
                                onClick={startTranscribing}
                                className="w-fit mx-auto bg-gradient-to-l from-blue-700 to-blue-500 text-white text-xl font-bold py-2 px-4 rounded-full"
                            >
                                Generate Transcript
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-full mt-3'>
                    <div className='md:mx-28 flex justify-center'>
                        <div>
                            {loading ? (
                                <div className="text-gray-500 text-3xl  flex flex-col ">
                                    <div>
                                        Translating Your Video
                                        </div>
                                <div className="loader mx-auto mt-3">
                                    <span class="bar"></span>
                                    <span class="bar"></span>
                                    <span class="bar"></span>
                                </div>
                                </div>
                            ) : (
                                <>
                                    {link ? (
                                        isValidLink ? (
                                            <iframe
                                                src={`https://www.youtube.com/embed/${link.split('v=')[1].split('&')[0]}`}
                                                className="h-36 sm:h-60 md:h-80 aspect-video rounded-lg"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            ></iframe>
                                        ) : (
                                            <div className="text-red-500 text-2xl ">Invalid link</div>
                                        )
                                    ) : (
                                        <div className="text-gray-500 text-2xl ">Please enter a link URL</div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
