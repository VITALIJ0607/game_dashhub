import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (order: string) => void;
  selectedSortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevanz" },
    { value: "-added", label: "Zuletzt hinzugefügt" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Veröffentlichungsdatum" },
    { value: "-popularity", label: "Popularität" },
    { value: "-metacritic", label: "Bewertung" },
  ];

  const currentSortOrder = sortOrders.find(
    (sortOrder) => sortOrder.value == selectedSortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sortieren nach: {currentSortOrder?.label}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => onSelectSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
