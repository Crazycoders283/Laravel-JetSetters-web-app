<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class BookingController extends Controller
{
    public function index()
    {
        $booking_data = [
            [
              "id"=>1,
              "title"=>"3 Night Bahamas",
              "ship"=>"MSC Divina",
              "departure"=>"Miami, Florida",
              "ports"=>"Freeport, Grand Bahama Island • Ocean Cay Marine Reserve",
              "dates"=>"January 2025 • February 2025 • March 2025",
              "image"=>"https://d23n7ahjfnjotp.cloudfront.net/imgs/3/ship_812_1280x960-womnder-utopia-frone-208r_960x720.jpg"
            ],
            [
              "id"=>2,
              "title"=>"7 Night Caribbean",
              "ship"=>"Carnival Breeze",
              "departure"=>"Galveston, Texas",
              "ports"=>"Cozumel, Mexico • Grand Cayman • Jamaica",
              "dates"=>"April 2025 • May 2025",
              "image"=>"https://d23n7ahjfnjotp.cloudfront.net/imgs/3/ship_812_1280x960-womnder-utopia-frone-208r_960x720.jpg"
            ],
            [
              "id"=>3,
              "title"=>"5 Night Mediterranean",
              "ship"=>"Norwegian Epic",
              "departure"=>"Rome, Italy",
              "ports"=>"Naples • Mykonos • Santorini",
              "dates"=>"June 2025 • July 2025",
              "image"=>"https://d23n7ahjfnjotp.cloudfront.net/imgs/3/ship_812_1280x960-womnder-utopia-frone-208r_960x720.jpg"
            ],
            [
              "id"=>4,
              "title"=>"10 Night Alaskan Explorer",
              "ship"=>"Holland America Line",
              "departure"=>"Seattle, Washington",
              "ports"=>"Juneau • Glacier Bay • Sitka • Ketchikan",
              "dates"=>"August 2025 • September 2025",
              "image"=>"https://d23n7ahjfnjotp.cloudfront.net/imgs/3/ship_812_1280x960-womnder-utopia-frone-208r_960x720.jpg"
            ],
            [
              "id"=>5,
              "title"=>"14 Night Transatlantic",
              "ship"=>"Queen Mary 2",
              "departure"=>"Southampton, England",
              "ports"=>"New York, USA • Halifax, Canada",
              "dates"=>"October 2025",
              "image"=>"https://d23n7ahjfnjotp.cloudfront.net/imgs/3/ship_812_1280x960-womnder-utopia-frone-208r_960x720.jpg"
            ],
            [
              "id"=>6,
              "title"=>"4 Night Mexican Riviera",
              "ship"=>"Royal Caribbean Navigator",
              "departure"=>"Los Angeles, California",
              "ports"=>"Cabo San Lucas • Ensenada",
              "dates"=>"November 2025 • December 2025",
              "image"=>"https://d23n7ahjfnjotp.cloudfront.net/imgs/3/ship_812_1280x960-womnder-utopia-frone-208r_960x720.jpg"
            ],
            [
              "id"=>7,
              "title"=>"6 Night South Pacific",
              "ship"=>"Princess Cruises",
              "departure"=>"Sydney, Australia",
              "ports"=>"Brisbane • Cairns",
              "dates"=>"January 2025 • February 2025",
              "image"=>"https://d23n7ahjfnjotp.cloudfront.net/imgs/3/ship_812_1280x960-womnder-utopia-frone-208r_960x720.jpg"
            ],
            [
              "id"=>8,
              "title"=>"8 Night Norwegian Fjords",
              "ship"=>"Viking Ocean Cruises",
              "departure"=>"Bergen, Norway",
              "ports"=>"Stavanger • Flam • Geiranger",
              "dates"=>"March 2025 • April 2025",
              "image"=>"https://d23n7ahjfnjotp.cloudfront.net/imgs/3/ship_812_1280x960-womnder-utopia-frone-208r_960x720.jpg"
            ],
            [
              "id"=>9,
              "title"=>"3 Night Asian Getaway",
              "ship"=>"Costa Cruises",
              "departure"=>"Singapore",
              "ports"=>"Penang, Malaysia • Phuket, Thailand",
              "dates"=>"May 2025 • June 2025",
              "image"=>"https://d23n7ahjfnjotp.cloudfront.net/imgs/3/ship_812_1280x960-womnder-utopia-frone-208r_960x720.jpg"
            ],
            [
              "id"=>10,
              "title"=>"5 Night Hawaiian Islands",
              "ship"=>"Pride of America",
              "departure"=>"Honolulu, Hawaii",
              "ports"=>"Maui • Kauai • Kona",
              "dates"=>"July 2025 • August 2025",
              "image"=>"https://d23n7ahjfnjotp.cloudfront.net/imgs/3/ship_812_1280x960-womnder-utopia-frone-208r_960x720.jpg"
            ],
            [
              "id"=>11,
              "title"=>"7 Night Baltic Capitals",
              "ship"=>"Regent Seven Seas",
              "departure"=>"Copenhagen, Denmark",
              "ports"=>"Stockholm, Sweden • Helsinki, Finland • Tallinn, Estonia",
              "dates"=>"September 2025",
              "image"=>"https://d23n7ahjfnjotp.cloudfront.net/imgs/3/ship_812_1280x960-womnder-utopia-frone-208r_960x720.jpg"
            ],
            [
              "id"=>12,
              "title"=>"9 Night South America",
              "ship"=>"Celebrity Cruises",
              "departure"=>"Buenos Aires, Argentina",
              "ports"=>"Montevideo, Uruguay • Punta del Este • Santos, Brazil",
              "dates"=>"October 2025 • November 2025",
              "image"=>"https://d23n7ahjfnjotp.cloudfront.net/imgs/3/ship_812_1280x960-womnder-utopia-frone-208r_960x720.jpg"
            ],
            [
              "id"=>13,
              "title"=>"4 Night Bermuda",
              "ship"=>"Disney Dream",
              "departure"=>"New York, New York",
              "ports"=>"King’s Wharf, Bermuda",
              "dates"=>"December 2025",
              "image"=>"https://d23n7ahjfnjotp.cloudfront.net/imgs/3/ship_812_1280x960-womnder-utopia-frone-208r_960x720.jpg"
            ],
            [
              "id"=>14,
              "title"=>"6 Night Arabian Gulf",
              "ship"=>"Oceania Cruises",
              "departure"=>"Dubai, UAE",
              "ports"=>"Abu Dhabi • Muscat, Oman",
              "dates"=>"January 2025 • February 2025",
              "image"=>"https://d23n7ahjfnjotp.cloudfront.net/imgs/3/ship_812_1280x960-womnder-utopia-frone-208r_960x720.jpg"
            ],
            [
              "id"=>15,
              "title"=>"12 Night New Zealand",
              "ship"=>"Silversea",
              "departure"=>"Auckland, New Zealand",
              "ports"=>"Wellington • Christchurch • Dunedin",
              "dates"=>"March 2025 • April 2025",
              "image"=>"https://d23n7ahjfnjotp.cloudfront.net/imgs/3/ship_812_1280x960-womnder-utopia-frone-208r_960x720.jpg"
            ]
        ];
          
        return Inertia::render('src/pages/Home/searchpage',[
            "booking_data" => $booking_data,
        ]);
    }
}
