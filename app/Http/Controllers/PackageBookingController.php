<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class PackageBookingController extends Controller
{

    private $booking_data = [
        [ 
           "id" =>1,
           "departure"=> "Miami",
           "destination"=> "Florida",
           "duration"=> "2N/3D",
           "embarkation"=> "Jan 13th, 4=>30 PM",
           "disembarkation"=> "Jan 15th, 7=>30 PM",
           "ports"=> ["Miami", "Florida"],
           "price"=> 200,
           "days"=> [
            [
               "dayNumber"=> 1,
               "title"=> "Miami Port",
               "subtitle"=> "WELCOME ONBOARD",
               "description"=> "Step aboard the Empress—India's top cruise, known as 'A City on the Sea.' Enjoy a warm welcome and explore the ship’s offerings."
             ],
            [
               "dayNumber"=> 2,
               "title"=> "At Sea",
               "subtitle"=> "DAY AT SEA",
               "description"=> "Relax with luxurious amenities and stunning ocean views as you sail."
             ],
            [
               "dayNumber"=> 3,
               "title"=> "Florida Port",
               "subtitle"=> "ARRIVED IN FLORIDA",
               "description"=> "Dock at Florida Port and discover beautiful beaches and vibrant culture."
             ]
           ]
         ],
        [
           "id" =>2,
           "departure"=> "New York",
           "destination"=> "Bahamas",
           "duration"=> "4N/5D",
           "embarkation"=> "Feb 1st, 6=>00 PM",
           "disembarkation"=> "Feb 5th, 8=>00 AM",
           "ports"=> ["New York", "Nassau", "Freeport"],
           "price"=> 450,
           "days"=> [
            [
               "dayNumber"=> 1,
               "title"=> "New York Harbor",
               "subtitle"=> "SET SAIL",
               "description"=> "Board the Voyager and enjoy a scenic departure from New York Harbor."
             ],
            [
               "dayNumber"=> 2,
               "title"=> "At Sea",
               "subtitle"=> "OCEAN DAY",
               "description"=> "Indulge in onboard entertainment and gourmet dining."
             ],
            [
               "dayNumber"=> 3,
               "title"=> "Nassau",
               "subtitle"=> "BAHAMIAN ADVENTURE",
               "description"=> "Explore Nassau’s markets, beaches, and historic sites."
             ],
            [
               "dayNumber"=> 4,
               "title"=> "Freeport",
               "subtitle"=> "ISLAND STOP",
               "description"=> "Visit Freeport for shopping and water activities."
             ],
            [
               "dayNumber"=> 5,
               "title"=> "Return to New York",
               "subtitle"=> "DISEMBARK",
               "description"=> "Arrive back in New York with memories of the Bahamas."
             ]
           ]
         ],
        [
           "id" =>3,
           "departure"=> "Los Angeles",
           "destination"=> "Mexico",
           "duration"=> "3N/4D",
           "embarkation"=> "Mar 10th, 5=>00 PM",
           "disembarkation"=> "Mar 13th, 9=>00 AM",
           "ports"=> ["Los Angeles", "Ensenada"],
           "price"=> 300,
           "days"=> [
            [
               "dayNumber"=> 1,
               "title"=> "Los Angeles Port",
               "subtitle"=> "BOARDING DAY",
               "description"=> "Embark on the Pacific Star and enjoy a sunset departure."
             ],
            [
               "dayNumber"=> 2,
               "title"=> "At Sea",
               "subtitle"=> "CRUISING",
               "description"=> "Spend the day relaxing by the pool or at the spa."
             ],
            [
               "dayNumber"=> 3,
               "title"=> "Ensenada",
               "subtitle"=> "MEXICAN GETAWAY",
               "description"=> "Explore Ensenada’s wineries and coastal beauty."
             ],
            [
               "dayNumber"=> 4,
               "title"=> "Return to LA",
               "subtitle"=> "HOMEWARD",
               "description"=> "Disembark in Los Angeles after a refreshing trip."
             ]
           ]
         ],
        [
           "id" =>4,
           "departure"=> "Seattle",
           "destination"=> "Alaska",
           "duration"=> "7N/8D",
           "embarkation"=> "Jun 15th, 3=>00 PM",
           "disembarkation"=> "Jun 22nd, 7=>00 AM",
           "ports"=> ["Seattle", "Juneau", "Skagway", "Ketchikan"],
           "price"=> 900,
           "days"=> [
            [
               "dayNumber"=> 1,
               "title"=> "Seattle Departure",
               "subtitle"=> "START OF ADVENTURE",
               "description"=> "Board the Glacier Queen and set sail from Seattle."
             ],
            [
               "dayNumber"=> 2,
               "title"=> "At Sea",
               "subtitle"=> "SCENIC CRUISING",
               "description"=> "Enjoy views of the Pacific Northwest coastline."
             ],
            [
               "dayNumber"=> 3,
               "title"=> "Juneau",
               "subtitle"=> "CAPITAL VISIT",
               "description"=> "Explore Alaska’s capital and its natural wonders."
             ],
            [
               "dayNumber"=> 4,
               "title"=> "Skagway",
               "subtitle"=> "GOLD RUSH TOWN",
               "description"=> "Step back in time in historic Skagway."
             ],
            [
               "dayNumber"=> 5,
               "title"=> "Ketchikan",
               "subtitle"=> "SALMON CAPITAL",
               "description"=> "Visit Ketchikan for fishing and totem poles."
             ],
            [
               "dayNumber"=> 6,
               "title"=> "At Sea",
               "subtitle"=> "RELAXATION DAY",
               "description"=> "Unwind with onboard activities."
             ],
            [
               "dayNumber"=> 7,
               "title"=> "Return Journey",
               "subtitle"=> "FINAL CRUISE",
               "description"=> "Sail back to Seattle with stunning views."
             ],
            [
               "dayNumber"=> 8,
               "title"=> "Seattle Arrival",
               "subtitle"=> "DISEMBARK",
               "description"=> "Return to Seattle with unforgettable memories."
             ]
           ]
         ],
        [ "id" =>5,
           "departure"=> "Barcelona",
           "destination"=> "Mediterranean",
           "duration"=> "5N/6D",
           "embarkation"=> "Jul 20th, 6=>30 PM",
           "disembarkation"=> "Jul 25th, 8=>30 AM",
           "ports"=> ["Barcelona", "Marseille", "Rome"],
           "price"=> 700,
           "days"=> [
            [
               "dayNumber"=> 1,
               "title"=> "Barcelona Port",
               "subtitle"=> "WELCOME ABOARD",
               "description"=> "Board the Mediterranean Dream and enjoy a festive start."
             ],
            [
               "dayNumber"=> 2,
               "title"=> "At Sea",
               "subtitle"=> "SEA DAY",
               "description"=> "Relax with panoramic views of the Mediterranean."
             ],
            [
               "dayNumber"=> 3,
               "title"=> "Marseille",
               "subtitle"=> "FRENCH RIVIERA",
               "description"=> "Discover Marseille’s charm and cuisine."
             ],
            [
               "dayNumber"=> 4,
               "title"=> "Rome",
               "subtitle"=> "ETERNAL CITY",
               "description"=> "Explore Rome’s iconic landmarks and history."
             ],
            [
               "dayNumber"=> 5,
               "title"=> "At Sea",
               "subtitle"=> "RETURN CRUISE",
               "description"=> "Enjoy the ship’s amenities on the way back."
             ],
            [
               "dayNumber"=> 6,
               "title"=> "Barcelona Return",
               "subtitle"=> "FAREWELL",
               "description"=> "Disembark in Barcelona after an amazing journey."
             ]
           ]
         ],
        [ 
           "id" =>6,
           "departure"=> "Sydney",
           "destination"=> "New Zealand",
           "duration"=> "6N/7D",
           "embarkation"=> "Aug 5th, 5=>00 PM",
           "disembarkation"=> "Aug 11th, 7=>00 AM",
           "ports"=> ["Sydney", "Auckland", "Wellington"],
           "price"=> 850,
           "days"=> [
            [
               "dayNumber"=> 1,
               "title"=> "Sydney Harbor",
               "subtitle"=> "DEPARTURE",
               "description"=> "Set sail from Sydney aboard the Southern Star."
             ],
            [
               "dayNumber"=> 2,
               "title"=> "At Sea",
               "subtitle"=> "OCEAN CROSSING",
               "description"=> "Enjoy a day of relaxation and onboard fun."
             ],
            [
               "dayNumber"=> 3,
               "title"=> "Auckland",
               "subtitle"=> "KIWI WELCOME",
               "description"=> "Explore Auckland’s skyline and Maori culture."
             ],
            [
               "dayNumber"=> 4,
               "title"=> "Wellington",
               "subtitle"=> "CAPITAL STOP",
               "description"=> "Visit Wellington’s museums and scenic waterfront."
             ],
            [
               "dayNumber"=> 5,
               "title"=> "At Sea",
               "subtitle"=> "CRUISING BACK",
               "description"=> "Savor the ship’s dining and entertainment."
             ],
            [
               "dayNumber"=> 6,
               "title"=> "At Sea",
               "subtitle"=> "FINAL SEA DAY",
               "description"=> "Reflect on your journey with ocean views."
             ],
            [
               "dayNumber"=> 7,
               "title"=> "Sydney Return",
               "subtitle"=> "DISEMBARK",
               "description"=> "Arrive back in Sydney with great memories."
             ]
           ]
         ],
        [ "id" =>7,
           "departure"=> "Hawaii",
           "destination"=> "Hawaiian Islands",
           "duration"=> "4N/5D",
           "embarkation"=> "Sep 12th, 4=>00 PM",
           "disembarkation"=> "Sep 16th, 8=>00 AM",
           "ports"=> ["Honolulu", "Maui", "Kauai"],
           "price"=> 600,
           "days"=> [
            [
               "dayNumber"=> 1,
               "title"=> "Honolulu",
               "subtitle"=> "ALOHA",
               "description"=> "Board the Island Breeze in Honolulu and enjoy a luau."
             ],
            [
               "dayNumber"=> 2,
               "title"=> "Maui",
               "subtitle"=> "PARADISE STOP",
               "description"=> "Visit Maui’s beaches and volcanic landscapes."
             ],
            [
               "dayNumber"=> 3,
               "title"=> "Kauai",
               "subtitle"=> "GARDEN ISLE",
               "description"=> "Explore Kauai’s lush greenery and waterfalls."
             ],
            [
               "dayNumber"=> 4,
               "title"=> "At Sea",
               "subtitle"=> "RELAXATION",
               "description"=> "Enjoy a day of leisure on the ship."
             ],
            [
               "dayNumber"=> 5,
               "title"=> "Honolulu Return",
               "subtitle"=> "FAREWELL",
               "description"=> "Disembark in Honolulu with island memories."
             ]
           ]
         ],
        [
           "id" =>8,
           "departure"=> "Singapore",
           "destination"=> "Malaysia",
           "duration"=> "3N/4D",
           "embarkation"=> "Oct 8th, 6=>00 PM",
           "disembarkation"=> "Oct 11th, 9=>00 AM",
           "ports"=> ["Singapore", "Penang"],
           "price"=> 350,
           "days"=> [
            [
               "dayNumber"=> 1,
               "title"=> "Singapore Port",
               "subtitle"=> "SET SAIL",
               "description"=> "Embark on the Asia Pearl from Singapore’s vibrant port."
             ],
            [
               "dayNumber"=> 2,
               "title"=> "At Sea",
               "subtitle"=> "SEA DAY",
               "description"=> "Relax with stunning views of the South China Sea."
             ],
            [
               "dayNumber"=> 3,
               "title"=> "Penang",
               "subtitle"=> "MALAYSIAN STOP",
               "description"=> "Explore Penang’s street food and colonial charm."
             ],
            [
               "dayNumber"=> 4,
               "title"=> "Singapore Return",
               "subtitle"=> "DISEMBARK",
               "description"=> "Return to Singapore after a delightful cruise."
             ]
           ]
         ],
        [ "id" =>9,
           "departure"=> "Cape Town",
           "destination"=> "South Africa Coast",
           "duration"=> "5N/6D",
           "embarkation"=> "Nov 15th, 5=>30 PM",
           "disembarkation"=> "Nov 20th, 7=>30 AM",
           "ports"=> ["Cape Town", "Port Elizabeth", "Durban"],
           "price"=> 650,
           "days"=> [
            [
               "dayNumber"=> 1,
               "title"=> "Cape Town",
               "subtitle"=> "WELCOME",
               "description"=> "Board the African Sun and enjoy a scenic departure."
             ],
            [
               "dayNumber"=> 2,
               "title"=> "At Sea",
               "subtitle"=> "OCEAN DAY",
               "description"=> "Relax with views of the Indian Ocean."
             ],
            [
               "dayNumber"=> 3,
               "title"=> "Port Elizabeth",
               "subtitle"=> "COASTAL STOP",
               "description"=> "Explore Port Elizabeth’s beaches and wildlife."
             ],
            [
               "dayNumber"=> 4,
               "title"=> "Durban",
               "subtitle"=> "CITY VISIT",
               "description"=> "Discover Durban’s vibrant culture and markets."
             ],
            [
               "dayNumber"=> 5,
               "title"=> "At Sea",
               "subtitle"=> "RETURN JOURNEY",
               "description"=> "Enjoy the ship’s amenities on the way back."
             ],
            [
               "dayNumber"=> 6,
               "title"=> "Cape Town Return",
               "subtitle"=> "DISEMBARK",
               "description"=> "Arrive back in Cape Town with great memories."
             ]
           ]
         ],
        ["id" =>10,
           "departure"=> "Tokyo",
           "destination"=> "Japan Coast",
           "duration"=> "4N/5D",
           "embarkation"=> "Dec 1st, 6=>00 PM",
           "disembarkation"=> "Dec 5th, 8=>00 AM",
           "ports"=> ["Tokyo", "Osaka", "Kobe"],
           "price"=> 550,
           "days"=> [
            [
               "dayNumber"=> 1,
               "title"=> "Tokyo Port",
               "subtitle"=> "KONNICHIWA",
               "description"=> "Board the Sakura Wave and enjoy Tokyo’s skyline."
             ],
            [
               "dayNumber"=> 2,
               "title"=> "At Sea",
               "subtitle"=> "SEA DAY",
               "description"=> "Relax with views of the Pacific Ocean."
             ],
            [
               "dayNumber"=> 3,
               "title"=> "Osaka",
               "subtitle"=> "CULTURAL STOP",
               "description"=> "Explore Osaka’s food scene and castles."
             ],
            [
               "dayNumber"=> 4,
               "title"=> "Kobe",
               "subtitle"=> "PORT VISIT",
               "description"=> "Visit Kobe for its famous beef and harbor views."
             ],
            [
               "dayNumber"=> 5,
               "title"=> "Tokyo Return",
               "subtitle"=> "SAYONARA",
               "description"=> "Disembark in Tokyo with unforgettable memories."
             ]
           ]
         ],
        ["id" =>11,
           "departure"=> "Miami",
           "destination"=> "Caribbean",
           "duration"=> "5N/6D",
           "embarkation"=> "Jan 20th, 5=>00 PM",
           "disembarkation"=> "Jan 25th, 8=>00 AM",
           "ports"=> ["Miami", "Cozumel", "Grand Cayman"],
           "price"=> 700,
           "days"=> [
            [
               "dayNumber"=> 1,
               "title"=> "Miami Departure",
               "subtitle"=> "WELCOME",
               "description"=> "Set sail from Miami on the Caribbean Jewel."
             ],
            [
               "dayNumber"=> 2,
               "title"=> "At Sea",
               "subtitle"=> "CRUISING",
               "description"=> "Enjoy a day of sun and sea onboard."
             ],
            [
               "dayNumber"=> 3,
               "title"=> "Cozumel",
               "subtitle"=> "MEXICAN ISLAND",
               "description"=> "Explore Cozumel’s reefs and Mayan ruins."
             ],
            [
               "dayNumber"=> 4,
               "title"=> "Grand Cayman",
               "subtitle"=> "TROPICAL STOP",
               "description"=> "Visit Grand Cayman for beaches and stingray encounters."
             ],
            [
               "dayNumber"=> 5,
               "title"=> "At Sea",
               "subtitle"=> "RETURN",
               "description"=> "Relax as you sail back to Miami."
             ],
            [
               "dayNumber"=> 6,
               "title"=> "Miami Return",
               "subtitle"=> "DISEMBARK",
               "description"=> "Arrive back in Miami with Caribbean vibes."
             ]
           ]
         ],
        [ "id" =>12,
           "departure"=> "London",
           "destination"=> "Norwegian Fjords",
           "duration"=> "7N/8D",
           "embarkation"=> "Feb 10th, 4=>00 PM",
           "disembarkation"=> "Feb 17th, 7=>00 AM",
           "ports"=> ["London", "Bergen", "Stavanger"],
           "price"=> 950,
           "days"=> [
            [
               "dayNumber"=> 1,
               "title"=> "London Port",
               "subtitle"=> "SET SAIL",
               "description"=> "Board the Nordic Explorer and depart from London."
             ],
            [
               "dayNumber"=> 2,
               "title"=> "At Sea",
               "subtitle"=> "NORTH SEA",
               "description"=> "Enjoy a day cruising the North Sea."
             ],
            [
               "dayNumber"=> 3,
               "title"=> "Bergen",
               "subtitle"=> "FJORD GATEWAY",
               "description"=> "Explore Bergen’s fjords and historic charm."
             ],
            [
               "dayNumber"=> 4,
               "title"=> "Stavanger",
               "subtitle"=> "SCENIC STOP",
               "description"=> "Visit Stavanger for its stunning landscapes."
             ],
            [
               "dayNumber"=> 5,
               "title"=> "At Sea",
               "subtitle"=> "CRUISING",
               "description"=> "Relax with onboard activities."
             ],
            [
               "dayNumber"=> 6,
               "title"=> "At Sea",
               "subtitle"=> "RETURN JOURNEY",
               "description"=> "Savor the final sea day."
             ],
            [
               "dayNumber"=> 7,
               "title"=> "London Approach",
               "subtitle"=> "FINAL DAY",
               "description"=> "Prepare to disembark with fjord memories."
             ],
            [
               "dayNumber"=> 8,
               "title"=> "London Return",
               "subtitle"=> "DISEMBARK",
               "description"=> "Arrive back in London."
             ]
           ]
         ],
        ["id" =>13,
           "departure"=> "Dubai",
           "destination"=> "Arabian Gulf",
           "duration"=> "3N/4D",
           "embarkation"=> "Mar 5th, 6=>00 PM",
           "disembarkation"=> "Mar 8th, 8=>00 AM",
           "ports"=> ["Dubai", "Abu Dhabi"],
           "price"=> 400,
           "days"=> [
            [
               "dayNumber"=> 1,
               "title"=> "Dubai Port",
               "subtitle"=> "WELCOME",
               "description"=> "Board the Desert Rose and enjoy Dubai’s skyline."
             ],
            [
               "dayNumber"=> 2,
               "title"=> "At Sea",
               "subtitle"=> "GULF CRUISE",
               "description"=> "Relax with views of the Arabian Gulf."
             ],
            [
               "dayNumber"=> 3,
               "title"=> "Abu Dhabi",
               "subtitle"=> "CAPITAL VISIT",
               "description"=> "Explore Abu Dhabi’s culture and architecture."
             ],
            [
               "dayNumber"=> 4,
               "title"=> "Dubai Return",
               "subtitle"=> "DISEMBARK",
               "description"=> "Return to Dubai with Arabian memories."
             ]
           ]
         ],
        ["id" =>14,
           "departure"=> "Venice",
           "destination"=> "Greek Islands",
           "duration"=> "6N/7D",
           "embarkation"=> "Apr 15th, 5=>00 PM",
           "disembarkation"=> "Apr 21st, 7=>00 AM",
           "ports"=> ["Venice", "Santorini", "Mykonos"],
           "price"=> 800,
           "days"=> [
            [
               "dayNumber"=> 1,
               "title"=> "Venice Departure",
               "subtitle"=> "BON VOYAGE",
               "description"=> "Set sail from Venice aboard the Adriatic Pearl."
             ],
            [
               "dayNumber"=> 2,
               "title"=> "At Sea",
               "subtitle"=> "ADRIATIC CRUISE",
               "description"=> "Enjoy a day at sea with stunning views."
             ],
            [
               "dayNumber"=> 3,
               "title"=> "Santorini",
               "subtitle"=> "WHITE ISLAND",
               "description"=> "Explore Santorini’s whitewashed villages and caldera."
             ],
            [
               "dayNumber"=> 4,
               "title"=> "Mykonos",
               "subtitle"=> "PARTY ISLAND",
               "description"=> "Visit Mykonos for its beaches and nightlife."
             ],
            [
               "dayNumber"=> 5,
               "title"=> "At Sea",
               "subtitle"=> "RELAXATION",
               "description"=> "Unwind as you sail back."
             ],
            [
               "dayNumber"=> 6,
               "title"=> "At Sea",
               "subtitle"=> "FINAL CRUISE",
               "description"=> "Enjoy the ship’s amenities on the return."
             ],
            [
               "dayNumber"=> 7,
               "title"=> "Venice Return",
               "subtitle"=> "ARRIVEDERCI",
               "description"=> "Disembark in Venice with Greek island memories."
             ]
           ]
         ],
        [
           "id" =>15,
           "departure"=> "San Francisco",
           "destination"=> "Pacific Coast",
           "duration"=> "4N/5D",
           "embarkation"=> "May 10th, 4=>30 PM",
           "disembarkation"=> "May 14th, 8=>30 AM",
           "ports"=> ["San Francisco", "Monterey", "Santa Barbara"],
           "price"=> 500,
           "days"=> [
            [
               "dayNumber"=> 1,
               "title"=> "San Francisco",
               "subtitle"=> "SET SAIL",
               "description"=> "Board the Golden Gate Star and sail under the iconic bridge."
             ],
            [
               "dayNumber"=> 2,
               "title"=> "Monterey",
               "subtitle"=> "COASTAL STOP",
               "description"=> "Explore Monterey’s aquarium and Cannery Row."
             ],
            [
               "dayNumber"=> 3,
               "title"=> "Santa Barbara",
               "subtitle"=> "CALIFORNIA DREAM",
               "description"=> "Visit Santa Barbara’s beaches and Spanish architecture."
             ],
            [
               "dayNumber"=> 4,
               "title"=> "At Sea",
               "subtitle"=> "PACIFIC VIEWS",
               "description"=> "Relax with views of the Pacific coastline."
             ],
            [
               "dayNumber"=> 5,
               "title"=> "San Francisco Return",
               "subtitle"=> "DISEMBARK",
               "description"=> "Return to San Francisco with coastal memories."
             ]
           ]
         ]
            ];
       


    public function index()
    {


        return Inertia::render('src/packages/Home/packagecard');
    }

    public function itinerary()
    {


        return Inertia::render('src/pages/Home/searchpage');
    }
    public function itinerary_view($id)
    {
        $cruise = collect($this->booking_data)->firstWhere('id', $id);
        if (!$cruise) {
            abort(404, 'Cruise not found');
        }
        // dd($cruise);
        return Inertia::render('src/pages/Home/Tours',[
            'cruise' => $cruise,
        ]);
    }
}
