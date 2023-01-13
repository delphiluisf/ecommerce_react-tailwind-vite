import SlideProduct from '@/components/Product/col-images/SlideProduct'

const MainImages = ({ ARRAY_IMGS, ARRAY_IMG_SMALL }) => {
    return (
        <SlideProduct
            ARRAY_IMGS={ARRAY_IMGS}
            ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
        />
    )
}

export default MainImages
