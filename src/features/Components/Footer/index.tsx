import "./Footer.css";

function Footer() {
  return (
    <footer>
      <p className="footer_title">PushCode推流助手</p>

      <div className="footer_link">
        <span>软件许可协议</span>
        <span>隐私条款</span>
        <span>联系我们</span>
      </div>

      <p className="copy_right">
        &#169; 2024 PushCode 版权所有 沪ICP备2023029346
      </p>
    </footer>
  );
}

export default Footer;
