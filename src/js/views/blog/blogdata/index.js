import images from './images';

const posts = [
  {
    id: 1,
    title: "School Profile: Arizona State University - Tempe",
    quick_facts: {
      founded: '1885',
      location: 'Tempe, Arizona',
      students: '51,869',
      international_students: '27%'
    },
    site_url: 'http://www.asu.edu',
    about: '<p>Arizona State University is one of the largest public universities in America, with over 80,000 students attending its campuses and another 30,000 enrolled for its online programs.</p><p>Highly regarded for its many programs from engineering to the sciences, ASU has been regarded amongst the most innovative universities in the US .</p>',
    things_to_do: {
      title: 'Things to Do in Tempe',
      content: '<p>Tempe is more than a college town - a city with a vibrant arts and cultural scene (check out the amazing Tempe Center of the Arts) provide those seeking comedy shows, plays and concerts many options. For those more inclined for the outdoors, Tempe Town Lake offers kayaking or go to the nearby mountains to check out historic rock art and amazing hiking trails.</p>'
    },
    places_eat: {
      title: 'Best Places to Eat around ASU',
      places: [
        {
          title: 'Los Faviritos',
          cuisine: 'Mexican',
          location: '1340 E. Broadway Road',
          discount: '3% Cashback'
        },
        {
          title: 'Phoenicia Cafe',
          cuisine: 'Middle Eastern',
          location: '616 S. Forest Ave.',
          discount: '3% Cashback'
        },
        {
          title: 'The Dhaba',
          cuisine: 'Indian',
          location: '1872 Apache Blvd.',
          discount: '3% Cashback'
        },
        {
          title: 'Lux Central',
          cuisine: 'Coffee',
          location: '4402 N. Central Ave',
          discount: '3% Cashback'
        },
        {
          title: 'Chou’s Kitchen',
          cuisine: 'Chinese',
          location: '1250 E Apache Blvd',
          discount: '3% Cashback'
        }
      ]
    },
    thumbnail: images.asu1,
    image2: images.asu2
  },
  {
    id: 2,
    title: "School Profile: Boston University",
    quick_facts: {
      founded: '1869',
      location: 'Boston, Massachusetts',
      students: '34,262',
      international_students: '28.5%'
    },
    site_url: 'http://www.bu.edu',
    about: '<p>Boston University (often nicknamed BU) is a private university. Highly regarded for the level of research that it conducts, the university consistently ranks amongst the world’s best. Alumni have won many awards, including eight Nobel Prizes and nine Academy Awards. Located in Boston, the university is one of the largest employers in the city and closely tied to the identity of the city. </p>',
    things_to_do: {
      title: 'Things to Do in Boston',
      content: '<p>Boston is one of the most exciting cities in the US. With amazing history tied to America’s revolution and independence, make sure you soak in this unique cultural city. But the city isn’t just about the past - buzzy restaurants, cafes, music venues and nightlife mean that students can experience the very best in any category they wish to entertain themselves.</p>'
    },
    places_eat: {
      title: 'Best Places to Eat around Boston University',
      places: [
        {
          title: 'T Anthony’s Pizzeria',
          cuisine: 'Pizza',
          location: '1016 Commonwealth Avenue',
          discount: '3% Cashback'
        },
        {
          title: 'Sweetgreen',
          cuisine: 'Salad',
          location: '659 Boylston St',
          discount: '3% Cashback'
        },
        {
          title: 'The Breakfast Club',
          cuisine: 'Brunch',
          location: '270 Western Ave',
          discount: '3% Cashback'
        },
        {
          title: 'India Quality Restaurant',
          cuisine: 'Indian',
          location: '484 Commonwealth Ave',
          discount: '3% Cashback'
        },
        {
          title: 'Mei Mei',
          cuisine: 'Chinese',
          location: '506 Park Dr',
          discount: '3% Cashback'
        }
      ]
    },
    thumbnail: images.boston1,
    image2: images.boston2
  },
  {
    id: 3,
    title: "School Profile: Carnegie Mellon University",
    quick_facts: {
      founded: '1900',
      location: 'Pittsburgh, Pennsylvania',
      students: '13,869',
      international_students: '65%'
    },
    site_url: 'http://www.bu.edu',
    about: '<p>One of the world’s most famous research universities, Carnegie Mellon University (popularly referred to as CMU) is a private university with its main campus in Pittsburgh (it now has over twelve campuses across the world).</p><p>With 20 Nobel Prize Medals and 13 Turing Award winners affiliated to it, the university is considered amongst the very best for engineering, computer science and other fields. The graduate program in computer science is consistently ranked as the best in the US. </p>',
    things_to_do: {
      title: 'Things to Do in Pittsburgh',
      content: '<p>Museums, zoos, botanical gardens, a thriving tech industry and more - Pittsburgh is a city that offers something for everyone and then a little more. Sports fans can attend its many sporting events, and those inclined for food can go its award-winning restaurants while soaking in scenic views. </p>'
    },
    places_eat: {
      title: 'Best Places to Eat around Carnegie Mellon',
      places: [
        {
          title: 'All India',
          cuisine: 'Indian',
          location: '315 N Craig St',
          discount: '3% Cashback'
        },
        {
          title: 'Fujiya Ramen',
          cuisine: 'Japanese',
          location: '815 S Aiken Ave',
          discount: '3% Cashback'
        },
        {
          title: 'Union Grill',
          cuisine: 'American',
          location: '413 S Craig St',
          discount: '3% Cashback'
        },
        {
          title: 'Tamarind',
          cuisine: 'Indian',
          location: '257 N Craig St',
          discount: '3% Cashback'
        },
        {
          title: 'Sichuan Gourmet',
          cuisine: 'Chinese',
          location: '328 Atwood St',
          discount: '3% Cashback'
        }
      ]
    },
    thumbnail: images.cmu1,
    image2: images.cmu2
  },
  {
    id: 4,
    title: "School Profile: Columbia University",
    quick_facts: {
      founded: '1754',
      location: 'New York, New York',
      students: '33,032',
      international_students: '40%'
    },
    site_url: 'http://www.columbia.edu',
    about: '<p>Officially known as Columbia University in the City of New York, Columbia University is one of the eight Ivy League universities in the US.</p><p>Extremely famous for many departments, Columbia has notable alumni from across the world who attended it (including three US presidents). Journalism, business, and science are amongst its most famous departments and with an acceptance rate of less than 6%, it is amongst the hardest schools in the world to get in to. </p>',
    things_to_do: {
      title: 'Things to Do in New York',
      content: '<p>The city that never sleeps is home to an array of attractions and activities that will leave you breathless. Amongst the world’s best restaurants, Broadway shows, never-ending nightlife and cultural scene include a thriving economic powerhouse that presents students with amazing career opportunities.</p>'
    },
    places_eat: {
      title: 'Best Places to Eat around Columbia',
      places: [
        {
          title: 'Thai Market',
          cuisine: 'Thai',
          location: '960 Amsterdam Ave',
          discount: '3% Cashback'
        },
        {
          title: 'Aangan',
          cuisine: 'Indian',
          location: '2701 Broadway',
          discount: '3% Cashback'
        },
        {
          title: 'Sweetgreen',
          cuisine: 'Salad',
          location: '2937 Broadway',
          discount: '3% Cashback'
        },
        {
          title: 'Jangzi Kitchen',
          cuisine: 'Chinese',
          location: '2896 Broadway',
          discount: '3% Cashback'
        },
        {
          title: 'Szechuan Garden',
          cuisine: 'Chinese',
          location: '239 W 105th St',
          discount: '3% Cashback'
        }
      ]
    },
    thumbnail: images.columbia1,
    image2: images.columbia2
  },
  {
    id: 5,
    title: "School Profile: Cornell University",
    quick_facts: {
      founded: '1865',
      location: 'Ithaca, NY',
      students: '23,600',
      admit_rate: '10% (Undergraduate)',
      international_students: '22.6%'
    },
    site_url: 'http://www.cornell.edu',
    about: '<p>Cornell University is an Ivy League university in the United States. Founded in 1865, Cornell is consistently considered one of the world’s best universities.</p><p>Cornell is amongst the best universities in the United States, hosting world famous engineering, agricultural and hotel administration departments. Alumni include industry leading titans such as Ratan Tata and US Supreme Court Justice Ruth Bayer Gindsberg.</p>',
    things_to_do: {
      title: 'Things to do in Ithaca',
      content: '<p>Ithaca is famous for its natural beauty, with Cornell’s campus being a prime example of the natural wonders at display (just check out all those ‘Ithaca is Gorges’ stickers!).</p><p>In Ithaca, you will find a variety of cultural events year-round, such as the Ithaca Festival that has been happening annually since 1977. Slightly outside Ithaca, explore a variety of hiking trails or sample some of the wineries and breweries that can be found a short drive away.</p>'
    },
    places_eat: {
      title: 'Best Places to Eat at Cornell',
      content: 'Home to a world famous hotel school, Cornell is famous for its on-campus dining options! That being said, here are some other options that students enjoy eating around College Town and Ithaca.',
      places: [
        {
          title: 'Oishii Bowl',
          cuisine: 'Asian',
          location: '401 College Ave',
          discount: '3% Cashback'
        },
        {
          title: 'Collegetown Bagels (CTB)',
          cuisine: 'Bagels',
          location: '415 College Ave',
          discount: '3% Cashback'
        },
        {
          title: 'Koko',
          cuisine: 'Korean',
          location: '321 College Ave',
          discount: '3% Cashback'
        },
        {
          title: 'Mehak',
          cuisine: 'Indian',
          location: '410 Eddy St',
          discount: '3% Cashback'
        },
        {
          title: 'Carriage House Cafe',
          cuisine: 'Cafe',
          location: '305 Stewart Ave',
          discount: '3% Cashback'
        },
        {
          title: 'Argos Inn',
          cuisine: 'Bar',
          location: '408 E State St',
          discount: '3% Cashback'
        },
        {
          title: 'Viva Taqueria',
          cuisine: 'Mexican',
          location: '101 N Aurora St',
          discount: '3% Cashback'
        },
        {
          title: 'Cornell Dairy Bar',
          cuisine: 'Ice Cream',
          location: '411 Tower Road',
          discount: '3% Cashback'
        }
      ]
    },
    thumbnail: images.cornell1,
    image2: images.cornell2
  },
  {
    id: 6,
    title: "School Profile: Georgia Institute of Technology",
    quick_facts: {
      founded: '1885',
      location: 'Atlanta, Georgia',
      students: '32,718',
      international_students: '15%'
    },
    site_url: 'http://www.gatech.edu',
    about: '<p>The Georgia Institute of Technology (most commonly known as Georgia Tech) is a public university in Atlanta. World-famous, it is considered one of the best universities in the United States with its famous engineering department consistently considered amongst the top five in America.</p>',
    things_to_do: {
      title: 'Things to Do in Atlanta',
      content: '<p>Atlanta is a city with a lot of history - having played an important role in the American Civil War and the Civil Rights era, students can experience America’s history in vivid retellings throughout the city. From amazing museums to the Martin Luther King Jr Site - there are many culturally enriching options. Of course, great food, drinks and a varied amount of bars and nightlife ensure that there isn’t an hour in the day you can’t find something to do.</p>'
    },
    places_eat: {
      title: 'Best Places to Eat around Georgia Tech',
      places: [
        {
          title: 'Poor Calvin’s',
          cuisine: 'Southern',
          location: '510 Piedmont Ave NE',
          discount: '3% Cashback'
        },
        {
          title: 'Antico Pizza',
          cuisine: 'Pizza',
          location: '1093 Hemphill Ave NW',
          discount: '3% Cashback'
        },
        {
          title: 'Blue India',
          cuisine: 'Indian',
          location: '933 Peachtree St NE',
          discount: '3% Cashback'
        },
        {
          title: 'Eight Sushi Lounge',
          cuisine: 'Japanese',
          location: '930 Howell Mill Rd NW',
          discount: '3% Cashback'
        }
      ]
    },
    thumbnail: images.georgia1,
    image2: images.georgia2
  },
  {
    id: 7,
    title: "School Profile: Harvard University",
    quick_facts: {
      founded: '1636',
      location: 'Cambridge, Massachusetts',
      students: '22,000',
      international_students: '35%'
    },
    site_url: 'http://www.harvard.edu',
    about: '<p>What can be said about Harvard that hasn’t been said - probably the most famous university in the world, Harvard is the oldest institution of higher learning in the US, and a member of the Ivy League.</p><p>Alumni have ranged from multiple world leaders to titans of every industry - its business, government and medical programs continue to produce world-leading alumni every year - including 62 living billionaires and 6 different US presidents.</p>',
    things_to_do: {
      title: 'Things to Do in Cambridge',
      content: '<p>Often confused as being part of Boston, Cambridge is its own city - discover a variety of cultural events in this city to attend, or go for a relaxing walk around the Harvard campus. If you’re seeking the larger thrills of Boston, the metropolis is a quick ride away on the city’s T metro system.</p>'
    },
    places_eat: {
      title: 'Best Places to Eat around Harvard',
      places: [
        {
          title: 'Felipe’s Taqueria',
          cuisine: 'Mexican',
          location: '21 Brattle St',
          discount: '3% Cashback'
        },
        {
          title: 'Cafe Sushi',
          cuisine: 'Japanese',
          location: '1105 Massachusetts Ave',
          discount: '3% Cashback'
        },
        {
          title: 'Clover',
          cuisine: 'Sandwiches',
          location: '1326 Massachusetts Ave',
          discount: '3% Cashback'
        },
        {
          title: 'The Maharaja',
          cuisine: 'Indian',
          location: '57 JFK St',
          discount: '3% Cashback'
        },
        {
          title: 'Dumpling House',
          cuisine: 'Chinese',
          location: '950 Massachusetts Ave',
          discount: '3% Cashback'
        }
      ]
    },
    thumbnail: images.harvard1,
    image2: images.harvard2
  },
  {
    id: 8,
    title: "School Profile: Indiana University Bloomington",
    quick_facts: {
      founded: '1820',
      location: 'Bloomington, Indiana',
      students: '43,710',
      international_students: '17%'
    },
    site_url: 'http://www.indiana.edu',
    about: '<p>Indiana University Bloomington (commonly called Indiana, IU or IU Bloomington) is a public university in Indiana. A “Public Ivy”, Indiana is well-known for the strength of its academic programs and focus on research and teaching.</p><p>Indiana’s alumni include everyone from James Watson (co-discoverer of the structure of the DNA) to Mark Cuban to Jimmy Walsh (founder of Wikipedia). 104 Olympic medals, 9 Nobel Prizes and 17 Rhodes scholars are also affiliated with the university.</p>',
    things_to_do: {
      title: 'Things to Do in Bloomington',
      content: '<p>Don’t forget to cheer on Indiana’s sports team (known as the Hoosiers) in many of its sporting events! Bloomington offers students a wide variety of activities ranging from biking and hiking to exploring gorgeous downtown with its shops and fantastic bistros. Visit Monroe Lake, tour nearby vineyards or catch a show at the Buskirk-Chumley Theater - you won’t be disappointed.</p>'
    },
    places_eat: {
      title: 'Best Places to Eat around Indiana University',
      places: [
        {
          title: 'Anatolia',
          cuisine: 'Turkish',
          location: '405 E 4th St',
          discount: '3% Cashback'
        },
        {
          title: 'Mother Bear’s Pizza',
          cuisine: 'Pizza',
          location: '1428 E 3rd St',
          discount: '3% Cashback'
        },
        {
          title: 'Taste of India',
          cuisine: 'Indian',
          location: '316 E 4th St',
          discount: '3% Cashback'
        },
        {
          title: 'Lucky Express',
          cuisine: 'Chinese',
          location: '307 E 3rd St',
          discount: '3% Cashback'
        },
        {
          title: 'Ami',
          cuisine: 'Japanese',
          location: '1500 E 3rd St',
          discount: '3% Cashback'
        }
      ]
    },
    thumbnail: images.indiana1,
    image2: images.indiana2
  },
  {
    id: 9,
    title: "School Profile: Michigan State University",
    quick_facts: {
      founded: '1855',
      location: 'East Lansing, Michigan',
      students: '50,000',
      international_students: '15%'
    },
    site_url: 'http://www.msu.edu',
    about: '<p>Michigan State University (often called Michigan State or just Michigan) is a public university in Michigan. As one of the largest universities in the United States, Michigan State has over 450,000 alumni living across the world. The university is famous for having pioneered many innovative studies, including hospitality business and supply chain management.</p><p>Michigan State is home to the largest residence hall system in the United States, as well as botanical gardens, the Facility for Rare Isotope Beams and the Wharton Center of the Performing Arts.</p>',
    things_to_do: {
      title: 'Things to Do in East Lansing',
      content: '<p>Sports are integral to the Michigan State identity so make sure you check out some games and cheer your team on with your fellow students! Hiking, plenty of museums and a never ending supply of restaurants and sports bars provide students with multiple ways to spend their time.</p>'
    },
    places_eat: {
      title: 'Best Places to Eat around Michigan State',
      places: [
        {
          title: 'Sansu',
          cuisine: 'Japanese',
          location: '4750 S Hagadorn Rd Ste 100',
          discount: '3% Cashback'
        },
        {
          title: 'Pizza House',
          cuisine: 'Pizza',
          location: '4790 S Hagadorn Rd Ste 116',
          discount: '3% Cashback'
        },
        {
          title: 'Hong Kong Restaurant',
          cuisine: 'Chinese',
          location: '315 S Homer St',
          discount: '3% Cashback'
        },
        {
          title: 'Swagath Indian Cuisine',
          cuisine: 'Indian',
          location: '1060 Trowbridge Rd Suite 3',
          discount: '3% Cashback'
        },
        {
          title: 'MSU Dairy Store',
          cuisine: 'American',
          location: '107 MSU Union Building',
          discount: '3% Cashback'
        }
      ]
    },
    thumbnail: images.msu1,
    image2: images.msu2
  },
  {
    id: 10,
    title: "School Profile: New York University",
    quick_facts: {
      founded: '1831',
      location: 'New York, NY',
      students: '51,838',
      international_students: '28%'
    },
    site_url: 'https://www.nyu.edu/',
    about: '<p>New York University (often called ‘NYU’) is located in the heart of New York City. Famed for its campus being in the heart of New York, students can experience world-class education in the bustling metropolis.</p><p>NYU’s famed business school (Stern), arts school (Tisch), engineering (Tandon) are just some of the programs available to students. NYU has campuses across the globe, giving students the opportunity to study abroad in its many locations.</p>',
    things_to_do: {
      title: 'Things to do in New York',
      content: '<p>The city is your campus! Experience the very best New York has to offer, with restaurants and cuisines from all over the world to heart-stopping Broadway shows and culture in the city’s museums and music venues.</p>'
    },
    places_eat: {
      title: 'Best Places to Eat at NYU',
      places: [
        {
          title: 'Mint Masala',
          cuisine: 'Indian',
          location: '95 Macdougal St',
          discount: '3% Cashback'
        },
        {
          title: 'Taim',
          cuisine: 'Mediterranean',
          location: '99 Macdougal St',
          discount: '3% Cashback'
        },
        {
          title: 'Tortaria',
          cuisine: 'Mexican',
          location: '94 University Pl',
          discount: '3% Cashback'
        },
        {
          title: 'Joe’s Pizza',
          cuisine: 'Pizza',
          location: '7 Carmine St',
          discount: '3% Cashback'
        },
        {
          title: 'Top Thai Greenwich',
          cuisine: 'Thai',
          location: '235 Sullivan St',
          discount: '3% Cashback'
        },
        {
          title: 'Xi’an Famous Foods',
          cuisine: 'Chinese',
          location: '81 St Marks Pl',
          discount: '3% Cashback'
        },
        {
          title: 'Sweetgreen',
          cuisine: 'Salad',
          location: '226 Bleecker St',
          discount: '3% Cashback'
        }
      ]
    },
    thumbnail: images.nyu1,
    image2: images.nyu2
  },
  {
    id: 11,
    title: "School Profile: Northeastern University",
    quick_facts: {
      founded: '1898',
      location: 'Boston, MA',
      students: '25,466',
      international_students: '20%'
    },
    site_url: 'http://www.northeastern.edu',
    about: '<p>Northeastern University (often referred to as Northeastern) is a private university in Boston.</p><p>Northeastern’s famous cooperative education program (known as ‘co-op’) integrates real-world professional experience with classroom education and is one of the largest co-op programs in the world.</p><p>The D’Amore-McKim School of Business at Northeastern has produced a vast array of famous alumni, from Nikesh Arora to Jeff Clarke. Northeastern is also famous for being the university Sean Parker dropped out of to start Napster. </p>',
    things_to_do: {
      title: 'Things to do in Boston',
      content: '<p>Los Angeles is one of the largest cities in the US, so there is plenty to do! Home to Hollywood, you’ll find everything from amazing cafes and restaurants to live music concerts happening everyday. This is a city where you’ll be hard-pressed to get bored.</p>'
    },
    places_eat: {
      title: 'Best Places to Eat at Northeastern University',
      places: [
        {
          title: 'Trident Booksellers & Cafe',
          cuisine: 'Brunch',
          location: '338 Newbury St',
          discount: '3% Cashback'
        },
        {
          title: 'Pavement Coffee',
          cuisine: 'Coffee',
          location: '1096 Boylston St',
          discount: '3% Cashback'
        },
        {
          title: 'Rebecca’s Cafe',
          cuisine: 'Cafe',
          location: 'Churchill Hall, 380 Huntington Ave',
          discount: '3% Cashback'
        },
        {
          title: 'Wings over Boston',
          cuisine: 'American',
          location: '325 Huntington Ave',
          discount: '3% Cashback'
        },
        {
          title: 'Shun’s Kitchen',
          cuisine: 'Chinese',
          location: '520 Columbus Avenue',
          discount: '3% Cashback'
        },
        {
          title: 'Mumbai Spice',
          cuisine: 'Indian',
          location: '251 Massachusetts Avenue',
          discount: '3% Cashback'
        }
      ]
    },
    thumbnail: images.northeastern1,
    image2: images.northeastern2
  },
  {
    id: 12,
    title: "School Profile: Penn State University",
    quick_facts: {
      founded: '1855',
      location: 'University Park, Pennsylvania',
      students: '47,307',
      international_students: '18%'
    },
    site_url: 'http://www.psu.edu',
    about: '<p>Penn State University (commonly called Penn State or PSU) is one of the world’s leading universities, renowned for many programs such as its engineering and science departments.</p><p>With one of the largest and proudest alumni networks, Penn State offers students both high quality education and access to a global network.</p>',
    things_to_do: {
      title: 'Things to Do in State College',
      content: '<p>It goes without saying that you must attend a football game - the Nittany Lions are one of the best college football teams in the US, and a source of extreme pride amongst all students and alumni. One of the best college towns in the US, State College provides a wide variety of options to students with many excellent restaurants, cafes, bars and regular music events.</p>'
    },
    places_eat: {
      title: 'Best Places to Eat around Penn State',
      places: [
        {
          title: 'Yallah Taco',
          cuisine: 'Mexican',
          location: '404 East Calder Way',
          discount: '3% Cashback'
        },
        {
          title: 'Faccia Luna Pizzeria',
          cuisine: 'Italian',
          location: '1229 S Atherton St',
          discount: '3% Cashback'
        },
        {
          title: 'Tadashi',
          cuisine: 'Japanese',
          location: '206 West College Avenue',
          discount: '3% Cashback'
        },
        {
          title: 'India Pavilion',
          cuisine: 'Indian',
          location: '222 E Calder Way',
          discount: '3% Cashback'
        },
        {
          title: 'Little Szechuan',
          cuisine: 'Chinese',
          location: '228 W College Ave',
          discount: '3% Cashback'
        }
      ]
    },
    thumbnail: images.penn1,
    image2: images.penn2
  },
  {
    id: 13,
    title: "School Profile: Princeton University",
    quick_facts: {
      founded: '1636',
      location: 'Princeton, New Jersey',
      students: '8,273',
      international_students: '28%'
    },
    site_url: 'http://www.princeton.edu',
    about: '<p>Princeton University is an Ivy League university. Highly selective and prestigious, Princeton has ranked amongst the top 3 universities for the past 19 years of the US News Ranking. It has the highest endowment per student in the United States - a whopping $2.8 million per student.</p><p>Princeton is world-renowned for many of its top-tier departments, including the Woodrow Wilson School of Public Policy and International Affairs, and has produced many members of Congress in the US.</p>',
    things_to_do: {
      title: 'Things to Do in Princeton',
      content: '<p>Historic college town is both lively and beautiful, and students take advantage of Princeton’s many campus organizations that are constantly organizing social and cultural events - theatre, arts, music - whatever you’re looking to do, there’s a club that’s organizing it!</p>'
    },
    places_eat: {
      title: 'Best Places to Eat around Princeton',
      places: [
        {
          title: 'PJs Pancakes',
          cuisine: 'American',
          location: '154 Nassau St',
          discount: '1% Cashback'
        },
        {
          title: 'Nassau Sushi',
          cuisine: 'Japanese',
          location: '179 Nassau St',
          discount: '1% Cashback'
        },
        {
          title: 'Lil Thai Pin',
          cuisine: 'Thai',
          location: '180 Nassau St',
          discount: '1% Cashback'
        },
        {
          title: 'Mehak Fine Indian Dining',
          cuisine: 'Indian',
          location: '164 Nassau St',
          discount: '1% Cashback'
        },
        {
          title: 'KBG Korean BBQ',
          cuisine: 'Korean',
          location: '180 Nassau St',
          discount: '1% Cashback'
        }
      ]
    },
    thumbnail: images.princeton1,
    image2: images.princeton2
  },
  {
    id: 14,
    title: "School Profile: Purdue University",
    quick_facts: {
      founded: '1869',
      location: 'West Lafayette, Indiana',
      students: '43,411',
      international_students: '25%'
    },
    site_url: 'http://www.purdue.edu',
    about: '<p>Purdue University is a public research university. Well renowned for its focus on research, science and engineering research-minded students flock to study at Purdue.</p><p>Its famous ‘School of Aeronautics and Astronautics is often called the ‘cradle of astronauts’ - over 25 astronauts have studied at Purdue.</p>',
    things_to_do: {
      title: 'Things to Do in West Lafayette',
      content: '<p>Being home to Purdue means that West Lafayette is brimming with activities, restaurants and other events to keep you entertained. Attend a basketball game - Purdue’s teams (both men and women) are considered amongst the best in the country.</p>'
    },
    places_eat: {
      title: 'Best Places to Eat around Purdue',
      places: [
        {
          title: 'Nine Irish Brothers',
          cuisine: 'Irish',
          location: '119 Howard Ave',
          discount: '1% Cashback'
        },
        {
          title: 'Maru Sushi',
          cuisine: 'Japanese',
          location: '102 N Chauncey Ave',
          discount: '1% Cashback'
        },
        {
          title: 'Kimchi Korean Restaurant',
          cuisine: 'Korean',
          location: '1904 Sagamore Pkwy W',
          discount: '1% Cashback'
        },
        {
          title: 'Noodles & I',
          cuisine: 'Chinese',
          location: '111 N Chauncey Ave',
          discount: '1% Cashback'
        },
        {
          title: 'India Mahal',
          cuisine: 'Indian',
          location: '111 S River Rd',
          discount: '1% Cashback'
        }
      ]
    },
    thumbnail: images.purdue1,
    image2: images.purdue2
  },
  {
    id: 15,
    title: "School Profile: Stanford University",
    quick_facts: {
      founded: '1885',
      location: 'Stanford, California',
      students: '16,520',
      international_students: '40%'
    },
    site_url: 'http://www.stanford.edu',
    about: '<p>One of the world’s most famous universities, Stanford University is a prestigious private university in Silicon Valley.</p><p>Renowned for the startups that have been formed by its students, Stanford’s many world-class departments range from engineering to design (home to the prestigious d.school) and its famous business school. Stanford is the academic epicentre of Silicon Valley, and you will be hard pressed to find a startup or tech company that doesn’t have Stanford alumni working there.</p>',
    things_to_do: {
      title: 'Things to Do in Stanford',
      content: '<p>The city that never sleeps is home to an array of attractions and activities that will leave you breathless. Amongst the world’s best restaurants, Broadway shows, never-ending nightlife and cultural scene include a thriving economic powerhouse that presents students with amazing career opportunities.</p>'
    },
    places_eat: {
      title: 'Best Places to Eat around Stanford',
      places: [
        {
          title: 'Thai Market',
          cuisine: 'Thai',
          location: '960 Amsterdam Ave',
          discount: '1% Cashback'
        },
        {
          title: 'Aangan',
          cuisine: 'Indian',
          location: '2701 Broadway',
          discount: '1% Cashback'
        },
        {
          title: 'Sweetgreen',
          cuisine: 'Salad',
          location: '2937 Broadway',
          discount: '1% Cashback'
        }
      ]
    },
    thumbnail: images.stanford1,
    image2: images.stanford2
  },
  {
    id: 16,
    title: "School Profile: Texas A&M University",
    quick_facts: {
      founded: '1871',
      location: 'College Station, Texas',
      students: '69,637',
      international_students: '9.9%'
    },
    site_url: 'http://www.tamu.edu',
    about: '<p>Texas A&M University (often referred to as Texas A&M or A&M) is a public university in Texas. With the second largest student body in the United States, Texas A&M is a well-known university for its many well-regarded academic programs. Amongst its many research projects include those funded by NASA and the National Institute of Health.</p><p>Over 1,000 student organizations promote cultural and social life on and off-campus.</p>',
    things_to_do: {
      title: 'Things to Do in College Station',
      content: '<p>With the second largest student population in the United States at Texas A&M, you can be assured that there are numerous options to eat, drink and go out at College Station. Check out the George H.W. Bush Presidential Library or go out for amazing food and a bustling nightlife in the Northgate District - with over 69,000 students - you will find something for everyone.</p>'
    },
    places_eat: {
      title: 'Best Places to Eat around Texas A&M',
      places: [
        {
          title: 'Fuego Tortilla Grill',
          cuisine: 'Mexican',
          location: '108 Poplar St',
          discount: '3% Cashback'
        },
        {
          title: 'Sweet Eugene’s House of Java',
          cuisine: 'Cafe',
          location: '1702 George Bush Dr. E',
          discount: '3% Cashback'
        },
        {
          title: 'The Tap',
          cuisine: 'American',
          location: '815 Harvey Rd',
          discount: '3% Cashback'
        },
        {
          title: 'Taz',
          cuisine: 'Indian',
          location: '2416 S Texas Ave',
          discount: '3% Cashback'
        },
        {
          title: 'Shun De Mom Express',
          cuisine: 'Chinese',
          location: '2704 Texas Ave S',
          discount: '3% Cashback'
        }
      ]
    },
    thumbnail: images.texas1,
    image2: images.texas2
  },
  {
    id: 17,
    title: "School Profile: University of California - Davis",
    quick_facts: {
      founded: '1909',
      location: 'Davis, California',
      students: '39,152',
      international_students: '18.5%'
    },
    site_url: 'http://www.ucdavis.edu',
    about: '<p>The University of California - Davis (UC-Davis or just Davis) is the third largest institution in the University of California network. Highly esteemed for its academics, it is considered one of the ‘Public Ivies’. From its School of Management to the School of Engineering to the School of Education, many of the departments at UC-Davis are highly ranked.</p>',
    things_to_do: {
      title: 'Things to Do in Davis',
      content: '<p>One thing you will notice around campus is the number of bikes! Over 45% of students use bikes to get around UC-Davis. ArtDavis, trivia nights, and an extensive cafe culture provide students with a wide variety of activities and options to spend their time.</p>'
    },
    places_eat: {
      title: 'Best Places to Eat around UC-Davis',
      places: [
        {
          title: 'Thai Canteen',
          cuisine: 'Thai',
          location: '117 E St',
          discount: '1% Cashback'
        },
        {
          title: 'Sam’s Mediterranean Cuisine',
          cuisine: 'Mediterranean',
          location: '301 B St',
          discount: '1% Cashback'
        },
        {
          title: 'Nami Sushi',
          cuisine: 'Japanese',
          location: '2880 5th St #105',
          discount: '1% Cashback'
        },
        {
          title: 'Raja’s Tandoor',
          cuisine: 'Indian',
          location: '207 3rd St',
          discount: '1% Cashback'
        },
        {
          title: 'Dumpling House',
          cuisine: 'Chinese',
          location: '129 E St B',
          discount: '1% Cashback'
        },
        {
          title: 'Open Rice Kitchen',
          cuisine: 'Asian',
          location: '204 G St',
          discount: '1% Cashback'
        }
      ]
    },
    thumbnail: images.davis1,
    image2: images.davis2
  },
  {
    id: 18,
    title: "School Profile: UCLA",
    quick_facts: {
      founded: '1919',
      location: 'Los Angeles, CA',
      students: '45,428',
      international_students: '12%'
    },
    site_url: 'http://www.ucla.edu',
    about: '<p>University of California - Los Angeles (commonly referred to as UCLA) is the second-oldest university in the UC (University of California) system.</p><p>With over 119,000 applications, more students apply to UCLA than any other US university. It is famous for many world-class departments, from engineering to film to business. Famous alumni can be found across the world, in particular Hollywood with stars such as James Franco being counted as alums.</p>',
    things_to_do: {
      title: 'Things to do in Los Angeles',
      content: '<p>Los Angeles is one of the largest cities in the US, so there is plenty to do! Home to Hollywood, you’ll find everything from amazing cafes and restaurants to live music concerts happening everyday. This is a city where you’ll be hard-pressed to get bored.</p>'
    },
    places_eat: {
      title: 'Best Places to Eat at UCLA',
      places: [
        {
          title: 'Sichuan Impression',
          cuisine: 'Chinese',
          location: '11057 Santa Monica Blvd',
          discount: '3% Cashback'
        },
        {
          title: 'India’s Tandoori',
          cuisine: 'Indian',
          location: '11819 Wilshire Blvd',
          discount: '3% Cashback'
        },
        {
          title: 'Maharaja Cuisine of India',
          cuisine: 'Indian',
          location: '1321 Westwood Blvd',
          discount: '3% Cashback'
        },
        {
          title: 'Bao Dim Sum House',
          cuisine: 'Chinese',
          location: '8256 Beverly Blvd',
          discount: '3% Cashback'
        },
        {
          title: 'Pomodoro Trattoria',
          cuisine: 'Italian',
          location: '1393 Westwood Blvd',
          discount: '3% Cashback'
        },
        {
          title: 'Genwa Korean BBQ',
          cuisine: 'Korean',
          location: '5115 Wilshire Blvd',
          discount: '3% Cashback'
        }
      ]
    },
    thumbnail: images.ucla1,
    image2: images.ucla2
  },
  {
    id: 19,
    title: "School Profile: University of California - San Diego",
    quick_facts: {
      founded: '1960',
      location: 'San Diego, California',
      students: '38,798',
      international_students: '26%'
    },
    site_url: 'https://ucsd.edu/',
    about: '<p>The University of California - San Diego (UCSD) is a public university, part of the University of California network. UCSD is considered one of the ‘Public Ivies’. Famed for its engineering and computer science research, UCSD consistently ranks at the forefront of cutting-edge research facilities globally.</p><p>With the 7th largest research budget of any university in the US, 27 Nobel Medals have been won by UCSD’s alumni, faculty and researchers.</p>',
    things_to_do: {
      title: 'Things to Do in San Diego',
      content: '<p>San Diego is the quintessential California city - great weather and on the coast. Students at UCSD have ample opportunities to take advantage of the climate and enjoy the outdoors, from surfing to many outdoor activities. The world famous San Diego Zoo and USS Midway (an aircraft carrier turned museum) are must visits. And did we mention that Comic-Con happens here?!</p>'
    },
    places_eat: {
      title: 'Best Places to Eat around UC-San Diego',
      places: [
        {
          title: 'Philz Coffee',
          cuisine: 'Coffee',
          location: '8849 Villa La Jolla Dr',
          discount: '3% Cashback'
        },
        {
          title: 'Regent’s Pizzeria',
          cuisine: 'Pizza',
          location: '4150 Regents Park Row #100',
          discount: '3% Cashback'
        },
        {
          title: 'Lemongrass',
          cuisine: 'Thai',
          location: '9700 Gilman Dr',
          discount: '3% Cashback'
        },
        {
          title: 'Masala Street',
          cuisine: 'Indian',
          location: '915 Pearl St',
          discount: '3% Cashback'
        },
        {
          title: 'Din Tai Fung',
          cuisine: 'Taiwanese',
          location: '4301 La Jolla Village Dr #2000',
          discount: '3% Cashback'
        }
      ]
    },
    thumbnail: images.sandiego1,
    image2: images.sandiego2
  },
  {
    id: 20,
    title: "School Profile: University of California - Berkeley",
    quick_facts: {
      founded: '1868',
      location: 'Berkeley, California',
      students: '42, 519',
      international_students: '22%'
    },
    site_url: 'https://www.berkeley.edu/',
    about: '<p>The University of California - Berkeley (UC-Berkeley or Berkeley) is one of the most famous universities in the University of California system.</p><p>Home to renowned science and engineering departments (including a prestigious business school), Berkeley has produced over 107 Nobel laureates and is famously associated with the anti-Vietnam war protests - a legacy of student activism it proudly carries on today.</p>',
    things_to_do: {
      title: 'Things to Do in Berkeley',
      content: '<p>Berkeley is one of the cities in the Bay Area, along with other cities such as San Francisco and Oakland. A train ride will let you explore the diverse cities in the Bay, or you can head north to Napa or explore the California coast. Berkeley as a city is home to many cultural events and spaces, so catch a band playing or watch a show whenever you can!</p>'
    },
    places_eat: {
      title: 'Best Places to Eat around Berkeley',
      places: [
        {
          title: 'Thai Market',
          cuisine: 'Thai',
          location: '960 Amsterdam Ave',
          discount: '1% Cashback'
        },
        {
          title: 'Aangan',
          cuisine: 'Indian',
          location: '2701 Broadway',
          discount: '1% Cashback'
        },
        {
          title: 'Sweetgreen',
          cuisine: 'Salad',
          location: '2937 Broadway',
          discount: '1% Cashback'
        }
      ]
    },
    thumbnail: images.berkeley1,
    image2: images.berkeley2
  },
  {
    id: 21,
    title: "School Profile: University of Illinois-Urbana Champaign",
    quick_facts: {
      founded: '1867',
      location: 'Urbana-Champaign, Illinois',
      students: '49,339',
      international_students: '27%'
    },
    site_url: 'https://illinois.edu/',
    about: '<p>The University of Illinois - Urbana Champaign (also referred to as UIUC) is part of the University of Illinois system.</p><p>Home to world-famous engineering and science departments, many inventions have come from the research laboratories of UIUC and its engineering and computer students consistently rank amongst the world’s best.</p>',
    things_to_do: {
      title: 'Things to Do in Urbana-Champaign',
      content: '<p>A bustling city home to UIUC and its large student population, you’ll find a wide variety of attractions and things to do in the twin cities. From museums and galleries to a hugely popular farm-to-table restaurant scene, you’ll be hard-pressed to get bored! Don’t forget to cheer on the Fighting Illini at a game at Memorial Stadium - football is beloved at UIUC.</p>'
    },
    places_eat: {
      title: 'Best Places to Eat in UIUC',
      places: [
        {
          title: 'Maize',
          cuisine: 'Mexican',
          location: '60 E Green St',
          discount: '1% Cashback'
        },
        {
          title: 'The Red Herring',
          cuisine: 'Vegetarian',
          location: '1209 W Oregon St',
          discount: '1% Cashback'
        },
        {
          title: 'Insomnia Cookies',
          cuisine: 'Dessert',
          location: 'Johnstowne Center, 502 E John St',
          discount: '1% Cashback'
        },
        {
          title: 'Sakanaya',
          cuisine: 'Japanese',
          location: '403 E Green St, Champaign',
          discount: '1% Cashback'
        },
        {
          title: 'Kohinoor',
          cuisine: 'Indian',
          location: '6 E Columbia Ave, Champaign',
          discount: '1% Cashback'
        }
      ]
    },
    thumbnail: images.uiuc1,
    image2: images.uiuc2
  },
  {
    id: 22,
    title: "School Profile: University of Michigan",
    quick_facts: {
      founded: '1817',
      location: 'Ann Arbor, Michigan',
      students: '46,000',
      international_students: '18.5%'
    },
    site_url: 'https://umich.edu/',
    about: '<p>The University of Michigan - Ann Arbor (often referred to as U-Mich or Michigan) is the oldest university in Michigan. Famous for its research (with a research budget of over $1.5 billion), the university is world-famous for its STEM departments from engineering to the sciences.</p>',
    things_to_do: {
      title: 'Things to Do in Ann Arbor',
      content: '<p>First and foremost, you must attend a football game! Sports are an integral part of Michigan students’ social lives. Ann Arbor is amongst the best college towns in America, with vibrant food and nightlife options available to its students all year around.</p>'
    },
    places_eat: {
      title: 'Best Places to Eat around Ann Arbor',
      places: [
        {
          title: 'South U Pizza',
          cuisine: 'Pizza',
          location: '1110 S University Ave',
          discount: '4% Cashback'
        },
        {
          title: 'Salad’s Up',
          cuisine: 'Salad',
          location: '611 E Liberty St',
          discount: '5% Cashback'
        },
        {
          title: 'Jerusalem Cafe',
          cuisine: 'Mediterranean',
          location: '314 E Liberty St',
          discount: '3% Cashback'
        },
        {
          title: 'Madras Masala',
          cuisine: 'Indian',
          location: '328 Maynard St',
          discount: '5% Cashback'
        },
        {
          title: 'Yee Siang Dumplings',
          cuisine: 'Chinese',
          location: '4837 Washtenaw Ave',
          discount: '5% Cashback'
        }
      ]
    },
    thumbnail: images.uimichigan1,
    image2: images.uimichigan2
  },
  {
    id: 23,
    title: "School Profile: University of Pennsylvania",
    quick_facts: {
      founded: '1740',
      location: 'Philadelphia, PA',
      students: '21,960',
      admit_rate: '8% (Undergraduate)',
      international_students: '24%'
    },
    site_url: 'http://www.upenn.edu',
    about: '<p>The University of Pennsylvania (often referred to as ‘Penn’ or ‘UPenn’) is one of the eight Ivy League colleges in the United States.</p><p>Penn is home to America’s first business school (The Wharton School) and it’s first medical school (Perelman School of Medicine).</p>',
    things_to_do: {
      title: 'Things to do in Philadelphia',
      content: '<p>Philadelphia (commonly known as ‘Philly’) is one of America’s largest and oldest cities. It is home to an incredible amount of American history (both the Declaration of Independence and the Constitution were signed here). You may also know Philly as home to Rocky!</p><p>Philadelphia is a thriving city, with abundant new restaurants and nightlife for everyone’s tastes. From roaming the cobbled-stone streets of Old City to lazing around on a sunny day in Rittenhouse Square, there’s something for everyone.</p>'
    },
    places_eat: {
      title: 'Best Places to Eat at Penn',
      places: [
        {
          title: 'Koreana',
          cuisine: 'Korean',
          location: '3801 Chestnut St',
          discount: '1% Cashback'
        },
        {
          title: 'Pod',
          cuisine: 'Asian Fusion',
          location: '3636 Sansom St',
          discount: '1% Cashback'
        },
        {
          title: 'Distrito',
          cuisine: 'Mexican',
          location: '3945 Chestnut Street',
          discount: '1% Cashback'
        },
        {
          title: 'White Dog Cafe',
          cuisine: 'New American',
          location: '3420 Sansom St',
          discount: '1% Cashback'
        },
        {
          title: 'City Tap House',
          cuisine: 'Gastropub',
          location: '3925 Walnut St',
          discount: '1% Cashback'
        },
        {
          title: 'Sweetgreen',
          cuisine: 'Salads',
          location: '3925 Walnut Street',
          discount: '1% Cashback'
        },
        {
          title: 'Smoke’s',
          cuisine: 'Bar',
          location: '',
          discount: '1% Cashback'
        },
        {
          title: 'New Delhi Indian Restaurant',
          cuisine: 'Indian',
          location: '4004 Chestnut St',
          discount: '1% Cashback'
        },
        {
          title: 'Han Dynasty',
          cuisine: 'Chinese',
          location: '3711 Market St',
          discount: '1% Cashback'
        }
      ]
    },
    thumbnail: images.upenn1,
    image2: images.upenn2
  },
  {
    id: 24,
    title: "School Profile: University of Southern California",
    quick_facts: {
      founded: '1880',
      location: 'Los Angeles, California',
      students: '45,687',
      international_students: '35%'
    },
    site_url: 'http://www.usc.edu',
    about: '<p>The University of Southern California (USC) is amongst the oldest universities in California, and is a world-famous institution. Amongst its many achievements, it is the birthplace of the Domain Name System.</p><p>It’s film, business and engineering departments have produced industry leading alumni that include filmmaker George Lucas and astronaut Neil Armstrong.</p>',
    things_to_do: {
      title: 'Things to Do in Los Angeles',
      content: '<p>The city of Angels is large enough that you can spend your entire life here and not finish seeing, eating and experiencing all of its attractions. USC is home to the Trojans, its nationally renowned football team - don’t miss a game at the Coliseum amongst 75,000 extremely proud fans!</p>'
    },
    places_eat: {
      title: 'Best Places to Eat around USC',
      places: [
        {
          title: 'Cava',
          cuisine: 'Greek',
          location: '3201 S Hoover St Suite 1840',
          discount: '1% Cashback'
        },
        {
          title: 'Ground Zero',
          cuisine: 'Coffee',
          location: '615 Childs Way',
          discount: '1% Cashback'
        },
        {
          title: '23rd Street Cafe',
          cuisine: 'Indian',
          location: '936 W 23rd St',
          discount: '1% Cashback'
        },
        {
          title: 'Northern Way',
          cuisine: 'Chinese',
          location: '2904 S Figueroa St',
          discount: '1% Cashback'
        }
      ]
    },
    thumbnail: images.usc1,
    image2: images.usc2
  },
  {
    id: 25,
    title: "School Profile: University of Washington",
    quick_facts: {
      founded: '1861',
      location: 'Seattle, Washington',
      students: '47,899',
      international_students: '18.6%'
    },
    site_url: 'https://www.washington.edu/',
    about: '<p>The University of Washington (often called UW or Washington or U-Dub) is a public university in Seattle. Its sprawling Seattle campus includes on the largest library systems in the world. A leading research university (ranking 3rd in the United States for research funding), the UW is famous for its science and highly competitive engineering and computer science departments.</p><p>20 Nobel Prize winners are linked to the UW, as well as the earlier days of Microsoft founders Paul Allen and Bill Gates.</p>',
    things_to_do: {
      title: 'Things to Do in Seattle',
      content: '<p>The birthplace of Starbucks (and Microsoft and Amazon), Seattle is a city that its residents love greatly. Explore the beautiful and awe inspiring scenery around the city, with hikes to adventure sports for those inclined. If you’re looking to dive into a city that is steeped in culture (Nirvana is from here) be prepared to be delighted - amazing artists, cafes, music venues and more will keep you exploring for days.</p>'
    },
    places_eat: {
      title: 'Best Places to Eat around University of Washington',
      places: [
        {
          title: 'Din Tai Fung',
          cuisine: 'Taiwanese',
          location: 'University Village',
          discount: '3% Cashback'
        },
        {
          title: 'Pagliacci Pizza',
          cuisine: 'Pizza',
          location: '1093 Hemphill Ave NW',
          discount: '3% Cashback'
        },
        {
          title: 'Taste of India',
          cuisine: 'Indian',
          location: '5517 Roosevelt Way NE',
          discount: '3% Cashback'
        },
        {
          title: 'Xi’an Noodles',
          cuisine: 'Chinese',
          location: '930 Howell Mill Rd NW',
          discount: '3% Cashback'
        },
        {
          title: 'U-Don Fresh Japanese Noodle Station',
          cuisine: 'Japanese',
          location: '4515 University Way NE',
          discount: '3% Cashback'
        }
      ]
    },
    thumbnail: images.uiwashington1,
    image2: images.uiwashington2
  },
  {
    id: 26,
    title: "School Profile: University of Texas - Dallas",
    quick_facts: {
      founded: '1961',
      location: 'Dallas, Texas',
      students: '28,755',
      international_students: '34.5%'
    },
    site_url: 'https://www.utdallas.edu/',
    about: '<p>The University of Texas-Dallas is a public university part of the University of Texas system. Rapidly rising in ranking, it has become a highly regarded institution in Texas, with four Nobel Prize winners associated with it. The Naveen Jindal School of Management is considered one of the best business schools in Texas.</p><p>Well known for its programs in engineering, computer science and political science, UT-Dallas offers over 140 different academic programs to students.</p>',
    things_to_do: {
      title: 'Things to Do in Dallas',
      content: '<p>Dallas is a cultural and commercial hub of Texas. A vast metropolis, Dallas is famed for its amazing art museums and galleries, from the Dallas Museum of Art to galleries in the Art District. Fantastic restaurants, cafes, bistros and a great nightlife mean that students can experience one of America’s most diverse and vibrant cities through every lens.</p>'
    },
    places_eat: {
      title: 'Best Places to Eat around UT-Dallas',
      places: [
        {
          title: 'Hoki Poki',
          cuisine: 'Poke',
          location: '157 Wooster St',
          discount: '3% Cashback'
        },
        {
          title: 'Pinto Urban Thai Diner',
          cuisine: 'Thai',
          location: '3000 Northside Blvd',
          discount: '3% Cashback'
        },
        {
          title: 'Wu Wei Din',
          cuisine: 'Chinese',
          location: '2909 W 15th St',
          discount: '3% Cashback'
        },
        {
          title: 'Mumtaz Indian Restaurant',
          cuisine: 'Indian',
          location: '216 W Campbell Rd',
          discount: '3% Cashback'
        },
        {
          title: 'Charcoal Avenue',
          cuisine: 'Indian',
          location: '17509 Coit Rd',
          discount: '3% Cashback'
        }
      ]
    },
    thumbnail: images.utdallas1,
    image2: images.utdallas2
  },
  {
    id: 27,
    title: "School Profile: Yale University",
    quick_facts: {
      founded: '1701',
      location: 'New Haven, Connecticut',
      students: '12,312',
      international_students: '22.3%'
    },
    site_url: 'https://www.yale.edu/',
    about: '<p>Yale University, one of the most renowned and prestigious universities in the world, is one of the eight Ivy League universities. The third oldest institution in America, Yale is one of the hardest universities to gain admittance to, as students from all over the world fight to study in its historic halls.</p><p>Multiple US presidents, politicians and billionaires are its alumni, including over 240 Rhodes scholars. Famous alumni include the Bush family and Bill Clinton as well as multiple actors and actresses.</p>',
    things_to_do: {
      title: 'Things to Do in New Haven',
      content: '<p>Yale’s campus is brimming with activity and energy. A diverse student population means you will always find something to do and someone to do it with. Apart from the many student-led groups and events that occur on and around campus, New Haven has many free concerts, museums, a thriving theatre scene and many restaurants to keep you busy.</p>'
    },
    places_eat: {
      title: 'Best Places to Eat around Yale',
      places: [
        {
          title: 'Pepe’s Pizzeria',
          cuisine: 'Pizza',
          location: '157 Wooster St',
          discount: '1% Cashback'
        },
        {
          title: 'Sushi on Chapel',
          cuisine: 'Japanese',
          location: '3000 Northside Blvd',
          discount: '1% Cashback'
        },
        {
          title: 'Blue State Coffee',
          cuisine: 'Coffee',
          location: '276 York St',
          discount: '1% Cashback'
        },
        {
          title: 'Ivy Wok',
          cuisine: 'Chinese',
          location: '316 Elm St',
          discount: '1% Cashback'
        },
        {
          title: 'House of Naan',
          cuisine: 'Indian',
          location: '65 Howe St',
          discount: '1% Cashback'
        }
      ]
    },
    thumbnail: images.yale1,
    image2: images.yale2
  }
];

export default posts;