function MenuList({ hyper_link, link_name, setMenuActive }: any) {
  const removeMenu = () => {
    setMenuActive(false);
  };

  return (
    <li onClick={removeMenu}>
      <a href={hyper_link}>{link_name}</a>
    </li>
  );
}

export default MenuList;
