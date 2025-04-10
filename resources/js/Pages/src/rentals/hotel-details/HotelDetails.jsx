import { Link, useLocation } from "react-router-dom"
import { Star, MapPin, Wifi, Users, Utensils, Tv, Bath } from "lucide-react"
import { hotels, hotelDetails as defaultHotelDetails } from "../hotel"

export default function HotelDetails() {
  // Get the id from URL query parameters
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const id = searchParams.get("id") || "hotel-1"

  // In a real app, we would fetch the hotel details based on the ID
  // For now, we'll use our static data
  const hotel = defaultHotelDetails

  // Find the hotel from our data
  const selectedHotel = hotels.find((h) => h.id === id) || hotels[0]

  return (
    <main className="min-h-screen bg-white font-poppins">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center text-sm">
          <Link to="/" className="text-gray-800 hover:text-blue-600 font-medium">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-800 font-medium">Hotel Details</span>
        </div>
      </div>

      {/* Title Section */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#006d77] tracking-tight">{selectedHotel.name}</h1>
            <div className="flex items-center mt-2">
              <MapPin className="h-4 w-4 text-gray-500 mr-1" />
              <p className="text-gray-600">{selectedHotel.location}</p>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex items-center">
            <div className="flex items-center mr-4">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 mr-1" />
              <span className="font-semibold">{selectedHotel.rating}</span>
              <span className="text-gray-500 ml-1">({selectedHotel.reviewCount} reviews)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hotel Images */}
      <div className="container mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-6 rounded-xl overflow-hidden h-96 shadow-lg">
            <img
              src={selectedHotel.images.main || "/placeholder.svg"}
              alt={selectedHotel.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-6 flex flex-col gap-4">
            {selectedHotel.images.gallery.map((img, index) => (
              <div key={index} className="rounded-xl overflow-hidden h-[11.5rem] shadow-lg">
                <img
                  src={img || "/placeholder.svg"}
                  alt={`${selectedHotel.name} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hotel Information */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-[#006d77] mb-6 tracking-tight">About the place</h2>
            <p className="text-gray-800 mb-4 text-base leading-relaxed">{selectedHotel.description}</p>

            <div className="flex items-center text-gray-800 text-sm mb-10 bg-blue-50 p-4 rounded-xl">
              <MapPin className="h-5 w-5 text-blue-600 mr-2" />
              <span className="font-medium">{hotel.address}</span>
            </div>

            {/* Amenities */}
            <h3 className="text-xl font-bold text-[#006d77] mb-6 tracking-tight">Amenities</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {hotel.amenities.map((amenity, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-14 h-14 flex items-center justify-center text-blue-600 mb-3 bg-blue-50 rounded-full">
                    {amenity.icon === "bed" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 3h20v10H2z" />
                        <path d="M2 17h20v4H2z" />
                      </svg>
                    )}
                    {amenity.icon === "layout" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M7 7v10" />
                        <path d="M17 7v10" />
                        <path d="M3 12h18" />
                      </svg>
                    )}
                    {amenity.icon === "bath" && <Bath size={24} />}
                    {amenity.icon === "utensils" && <Utensils size={24} />}
                    {amenity.icon === "wifi" && <Wifi size={24} />}
                    {amenity.icon === "grid" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                        <line x1="3" x2="21" y1="9" y2="9" />
                        <line x1="3" x2="21" y1="15" y2="15" />
                        <line x1="9" x2="9" y1="3" y2="21" />
                        <line x1="15" x2="15" y1="3" y2="21" />
                      </svg>
                    )}
                    {amenity.icon === "refrigerator" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" />
                        <path d="M5 10h14" />
                      </svg>
                    )}
                    {amenity.icon === "tv" && <Tv size={24} />}
                  </div>
                  <span className="text-gray-800 text-sm font-medium">{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Section */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-xl font-bold mb-6 text-gray-900 tracking-tight">Start Booking</h2>
            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl font-bold text-[#0061ff]">${selectedHotel.price}</span>
              <span className="text-gray-600 font-medium">per Day</span>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Select Dates</h3>
              <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                <div className="text-sm">
                  <p className="text-gray-500">Check-in</p>
                  <p className="font-medium text-gray-900">24 Jul 2022</p>
                </div>
                <div className="h-8 w-px bg-gray-300"></div>
                <div className="text-sm">
                  <p className="text-gray-500">Check-out</p>
                  <p className="font-medium text-gray-900">28 Jul 2022</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Guests</h3>
              <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                <div className="text-sm">
                  <p className="font-medium text-gray-900">2 Adults, 1 Child</p>
                </div>
                <Users size={18} className="text-gray-500" />
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">${selectedHotel.price} x 4 nights</span>
                <span className="font-medium">${selectedHotel.price * 4}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Service fee</span>
                <span className="font-medium">$50</span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-4">
                <span>Total</span>
                <span className="text-[#0061ff]">${selectedHotel.price * 4 + 50}</span>
              </div>
            </div>

            <Link
              to={`/booking?id=${selectedHotel.id}`}
              className="block w-full bg-[#0061ff] text-white text-center py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Book Now!
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
