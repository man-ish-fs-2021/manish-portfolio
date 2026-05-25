import { useState } from "react";

const useIsHovered = () => {
  const [isHovered, setIsHovered] = useState(false);

  return { setIsHovered, isHovered };
};

export default useIsHovered;
