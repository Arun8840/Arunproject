import { ChatIcon, LocationIcon } from "@/Utility/icons/icons"

interface ProjectDataTypes {
  title: string
  image: any
  description: string
  path: string
  color: string[]
  fontColor: string
}
export const ProjectDatas: ProjectDataTypes[] = [
  // {
  //   title: "Ecommerce",
  //   image: "shopping-cart.png",
  //   description:
  //     "To create a comprehensive e-commerce platform specializing in technology products, providing a seamless shopping experience for users. Utilize React.js for building a dynamic and interactive user interface. Employ Redux for state management and ensure responsive design with CSS (or CSS-in-JS libraries) and media queries.Provide a user-friendly interface that encourages engagement and increases conversion rates.",
  //   path: "/projects/Ecommerce",
  //   color: ["#8e0e10", "#525CEB"],
  //   fontColor: "white",
  // },

  // {
  //   title: "Todo",
  //   image: "task.png",
  //   description:
  //     "To create a modern Todo-App allowing users to manage tasks effortlessly by implementing intuitive drag and drop interactions.Implement React DnD to facilitate the rearrangement of tasks by dragging and dropping them between different categories (e.g.,To-Do, In Progress, Done). Organize tasks into different categories or lists for better task organization and prioritization. Create a responsive user interface that adapts seamlessly to various devices and screen sizes.",
  //   path: "/projects/Todo",
  //   color: ["#191919", "#BED754"],
  //   fontColor: "#FFFFFF",
  // },
  {
    title: "Cloning-Social app",
    image: ChatIcon,
    description:
      "To create a social media platform resembling popular social networking sites, providing users with functionalities for sharing posts, interacting with others, and fostering a sense of community. Enable users to create, edit, delete, and share posts (text, images, videos) with their followers or the public. Display a personalized feed showcasing posts from followed users or relevant content based on interests. Utilize a JavaScript framework like React.js for building the user interface. Use state management libraries like Redux or Context API for managing application state.",
    path: "/login",
    color: ["#FF6000", "#4942E4"],
    fontColor: "#FFFFFF",
  },
  {
    title: "Find-Place app",
    image: LocationIcon,
    description:
      "To create a social media platform resembling popular social networking sites, providing users with functionalities for sharing posts, interacting with others, and fostering a sense of community. Enable users to create, edit, delete, and share posts (text, images, videos) with their followers or the public. Display a personalized feed showcasing posts from followed users or relevant content based on interests. Utilize a JavaScript framework like React.js for building the user interface. Use state management libraries like Redux or Context API for managing application state.",
    path: "/placeApp?&tab=Home",
    color: ["#FF6000", "#4942E4"],
    fontColor: "#FFFFFF",
  },
  // {
  //   title: "Weather App",
  //   image: "weather-app.png",
  //   description:
  //     "Develop a weather application that provides users with accurate weather information for their specified location. Show the current weather conditions including temperature, humidity, wind speed, etc.Display a 7-day weather forecast for the selected location.Allow users to search for weather information by city name or ZIP code. Use HTML, CSS, and JavaScript to build the user interface. Utilize Fetch API or Axios for fetching weather data from a weather API (like OpenWeatherMap, WeatherAPI, etc.). Utilize a weather API to retrieve weather information based on the geographic coordinates obtained from the user's search.",
  //   path: "/projects/Weatherapp",
  //   color: ["#008170", "#0F0F0F"],
  //   fontColor: "#FFFFFF",
  // },
]
