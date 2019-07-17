import images from './images';

const posts = [
  {
    id: 1,
    title: "School Profile: Arizona State University - Tempe",
    quick_facts: {
      founded: '1885',
      location: 'Tempe, Arizona',
      students: 51869,
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
  }
];

export default posts;