import SlideProduct from '@/components/Product/col-images/SlideProduct'
import { useState } from 'react'

const MainImages = ({ ARRAY_IMGS, ARRAY_IMG_SMALL }) => {

    const [isOpenModal, setIsOpenModal] = useState(false)

    const handledOpenModal = () => {
        setIsOpenModal(true)
    }


    return (
        <>
        <SlideProduct
            ARRAY_IMGS={ARRAY_IMGS}
            ARRAY_IMG_SMALL={ARRAY_IMG_SMALL} 
            className='grid md:grid-cols-4 md:gap-4'
            onClick={handledOpenModal }
        />

        {/* Componente Modal */}
        {isOpenModal && (
            <SlideProduct
                ARRAY_IMGS={ARRAY_IMGS}
                ARRAY_IMG_SMALL={ARRAY_IMG_SMALL} 
                isOpenModal = {isOpenModal}
                className='grid md:grid-cols-4 md:gap-4 md:absolute md:top-1/2 md:left-1/2 md:max-w-md -translate-x-1/2 -translate-y-1/2'

            />

        )}
        </>
    )
}

export default MainImages
