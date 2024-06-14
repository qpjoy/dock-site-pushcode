import "./Footer.css";
import HomeSocial from "@/features/Home/HomeSocial";

function Footer() {
  return (
    <footer>
      <p className="footer_title">Cathy James</p>

      <div className="footerSocial">
        {HomeSocial &&
          HomeSocial.map((social: any) => (
            <a href={social.iconLink} key={social.id}>
              {social.iconName}
            </a>
          ))}
      </div>

      <p className="copy_right">&#169; 2020 copyright all right reserved</p>
    </footer>
  );
}

export default Footer;
