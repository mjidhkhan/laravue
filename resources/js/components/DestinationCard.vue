<template>
  <div class="flex items-center rounded-lg bg-white shadow-lg overflow-hidden ">
    <img class="h-32 w-32 md:object-cover md:object-center flex-shrink-0 h-full" :src="destination.imageUrl" :alt="destination.imageAlt">
    <div class="px-6 py-4">
      <h3 class="text-lg font-semibold text-gray-800">{{ destination.city }} </h3>
      <p class="text-gray-600">${{ destination.averagePrice }} / night average</p>
      <div class="mt-4">
        <a href="#" class="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">Explore {{ destination.propertyCount }} properties</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
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

