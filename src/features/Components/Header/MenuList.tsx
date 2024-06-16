import { download } from "@/utils";

function MenuList({ hyper_link, link_name, setMenuActive }: any) {
  const removeMenu = () => {
    // alert(`${hyper_link} - ${link_name}`);
    if (link_name === "下载") {
      download(
        "https://qp-diary-1320869019.cos.ap-shanghai.myqcloud.com/push-code/PushCode%E6%8E%A8%E6%B5%81%E5%8A%A9%E6%89%8B%20Setup%202.10.2.exe"
      );
    }
    setMenuActive(false);
  };

  return (
    <li onClick={removeMenu}>
      <a href={hyper_link}>{link_name}</a>
    </li>
  );
}

export default MenuList;
