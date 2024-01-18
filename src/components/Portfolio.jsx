import React from 'react'

const Portfolio = () => {

const projects = [
    {id : 1,
    link: 'https://github.com/',
    imgLink : 'https://picsum.photos/400/400',
    text1 :'Des cadeaux incroyables prêts à être utilisés dans votre prochain projet',
    text2 : 'Lorem, ipsum dolor sit amet'
    },
    {id : 2,
        link: 'https://github.com/',
        imgLink : 'https://picsum.photos/400/400',
        text1 :'Des cadeaux incroyables prêts à être utilisés dans votre prochain projet',
        text2 : 'Lorem, ipsum dolor sit amet'
    },
    {id : 3,
        link: 'https://github.com/',
        imgLink : 'https://picsum.photos/400/400',
        text1 :'Des cadeaux incroyables prêts à être utilisés dans votre prochain projet',
        text2 : 'Lorem, ipsum dolor sit amet'
    },
]

  return (
<div name="portfolio" class="bg-gradient-to-b from bg-gray-800 to via-black to-black w-full md:h-screen">
  <div class="mx-auto max-w-screen-xl px-4 w-full mt-[-340px] md:mt-[-450px]">
    <h2 class="mb-7 font-bold text-5xl text-gray-600 text-center">Portfolio</h2>
    <div class="grid w-full sm:grid-cols-2 xl:grid-cols-3 gap-6 ml-8 md:ml-0">

        {projects.map(({id,link,imgLink,text1,text2}) => (

      <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:scale-105 duration-300 active:scale-95 max-w-sm">
        <a href={link} class="z-20 absolute h-full w-full top-0 left-0 " target="_blank" rel="noreferrer">&nbsp;</a>
        <div class="h-auto overflow-hidden">
          <div class="h-44 overflow-hidden relative">
            <img src={imgLink} alt="" />
          </div>
        </div>
        <div class="bg-white py-4 px-3">
          <h3 class=" text-2xl mb-2 font-medium">{text1}</h3>
          <div class="flex justify-between items-center">
            <p class="text-xs text-gray-400">
            {text2}
          </p>
        
          </div>
        </div>
      </div>

        ))};



    </div>
  </div>
</div>
  )
}

export default Portfolio