import React from 'react'


const Hero = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D"/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Eduction is the way of key to success!</h1>
      <p className="leading-relaxed mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus veritatis rem, cumque consequatur eveniet at nobis reprehenderit commodi adipisci nostrum reiciendis modi id deleniti odio? Commodi vel dolorum error officia!</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">Sing in</button>
        <button className="ml-4 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Log in</button>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
