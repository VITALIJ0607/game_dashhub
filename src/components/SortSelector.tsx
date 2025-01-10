import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sortieren nach: Relevanz
      </MenuButton>
      <MenuList>
        <MenuItem>Relevanz</MenuItem>
        <MenuItem>Hinzugefügt am</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Veröffentlichunsdatum</MenuItem>
        <MenuItem>Popularität</MenuItem>
        <MenuItem>Bewertung</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
