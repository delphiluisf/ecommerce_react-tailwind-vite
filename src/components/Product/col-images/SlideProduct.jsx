import { useState } from 'react'

import PrevIcon from '@/components/Icons/PrevIcon'
import NextIcon from '@/components/Icons/NextIcon'

const SlideProduct = ({ 
    ARRAY_IMGS = [], 
    ARRAY_IMG_SMALL = [], 
    isOpenModal = false, 
    ...props }) => {
    const [index, setIndex] = useState(0)

    const handleClickNext = () => {
        index === ARRAY_IMGS.length - 1 ? setIndex(0) : setIndex(index + 1)
    }
    const handleClickPrev = () => {
        index === 0 ? setIndex(ARRAY_IMGS.length - 1) : setIndex(index - 1)
    }

    return (
        <section  {...props}>
            {
                isOpenModal && <button>Cerrar</button>
            }
            <div className='relative col-span-4'>
                <img
                    src={ARRAY_IMGS[index]}
                    alt=''
                    className='aspect-[16/13] w-full md:aspect-[16/18] md:rounded-md'
                />
                <div className='absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-4'>
                    <button
                        className='grid h-10 w-10 place-items-center rounded-full bg-white'
                        onClick={handleClickPrev}
                    >
                        <PrevIcon />
                    </button>
                    <button
                        className='grid h-10 w-10 place-items-center rounded-full bg-white'
                        onClick={handleClickNext}
                    >
                        <NextIcon />
                    </button>
                </div>
            </div>
            {ARRAY_IMG_SMALL.map((smallImg) => (
                <img
                    key={smallImg}
                    src={smallImg}
                    alt=''
                    className='hidden md:block md:rounded-md'
                />
            ))}
           
        </section>
    )
}

export default SlideProduct
