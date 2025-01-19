import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const selectedSortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
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
            onClick={() => setSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
