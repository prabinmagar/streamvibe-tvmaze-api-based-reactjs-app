import { Icons } from "../assets/icons";
import { Images } from "../assets/images";

export const GENRES = [
  {
    id: "genre_1",
    thumbnail: Images.Genre1,
    name: "Action",
  },
  {
    id: "genre_2",
    thumbnail: Images.Genre2,
    name: "Adventure",
  },
  {
    id: "genre_3",
    thumbnail: Images.Genre3,
    name: "Comedy",
  },
  {
    id: "genre_4",
    thumbnail: Images.Genre4,
    name: "Drama",
  },
  {
    id: "genre_5",
    thumbnail: Images.Genre5,
    name: "Horror",
  },
];

export const STREAM_DEVICES = [
  {
    id: "stream_dev_1",
    device_name: "Smartphone",
    icon: Icons.SmartphoneRed,
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    id: "stream_dev_2",
    device_name: "Tablet",
    icon: Icons.TabletRed,
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    id: "stream_dev_3",
    device_name: "Smart TV",
    icon: Icons.SmartTVRed,
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    id: "stream_dev_4",
    device_name: "Laptops",
    icon: Icons.LaptopRed,
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    id: "stream_dev_5",
    device_name: "Gaming Console",
    icon: Icons.ConsoleRed,
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    id: "stream_dev_6",
    device_name: "VR Headsets ",
    icon: Icons.VRSetsRed,
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
];

export const FAQS = [
  {
    id: "faq_1",
    question: "What is StreamVibe?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    id: "faq_2",
    question: "How much does StreamVibe cost?",
    answer:
      "StreamVibe is free of cost for first 1 month. Then you can take our yearly subscription which cost only 200$ per annum. There is super premium service that allow upto 5 different users costing only 359$.",
  },
  {
    id: "faq_3",
    question: "What content is available on StreamVibe?",
    answer:
      "StreamVibe is a streaming service where you can watch all genres of TV shows from bollywood to hollywood at the minium cost. Our massive collection of streaming services expected to meet your taste of shows",
  },
  {
    id: "faq_4",
    question: "How can I watch StreamVibe?",
    answer:
      "StreamVibe can be watched using all the devices from smartphones to the full HD TV or screen. Simply login with your StreamVibe ID & password & there you go you've the full fledge access of your streaming services.",
  },
  {
    id: "faq_5",
    question: "How do I sign up for StreamVibe?",
    answer:
      "StreamVibe is very easy in terms of signing up procedure. You can simply full in the forms of our contact us page and our customer care will contact within 3 business day.",
  },
  {
    id: "faq_6",
    question: "What is the StreamVibe free trial?",
    answer:
      "StreamVibe free trial service is available for only 1 month. After that you can try our premium service as per your choice.",
  },
  {
    id: "faq_7",
    question: "How do I contact StreamVibe customer support?",
    answer:
      "StreamVibe provides you 24/7 customer care & services. You can email us in the stream@customer.gmail.com or sv@support.gmail.com. You can chat online using the following link: www.streamvibe.com/inquiry/akdfQEF4",
  },
  {
    id: "faq_8",
    question: "What are the StreamVibe payment methods?",
    answer:
      "StreamVibe is a global streaming service so, we have the avilability of different types of payment method like master card, visa card, paypal, american express & other additional card payments which is fully explained in our about us page of this site.",
  },
];

export const SUBSCRIPTIONS = [
  {
    id: "subs_1",
    plan: "Basic Plan",
    description:
      "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    monthly_price: 9.99,
    yearly_price: 89.99,
  },
  {
    id: "subs_2",
    plan: "Standard Plan",
    description:
      "Access to a wider selection of movies and shows, including most new releases and exclusive content",
    monthly_price: 12.99,
    yearly_price: 105.99,
  },
  {
    id: "subs_3",
    plan: "Premium Plan",
    description:
      "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
    monthly_price: 14.99,
    yearly_price: 130.99,
  },
];

export const FOOTER_LINKS = [
  {
    id: "home_links",
    link_title: "Home",
    link_type: "text",
    links: [
      {
        link_name: "categories",
        link_url: "/categories",
      },
      {
        link_name: "devices",
        link_url: "/devices",
      },
      {
        link_name: "pricing",
        link_url: "/pricing",
      },
      {
        link_name: "FAQ",
        link_url: "/faq",
      },
    ],
  },
  {
    id: "movies_links",
    link_title: "Movies",
    link_type: "text",
    links: [
      {
        link_name: "genres",
        link_url: "/genres",
      },
      {
        link_name: "trending",
        link_url: "/trending",
      },
      {
        link_name: "new release",
        link_url: "/new release",
      },
      {
        link_name: "popular",
        link_url: "/popular",
      },
    ],
  },
  {
    id: "shows_links",
    link_title: "shows",
    link_type: "text",
    links: [
      {
        link_name: "genres",
        link_url: "/genres",
      },
      {
        link_name: "trending",
        link_url: "/trending",
      },
      {
        link_name: "new release",
        link_url: "/new release",
      },
      {
        link_name: "popular",
        link_url: "/popular",
      },
    ],
  },
  {
    id: "support_links",
    link_title: "Support",
    link_type: "text",
    links: [
      {
        link_name: "contact us",
        link_url: "/contact",
      },
    ],
  },
  {
    id: "subs_links",
    link_title: "Subscription",
    link_type: "text",
    links: [
      {
        link_name: "plans",
        link_url: "/plans",
      },
      {
        link_name: "features",
        link_url: "/features",
      },
    ],
  },
  {
    id: "connect_links",
    link_title: "Connect With Us",
    link_type: "icon",
    links: [
      {
        link_name: "Facebook",
        link_url: "https://www.facebook.com",
        link_icon: Icons.Facebook,
      },
      {
        link_name: "Twitter",
        link_url: "https://www.twitter.com",
        link_icon: Icons.Twitter,
      },
      {
        link_name: "Linkedin",
        link_url: "https://www.linkedin.com",
        link_icon: Icons.linkedin,
      },
    ],
  },
];
