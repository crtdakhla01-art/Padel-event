import collageImage1 from '../assets/images/home_image_1.png'
import collageImage2 from '../assets/images/home_image_2.png'
import collageImage3 from '../assets/images/img_3.png'
import collageImage4 from '../assets/images/img_4.png'
import collageImage5 from '../assets/images/img_5.png'

export const mockupItems = [
  {
    id: 'page-intro',
    image: collageImage4,
    zIndex: 4,
    rotation: '-1.5deg',
    type: 'page',
  },
  {
    id: 'hero-center',
    image: collageImage1,
    zIndex: 10,
    rotation: '0deg',
    type: 'hero',
  },
  {
    id: 'page-destination',
    image: collageImage2,
    zIndex: 6,
    rotation: '1deg',
    type: 'page',
  },
  {
    id: 'photo-bottom-left',
    image: collageImage3,
    zIndex: 5,
    rotation: '-0.8deg',
    type: 'photo',
  },
  {
    id: 'photo-bottom-right',
    image: collageImage5,
    zIndex: 7,
    rotation: '0.8deg',
    type: 'photo',
  },
]