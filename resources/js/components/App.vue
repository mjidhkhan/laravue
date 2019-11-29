<template>
  <div>
    
    <div class=" flex bg-white overflow-hidden  lg:max-w-full bg-gray-100  lg:bg-gray-200">
      <div class="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12 ">
        <div class="xl:max-w-lg xl:ml-auto">
          <img class="h-10" src="/img/logo.svg" alt="Workcation">
          <img class="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-72 sm:w-full sm:object-cover sm:object-center lg:hidden" src="/img/beach-work.jpg" alt="Woman workcationing on the beach">
          <h1 class="mt-6 text-2xl font-bold text-gray-800 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
            You can work from anywhere.
            <br class="hidden lg:inline"><span class="text-indigo-500">Take advantage of it.</span>
          </h1>
          <p class="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
            Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you're not on vacation.
          </p>
          <div class="mt-4 sm:mt-6">
            <a href="#" class="btn btn-indigo shadow-lg sm:text-base">Book your escape</a>
          </div>
        </div>
      </div>
      <div class="hidden lg:block lg:w-1/2 lg:relative sm:bg-gray-100 lg:bg-primary-700 ">
        <img class="absolute inset-0 h-full w-full object-cover object-center" src="/img/beach-work.jpg " alt="Woman workcationing on the beach">
      </div>
    </div>
    <div>
      
      <div class="max-auto ">
        <div class="bg-gray-500 pb-12 ">
          <h2 class="text-xl text-gray-800 px-8">Popular destinations</h2>
          <p class="text-gray-600 px-8">A selection of great work-friendly cities with lots to see and explore.</p>
          
        </div>
        <div class="flex flex-wrap pb-12">
          <div class="mt-6 w-full px-4 lg:w-1/2 xl:w-1/4"  v-for="destination in destinations" :key="destination.id" >
            <DestinationCard :destination="destination"/>
           
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-500 pb-12">
      <h2 class="text-xl text-gray-800 px-8">Rentials</h2>
      <p class="text-gray-600 px-8">Available to rent at any time.</p>
    </div>
    <div class="flex flex-wrap">
      <div class="items-center justify-center mt-6 w-full px-4 lg:w-1/2 xl:w-1/4"  v-for="property in properties" :key="property.id" >
        <PropertyCard :property="property"/>
      </div>
    </div>
  </div>
</template>

<script>
  

  export default {
    name: 'app',
    components: {
      DestinationCard,
      PropertyCard,
    },
    data() {
      return {
        destinations: [
          {
            id: 1,
            city: 'Toronto',
            averagePrice: 120,
            propertyCount: 76,
            imageUrl: '/img/toronto.jpg',
            imageAlt: 'Toronto skyline',
          },
          {
            id: 2,
            city: 'Malibu',
            averagePrice: 215,
            propertyCount: 43,
            imageUrl: '/img/malibu.jpg',
            imageAlt: 'Cliff in Malibu',
          },
          {
            id: 3,
            city: 'Chicago',
            averagePrice: 130,
            propertyCount: 115,
            imageUrl: '/img/chicago.jpg',
            imageAlt: 'Chicago skyline',
          },
          {
            id: 4,
            city: 'Seattle',
            averagePrice: 135,
            propertyCount: 63,
            imageUrl: '/img/seattle.jpg',
            imageAlt: 'Seattle skyline',
          },
          {
            id: 5,
            city: 'Colorado',
            averagePrice: 85,
            propertyCount: 47,
            imageUrl: '/img/colorado.jpg',
            imageAlt: 'Lake in Colorado',
          },
          {
            id: 6,
            city: 'Miami',
            averagePrice: 115,
            propertyCount: 86,
            imageUrl: '/img/miami.jpg',
            imageAlt: 'Beach in Miami',
          },
        ],
        properties: [
          {
            id: 1,
            imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            imageAlt: 'Rear view of modern home with pool',
            beds: 3,
            baths: 2,
            title: "Modern home in city center",
            priceInCents: 190000,
            formattedPrice: "$1,900.00",
            reviewCount: 60,
            rating: 4,
          },
          {
            id: 2,
            imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            imageAlt: 'Rear view of modern home with pool',
            beds: 3,
            baths: 2,
            title: "Modern home in city center",
            priceInCents: 220000,
            formattedPrice: "$2,200.00",
            reviewCount: 80,
            rating: 4,
          },
          {
            id: 3,
            imageUrl: 'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            imageAlt: 'Rear view of modern home with pool',
            beds: 3,
            baths: 2,
            title: "Modern home in country side",
            priceInCents: 130000,
            formattedPrice: "$1,300.00",
            reviewCount: 40,
            rating: 4,
          },
          {
            id: 4,
            imageUrl: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            imageAlt: 'Rear view of modern home with pool',
            beds: 3,
            baths: 2,
            title: "Modern home in natural resort",
            priceInCents: 140000,
            formattedPrice: "$1,300.00",
            reviewCount: 34,
            rating: 3,
          }
        ],
      }
      
    }
 }
</script>