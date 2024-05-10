const products = [
  {
    id: 1,
    name: '医学模拟系统',
    image: [
      { url: require('../assets/images/show03.png'), alt: 'Image1' },
      { url: require('../assets/images/医学模拟系统/产品01_正面.png'), alt: 'Image2' },
      { url: require('../assets/images/医学模拟系统/产品01_反面.png') }
    ],
    description: ' ',
    pdfUrl: '../assets/pdf/第二版插头布置图和接线方案.pdf',
    videoUrl: '../assets/videos/test01.mp4'
  },
  {
    id: 2,
    name: '四通道低温温控仪',
    image: [
      { url: require('../assets/images/show02.png') },
      { url: require('../assets/images/四通道低温温控仪/产品02后.png') }
    ],
    description: ' ',
    pdfUrl: '../assets/pdf/温控器说明书.pdf'
  },
  {
    id: 3,
    name: '快速检测阵列',
    image: [
      { url: require('../assets/images/快速检测阵列/产品03侧面.jpg') },
      { url: require('../assets/images/快速检测阵列/产品03正面.jpg') },
      { url: require('../assets/images/快速检测阵列/产品03背面.jpg') },
      { url: require('../assets/images/快速检测阵列/产品03电阻.jpg') }
    ],
    description: ' '
  },
  {
    id: 4,
    name: '25通道高压切换阵列',
    image: [
      { url: require('../assets/images/25通道高压切换阵列.jpg') }
    ],
    description: ' '
  },
  {
    id: 5,
    name: '电容检测阵列',
    image: [
      { url: require('../assets/images/电容检测阵列.jpg') }
    ],
    description: ' '
  }
  // 可根据需求添加更多商品
]

export default products
