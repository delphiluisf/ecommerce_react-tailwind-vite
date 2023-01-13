import DetailsProduct from '@/components/Product/col-details/DetailsProduct'
import MainImages from '@/components/Product/col-images/MainImages'

import ImgProduct1 from '@/assets/images/image-product-1.jpg'
import ImgProduct2 from '@/assets/images/image-product-2.jpg'
import ImgProduct3 from '@/assets/images/image-product-3.jpg'
import ImgProduct4 from '@/assets/images/image-product-4.jpg'

import ImgProductSmall1 from '@/assets/images/image-product-1-thumbnail.jpg'
import ImgProductSmall2 from '@/assets/images/image-product-2-thumbnail.jpg'
import ImgProductSmall3 from '@/assets/images/image-product-3-thumbnail.jpg'
import ImgProductSmall4 from '@/assets/images/image-product-4-thumbnail.jpg'

const ARRAY_IMGS = [ImgProduct1, ImgProduct2, ImgProduct3, ImgProduct4]
const ARRAY_IMG_SMALL = [
    ImgProductSmall1,
    ImgProductSmall2,
    ImgProductSmall3,
    ImgProductSmall4,
]

export const MainProduct = () => {
    return (
        <main className='grid grid-cols-1 items-center gap-8 md:container md:mx-auto md:min-h-[calc(100vh-88px-3px)] md:grid-cols-2'>
            <MainImages
                ARRAY_IMGS={ARRAY_IMGS}
                ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
            />
            <DetailsProduct />
        </main>
    )
}
