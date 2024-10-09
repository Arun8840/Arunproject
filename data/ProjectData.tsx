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
  {
    title: "Ecommerce",
    image: "shopping-cart.png",
    description:
      "To create a comprehensive e-commerce platform specializing in technology products, providing a seamless shopping experience for users. Utilize React.js for building a dynamic and interactive user interface. Employ Redux for state management and ensure responsive design with CSS (or CSS-in-JS libraries) and media queries.Provide a user-friendly interface that encourages engagement and increases conversion rates.",
    path: "/projects/Ecommerce",
    color: ["#8e0e10", "#525CEB"],
    fontColor: "white",
  },

  {
    title: "Todo",
    image: "task.png",
    description:
      "To create a modern Todo-App allowing users to manage tasks effortlessly by implementing intuitive drag and drop interactions.Implement React DnD to facilitate the rearrangement of tasks by dragging and dropping them between different categories (e.g.,To-Do, In Progress, Done). Organize tasks into different categories or lists for better task organization and prioritization. Create a responsive user interface that adapts seamlessly to various devices and screen sizes.",
    path: "/projects/Todo",
    color: ["#191919", "#BED754"],
    fontColor: "#FFFFFF",
  },
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
    title: "Music app",
    image: LocationIcon,
    description:
      "To create a social media platform resembling popular social networking sites, providing users with functionalities for sharing posts, interacting with others, and fostering a sense of community. Enable users to create, edit, delete, and share posts (text, images, videos) with their followers or the public. Display a personalized feed showcasing posts from followed users or relevant content based on interests. Utilize a JavaScript framework like React.js for building the user interface. Use state management libraries like Redux or Context API for managing application state.",
    path: "/music?&tab=Home",
    color: ["#FF6000", "#4942E4"],
    fontColor: "#FFFFFF",
  },
  {
    title: "Expense Tracker",
    image: "weather-app.png",
    description:
      "The React Native Expense Tracker app allows users to manage their expenses on the go. Users can add new expenses, view a list of their expenses, categorize their spending, and see the total amount spent. The app aims to provide an intuitive and user-friendly interface to track daily, weekly, or monthly expenses.",
    path: "",
    color: ["#008170", "#0F0F0F"],
    fontColor: "#FFFFFF",
  },
]
