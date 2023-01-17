import SlideProduct from '@/components/Product/col-images/SlideProduct'
import { useState } from 'react'

const MainImages = ({ ARRAY_IMGS, ARRAY_IMG_SMALL }) => {
    const [isOpenModal, setIsOpenModal] = useState(false)

    const handledOpenModal = () => {
        window.innerWidth > 767 && setIsOpenModal(true)
    }

    const handledCloseModal = () => setIsOpenModal(false)

    return (
        <>
            <SlideProduct
                ARRAY_IMGS={ARRAY_IMGS}
                ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
                className='grid md:grid-cols-4 md:gap-4'
                handledOpenModal={handledOpenModal}
            />

            {/* Componente Modal */}
            {isOpenModal && (
                <SlideProduct
                    ARRAY_IMGS={ARRAY_IMGS}
                    ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
                    isOpenModal={isOpenModal}
                    className='hidden md:absolute md:top-1/2 md:left-1/2 md:grid md:max-w-md md:-translate-x-1/2 md:-translate-y-1/2 md:grid-cols-4 md:gap-4'
                    handledCloseModal={handledCloseModal}
                />
            )}
        </>
    )
}

export default MainImages
