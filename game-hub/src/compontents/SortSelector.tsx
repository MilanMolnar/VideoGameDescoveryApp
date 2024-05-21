import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton rightIcon={<BsChevronDown />} as={Button}>
        Order by: relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date Added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release date</MenuItem>
        <MenuItem>Popularty</MenuItem>
        <MenuItem>Avaragy rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
