import { Dialog } from "@mui/material";
import QYWX from "@/assets/企业微信.jpeg";

function ContactDialog(props: any) {
  const { handleClose, open } = props;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      style={
        {
          // width: "50%",
        }
      }
    >
      <img
        src={QYWX}
        style={{
          margin: "0 auto",
          display: "block",
          width: "100%",
          height: "100%",
          maxWidth: "400px",
          maxHeight: "400px",
          objectFit: "contain",
          objectPosition: "center",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          border: "1px solid #ccc",
        }}
      />
    </Dialog>
  );
}

export default ContactDialog;
