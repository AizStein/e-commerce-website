import { useNavigate } from "react-router-dom";
import useGenderFilter from "./useGenderFilter";
import useCategoryFilter from "./useCategoryFilter";

const navigationHandler = () => {
  const navigate = useNavigate();
  const handleGenderChange = useGenderFilter();
  const handleCategory = useCategoryFilter();

  return (gender, category) => {
    handleGenderChange(gender); // gender filter
    handleCategory(category)
    console.log(category)

    switch (gender) {
      case "women":
        navigate("/women-products"); // Navigate to womensProducts page
        break;
      case "men":
        navigate("/men-products"); // Navigate to mensProducts page
        break;
      case "kids":
        navigate("/kids-products"); // Navigate to kidsProducts page
        break;
      case "all":
      default:
        navigate("/all"); // Navigate to a general all-products page
        break;
    }
  };
};

export default navigationHandler;
