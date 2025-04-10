import { Link, usePage } from "@inertiajs/react"
import { Search, Globe, Users, Calendar, Star } from "lucide-react"
import { hotels, popularDestinations } from "../rentals/hotel"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white font-poppins">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Hotel Room"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.6]"
        />

        {/* Book your Dream Stay Today */}
        <div className="absolute top-[73px] w-full text-center bg-[#0f1923]/80 py-2">
          <p className="text-white text-base font-medium tracking-wide">
            Book your Dream Stay Today! Call Now <span className="font-bold">8121716969</span>
          </p>
        </div>

        {/* Hero Content */}
        <div className="absolute top-1/4 left-0 w-full px-12">
          <h1 className="text-5xl font-bold text-white mb-2 tracking-tight">Experience Luxury &</h1>
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">Comfort</h1>
          <p className="text-xl text-white mb-8 tracking-wide">— Book Your Stay Today!</p>

          {/* Search Form */}
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative border-r border-gray-200">
                <div className="absolute left-3 top-[18px]">
                  <Globe className="h-5 w-5 text-gray-400" />
                </div>
                <p className="pl-10 text-xs text-gray-500 font-medium">Location</p>
                <p className="pl-10 text-gray-800 font-semibold">Jammu & Kashmir</p>
                <p className="text-xs text-gray-500 pl-10">Jammu district</p>
              </div>

              <div className="relative border-r border-gray-200">
                <div className="absolute left-3 top-[18px]">
                  <Users className="h-5 w-5 text-gray-400" />
                </div>
                <p className="pl-10 text-xs text-gray-500 font-medium">Guests</p>
                <p className="pl-10 text-gray-800 font-semibold">3 Person</p>
                <p className="text-xs text-gray-500 pl-10">2 Adults, 1 Child</p>
              </div>

              <div className="relative border-r border-gray-200">
                <div className="absolute left-3 top-[18px]">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <p className="pl-10 text-xs text-gray-500 font-medium">Check-in</p>
                <p className="pl-10 text-gray-800 font-semibold">24 July 2022</p>
                <p className="text-xs text-gray-500 pl-10">Select date</p>
              </div>

              <div className="relative">
                <div className="absolute left-3 top-[18px]">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <p className="pl-10 text-xs text-gray-500 font-medium">Check-out</p>
                <p className="pl-10 text-gray-800 font-semibold">28 July 2022</p>
                <p className="text-xs text-gray-500 pl-10">Select date</p>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <Link href={route('hotel_details_show')}>
                <button className="bg-[#0061ff] hover:bg-blue-700 text-white p-3 rounded-md transition-colors">
                  <Search size={20} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Most Popular Section */}
      <div className="py-16 bg-[#f0f7fa]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#0061ff] font-medium mb-2 text-sm">Top Stays, Unmatched Comfort!</p>
            <h2 className="text-3xl font-bold text-[#006d77]">Most Popular</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {hotels.slice(0, 5).map((hotel) => (
              <Link to={`/hotel-details?id=${hotel.id}`} key={hotel.id} className="group">
                <div className="relative rounded-lg overflow-hidden shadow-lg h-64 group">
                  <img
                    src={hotel.images.main || "/placeholder.svg"}
                    alt={hotel.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-[#0061ff] text-white px-3 py-1 rounded-full text-sm font-bold">
                    ${hotel.price} per night
                  </div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <div className="flex items-center mb-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                      <span className="text-sm">{hotel.rating}</span>
                    </div>
                    <h3 className="text-xl font-bold">{hotel.name}</h3>
                    <p className="text-sm">{hotel.location}</p>
                  </div>
                </div>
              </Link>
            ))}

            <div className="flex justify-center items-center">
              <Link to="/hotel-details">
                <button className="bg-[#0061ff] hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors font-medium">
                  View details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#0061ff] font-medium mb-2 text-sm">Top Stays, Unmatched Comfort!</p>
            <h2 className="text-3xl font-bold text-[#006d77]">Explore stays in popular destinations</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {popularDestinations.map((destination) => (
              <Link to="/hotel-details" key={destination.id} className="group">
                <div className="relative rounded-lg overflow-hidden shadow-md h-64 group">
                  {destination.popular && (
                    <div className="absolute top-3 left-3 bg-[#0061ff] text-white px-3 py-1 rounded-full text-xs z-10 font-medium">
                      Popular Choice
                    </div>
                  )}
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-lg font-bold">{destination.name}</h3>
                    <p className="text-xs">
                      {destination.location}, {destination.hotelCount} hotels
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-[#f0f7fa]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
                  alt="Luxury Experience"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-[#006d77] mb-4">Experience Unparalleled Luxury</h3>
                <p className="text-gray-600 mb-6">
                  Discover handpicked premium accommodations that redefine comfort and elegance. Book your dream stay
                  today and create memories that last a lifetime.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/hotel-details"
                    className="bg-[#0061ff] text-white px-6 py-3 rounded-md font-medium text-center hover:bg-blue-700 transition-colors"
                  >
                    Explore Luxury Stays
                  </Link>
                  <Link
                    to="#"
                    className="border border-[#0061ff] text-[#0061ff] px-6 py-3 rounded-md font-medium text-center hover:bg-blue-50 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
